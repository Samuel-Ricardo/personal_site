# 05 · DevOps & Deployment

> Two deployment systems — Vercel (real) and a GitHub Actions GHCR artifact (signed, but unrunnable) — with git hygiene that is partially automated and partially self-defeating.

**Priority tags:** 🔴 P0 · 🟠 P1 · 🟡 P2 — see [README](README.md) legend.

## Table of Contents

1. [Repository Topology](#1-repository-topology)
2. [CI/CD Pipeline](#2-cicd-pipeline)
3. [Git Hygiene](#3-git-hygiene)
4. [Local DX](#4-local-dx)
5. [Environment Variables](#5-environment-variables)
6. [Deployment Targets](#6-deployment-targets)
7. [Standardization Issues](#7-standardization-issues)
8. [Recommendations (18)](#8-recommendations-18)

---

## 1. Repository Topology

```
personal_portfolio/          ← workspace root — NOT a git repo
├── package.json             ← orphan: only swiper + zustand (unused)
├── package-lock.json        ← same 2 deps (1.6 KB)
├── node_modules/            ← 4 dirs: @types, @ungap, swiper, zustand
├── gradient-grainy-texture.zip            (54.7 MB — junk)
├── green-blue-gradient-blur-background-vector.zip (28.1 MB — junk)
└── personal_site/           ← actual git repo (origin: github.com:Samuel-Ricardo/personal_site.git)
    ├── .github/workflows/docker-publish.yml
    ├── .husky/  (pre-commit, pre-push, _/husky.sh, _/.gitignore)
    ├── .vscode/settings.json
    ├── LICENSE, README.md
    └── personal_website/    ← Next.js 14 app (the real product)
        ├── Dockerfile, .gitignore, .lintstagedrc.json
        ├── .eslintcache      ← ⚠️ TRACKED in git (see §3)
        ├── .env.local        ← present locally, correctly untracked
        └── src/, cypress/, public/ (36.2 MB)
```

**Git facts:** branch `feature/update_infos`; remote via SSH (`git@github.com:...`); last commit `09654d4`; working tree dirty **only** because of a tracked `.eslintcache`. Commit convention observed in history: `[ :emoji: ] | type: description (app::scope)` (e.g. `[ :bento: ] | update: asset - resume (app::assets)`).

## 2. CI/CD Pipeline

Workflow: `personal_site/.github/workflows/docker-publish.yml`.

| Element | Value | Assessment |
|---|---|---|
| Triggers | `push` on `main`, tags `v*.*.*`, `pull_request` to `main`; scheduled cron commented out | ✅ OK; ❌ no `paths` filter, no `concurrency`, no `timeout-minutes` |
| Registry | `ghcr.io` / `IMAGE_NAME: ${{ github.repository }}` → `ghcr.io/samuel-ricardo/personal_site` | ✅ GHCR over DockerHub: free, `GITHUB_TOKEN` auth — no PAT needed |
| Permissions | `contents: read`, `packages: write`, `id-token: write` | ✅ Correct least-privilege + keyless signing identity |
| Actions | `checkout@v3`, cosign-installer `#v3.5.0` (cosign `v2.2.4`), buildx `#v3.0.0`, login `#v3.0.0`, metadata `#v5.0.0`, build-push `#v5.0.0` | ⚠️ All SHA-pinned (good) but 2023–2024 era; **checkout v3 is deprecated** (Node 16); revisit cosign pin (there was a past "fix: CI - cosign > version" commit) |
| Build | `build-push-action`, `context: ./personal_website`, push only off-PR | ✅ Context correctly points where the Dockerfile lives |
| Caching | `cache-from/to: type=gha, mode=max` | ✅ BuildKit layer cache; ❌ no npm cache — `npm ci` re-downloads every run |
| Signing | Keyless `cosign sign ... {tag}@{digest}` via Fulcio/Rekor, skipped on PR | ✅ Excellent supply-chain baseline; missing: SBOM attestation, vulnerability scan |
| Secrets | Only `GITHUB_TOKEN`; **no env vars passed into the build** | ⚠️ Image built with **empty `NEXT_PUBLIC_*` values** |

### Quality assessment

**Good:** SHA-pinned actions, GHCR + keyless Sigstore signing, job-scoped permissions, BuildKit GHA cache, PR builds without push/sign (cheap validation).

**Broken / risky:**

1. **The pushed image is not runnable 🔴.** The Dockerfile has **no `CMD`/`ENTRYPOINT`** (commented out, line 12). The workflow publishes an artifact to GHCR that *cannot be started*.
2. **Image built with no `NEXT_PUBLIC_*` env 🔴.** `next build` inlines these at build time. `sanity/env.ts` uses `assertValue()` and *throws* on missing values — runtime would be non-functional even with a `CMD`.
3. **No multi-stage build.** Single stage = devDeps (jest, cypress, typescript) baked into the final image.
4. **No `.dockerignore`** → build context includes `node_modules/`, `.next/`, `.eslintcache` (323 KB), cypress artifacts.
5. **Base image EOL:** `node:20.10.0-slim` — Node 20 reached EOL 2026-04-30.
6. **No tests/lint in CI.** The only quality step is `build:clean` inside the Docker build (format → lint → test:coverage → build) — jest runs with `--passWithNoTests` and **0 test files exist**; Cypress E2E never runs in CI.
7. **Orphan artifact:** nothing consumes the GHCR image — no compose file, no k8s, no deploy job. The real deployment is Vercel. Today the workflow produces a signed image no one runs.

## 3. Git Hygiene

### `.gitignore` coverage — `personal_website/.gitignore` (the only one in the tree)

| Pattern | Status |
|---|---|
| `.eslintcache` (line 1) | ✅ Ignored — **but the file is still TRACKED** (committed before the rule). `git status` shows it dirty: 323 KB churn on every commit. Must untrack: `git rm --cached personal_website/.eslintcache` |
| `/node_modules`, `/.next`, `/out`, `/build` | ✅ |
| `.env*.local`, `.env` | ✅ `.env.local` verified untracked |
| `.vercel` | ✅ |
| `/coverage`, `*.tsbuildinfo`, `*.pem`, log files | ✅ |
| `next-env.d.ts` | ✅ ignored (harmless) |

**Gaps:** no `.gitignore` at workspace root or `personal_site/` — if the root is ever `git init`-ed, `node_modules` + 82.8 MB of zips flood in. Cypress artifacts (`cypress/videos`, `screenshots`, `downloads`) are configured outputs and **not ignored**.

### Husky hooks — `.husky/` (husky `^8.0.3`)

- `husky:prepare`: `cd ../ && husky install` — correct (web dir → repo root where `.git` lives) ✅
- **`pre-commit`** — `cd ./personal_website && npx lint-staged`:
  - Wiring correct; ⚠️ **lint-staged config lints/formats the whole project, not just staged files**. `.lintstagedrc.json` maps `*.{js,jsx,ts,tsx}` → `format:fix` (`prettier --write ./src/**/*`) + `lint:staged` (`eslint --fix --cache **/*`) — the globs match **all** files, silently rewriting files that aren't staged and running slow full-project lint per commit.
  - 🔴 **Correct pattern:** scripts should be bare `eslint --fix --cache` and `prettier --write` — lint-staged appends the staged file list itself.
- **`pre-push`** — `cd ./personal_website && npm run build:clean`:
  - Runs `format:fix` (**mutates source!**) + `next lint` + `jest --coverage --passWithNoTests` + `next build` on **every push** — minutes of local build time, and files are modified right before they're pushed.
  - The commented `#git pull origin && ...` line is ✅ correctly disabled.

### Commit conventions

Observed format (from `git log`): `[ :emoji: ] | type: description (app::scope::subscope)` — a custom Gitmoji+Conventional hybrid (`update`, `fix`, `create`, `improve`, `refact`, `animate`, `responsive`…). **Consistent in history, enforced nowhere** — no commitlint, no `commit-msg` hook, no `CONTRIBUTING.md`.

## 4. Local DX

- **`.vscode/settings.json`** — `{"compile-hero.disable-compile-files-on-did-save-code": false}` — ⚠️ **compile-hero compiles TS→JS on every save** (stray `.js` files can end up in commits) for a legacy extension. No extensions recommendations, no prettier/eslint-on-save, no formatter defaults.
- **No `.nvmrc`, no `engines`, no `.npmrc`** — Node version enforced nowhere locally; jest 29 breaks on Node 25.
- **npm scripts** (`personal_website/package.json`): `dev`, `build`, `build:clean` (= `code:ci && build`), `start`, `lint`, `lint:staged`, `format:verify`, `format:fix`, `husky:prepare`, `test`/`test:coverage`/`test:watch`/`test:staged` (all `--passWithNoTests`), `test:E2E` (cypress run), `test:cypress` (cypress open), `code:ci`.
- **Dependency hygiene:** `@testing-library/jest-dom`, `jsdom`, `@sanity/cli` in `dependencies` (not `devDependencies`); `cypress` correctly in devDeps; `zustand` on a Release Candidate in the lockfile.

## 5. Environment Variables

Names only — values were never read into the audit.

| Var | Purpose | Notes |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project | public; set locally |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset | public; set locally |
| `NEXT_PUBLIC_SANITY_TOKEN` | Sanity token | 🔴 **~180 chars and `NEXT_PUBLIC_`** — embedded in the client bundle if consumed. Sanity tokens should be server-side. **Needs rotation when moved.** |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version | **not set** → falls back to `'2024-01-21'` in `sanity/env.ts`; consider pinning explicitly |
| `NEXT_PUBLIC_MAILER_SERVICE_ID` | EmailJS service id | ✅ public-by-design |
| `NEXT_PUBLIC_MAILER_TEMPLATE_ID` | EmailJS template id | ✅ public-by-design |
| `NEXT_PUBLIC_MAILER_PUBLIC_KEY` | EmailJS client key | ✅ public-by-design |

> ⚠️ **Engine bypass:** `src/modules/engine/CMS/sanity/sanity.engine.ts` hardcodes `projectId: 'tk1o3drt'`, `dataset: 'production'`, `apiVersion: '2023-05-03'`, `useCdn: true` — the env-driven `sanity/env.ts` (`apiVersion 2024-01-21`, `useCdn: false`) is used only by the Studio. Two sources of truth → drift.

## 6. Deployment Targets

### Path A: Vercel (the real production deploy) — `samuel-ricardo.vercel.app`

- README points at `https://samuel-ricardo.vercel.app/`; `.vercel` gitignored; Next.js framework detection default (install → `next build`); env vars configured in the Vercel dashboard (the 6 above); root directory effectively `personal_website/`.
- ❌ **No `vercel.json` and no IaC** for env vars or project config — deployment config lives in the dashboard only.

### Path B: GitHub Actions GHCR image

- Builds + keyless-signs `ghcr.io/samuel-ricardo/personal_site` on `main` push (and tag). **No runtime consumes it** — no compose, no k8s, no deploy job. The image also **cannot run** (no `CMD`).

### Conflict / drift analysis

1. **Two deployment systems, one truth gap:** Vercel builds from git with dashboard env vars; the GHCR image is built with **zero** env vars and no runtime — the two "deployments" of the same commit are not equivalent artifacts. Running the container today breaks.
2. Both react to `push` to `main` → duplicated build work with different toolchains (Vercel framework build vs `npm ci` + `code:ci` + `next build` in Docker).
3. The Dockerfile's build runs the **full "test" suite** (`build:clean` → jest/coverage, vacuously green) but Vercel's `next build` skips lint (`eslint.ignoreDuringBuilds: true`) — the two paths disagree on what "green" means.
4. **Vercel preview deployments exist** out of the box (PR → preview URL), but nothing feeds them into Cypress (`test:E2E` exists; CI doesn't run it).

### Recommended posture

Pick one intent: **(a)** Vercel is the deployment → delete the Docker workflow + Dockerfile, or convert them to a **verification** job (build image to prove Dockerfile health, never push); or **(b)** if self-hosted deployment is planned → fix the image properly (multi-stage, standalone output, `CMD`, env via build ARGs) and add an actual deploy target. Today it's a signed artifact nobody runs.

## 7. Standardization Issues

1. **Two directory levels for one app** — `personal_site/` hosts git metadata (`.git`, `.github`, `.husky`, `.vscode`) while the app is `personal_site/personal_website/`. Every hook cds into the subdir, CI sets `context: ./personal_website`, Vercel must be configured with a non-default root. Cleaner: make `personal_website/` the repository root (move `.git`, `.github`, `.husky`, `LICENSE`, `README.md` up one level).
2. **Zips in workspace root:** `gradient-grainy-texture.zip` (54.7 MB) + `green-blue-gradient-blur-background-vector.zip` (28.1 MB) — outside git, unreferenced. Delete or move out.
3. **Tracked `.eslintcache`** — see §3 (P0 fix).
4. **`tailwind.config.old`** left in `personal_website/` — delete.
5. **Dev-tooling in `dependencies`** — `@sanity/cli`, `@testing-library/jest-dom`, `jsdom` (keep `sanity` — the Studio route bundles it).
6. **`next.config.mjs`:** `images.remotePatterns.hostname: '**'` — any remote host allowed for `next/image`. Scope to `cdn.sanity.io`.

## 8. Recommendations (18)

| Prio | # | Action | Why / impact | Effort |
|---|---|---|---|---|
| 🔴 P0 | 1 | `git rm --cached personal_website/.eslintcache` (keep it in `.gitignore`); consider dropping `--cache` or pointing `cacheLocation` outside the repo | Stops a 323 KB file that changes every commit from polluting history/diffs | S |
| 🔴 P0 | 2 | Decide the Docker intent: **delete** workflow + Dockerfile (Vercel is the deploy path), or **fix the image**: add `CMD ["node_modules/.bin/next","start"]` (or standalone), `EXPOSE 3000`, multi-stage, `ARG NEXT_PUBLIC_*` from GH secrets | Today GHCR holds an unrunnable, env-less, signed image — broken artifact + false sense of CI | M |
| 🔴 P0 | 3 | Add `.dockerignore` (`node_modules`, `.next`, `.eslintcache`, `cypress/videos`, `cypress/screenshots`, `.git`, `*.zip`) | Build context currently ships `node_modules` + `.next` + cache to every build | S |
| 🔴 P0 | 4 | Move Sanity reads server-side; drop `NEXT_PUBLIC_SANITY_TOKEN` from client scope (public read ACL + `useCdn` for public data); **rotate the current token** | ~180-char token is embedded in the browser bundle today | M |
| 🔴 P0 | 5 | Bump base image off EOL: `node:22-slim` (LTS) or 24; add `.nvmrc` + `engines` to match | Node 20 EOL 2026-04-30; unpatched supply-chain surface | S |
| 🟠 P1 | 6 | Fix lint-staged: scripts become bare `eslint --fix --cache` / `prettier --write` (lint-staged appends files); stop `format:fix` full-tree runs (use `format:verify` instead) | Pre-commit becomes file-scoped and fast; no more silent whole-tree rewrites | S |
| 🟠 P1 | 7 | Pre-push: replace `build:clean` with `tsc --noEmit` (+ optional full build); remove `format:fix` from the push path | Every push currently burns minutes and mutates source | S |
| 🟠 P1 | 8 | CI hardening: add `concurrency:`, `timeout-minutes: 15`, `paths:` filters (`personal_website/**`, `.github/workflows/**`) to `docker-publish.yml` | Stops wasted builds on README-only commits; prevents runaway jobs | S |
| 🟠 P1 | 9 | Add a fast CI job/workflow: `npm ci` + `format:verify` + `lint` + `jest` (+ typecheck); add real unit tests (currently 0) or remove the fake `--passWithNoTests` gate | Only "test" gate today is inside Docker build and passes vacuously | M |
| 🟠 P1 | 10 | Update pinned actions: `checkout@v4`, buildx/login/metadata/build-push to current majors; re-verify cosign (installer v3.5.0 + cosign v2.2.4 are old; a cosign breakage happened before) | Deprecated Node 16 action era; cosign compat | S |
| 🟠 P1 | 11 | Enable **Dependabot/Renovate**: npm deps (grouped, monthly) + GitHub Actions (updates SHA pins); move `zustand` off `5.0.0-rc.2` to stable 5.x | Supply-chain freshness; RC in prod deps is a risk | S |
| 🟠 P1 | 12 | Vercel: codify env vars + root directory via `vercel.json`/CLI (`vercel env add`), document in README; wire Cypress `test:E2E` to preview builds (GH Actions on PR with preview URL via `APP_URL`) | Preview URL testing exists; E2E never runs in CI | M |
| 🟡 P2 | 13 | Delete root `package.json`/`package-lock.json`/`node_modules` (or convert to npm workspaces) + add root `.gitignore` if root stays | Kills orphan-deps confusion | S |
| 🟡 P2 | 14 | Move the two zips (82.8 MB) out of the workspace; delete `tailwind.config.old` | Cleanup | S |
| 🟡 P2 | 15 | `.vscode/settings.json`: disable compile-hero on-save, add recommended extensions + prettier defaults | Stops stray TS→JS compiles | S |
| 🟡 P2 | 16 | Enforce commit convention: `commit-msg` husky hook matching `[ :emoji: ] | type: desc (app::scope)` (or commitlint + CONTRIBUTING.md) | Convention is consistent in history but unenforced | S |
| 🟡 P2 | 17 | Add SBOM + scan to the Docker job: `cosign attest --type sbom` and a Trivy/Grype step | Completes the supply-chain story started with Sigstore | S |
| 🟡 P2 | 18 | README: setup steps (`npm ci`, env names, `husky:prepare`), deploy model (Vercel vs GHCR), branch strategy | Onboarding + removes ambiguity about which pipeline is authoritative | S |

**Effort:** S < 1 h · M < 1 day · L > 1 day. Ordering within priority by risk reduction.

---

## Quick links

- Previous: [04 · UX & Design](04-ux-design.md) · Parent: [README.md](README.md)
- Related: [01 · Architecture](01-architecture.md) (rendering strategy) · [03 · Quality & Security](03-quality-security.md) (CI/CD findings)
- Act: [06 · Roadmap](06-roadmap.md) · References: [07](07-references.md)