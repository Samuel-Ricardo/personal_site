# Samuel Ricardo — Personal Portfolio

> Developer-meets-neo: a server-component-first Next.js 14 portfolio with hexagonal Inversify DI, Sanity CMS, and a glass/neon motion design system.

**Live site:** [https://samuel-ricardo.vercel.app/](https://samuel-ricardo.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-14.2.10-black?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-3.25-F03E2F?logo=sanity&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0.0--rc.2-764ABC)
![Cypress](https://img.shields.io/badge/Cypress-13-17202C?logo=cypress&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-29-C21325?logo=jest&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-GHCR-2496ED?logo=docker&logoColor=white)

---

## Table of Contents

- [Executive Summary](#executive-summary)
- [Key Findings at a Glance](#key-findings-at-a-glance)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Documentation Map](#documentation-map)
- [Tech Stack](#tech-stack)
- [Status & Health Snapshot](#status--health-snapshot)
- [License & Acknowledgments](#license--acknowledgments)

---

## Executive Summary

Samuel Ricardo's personal portfolio is a server-component-first Next.js 14 (App Router) site built in React 18 + TypeScript, with content managed through Sanity CMS (embedded Studio at `/sanity/studio`) and delivered as a glass/neon, motion-rich experience spanning home, portfolio, articles, and contact flows. Its standout trait is a genuine hexagonal-flavored architecture — twelve `@core` domains behind Inversify ports/adapters with `lazyInject` gateway injection — supported by 28 client islands, a 105-component system, an Animator-based motion language, and a forms stack (react-hook-form + zod + `toast.promise`) that models correct async UX. The engineering ambition is real, but execution hygiene lags: there are zero automated tests, a live markdown XSS surface (`rehype-raw` with the DOMPurify path dead), GROQ string interpolation plus a broken async map on the projects page, and an unrunnable Docker image. The dependency set also trails current majors — Next.js 14 is EOL (14.2.10 is below the last patched 14.2.35), next-sanity is ~6 majors behind, and zustand 5.0.0-rc.2 is pinned in the lockfile; i18n (react-i18next), MDX (next-mdx-remote), and styled-components are installed but unused. The full audit lives in [`docs/`](docs/), with a prioritized action plan in [`docs/06-roadmap.md`](docs/06-roadmap.md).

## Key Findings at a Glance

**Strengths**

- ✅ **Real hexagonal architecture** — `@core` domains depend on ports only; Sanity/EmailJS adapters implement them via Inversify `lazyInject`. CMS-swap is supported by design.
- ✅ **Cohesive motion system** — 13 Animator presets, 0.25 s stagger rhythm, canvas circuit animation, all kept as thin client islands.
- ✅ **Model form UX** — react-hook-form + zod resolver + `toast.promise` (loading/success/error states).
- ✅ **Solid foundations** — Swiper with A11y module, self-hosted `next/font` (no CLS), SHA-pinned GitHub Actions + keyless Sigstore signing, `.env.local` untracked, zero `dangerouslySetInnerHTML`.

**Gaps (in priority order)**

- 🔴 **Zero automated tests** — Jest 29 + Cypress 13 provisioned, 0 specs; `--passWithNoTests` in every script makes `code:ci` a no-op; `npm test` crashes on Node 25.
- 🔴 **Stored-XSS surface** — `rehype-raw` renders raw CMS HTML on article/project pages; the DOMPurify sanitizer (`markdown.action.ts`) exists but is never called.
- 🔴 **GROQ injection + typo** — URL-derived values interpolated into GROQ literals (breaks on quotes, can distort queries); `plarforms` typo silently drops platform links from main articles.
- 🔴 **Broken async map** — `main.map(async project => …)` renders un-awaited Promises as children on the projects page.
- ❌ **Docker image cannot run** — no `CMD` in the Dockerfile, compose runs the dev server, and GHCR hosts a signed-but-unrunnable artifact that nobody consumes.
- 🟠 **No rendering strategy** — zero `revalidate` / `generateStaticParams` anywhere; route-to-route freshness split plus a per-request N+1 GROQ fan-out.
- 🟠 **Security tripwires** — `NEXT_PUBLIC_SANITY_TOKEN` named like a client value (rotate, move server-side), no security headers, `images.remotePatterns: '**'`, Studio + Vision exposed in production.
- 🟡 **Stale stack & dead weight** — Next 14 EOL (missing CVE-2025-55184 patch in 14.2.35), zustand RC in lockfile, Node 20 EOL base image, `.eslintcache` tracked in git, `src/pages/` stub, 3 of 4 SCSS themes unreachable, and ~7 unused dependencies.

## Quick Start

> App code lives at `personal_site/personal_website/` — `personal_site/` is the git repo root.

### Prerequisites

| Tool | Version | Note |
|---|---|---|
| Node.js | 18.17+ (20 used) | ⚠️ Node 20 reached EOL 2026-04-30; jest 29 currently crashes on Node 25 — pin via `.nvmrc` (see roadmap P1) |
| npm | ≥ 9 | lockfile present (1 MB) |

### Setup

```bash
# 1. From the git repo root
cd personal_site

# 2. Install dependencies (inside the app)
cd personal_website
npm ci

# 3. Install git hooks
npm run husky:prepare

# 4. Create the environment file
#    ⚠️ No .env.example is committed yet (roadmap P2) — create .env.local with the
#    variables listed below. .env.local is gitignored and must not be committed.
```

### Environment Variables (names only)

| Variable | Purpose | Notes |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project id | public by design |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset | public by design |
| `NEXT_PUBLIC_SANITY_TOKEN` | Sanity API token | 🔴 **must not be `NEXT_PUBLIC_`** — rotate and move server-side |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version | optional; defaults to `2024-01-21` |
| `NEXT_PUBLIC_MAILER_SERVICE_ID` | EmailJS service id | public by design |
| `NEXT_PUBLIC_MAILER_TEMPLATE_ID` | EmailJS template id | public by design |
| `NEXT_PUBLIC_MAILER_PUBLIC_KEY` | EmailJS client key | public by design |

### Commands

```bash
npm run dev          # start dev server → http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run lint         # next lint (deprecated upstream; eslint 14.1 config mismatched)
npm run format:verify # prettier check (safe — verify only)
npm test             # ⚠️ currently `jest --passWithNoTests` — 0 tests exist
npm run test:E2E     # ⚠️ Cypress run — 0 specs exist
```

## Project Structure

```
personal_portfolio/                 ← workspace root (NOT a git repo)
├── README.md                       ← this file
├── docs/                           ← full documentation set (see map below)
├── research/                       ← 2026-08-19 stack research
├── package.json                    ← ⚠️ orphan (only swiper + zustand, unused)
├── *.zip                           ← ⚠️ 82.8 MB staging junk (delete)
└── personal_site/                  ← git repo root (github.com:Samuel-Ricardo/personal_site)
    ├── .github/workflows/          ← docker-publish.yml (GHCR + cosign)
    ├── .husky/                     ← pre-commit (lint-staged), pre-push (build:clean)
    ├── LICENSE                     ← MIT
    └── personal_website/           ← the Next.js 14 app (real product)
        ├── src/
        │   ├── app/                ← App Router pages, sections, embedded Studio
        │   ├── modules/            ← @core domains, gateways, engines, @config (Inversify DI)
        │   ├── components/         ← 105-component system (motion, canvas, cards, forms…)
        │   ├── hooks/              ← zustand stores + animation/canvas/email hooks
        │   ├── actions/            ← server actions (search/filter/markdown)
        │   └── assets/             ← SVG-as-TSX icons + background components
        ├── sanity/                 ← CMS schemas + Studio config
        ├── cypress/                ← scaffold only — 0 specs
        ├── public/                 ← static assets (36.2 MB)
        ├── Dockerfile              ← ⚠️ no CMD, single-stage, node:20 EOL
        └── next.config.mjs         ← ⚠️ remotePatterns '**', no security headers
```

## Documentation Map

| Document | Description |
|---|---|
| [docs/README.md](docs/README.md) | Docs index: how to navigate, priority legend, maintenance note |
| [docs/01-architecture.md](docs/01-architecture.md) | Layered/hexagonal architecture, routing, data flow, rendering, DI, risks R1–R14, ADR suggestions |
| [docs/02-implementation.md](docs/02-implementation.md) | Tech-stack deep-dive: features, state management, styling, DI services, dead-code inventory |
| [docs/03-quality-security.md](docs/03-quality-security.md) | Testing reality (0 tests), security audit, dependency health, 1–5 scorecard |
| [docs/04-ux-design.md](docs/04-ux-design.md) | Design tokens, fonts, component inventory, WCAG 2.1 audit (18+ issues), UX roadmap |
| [docs/05-devops-deployment.md](docs/05-devops-deployment.md) | CI/CD, git hygiene, local DX, env vars, deployment targets, 18 recommendations |
| [docs/06-roadmap.md](docs/06-roadmap.md) | Consolidated P0/P1/P2 action plan with effort estimates and definitions of done |
| [docs/07-references.md](docs/07-references.md) | Curated official references by topic (Next, Sanity, EmailJS, forms, i18n, state, testing, Docker) |

## Tech Stack

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | Next.js (App Router) | 14.2.10 | 🔴 EOL since 2025-10-26; last patched 14.x is 14.2.35 |
| UI | React + TypeScript | 18 / ^5 | `strict: false` |
| CMS | Sanity + next-sanity + embedded Studio | 3.25 / 7.0.12 | next-sanity ~6 majors behind current |
| Styling | Tailwind CSS + SCSS | 3.3 / sass | styled-components installed, **0 imports**; dual token systems |
| Forms | react-hook-form + zod | 7.51 / 3.22.4 | zodResolver via @hookform/resolvers |
| Email | EmailJS (browser SDK) | 4.3.1 | public-key model by design; no abuse protection |
| State | Zustand | 5.0.0-rc.2 | 🔴 RC pinned in lockfile; UI-only state (menu, theme, testimonial) |
| DI | Inversify + inversify-inject-decorators | 6 / 3.1 | 12 `@core` domains, ~90 DI files |
| Motion | framer-motion | 11 | Animator presets, MotionH1/Div/Section… wrappers |
| Markdown | react-markdown + remark/rehype | 9 | 🔴 `rehype-raw` without sanitizer |
| Testing | Jest + Cypress | 29 / 13 | ❌ 0 tests |
| CI/CD | GitHub Actions → GHCR | — | SHA-pinned, keyless Sigstore; image unrunnable |
| Deploy | Vercel | — | samuel-ricardo.vercel.app (the real prod path) |

## Status & Health Snapshot

| Area | Status |
|---|---|
| Automated tests | ❌ 0 tests; `--passWithNoTests` everywhere; jest broken on Node 25 |
| Security | ⚠️ rehype-raw XSS gap, GROQ interpolation, no headers, `NEXT_PUBLIC_SANITY_TOKEN` |
| Rendering/caching | ⚠️ no `revalidate`/`generateStaticParams`; freshness split + N+1 queries |
| DX tooling | ✅ Husky + lint-staged + Prettier (⚠️ whole-project globs, heavy pre-push) |
| CI/CD | ⚠️ GHCR image built + signed but cannot run; no tests/lint in CI |
| Docker | ❌ single-stage, no `CMD`, no `.dockerignore`, node:20 EOL |
| CMS ops | ✅ Embedded Studio works; ⚠️ Studio + Vision console exposed in production |
| Documentation | ✅ this README + `docs/` set (generated 2026-08-19) |

## License & Acknowledgments

**License:** [MIT](personal_site/LICENSE) · © 2024 Samuel Ricardo.

**Built with:** Next.js 14 · React 18 · TypeScript · Tailwind + SCSS · Sanity · Inversify · Zustand · framer-motion · Swiper · EmailJS · react-hook-form + zod · Cypress · Jest · Docker/GHCR.

**Documentation** consolidated on 2026-08-19 from architecture (Wilson), UX/accessibility (Sofia), DevOps (Atlas), stack research, implementation (Tiago), and QA/security (Carla) reports. See [`docs/`](docs/) for the full analysis and [`docs/06-roadmap.md`](docs/06-roadmap.md) for the prioritized action plan.