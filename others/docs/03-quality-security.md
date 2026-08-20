# 03 · Quality, Testing & Security

> Audit verdict: the tooling infrastructure exists (Jest, Cypress, coverage dashboard, Husky, CI) but execution is absent — 0 tests, one live XSS-prone render path, and a client-bundle token tripwire.

**Priority tags:** 🔴 P0 · 🟠 P1 · 🟡 P2 — see [README](README.md) legend.

## Table of Contents

1. [Scorecard Snapshot](#1-scorecard-snapshot)
2. [Testing Setup Reality](#2-testing-setup-reality)
3. [What Should Be Tested](#3-what-should-be-tested)
4. [Security Findings](#4-security-findings)
5. [Dependency Health](#5-dependency-health)
6. [Git & Tooling Red Flags](#6-git--tooling-red-flags)
7. [Prioritized Fix List](#7-prioritized-fix-list)

---

## 1. Scorecard Snapshot

Audited 2026-08-19 against `personal_site/personal_website` (branch `feature/update_infos`).

| Dimension | Score | Justification |
|---|---|---|
| Test coverage | **1/5** | Zero test files; empty coverage artifacts ("Unknown%"); `--passWithNoTests` everywhere; Cypress has 0 specs |
| Test quality | **1/5** | N/A — nothing to assess; tooling provisioned but unused; `npm test` crashes on Node 25 |
| Security posture | **2/5** | No headers/CSP; `rehype-raw` renders unsanitized CMS HTML; `NEXT_PUBLIC_SANITY_TOKEN` naming; open image hostname `**`; Studio + Vision in prod; GROQ interpolation. Positives: no `dangerouslySetInnerHTML`, correct EmailJS public-key model, `.env.local` untracked, correct DOMPurify pattern exists (dead) |
| Dependency health | **2/5** | Next 14.2.10 (EOL), sanity 3.25, next-sanity 7, zustand **RC** in lockfile, eslint-config-next mismatch, triple styling systems, dead deps, no Node pin — lockfile tracked ✅ |
| Code quality tooling | **2/5** | Husky + lint-staged + Prettier exist; invalid eslint rule (`scape-case`), `.eslintcache` committed, lint disabled in builds, 24× `any`, leftover files |
| **Overall** | **1.6 / 5** | Infrastructure exists; execution is absent |

## 2. Testing Setup Reality

### Jest — `jest.config.ts`

Next/jest wrapper with **every option commented out**. Only 3 active settings:

```ts
collectCoverage: true          // no collectCoverageFrom
coverageDirectory: 'coverage'
coverageProvider: 'v8'
```

Missing entirely: `setupFilesAfterEnv` (no jest-dom), `testMatch`/`testRegex`, `coverageThreshold`, `moduleNameMapper`, `transform` customization, `testEnvironment` (implicitly `node` — `jsdom` commented out).

### Cypress — `cypress.config.ts`

- `e2e`: configured — `baseUrl: env.APP_URL || 'http://localhost:3000'`, `specPattern: ['cypress/E2E/...', 'cypress/integration/...']`
- `component`: configured — Next + webpack devServer, `specPattern: 'cypress/component/...'`
- `video: true`, screenshots on failure enabled
- **0 specs.** Actual files: only `fixtures/example.json` (default scaffold) + 3 support files, no custom commands.

### Test files found

| Location | Count |
|---|---|
| `**/*.{test,spec}.{ts,tsx,js,jsx}` | **0** |
| `**/__tests__/**` | **0** |
| `cypress/E2E/`, `cypress/integration/`, `cypress/component/` | **0 specs** |

### Coverage artifacts — `coverage/`

`coverage-final.json` = `{}` (empty). `coverage/lcov-report/index.html` reports **"Unknown%"** for all metrics — stale artifact from a zero-test run.

### Scripts

```json
"test": "jest --passWithNoTests --color",
"test:coverage": "jest --coverage --passWithNoTests --color",
"test:watch": "jest --watchAll --coverage --passWithNoTests --color",
"test:staged": "jest --passWithNoTests --color --findRelatedTests",
"test:E2E": "cypress run",
"code:ci": "npm run format:fix && npm run lint && npm run test:coverage"
```

> 🔴 `--passWithNoTests` is a **self-admission that zero tests exist**. `code:ci` is a green gate that validates nothing — and `format:fix` inside it mutates source files.

### Broken runner

`npm run test` crashes in the current environment:

```
MODULE_NOT_FOUND: node_modules/jest-cli/package.json
```

Jest 29 + Node v25.4.0 incompatibility — **the test command is broken outright, not just empty.** Local Node version is unpinned (no `.nvmrc`, no `engines`), while the Dockerfile pins `node:20.10.0-slim` — which is EOL.

## 3. What Should Be Tested

| Critical path | What to test | Priority |
|---|---|---|
| Contact form validation (`validation/zod/form/contact.validation.ts` + `fields.component.tsx`) | Boundary cases: 2/3-char name, 9/10-char message, invalid emails | 🔴 P0 |
| Sanity data rendering (`gateway/CMS/sanity/*` — testimonial/project/article/person/experience) | GROQ queries, DTO→entity mapping, image URL building — mock `client.fetch` | 🔴 P0 |
| Markdown rendering (`components/markdown/markdown.component.tsx`) | Sanitization/raw-HTML path (currently unverified) | 🔴 P0 |
| `markdownToHtml` sanitizer (if resurrected) | Script tags, `onerror`, iframes | 🔴 P0 |
| Gateway contract tests | `plarforms` regression guard, identifier resolution | 🔴 P0 |
| Carousel (`slider/slider.component.tsx`) | Swiper config, slide navigation, autoplay | 🟠 P1 |
| Cypress E2E (against `next build && next start`) | Home renders, navigation, article detail, contact submit (stubbed EmailJS), carousel | 🟠 P1 |
| i18n / MDX | **Not applicable** — never implemented; don't test, decide (ADR-004) | 🟡 P2 |

**Targets:** remove `--passWithNoTests`; set `coverageThreshold` ≥ 80% on critical modules; wire `setupFilesAfterEnv: ['@testing-library/jest-dom']`; use `cy.intercept()` to stub GROQ/CDN responses in E2E — never hit the production dataset in CI.

## 4. Security Findings

| # | Finding | Verdict |
|---|---|---|
| S1 | `rehype-raw` renders raw HTML from CMS markdown (`showroom/body.component.tsx`, `articles/shelf/content/content.component.tsx`) — DOMPurify path (`markdown.action.ts`) never called | 🔴 **Stored-XSS surface** (medium real-world: admin-only content; critical architecture-wise) |
| S2 | `NEXT_PUBLIC_SANITY_TOKEN` — named like a client value; if consumed, inlined into the browser bundle (0 consumers today per grep, but a tripwire) | 🔴 Rotate + move server-side |
| S3 | No security headers: no CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS | 🔴 Add in `next.config.mjs` |
| S4 | `images.remotePatterns: [{ hostname: '**' }]` — image optimizer accepts any remote host (SSRF-adjacent, open-proxy smell) | 🔴 Tighten to `cdn.sanity.io` + trusted hosts |
| S5 | GROQ string interpolation (`*[_type == "tp_text" && identifier == "${r.content}"]`) — breaks on quotes; injection-prone query construction | 🔴 Parameterize (`client.fetch(query, {identifier})`) |
| S6 | Sanity Studio + Vision mounted in production (`/sanity/studio`, `visionTool()`) — public GROQ console attack surface | 🟠 Hide behind `NODE_ENV !== 'production'` or drop vision in prod |
| S7 | EmailJS: public-key exposure is **by design** (official threat model); IDs + key are public, templates are locked | ✅ Correct model — but no rate limit/honeypot/server relay → spam/DoS on free quota (429s) |
| S8 | Sender email stuffed into message body (`${data.message} \n\n ${data.email}`) instead of a proper template param | 🟡 Functional smell |
| S9 | `dangerouslySetInnerHTML` usage | ✅ **None found** (grep over `src/`) |
| S10 | `.env.local` tracked? | ✅ **Not tracked** (verified). ❌ No `.env.example` committed — onboarding gap |

> 🔴 **Worst-case daily-driver:** S1 + S5 + S6 together mean a compromised Sanity account (or a future user-supplied content path) gives an attacker a script-injection channel through the article and project pages with no CSP to blunt it.

## 5. Dependency Health

| Dependency | Installed | Verdict |
|---|---|---|
| `next` | **14.2.10** | 🔴 EOL line (since 2025-10-26); **CVE-2025-55184** (DoS) fixed only in 14.2.35+; 14.2.10 will never receive another security patch. Immediate: `npm i next@14.2.35` |
| `sanity` / `@sanity/cli` / `@sanity/vision` | **3.25.0** | 🔴 Mid-2024 era; current 3.x far ahead; `@sanity/cli` wrongly in runtime `dependencies` |
| `next-sanity` | **7.0.12** | 🔴 ~6 majors behind (current 13.3.3); pre-Live-Content era; v8 is compatible with the current stack (minimum meaningful upgrade) |
| `zustand` | **5.0.0-rc.2** in lockfile | 🔴 RC in production deps; `^5.0.0-rc.2` range accepts stable 5.0.x — one-command fix (`npm i zustand@^5.0.15`) |
| `eslint-config-next` | **14.1.0** | 🟡 Mismatched with `next@14.2.10` |
| `react-i18next` | 14.0.5 | 🔴 Unused (dead dependency / ADR-004) |
| `next-mdx-remote` | 4.4.1 | 🔴 Unused (dead dependency) |
| `@testing-library/jest-dom` + `jsdom` | deps | 🟡 Test-only packages in runtime `dependencies` — bundle/install bloat |
| `styled-components` + `tailwindcss` + `sass` | — | 🟡 Triple styling systems (SC + TW + SCSS); SC has 0 imports |
| `framermotion`, `swiper`, `react-hook-form`, `zod`, `@emailjs/browser` | — | ✅ Functional and appropriate |
| Node.js | v25.4.0 local / `node:20.10.0-slim` Docker | 🔴 Jest 29 cannot run on Node 25; Node 20 EOL 2026-04-30; no `.nvmrc`/`engines` |
| `package-lock.json` | — | ✅ Present and tracked (1 MB) — good supply-chain baseline |

## 6. Git & Tooling Red Flags

| # | Finding | Verdict |
|---|---|---|
| G1 | `.eslintcache` committed and tracked (323 KB churn per commit, listed in `.gitignore` but tracked files ignore gitignore) | 🔴 `git rm --cached`, redirect cache path |
| G2 | `next.config.mjs` → `eslint: { ignoreDuringBuilds: true }` — last quality gate in `next build` switched off | 🔴 Enable once lint is clean |
| G3 | `.eslintrc.json` → `"rules": {"scape-case": "off"}` — **invalid rule name** (doesn't exist); no strict TS rules | 🟠 Fix + add `@typescript-eslint/no-explicit-any` |
| G4 | 24 files contain `any` (`children: any`, implicit `any`, `result.map(async r =>…)`) | 🟠 `strict: true` migration (P1) |
| G5 | `.husky/pre-commit` runs **whole-project** lint-staged globs; `.husky/pre-push` runs `build:clean` (format:fix mutation + full build) | 🟠 See [05-devops-deployment.md](05-devops-deployment.md) §2 |
| G6 | UI ships literal `???` placeholders (contact form labels/toasts) — unrendered emoji/asset references | 🟡 Replace |
| G7 | `tailwind.config.old` committed; `imgae/` typo folder; Dockerfile `#CMD` commented out | 🟡 Cleanup |

## 7. Prioritized Fix List

### 🔴 P0 — Security & correctness (do first)

| # | Action | Effort |
|---|---|---|
| 1 | Fix the markdown XSS path — drop `rehype-raw` or gate it behind the existing server-side DOMPurify `markdownToHtml` action; type `children` as `ReactNode`/`string`, not `any` | M |
| 2 | Handle `NEXT_PUBLIC_SANITY_TOKEN` — remove/rename to server-only `SANITY_TOKEN`, consume server-side only, **rotate the current token**; unify the two divergent Sanity configs (hardcoded vs env-driven) | M |
| 3 | Add security headers in `next.config.mjs` — CSP (strict, `'self'` + needed sources), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` | S |
| 4 | Un-commit `.eslintcache` (`git rm --cached`) | S |
| 5 | Upgrade `next` to `14.2.35` (CVE patch) and `zustand` to stable 5.0.x | S |
| 6 | Fix the broken async map (`projects.page.tsx:22` — `await Promise.all(...)`) and the `plarforms` typo (`article.gateway.ts:66`) | S |
| 7 | Parameterize all GROQ queries ($param bindings) | M |
| 8 | Run `npm test` on a Node version compatible with Jest 29 (pin via `.nvmrc`/`engines`) — or the suite stays broken | S |

### 🟠 P1 — High

| # | Action | Effort |
|---|---|---|
| 9 | Write real tests: zod contact schema boundaries, DTO→entity mappings, gateway contract tests (mock `client.fetch`), markdown sanitizer; remove `--passWithNoTests`; set `coverageThreshold` | M–L |
| 10 | Restrict `images.remotePatterns` to real domains (e.g. `cdn.sanity.io`); remove `hostname: '**'` | S |
| 11 | Keep Sanity Studio + Vision out of production (guard route/config by `NODE_ENV`) | S |
| 12 | Dependency hygiene: `sanity`/`next-sanity` upgrade path (v8 first — compatible with current stack), move test-only packages to devDependencies, remove dead deps, align `eslint-config-next` | M |
| 13 | Fix Dockerfile — multi-stage (builder + runner), `CMD`, newer LTS Node, no format/lint/test side effects, `.dockerignore` | M |
| 14 | Add abuse protection to contact: honeypot, in-flight debounce, optional rate limit; pass sender email as proper template param | S–M |
| 15 | Fixed: CI lint/test job with real thresholds; `concurrency` + `timeout-minutes` + `paths` filters | S |
| 16 | Type safety: `"strict": true`, remove invalid `scape-case` rule, remove `ignoreDuringBuilds` once clean | M |

### 🟡 P2 — Should

| # | Action |
|---|---|
| 17 | Add `.env.example`; wire `husky:prepare` as npm `prepare` lifecycle |
| 18 | Cleanup: delete `tailwind.config.old`, rename `imgae/` → `image/`, replace `???` placeholders |
| 19 | Upgrade GH Actions versions (checkout v4, build-push v6 era) + Dependabot/Renovate |
| 20 | SBOM attestation + vulnerability scan on the Docker artifact (if kept) |

---

## Quick links

- Previous: [02 · Implementation](02-implementation.md) · Parent: [README.md](README.md)
- Related: [01 · Architecture](01-architecture.md) (R1–R14) · [05 · DevOps](05-devops-deployment.md) (CI/CD)
- Act: [06 · Roadmap](06-roadmap.md) · References: [07](07-references.md)