# DevOps / CI-CD Audit — personal_portfolio

**Date:** 2026-08-19
**Scope:** `personal_portfolio/` workspace, `personal_site/` git repo, `personal_website/` Next.js app
**Method:** Static analysis of all pipeline, hook, ignore, and config files; git history/status inspection; env-var name enumeration (no values read into this report).

---

## 0. Topology — how the repo is actually laid out

```
personal_portfolio/          ← workspace root — NOT a git repo
├── package.json             ← orphan: only swiper + zustand
├── package-lock.json        ← same 2 deps (1.6 KB)
├── node_modules/            ← 4 dirs: @types, @ungap, swiper, zustand
├── gradient-grainy-texture.zip            (54.7 MB)
├── green-blue-gradient-blur-background-vector.zip (28.1 MB)
└── personal_site/           ← actual git repo (origin: github.com:Samuel-Ricardo/personal_site.git)
    ├── .github/workflows/docker-publish.yml
    ├── .husky/  (pre-commit, pre-push, _/husky.sh, _/.gitignore)
    ├── .vscode/settings.json
    ├── LICENSE, README.md
    └── personal_website/    ← Next.js 14 app (the real product)
        ├── Dockerfile, .gitignore, .lintstagedrc.json
        ├── .eslintcache      ← ⚠️ TRACKED in git (see §2)
        ├── .env.local        ← ⚠️ present locally, correctly untracked
        └── src/, cypress/, public/ (36.2 MB)
```

**Git facts:** current branch `feature/update_infos`; remote via SSH (`git@github.com:...`); last commit `09654d4`; working tree dirty **only** because of a tracked `.eslintcache`. Expected commit convention observed in history: `[ :emoji: ] | type: description (app::scope)` (e.g. `[ :bento: ] | update: asset - resume (app::assets)`).

---

## 1. CI/CD Pipeline — `personal_site/.github/workflows/docker-publish.yml`

### Walkthrough

| Element | Value | Assessment |
|---|---|---|
| Triggers | `push` on `main`, tags `v*.*.*`, `pull_request` to `main`; scheduled cron commented out | OK, but no `paths` filter, no `concurrency`, no `timeout-minutes` |
| Registry | `ghcr.io` / `IMAGE_NAME: ${{ github.repository }}` → `ghcr.io/samuel-ricardo/personal_site` | ✅ GHCR over DockerHub: free, no rate limits, `GITHUB_TOKEN` auth — no PAT needed |
| Permissions | `contents: read`, `packages: write`, `id-token: write` | ✅ Correct least-privilege job permissions + keyless signing identity |
| Actions | `checkout@v3`, `cosign-installer #v3.5.0` (cosign `v2.2.4`), `buildx #v3.0.0`, `login #v3.0.0`, `metadata #v5.0.0`, `build-push #v5.0.0` | ⚠️ All SHA-pinned (good) but 2023–2024 era versions; checkout v3 is deprecated (Node 16); cosign pinned to old `v2.2.4` (you have a commit `da4462e` "fix: CI - cosign > version" — revisit; current stable is 2.4.x) |
| Build | `build-push-action`, `context: ./personal_website`, `push` only off-PR | ✅ Context correctly points at the app dir where the Dockerfile lives |
| Caching | `cache-from/to: type=gha, mode=max` | ✅ BuildKit layer cache on GitHub cache; ⚠️ **no npm cache** — `npm ci` re-downloads every run (mitigated only partially by layer cache) |
| Signing | Keyless `cosign sign ... {tag}@{digest}` via Fulcio/Rekor, skipped on PR | ✅ Excellent supply-chain baseline; missing: SBOM attestation, vulnerability scan |
| Secrets | Only `GITHUB_TOKEN`; **no env vars passed into the build** | ⚠️ See Docker image findings — the image is built with **empty `NEXT_PUBLIC_*` values** |

### Quality assessment

**Good:** SHA-pinned actions, GHCR + keyless Sigstore signing, Job-scoped permissions, BuildKit GHA cache, PR builds without push/sign (cheap validation).

