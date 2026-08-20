# 06 · Roadmap

> Consolidated, prioritized action plan derived from the architecture (Wilson), UX/accessibility (Sofia), DevOps (Atlas), implementation (Tiago), and QA/security (Carla) reports. Every item links back to its source finding.

**Priority tags:** 🔴 P0 = blocker · 🟠 P1 = high value · 🟡 P2 = maintainability. See [README](README.md) legend.

---

## How to Use This Plan

1. Start with the **Quick Wins** table — these are one-line diffs or one-command fixes (S effort) that close P0 security holes and hygiene debt in < 1 hour.
2. Read each P0 item in order; apply its **Definition of Done** before moving to P1.
3. P1 items can be batched into a sprint; P2 items go into the maintenance backlog.
4. Cross-reference with [03-quality-security.md](03-quality-security.md) (security findings), [04-ux-design.md](04-ux-design.md) (WCAG audit), and [05-devops-deployment.md](05-devops-deployment.md) (18 recommendations).

---

## Quick Wins (< 1 hour, mostly P0)

| # | Action | Source | Command / diff |
|---|---|---|---|
| W1 | `git rm --cached` `.eslintcache` | [05] §3 | `git rm --cached personal_site/personal_website/.eslintcache` |
| W2 | `next` CVE patch | [03] §5 / [01] R2 | `npm i next@14.2.35` |
| W3 | `zustand` stable pin | [03] §5 / [01] R6 | `npm i zustand@^5.0.15` |
| W4 | Fix `plarforms` typo | [02] §4 / B2 | `s/plarforms/platforms/` in `article.gateway.ts:66` |
| W5 | Remove `scape-case` from `.eslintrc.json` | [03] §6 / [02] §8 | delete the invalid rule |
| W6 | Add `.dockerignore` | [05] §8 (P0 #3) | create file: `node_modules`, `.next`, `.eslintcache`, `cypress/videos`, `.git`, `*.zip` |
| W7 | Uncomment `CMD` or delete Docker workflow | [05] §2 / [01] B5 | `Dockerfile`: uncomment `CMD` **OR** delete `.github/workflows/docker-publish.yml` |
| W8 | Rotate `NEXT_PUBLIC_SANITY_TOKEN` (name change + rotation) | [05] §3 / [03] S2 | rename env var; rotate via Sanity dashboard |

---

## 🔴 P0 — Blockers (fix this week)

| # | Item | Source ref | Effort | Definition of Done |
|---|---|---|---|---|
| P0-1 | Fix broken async map (`main.map(async project => …)`) | [02] B1 / [01] B1 / [04] | S | Main slider renders resolved cards (not Promises); `await Promise.all(...)` added; no hydration errors |
| P0-2 | Sanitize/remove `rehype-raw` | [01] R8 / [02] §4 / [03] S1 | M | Article/project render path produces sanitized HTML (resurrect `markdownToHtml` server path) **or** `rehype-raw` removed; `children` typed `string`/`ReactNode`; no `any` on markdown boundary |
| P0-3 | Parameterize all GROQ queries (`$param`) | [01] R3 / [02] §4 / [01] B3 | M | Zero template-literal interpolation in `gateway/CMS/sanity/*`; `client.fetch(query, {title})` used consistently; gateway-level contract test added |
| P0-4 | Unify Sanity clients + config (one source of truth) | [01] R5 / [02] §4 / [05] §5 | S–M | Single engine config (`projectId`, `dataset`, `apiVersion`, `useCdn`) driven from `.env` / `env.config.ts`; `sanity/lib/client.ts` consolidated or deleted; no hardcoded IDs |
| P0-5 | Add security headers (`next.config.mjs`) | [03] S3 / [05] §7 | S | CSP, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` added; no build-time lint disable |
| P0-6 | Add `revalidate` + `generateStaticParams` + webhook path | [01] R2 / [01] §4 / [01] §8 | M | `/`, `/portfolio`, `/articles` have `revalidate` (e.g. 3600); `/article/[id]` and `/project/[id]` use `generateStaticParams` + `revalidate`; CMS webhook calls `revalidateTag`/`revalidatePath` |
| P0-7 | Docker decision: fix or delete | [01] B5 / [05] §2 / [05] P0 #2 | M | Either (a) image runs (`CMD`, `.dockerignore`, multi-stage, `ARG NEXT_PUBLIC_*`, LTS base) + deploy target exists, or (b) workflow + Dockerfile deleted; one authoritative deploy path |
| P0-8 | Rotate `NEXT_PUBLIC_SANITY_TOKEN` + server-side move | [03] S2 / [05] §5 | M | Token no longer named `NEXT_PUBLIC_*`; server components read `SANITY_TOKEN`; old token rotated; build passes |
| P0-9 | `docs/01-architecture.md` ADR-001 & ADR-002 created | [01] §8 / [01] P0 #3 / P0 #6 | S | Two ADR files committed to repo (`docs/adr/` or `.avanade-method/` if preferred) — DI strategy + rendering/caching strategy |
| P0-10 | WCAG P0 fixes (NavigateButton, form labels, menu keyboard, focus, testimonial keyboard) | [04] §4 / [04] §8 P0 | S–M | `NavigateButton` rebuilt; form fields have `id`/`htmlFor` + `aria-invalid`/`aria-describedby`; menu toggler is real `<button>` with `aria-expanded`; focus visible; testimonial cards keyboard-operable |

---

## 🟠 P1 — High Value (next sprint)

| # | Item | Source ref | Effort | Definition of Done |
|---|---|---|---|---|
| P1-1 | Collapse N+1 GROQ into joins (`*[_type==...]{..., "ref": ...}`) | [01] §6 / [01] R2 | M | Per-item sequential GROQ lookups collapsed into single projection; `Promise.all` at gateway level; TTFB measured before/after |
| P1-2 | Break client→`app.factory` coupling | [01] R4 / [02] §4 | M | Client files import only `ANIMATION` factory (not full graph); bundle size reduced; server-only modules not serialized |
| P1-3 | EmailJS server relay (route handler) + honeypot + rate limit | [03] S7 / [05] §5 | M | `app/api/contact/route.ts` validates zod payload, applies honeypot + debounce, calls EmailJS server-side; public key no longer directly hit by browser |
| P1-4 | Type safety: `"strict": true`, fix `scape-case`, remove `ignoreDuringBuilds` | [03] §6 / [01] R9 / [02] §3 | M | `tsconfig.json` strict enabled; `.eslintrc.json` clean; `getStaticProps`-style fixes for `any` props; `next.config.mjs` lint enabled |
| P1-5 | Real tests: zod schema, markdown sanitizer, gateway contracts, smoke spec (Cypress), `setupFilesAfterEnv` wired, `--passWithNoTests` removed, `coverageThreshold` set | [03] §2 / [03] §3 / [01] R1 / [02] §9 | M–L | Coverage artifacts non-empty; `npm test` green on pinned Node; Cypress smoke passes on production build; CI runs `test` + `lint` + `build` |
| P1-6 | Font diet: drop/use Fraunces, Neuton, Xanh_Mono; consolidate `fonts.ts` duplicates | [04] §2 / [04] §8 P2 #17 | S | Only active fonts remain (`Space_Mono`, `Inconsolata`, `Libre_Baskerville`); preload count reduced |
| P1-7 | Reduced motion + `prefers-reduced-motion` | [04] A06 / [04] §8 P1 #8 | M | `<MotionConfig reducedMotion="user">` at root; canvas rAF paused; Swiper autoplay gated; `scroll-smooth` gated; visible pause control |
| P1-8 | Document outline (`h1>` single, `<h2>` sections, `<h3>` cards), skip link, `<nav>`, `<header>` landmarks, footer | [04] A07/A08 / [04] §8 P1 #9/#10 | M | Page outline passes axe; skip link visible on focus; footer present |
| P1-9 | Contrast fixes + axe CI check | [04] A09 / [04] §8 P1 #11 | M | `#00eaff` usages replaced; error text `red-700`; contrast CI step runs in PR |
| P1-10 | Add `not-found.tsx`, `error.tsx`, `loading.tsx`; `sitemap.ts`, `robots.ts`; metadata per route; replace placeholder pages | [04] A18 / [04] §8 P1 #15 / [01] §4.4 #5 | M | Shell files exist with skeleton/loading states; 404 uses `notFound()`; sitemap and robots generated |
| P1-11 | CI hardening (`concurrency`, `timeout`, `paths`) + fast lint/test job + Cypress wired to preview builds | [05] §2 / [05] §8 P1 #8 / #11 / #12 | M | Workflow runs in < 5 min for non-affected commits; E2E runs on preview URL |
| P1-12 | Fix lint-staged / pre-push / `.vscode` settings + `commit-msg` hook / `.env.example` | [05] §3 / [05] §8 P2 #15 / #16 / #18 / [05] §4 | M | Hooks file-scoped; `.vscode` disables compile-hero; `.env.example` committed; commit convention enforced |

---

## 🟡 P2 — Maintainability (backlog / sprint filler)

| # | Item | Source ref | Effort |
|---|---|---|---|
| P2-1 | Dependency cleanup: `styled-components`, `next-mdx-remote`, dead deps removed; `lucide-react` evaluated; test libs moved to `devDependencies`; `tailwind.config.old` deleted; `sanity/lib` consolidated | [02] §7 / [03] §5 / [01] R12 / [05] P2 #13 / #14 | S–M |
| P2-2 | Theme switcher (light/dark/coffee) or delete unreachable themes; fix `coffe` typo; align SCSS breakpoints with Tailwind | [04] §1 / [02] §3 / [04] §8 P2 #18 / #19 | M |
| P2-3 | Rename typo folders (`imgae/` → `image/`, `infity` → `infinity`, etc.) + delete empty directories (`historic/`, `pages/` stub) | [02] §7 / [01] B7–B11 / [05] §7 | S |
| P2-4 | Font diet: consolidate modules; drop dead font families; reduce preload count | [04] §2 / [04] §8 P2 #17 | S |
| P2-5 | Self-host hero image (`priority` + `sizes` already added in P0; extend to all external images) | [04] A05 / [04] §8 P0 #7 | M |
| P2-6 | Search UX: sr-only label (`SearchBar`) + `aria-live` on result count; form `aria-invalid` + `aria-describedby` | [04] A11 / [04] A02 / [04] §8 P0 #2 / #12 | S |
| P2-7 | Search: consider client-side `.filter()` + `useDeferredValue` instead of `revalidatePath`/redirect (if performance is acceptable) | [01] §4 / [01] P1 #10 | S–M |
| P2-8 | Home portfolio: turn stacked full-height rows into responsive grid (1/2/3 cols) with hover previews | [04] §8 P2 #22 / [01] §4.3 | M |
| P2-9 | Delete root workspace orphan `package.json`/`node_modules`/zips or convert workspace to npm workspaces | [01] §1 / [05] P2 #13 / #14 | S |
| P2-10 | External links: `rel="noopener noreferrer"`; social links: `aria-expanded`, no invisible focus, `display:none` on close; close-state typo (`inacive` → `inactive`) | [04] A12 / [04] §8 P2 #20 / [05] P2 #21 | S |
| P2-11 | Add SBOM attestation (`cosign attest --type sbom`) + Trivy/Grype scan step to CI (if keeping Docker) | [05] §8 P2 #17 / [01] R11 / [05] §4 #6 | M |
| P2-12 | i18n decision: implement with `app/[locale]/layout.tsx` + `generateStaticParams` (per-request `createInstance`) — or remove the dependency entirely | [01] R14 / [02] §6 / [03] §4.5 / [04] §8 P1 #14 | L |

---

## Definitions of Done (global)

Every completed roadmap item must satisfy:

- **Build passes:** `npm run build` exits 0 (no `eslint.ignoreDuringBuilds` bypass; lint enabled once fixed).
- **No regressions:** `npm run dev` renders all routes; `revalidate`/ISR changes don't break `/portfolio` or `/articles`.
- **CI green:** GitHub Actions pass for both PR and `main`; `test` job exists (even if minimal) and exits non-zero on failure (no `--passWithNoTests`).
- **Security verified:** if the item touches `next.config.mjs`, `.env.local`, gateway queries, or markdown rendering — verify with `npm run lint` and a manual `npm start` smoke test.
- **Accessibility verified:** if the item touches interactive components (`NavigateButton`, form fields, menu toggler, testimonial cards) — run `axe-core` (or manual keyboard/Tab/Enter/Space/Tab-cycle test) and confirm the fix doesn't break focus visibility.
- **Git clean:** `git status` clean (except `.eslintcache` which is now outside the repo); `.env.local` remains untracked; `.env.example` committed.

## Reference Cross-Walk

Findings from the source reports mapped to roadmap items:

- **Architecture (Wilson):** R1–R14 → P0-1 through P0-9; B1–B6 → P0-1, P0-3, P0-7; rendering findings → P0-6.
- **Implementation (Tiago):** feature inventory + dead code → P2-1, P2-3, P2-10; DI services + patterns → P0-9; broken static lane (B7–B10) → P1-9 or delete (P0-7).
- **Quality/Security (Carla):** scorecard + security findings → P0-2 (XSS), P0-4 (token), P0-5 (headers), P0-8 (tests); dependency health → P0-2, P0-4; red flags → P2-4 (lint-staged, commit-msg, `.vscode`).
- **DevOps (Atlas):** CI/CD + Docker + recommendations → P0-7 (Docker), P1-5 (tests + CI), P1-11 (CI hardening), P2-5 (cleanup); git hygiene → P2-4.
- **UX (Sofia):** WCAG audit → P0-10 (a11y P0s), P1-7 (reduced motion), P1-8 (outline/skip), P1-9 (contrast); strengths → kept; brand identity → documented.
- **Stack Research:** version snapshot → P0-2 (CVE patch), P0-3 (next-sanity), P2-1 (dependency hygiene); references → [07-references.md](07-references.md).

---

## Quick links

- Previous: [05 · DevOps](05-devops-deployment.md) · Parent: [README.md](README.md)
- Implement: [02 · Implementation](02-implementation.md) · Audit source: [03 · Quality & Security](03-quality-security.md)
- Design context: [04 · UX & Design](04-ux-design.md) · References: [07 · References](07-references.md)