**Broken / risky:**
1. **The pushed image is not runnable.** The Dockerfile has **no `CMD`/`ENTRYPOINT`** (it's commented out, line 12). The workflow publishes an artifact to GHCR that *cannot be started*. See §4.
2. **Image built with no `NEXT_PUBLIC_*` env.** `next build` inlines these at build time. `sanity/env.ts` uses `assertValue()` and *throws* on missing `NEXT_PUBLIC_SANITY_DATASET`/`PROJECT_ID` (only `|| ''` fallbacks in `env.config.ts`). Build succeeds today only because nothing at build time hits the throwing path; at runtime the container would be non-functional even if a `CMD` existed.
3. **No multi-stage build.** Single stage = devDeps (jest, cypress, typescript) baked into the final image.
4. **No `.dockerignore`** → build context includes `node_modules/`, `.next/`, `.eslintcache` (316 KB), cypress artifacts.
5. **Base image EOL:** `node:20.10.0-slim` — Node 20 reached EOL 2026-04-30; also outdated vs. 22/24 LTS.
6. **No tests/lint in CI.** The only quality step is `build:clean` inside the Docker build (format → lint → test:coverage → next build). Jest runs with `--passWithNoTests` and **there are 0 unit test files in `src/`** — the gate is a no-op. Cypress E2E exists (`test:E2E`) but never runs in CI.
7. **Orphan artifact:** nothing consumes the GHCR image — no compose file, no Kubernetes manifests, no deploy job. The real deployment is Vercel (see §4). The workflow currently exists to produce a signed image no one runs.

---

## 2. Git Hygiene

### `.gitignore` coverage — `personal_website/.gitignore` (the only one in the tree)

| Pattern | Status |
|---|---|
| `.eslintcache` (line 1) | ✅ Ignored — **but the file is still TRACKED** (committed before the ignore rule). `git ls-files` shows `personal_website/.eslintcache`; `git status` shows it dirty right now (316 KB, changes on every commit). It must be untracked: `git rm --cached personal_website/.eslintcache`. |
| `/node_modules`, `/.next`, `/out`, `/build` | ✅ |
| `.env*.local`, `.env` | ✅ `.env.local` verified **untracked** |
| `.vercel` | ✅ |
| `/coverage`, `*.tsbuildinfo`, `*.pem`, log files | ✅ |
| `next-env.d.ts` | ✅ ignored (arguable — commonly committed, but harmless) |

**Gaps:** no `.gitignore` at workspace root (`personal_portfolio/`) or `personal_site/` — if the root is ever `git init`-ed, the node_modules + 82.8 MB of zips flood in. No ignored cypress artifacts (`cypress/videos`, `cypress/screenshots`, `cypress/downloads` are configured outputs and are NOT ignored).

### Husky hooks — `.husky/` (husky `^8.0.3`, v8 syntax confirmed)

- `.husky/_/husky.sh` — stock husky v8 shim ✅; `.husky/_/.gitignore` = `*` ✅
- `husky:prepare` script: `cd ../ && husky install` — correct (web dir → repo root where `.git` lives) ✅

**`pre-commit`** — `cd ./personal_website && npx lint-staged` (4 lines):
- Wiring is correct (hook lives at repo root, cds into the app).
- ⚠️ **lint-staged config lints/formatts the whole project, not just staged files.** `.lintstagedrc.json` maps `*.{js,jsx,ts,tsx}` → `npm run format:fix` + `npm run lint:staged`, and those scripts are:
  - `format:fix` = `prettier --write --ignore-path .gitignore ./src/**/*.{js,jsx,ts,tsx}` — **rewrites the entire `src/` tree on every commit**, silently modifying files that aren't staged (and any Prettier version bump creates a repo-wide diff out of nowhere).
  - `lint:staged` = `eslint --fix --cache **/*.{js,jsx,ts,tsx}` — the glob matches **all** files; lint-staged appends staged paths, so ESLint runs on the whole project per commit (slow), not on the commit's files.
  - **Correct pattern:** scripts should be bare `eslint --fix --cache` and `prettier --write` — lint-staged appends the staged file list itself.

**`pre-push`** — `cd ./personal_website && npm run build:clean` (line 4):
- Runs `format:fix` (mutates source!) + `next lint` + `jest --coverage --passWithNoTests` + `next build` on **every push** — the full `code:ci` chain. Local `next build` on this app is the dominant cost (many minutes); `format:fix` modifies files right before they're pushed.
- The commented `#git pull origin && ...` (line 4) — ✅ correctly disabled; re-enabling it would merge remote changes into every push.

### Commit conventions

Observed format (from `git log`): `[ :emoji: ] | type: description (app::scope::subscope)` — a custom Gitmoji+Conventional hybrid (`update`, `fix`, `create`, `improve`, `refact`, `animate`, `responsive` …). **Consistent in history, but enforced nowhere**: no `commitlint`, no `commit-msg` hook, no `CONTRIBUTING.md`. Nothing stops a plain `git commit -m "stuff"` from slipping through.

---

## 3. Local DX

### `.vscode/settings.json` — `personal_site/.vscode/settings.json` (3 lines)
`{"compile-hero.disable-compile-files-on-did-save-code": false}` — i.e. **compile-hero compiles TS→JS on every save**. That's a footgun (generates stray `.js` files that can end up in commits), for a legacy extension. No `extensions.recommendations`, no prettier/eslint-on-save, no formatter defaults.

### npm scripts (`personal_website/package.json`)
`dev`, `build`, `build:clean` (= `code:ci && build`), `start`, `lint`, `lint:staged`, `format:verify`, `format:fix`, `husky:prepare`, `test`/`test:coverage`/`test:watch`/`test:staged` (jest, all `--passWithNoTests`), `test:E2E` (cypress run), `test:cypress` (cypress open), `code:ci`.

### Environment variables required (names only — nothing else was read)
| Var | Purpose | Notes |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project | ~8 chars, set locally |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset | ~10 chars, set locally |
| `NEXT_PUBLIC_SANITY_TOKEN` | Sanity token | ⚠️ **~180 chars, and it's `NEXT_PUBLIC_`** — embedded in the client bundle. Sanity tokens should be server-side (`useCdn`/public dataset reads, or a non-`NEXT_PUBLIC` server token); this one needs rotation when moved. |
| `NEXT_PUBLIC_MAILER_SERVICE_ID` | EmailJS service id | ✅ public-by-design |
| `NEXT_PUBLIC_MAILER_TEMPLATE_ID` | EmailJS template id | ✅ public-by-design |
| `NEXT_PUBLIC_MAILER_PUBLIC_KEY` | EmailJS client key | ✅ public-by-design |
| `NEXT_PUBLIC_SANITY_API_VERSION` | **not set** → falls back to `'2024-01-21'` in `sanity/env.ts` | Optional; consider pinning explicitly |

**No `.nvmrc`, no `engines` field, no `.npmrc`** — Node version is enforced nowhere locally (only the Dockerfile pins it, at an EOL version). `npm ci` then `npm run husky:prepare` then `npm run dev` is the implied setup, but it's undocumented (README is one line + a URL).

**Dependency hygiene:** `@testing-library/jest-dom`, `jsdom`, `@sanity/cli` sit in `dependencies` (not `devDependencies`); `cypress` is correctly in devDeps. This bloats Docker images and Vercel installs. `zustand` is on a **Release Candidate** (`5.0.0-rc.2`) — stable 5.x has shipped; move off the RC.

---

## 4. Deployment Targets — Vercel + Docker

### Path A: Vercel (the real production deploy) — `samuel-ricardo.vercel.app`
- README points at `https://samuel-ricardo.vercel.app/`; `.vercel` is gitignored; framework detection is Next.js default (install → `next build`), env vars configured in the Vercel dashboard (the 6 above), root directory is effectively `personal_website/`.
- **No `vercel.json`** and no IaC for env vars or project config — deployment config lives in the dashboard only.

### Path B: GitHub Actions GHCR image
- Builds + keyless-signs `ghcr.io/samuel-ricardo/personal_site` on `main` push (and tag). **No runtime consumes it**: no compose, no k8s, no deploy job. The image also **cannot run** (no `CMD`).

### Conflict / drift analysis
1. **Two deployment systems, one truth gap:** Vercel builds from git with dashboard env vars; the GHCR image is built with **zero** env vars and no runtime — so the two "deployments" of the same commit are not equivalent artifacts. If anyone ever runs the container, it breaks.
2. Both react to `push` to `main` → duplicated build work of the same code with different toolchains (Vercel framework build vs. `npm ci` + `code:ci` + `next build` in Docker).
3. The Dockerfile's build runs the **full test suite** (`build:clean` → jest/coverage) but Vercel's `next build` doesn't (and `eslint.ignoreDuringBuilds: true`) — so the two paths disagree on what "green" means.
4. **Vercel preview deployments exist** out of the box (PR → preview URL), but nothing feeds them into Cypress (`test:E2E` exists, CI doesn't run it).

### Recommended posture
Pick one intent: (a) Vercel is the deployment → delete the Docker workflow+Dockerfile, or convert them to a **verification** job (build image to prove Dockerfile health, never push); or (b) if self-hosted deployment is planned → fix the image properly (below) and add an actual deploy target. Today it's a signed artifact nobody runs.

---

## 5. Standardization Issues

1. **Root `package.json` = orphan deps.** Contains only `swiper ^11.1.12` + `zustand ^5.0.0-rc.2` — **exact duplicates of what `personal_website/package.json` already declares.** Root `package-lock.json` (1.6 KB) + `node_modules/` (4 packages) confirm a stray `npm install` happened at the wrong directory level. Likely residue from an abandoned workspace experiment. Either wire a real npm workspace (`"workspaces": ["personal_site/personal_website"]`) or delete the root package files.
2. **Why two levels?** `personal_site/` hosts the git repo metadata (`.git`, `.github`, `.husky`, `.vscode`) while the app is `personal_site/personal_website/`. Effects: every hook hand-cds into the subdir, CI must set `context: ./personal_website`, lint-staged must be resolved via `npx` from the subdir, and Vercel must be configured with a non-default root. Nothing in the repo explains the extra level (no other projects inside `personal_site/`). Cleaner: make `personal_website/` the repository root (move `.git`, `.github`, `.husky`, `LICENSE`, `README.md` up one level) — everything simplifies.
3. **Zips in root:** `gradient-grainy-texture.zip` (54.7 MB) + `green-blue-gradient-blur-background-vector.zip` (28.1 MB) — outside git, not referenced by the app (no `.zip` inside the web project; `public/` already holds 36.2 MB of assets). Staging junk; move them out of the workspace or delete.
4. **Tracked `.eslintcache`** — see §2 (P0 fix).
5. **`tailwind.config.old`** left in `personal_website/` — delete.
6. **Dev-tooling in `dependencies`** — `@sanity/cli`, `@testing-library/jest-dom`, `jsdom` (keep `sanity` — the Studio route bundles it).
7. **`next.config.mjs`:** `images.remotePatterns.hostname: '**'` — any remote host is allowed for `next/image`. Minor abuse vector; scope to `*.sanity.io` if possible.

---

## 6. Recommendations — prioritized

| Prio | # | Action | Why / impact | Effort |
|---|---|---|---|---|
| **P0** | 1 | `git rm --cached personal_website/.eslintcache` (keep it in `.gitignore`); consider dropping `--cache` or pointing `cacheLocation` outside the repo | Stops a 316 KB file that changes every commit from polluting history/diffs | S |
| **P0** | 2 | Decide the Docker intent: **delete** workflow+Dockerfile (Vercel is the deploy path), or **fix the image**: add `CMD ["node_modules/.bin/next","start"]` (uncomment), `EXPOSE 3000`, multi-stage build, `ARG NEXT_PUBLIC_*` from GH secrets | Today GHCR holds an unrunnable, env-less, signed image — broken artifact + false sense of CI | M |
| **P0** | 3 | Add `.dockerignore` (`node_modules`, `.next`, `.eslintcache`, `cypress/videos`, `cypress/screenshots`, `.git`, `*.zip`) | Build context currently ships `node_modules`+`.next`+cache to every build | S |
| **P0** | 4 | Move Sanity reads server-side; drop `NEXT_PUBLIC_SANITY_TOKEN` from client scope (public read ACL + `useCdn` for public data); **rotate the current token** | ~180-char token is embedded in the browser bundle today | M |
| **P0** | 5 | Bump base image off EOL: `node:22-slim` (LTS) or 24; add `.nvmrc` + `engines` to match | Node 20 EOL 2026-04-30; unpatched supply-chain surface | S |
| P1 | 6 | Fix lint-staged: scripts become bare `eslint --fix --cache` / `prettier --write` (lint-staged appends files); stop `format:fix` from running full-tree (use `format:verify` instead) | Pre-commit becomes file-scoped and fast; no more silent whole-tree rewrites | S |
| P1 | 7 | Pre-push: replace `build:clean` with `tsc --noEmit` (+ optional full build), and remove `format:fix` from the push path | Every push currently burns minutes and mutates source | S |
| P1 | 8 | CI hardening: add `concurrency:`, `timeout-minutes: 15`, `paths:` filters (`personal_website/**`, `.github/workflows/**`) to `docker-publish.yml` | Stops wasted builds on README-only commits; prevents runaway jobs | S |
| P1 | 9 | Add a fast CI job/workflow: `npm ci` + `format:verify` + `lint` + `jest` (+ typecheck); add real unit tests (currently 0) or remove the fake `--passWithNoTests` gate | Only "test" gate today is inside Docker build and passes vacuously | M |
| P1 | 10 | Update pinned actions: `checkout@v4`, buildx/login/metadata/build-push to current major; re-verify cosign (installer v3.5.0 + cosign v2.2.4 are old; you've had a cosign breakage before) | Deprecated Node 16 action era; cosign compat | S |
| P1 | 11 | Enable **Dependabot/Renovate**: npm deps (grouped, monthly) + GitHub Actions (updates SHA pins); move `zustand` off `5.0.0-rc.2` to stable 5.x | Supply-chain freshness; RC in prod deps is a risk | S |
| P1 | 12 | Vercel: codify env vars + root directory via `vercel.json`/CLI (`vercel env add`), document in README; wire Cypress `test:E2E` to preview builds (GH Actions on PR with preview URL via `APP_URL`) | Preview URL testing exists; E2E never runs in CI | M |
| P2 | 13 | Delete root `package.json`/`package-lock.json`/`node_modules` (or convert to npm workspaces) + add root `.gitignore` if root stays | Kills orphan-deps confusion | S |
| P2 | 14 | Move the two zips (82.8 MB) out of the workspace; delete `tailwind.config.old` | Cleanup | S |
| P2 | 15 | `.vscode/settings.json`: disable compile-hero on-save, add recommended extensions + prettier defaults | Stops stray TS→JS compiles | S |
| P2 | 16 | Enforce commit convention: `commit-msg` husky hook matching `[ :emoji: ] | type: desc (app::scope)` (or commitlint + CONTRIBUTING.md) | Convention is consistent in history but unenforced | S |
| P2 | 17 | Add SBOM + scan to the Docker job: `cosign attest --type sbom` and a Trivy/Grype step | Completes the supply-chain story already started with Sigstore | S |
| P2 | 18 | README: setup steps (`npm ci`, env names, `husky:prepare`), deploy model (Vercel vs GHCR), branch strategy | Onboarding + removes ambiguity about which pipeline is authoritative | S |

**Effort:** S < 1 h · M < 1 day · L > 1 day. Ordering within priority by risk reduction.

---

### Appendix — files inspected

```
personal_portfolio/package.json, package-lock.json, node_modules/ (4 pkgs), 2× .zip
personal_site/.github/workflows/docker-publish.yml        (96 lines)
personal_site/.husky/pre-commit, pre-push, _/husky.sh, _/.gitignore
personal_site/.vscode/settings.json
personal_site/README.md, LICENSE
personal_site/personal_website/package.json, .gitignore, .lintstagedrc.json,
  .eslintrc.json, .prettierrc.js, Dockerfile, next.config.mjs, jest.config.ts,
  cypress.config.ts, sanity.config.ts, sanity/env.ts, .env.local (names only),
  .eslintcache (size + tracked status), src/ (0 test files), cypress/ (5 files)
git: last 20 commits, branch, remote, tracked-file check (ls-files)
```