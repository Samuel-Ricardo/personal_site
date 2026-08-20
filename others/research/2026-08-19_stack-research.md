# Stack Research Report — Personal Portfolio (Next.js 14.2.10)

**Research date:** 2026-08-19 · **Scope:** Next.js 14 App Router · Sanity/next-sanity · EmailJS · react-hook-form+zod · react-i18next · zustand · Jest/Cypress · Docker
**Method:** All registry facts verified live with `npm view` against registry.npmjs.org; all referenced docs fetched directly on this date. No speculative claims — anything unverified is marked as such.

---

## TL;DR — Priority Findings

| # | Finding | Severity |
|---|---------|----------|
| 1 | **Next.js 14 is EOL (since 2025-10-26) and the project is below the last patched release (14.2.35).** CVE-2025-55184 (DoS) was fixed only in 14.2.35+ (Dec 2025). **14.2.10 is vulnerable with no future patches.** | 🔴 Critical |
| 2 | `zustand` is pinned to **5.0.0-rc.2 in the lockfile** — v5 stable shipped Oct 2024, current is 5.0.15. The `^5.0.0-rc.2` range *does* accept stable 5.0.x (verified), so only the lockfile holds the RC hostage. One-command fix. | 🟡 Moderate |
| 3 | `next-sanity@7.0.12` is ~6 majors behind (current 13.3.3). v7 is pre-Live-Content era; the modern pattern is `defineLive`/`sanityFetch` + `defineQuery`/TypeGen. Upgrade path exists per major (`MIGRATE-v7-to-v8.md`). | 🟠 High (technical debt) |
| 4 | `sanity@3.25` → current 6.10.1; `react-i18next@14` → current 17; `zod@3.22` → current 4.x; `cypress@13` → current 15; `tailwind@3.3` → current 4.x. All functional today but trailing. | 🟠 High (debt) |
| 5 | EmailJS public-key exposure is **by design** (official stance) — but abuse/rate-limit risk is real. Project already uses EmailJS; hardening is cheap (honeypot + server-side validation + throttling). | 🟡 Moderate |
| 6 | Dockerfile is single-stage, no `output: "standalone"` — the canonical 2026 pattern (with-docker example) is multi-stage + standalone + BuildKit cache mounts. | 🟡 Moderate |

---

## Version Snapshot (verified 2026-08-19 via npm registry)

| Package | Project (lockfile) | Latest today | Gap |
|---|---|---|---|
| next | 14.2.10 | 16.3.1 (15.5.23 last 15.x; 14.2.35 last 14.x) | **EOL + unpatched CVE** |
| react / react-dom | ^18 | 19.2.8 | 1 major |
| next-sanity | 7.0.12 | 13.3.3 (7.x line ended at 7.1.4) | ~6 majors |
| sanity | ^3.25 | 6.10.1 (5.x ended 5.31.2; 4.x ended 4.22.1) | 3 majors |
| @sanity/image-url | 1.0.2 | 2.1.1 | 1 major |
| zustand | **5.0.0-rc.2** | 5.0.15 (stable since 2024-10-14) | RC pinned |
| react-i18next | 14.0.5 | 17.0.11 (no v16; 15→17) | 3 majors |
| i18next | — | 26.3.6 | — |
| zod | 3.22.4 | 4.4.3 (v4 stable 2025-07-09; 3.25.0 last v3) | 1 major |
| @hookform/resolvers | 3.3.4 | 5.9.1 | 2 majors |
| react-hook-form | 7.51.0 | 7.85.0 | minor |
| cypress | 13.6.3 | 15.21.0 (14.x ended 14.5.4) | 2 majors |
| jest | 29.7.0 | 30.4.2 | 1 major |
| @emailjs/browser | 4.3.1 | 4.4.1 | minor |
| framer-motion | 11.0.3 | 13.1.0 (also ships as `motion`) | 2 majors |
| tailwindcss | 3.3.0 | 4.3.3 | 1 major |
| typescript | ^5 | 5.x current | fine |

---

## 1. Next.js 14 App Router — 2026 Best Practices for Portfolio Sites

> Header note: as of 2026, nextjs.org docs are **unversioned** and describe Next 16 behavior (verified: `/docs/14` and `/docs/15` 404; pages report `version: 16.3.1`). For v14-era caching semantics use the "previous model" doc (link below).

### Metadata / SEO (Metadata API)
**Recommended current practice (2026):**
- Static `export const metadata: Metadata` in the root layout (site-wide title template, description, OpenGraph/Twitter defaults) — the project already does this correctly. ✅
- **Per-route dynamic metadata via `generateMetadata`** for every page that renders content-dependent data (blog posts, portfolio items). It runs on the server, can `await` a GROQ fetch, and merges with the parent layout's `title.template`.
- **File-convention metadata:** `sitemap.ts`, `robots.ts`, and dynamic OG images via `opengraph-image` file conventions or `ImageResponse` from `next/og` (e.g. `icon.tsx`/`apple-icon.tsx` for generated favicons). A well-regarded 2026 portfolio teardown (Kevin Murphy) treats Metadata API as "the spine": a single `buildMetadata` helper + `generateMetadata` per post + dynamic `/og` route + JSON-LD.
- JSON-LD structured data for `Person`/`Website`/`Article`/`CreativeWork`.
- In Next 14, `generateViewport` is available as a separate export (viewport moved out of `Metadata` in 14.x).

**What this project does:** static `metadata` in `src/app/layout.tsx` only. Verified: **zero** `generateMetadata`, `ImageResponse`, `sitemap.ts`, or `robots.ts` in `src/`. All routes inherit layout metadata — no per-page titles/OG images.

**References:** https://nextjs.org/docs/app/getting-started/metadata-and-og-images · https://nextjs.org/docs/app/api-reference/functions/generate-metadata · https://nextjs.org/docs/app/api-reference/functions/image-response

### Image optimization (`next/image`)
**Recommended:**
- Always `<Image>` (project already uses it in 27 spots ✅), with explicit `width`/`height`/`sizes` to kill CLS.
- Configure `images.remotePatterns` to **specific** Sanity CDN hostnames instead of wildcards.
- Use `@sanity/image-url` to build `src` (`urlFor(...).width(800).format('webp').url()`) and let Next optimize further.

**What this project does:** `remotePatterns: [{ hostname: '**' }]` in `next.config.mjs` — allows image optimization to be abused as an open proxy of any remote URL (SSRF-adjacent amplification). Tighten to `cdn.sanity.io` (and any other trusted host).

**Reference:** https://nextjs.org/docs/app/getting-started/images

### Caching / Revalidation
**Next 14 model (what applies to this project today):**
- Portfolio sites should be **fully static by default** (SSG at build), with **ISR** only where content changes: `export const revalidate = 3600` on content routes, or tag-based revalidation (`revalidateTag` called from a Sanity webhook route handler) — the preferred Sanity pattern (see §2).
- `generateStaticParams` + `dynamicParams = false` for dynamic segments (e.g. `[slug]`) — 404s unknown paths without request-time lookups.
- Sanity fetches: use a server-side `sanityFetch` wrapper with explicit `next: { revalidate }` / `cache` options rather than bare `client.fetch`.

**Next 15/16 changes to plan around when upgrading:**
- Next 15: `fetch` defaults to **no caching**; `cookies`/`headers`/`params`/`searchParams` became async; React 19 required. v14's Data Cache semantics moved to a "previous model" doc.
- Next 16: Cache Components (`cacheComponents: true`, `use cache` + `cacheLife`) is the new caching model; PPR/cache components NOTE: the 2026 teardown explicitly recommends **skipping** Cache Components if every route is either fully static or fully dynamic (portfolio case) — ceremony with no benefit.

**Verified refs:** v14-era model: https://nextjs.org/docs/app/guides/caching-without-cache-components · new model: https://nextjs.org/docs/app/getting-started/caching

### Server Components patterns
- Default to Server Components; `'use client'` only at the leaves (animation hooks, event handlers, forms, browser APIs) — never at the root of a page tree.
- Keep Sanity client, queries, and data-fetching in server components (`src/modules/...` is fine as long as data flow stays server-side).
- This project's architecture (`src/modules/engine|gateway`, DI via inversify) is unusual — Inversify + `reflect-metadata` in a Next RSC context works but adds serialization constraints; ensure no client component imports server-only modules. (Not deeply investigated; flagged for review.)

### Security (critical context for any upgrade decision)
- **Next 14 EOL 2025-10-26; final release 14.2.35 (2025-12-11) which fixed CVE-2025-55184 (DoS) and a source-code-exposure follow-up (CVE-2025-55183 family affected 15.x/16.x).** Project's 14.2.10 predates the fix and will never receive another security patch.
- The project also sets `eslint: { ignoreDuringBuilds: true }` — do not rely on this for CI quality gates; `next lint` was deprecated in 15 and **removed in 16** (use ESLint CLI directly).

### Upgrade ladder (recommended)
1. **Immediate (hours):** `npm install next@14.2.35` — patch the CVE while planning the real upgrade.
2. **Short-term (weeks):** Next 15.5.23 + React 19 (follow https://nextjs.org/docs/app/guides/upgrading/version-15; codemod `npx @next/codemod@canary upgrade`), then optionally 16 (→ version-16 guide). React 19 + Next 15 unlocks current next-sanity majors (§2) and react-i18next 17 (§4).
3. Leave Tailwind 3 and Jest 29 in place during the migration; upgrade them separately (Tailwind 4 = new CSS-first config; Jest 30 = Node 18+/TS 5.4+ floor, jsdom 26, alias matchers removed).

---

## 2. Sanity + Next.js — Current Recommended Integration

**Recommended current practice (2026, per official Sanity docs):**
- Use **next-sanity** (not bare `@sanity/client`) — current **13.3.3** (~470k weekly downloads).
- `<DataProvider>`: define a client in `sanity/lib/client.ts` via `createClient` + `defineLive` from `next-sanity/live`, export a **`sanityFetch` server helper** and `SanityLive` client component. `sanityFetch` handles caching, revalidation (`revalidateTag`/path-based) and live updates automatically. This is "the recommended approach for most applications."
- Query layer: **`defineQuery` (typed GROQ) + Sanity TypeGen** for type inference from queries; `<groq>` tag is kept only for backward compat.
- **ISR revalidation:** a Sanity webhook → route handler calling `revalidateTag`/`revalidatePath` with tag-based `next: { tags: [...] }` on fetches (documented under "Caching and revalidation in Next.js").
- Images: `@sanity/image-url` `urlFor()` as in v1; `Image` from `next/image` on top.
- For the studio: keep `sanity` + `@sanity/vision` + `next-sanity/studio` route (App Router-only in later versions).

**next-sanity v7 vs newer majors (registry-verified peer-dependency matrix):**

| next-sanity | next | react | sanity | Notes |
|---|---|---|---|---|
| **7.x (project)** | 14-era | 18 | ^3.25 | pre-Live-Content; `createClient` from `@sanity/preview-kit` heritage; 7.x line ended 7.1.4 |
| 8.0.0 | ^14.1 | ^18.2 | ^3.25 | **compat. with the current project stack**; adds defineLive/SanityLive, `stega` options replace old `encodeSourceMap` params; `/studio/loading` removed. Migration doc: `MIGRATE-v7-to-v8.md` |
| 10.x | ^15.1 | ^19 | ^4.0.0 | Requires Next 15 + React 19 |
| 11.x | ^15.1 | ^18.3 \|\| ^19 | ^4.8.0 | Last major supporting React 18.3 on Next 15 |
| 12.x | ^16.0.0-0 | ^19.2.3 | ^5.0.0 | Next 16/React 19 only |
| 13.3.3 (latest) | ^16.0.0-0 | ^19.2.3 | ^5.29 \|\| ^6, @sanity/client ^7.26 | Current; requires Sanity 5.29+/6 |

**Verdict — is next-sanity v7.0.12 outdated? Yes, decisively:** ~6 major versions behind, missing the entire Live Content / Visual Editing era. The v7→v8 step is *compatible with the project's current Next 14 / React 18 / Sanity 3.25 stack* and is the minimum meaningful upgrade. The fully-current stack (next-sanity 13 + sanity 6) requires Next 16 + React 19, i.e. only after the Next upgrade (§1).

**What this project does (verified):** `createClient` from `next-sanity@7` with hardcoded `apiVersion: '2023-05-03'`, `useCdn: true`, `projectId`/`dataset` inline; no `defineLive`, no `sanityFetch` helper, no revalidation tags found in `src/` (zero `revalidateTag`/`revalidate` hits). Works, but content updates will not propagate without redeploys unless a webhook/revalidation path exists elsewhere (e.g. Next `on-demand revalidate`) — worth auditing.

**References:** https://www.sanity.io/docs/nextjs/query-content-nextjs · https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs · https://www.sanity.io/docs/developer-guides/live-content-guide · https://github.com/sanity-io/next-sanity/blob/main/packages/next-sanity/MIGRATE-v7-to-v8.md

---

## 3. EmailJS + Next.js 14 — Integration & Security

**Current state (verified):** `@emailjs/browser` 4.4.1 (project: 4.3.1 — fine). SDK v4 uses **Public Key** (dashboard Account page) + optional **Private Key** auth.

**Recommended current practice:**
- **Exposing the Public Key client-side is officially OK by design** — EmailJS's model is "predefined templates triggered from code"; a scraper gets template *triggers*, not the ability to send arbitrary content (official FAQ). Keys are meant to be public; do not treat hiding them as security.
- **Real risks:** account-level rate limits, free-tier quotas (200 requests/month for free plan), and hitting your own quota via spam/abuse. EmailJS returns **429** when rate-limited.
- **Official SDK hardening (client-side, UX-level):** `emailjs.init({ publicKey, blockHeadless: true, blockList: {...}, limitRate: { id: 'app', throttle: 10000 } })` — blocks headless browsers, blocks listed addresses, throttles submissions. Caveat: `limitRate`/`blockHeadless` are client-side and trivially bypassed — they are *deterrents*, not security.
- **Server-side hardening (real security):** route the form through an App Router **Route Handler** (`app/api/contact/route.ts`) that:
  - validates the payload with the zod schema (reuse the RHF schema),
  - applies a honeypot field check + optional rate limiting (Upstash/Redis, or in-memory for single-instance),
  - optionally calls EmailJS server-side (needed anyway if you ever enable Private Key auth — never ship the private key to the browser),
  - returns a sanitized response (project already depends on `dompurify` for output sanitization ✅).
- 2026 write-ups consistently flag the "exposed key bombed the free quota" incident class — monitoring your EmailJS dashboard request counts periodically is a legitimate practice for a portfolio contact form.

**What this project does (verified):** uses `@emailjs/browser` directly (27 references across `src/`); recommend confirming `emailjs.init()` options (blockHeadless/limitRate) are set and that payloads are validated server-side.

**References:** https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/ · https://www.emailjs.com/docs/sdk/options/ · https://www.emailjs.com/docs/sdk/init/ · https://www.emailjs.com/pricing/

---

## 4. Forms, i18n, State — Current Patterns

### react-hook-form + zod
**Recommended (2026):**
- `useForm({ resolver: zodResolver(schema) })` from `@hookform/resolvers` — unchanged pattern, still the canonical one (**resolvers 5.9.1** current).
- Type inference: `useForm<z.input<typeof schema>, any, z.output<typeof schema>>` — the resolver derives the output type automatically in recent versions (ensures transformations are typed).
- **zod 4** is stable since 2025-07-09 (current 4.4.3; zod 3 line ended 3.25.0, May 2025 — still maintained in practice but frozen). Resolvers ≥5 support zod 4 via existing imports (`// zod/v4` where needed).
- Upgrade only zod + resolvers **together**: `npm i zod@^4 @hookform/resolvers@^5` — breaking changes are mostly around error message/`z.object` inference details; for a portfolio form it's a small, testable change.

**This project:** zod 3.22.4 (predates 3.25 fixes) + resolvers 3.3.4 — functional, but both at their floor; zod 4/resolvers 5 recommended at the same time as the Next 15 migration.

**Reference:** https://github.com/react-hook-form/resolvers

### react-i18next + App Router
**Recommended (2026) — official `next-app-dir-i18next-example` pattern:**
- `app/i18n/settings.ts` (languages, defaultNS, `getOptions`) + `app/i18n/server.ts` (fresh `createInstance` per request, `resourcesToBackend` JSON loader, `getFixedT`) + `app/i18n/client.tsx` (client instance + provider with `useSyncExternalStore`).
- Route structure: `app/[locale]/layout.tsx` drives language; `generateStaticParams` for locales; `<html lang>` set from locale.
- **Never call `useTranslation` in Server Components** — use the `t` function returned by `getFixedT` in server code, or render translated content client-side only.
- Current versions: react-i18next **17.0.11** (v14→15→17; v15 aligned with React 19 era), i18next 26.3.6. v14 works with React 18/Next 14; upgrade alongside the React 19 move if multi-language support matters.

**This project (verified):** react-i18next 14.0.5; no `i18n`/`locales`/`[locale]` directories found under `src/` — i18n appears to be client-side, single-language (default locale). If that's intentional (en-only client translation), it's acceptable; just be aware the [locale] SSR pattern is the current norm and the `initReactI18next` client cascade risk (duplicate i18next instances across hydration boundaries) exists with mixed server/client usage. (Not exhaustively audited — flagged.)

**Reference:** https://github.com/i18next/next-app-dir-i18next-example

### zustand — v5 status and the `^5.0.0-rc.2` pin
**Verified facts:**
- **v5.0.0 stable released 2024-10-14** (GitHub release: "No new features — drop many old things"). Current: **5.0.15** (published ~2 weeks ago).
- Changes vs v4: no default export, React 18 minimum, `use-sync-external-store` becomes a peer dependency, TS 4.5 minimum, no UMD/ES5, persist-middleware behavior change, stricter types. Migration guide: `migrating-to-v5`.
- Known RC-era report: "Maximum update depth exceeded" errors — same class of issue existed in v4 (misconfigured `create` inside render loops / object literals in selectors); **`useShallow` is the documented fix** for selector object-literal issues.
- **The pin:** `"zustand": "^5.0.0-rc.2"` — I verified with `npm view "zustand@^5.0.0-rc.2"` that this range actually **matches all stable 5.0.x releases** (5.0.0…5.0.15). So the range is fine; only the **lockfile pins 5.0.0-rc.2** (`npm ci` installs the RC). There is no API drift risk between the RC and stable (v5 stable introduced no new features), but running an RC in production locks you out of 18 months of fixes.

**Recommended:** `npm install zustand@^5.0.15` (updates lockfile), commit. Zero code changes expected — but run the test suite. Optionally review selectors for object literals (`useShallow`).

**References:** https://zustand.docs.pmnd.rs/reference/migrations/migrating-to-v5 · https://github.com/pmndrs/zustand/releases/tag/v5.0.0

---

## 5. Testing (Cypress 13 + Jest 29) & Docker

### Recommended parallel usage (per Next.js official Testing guide)
- **Layering:** Jest + React Testing Library (jsdom) for **unit/component/snapshot** tests; Cypress for **E2E** user flows. Both are documented first-class setups in the Next.js docs (`/docs/app/guides/testing`, with dedicated `/testing/cypress` and `/testing/jest` guides).
- **Advice from the docs:** prefer E2E over unit tests for **async Server Components** (tools' RSC support is still uneven).
- **Cypress E2E should run against a production build** (`next build && next start`, `baseUrl: http://localhost:3000`), not `next dev` — matches Vercel's guidance and this project's `test:E2E` script's implied setup.
- **Sanity in E2E:** stub/mock via `cy.intercept()` for GROQ/CDN responses or use a test dataset — don't hit the production dataset in CI.
- **CI:** run Jest and Cypress as **parallel jobs** (independent processes; Cypress needs the built server, so a `build → start → cypress run` job alongside `jest` is typical). Lint/format aligned with `code:ci` pipeline. (Note: `npm run build:clean` runs `format:fix` — mutating files in CI; prefer `format:verify` there.)
- **Version status:** Jest 29.7 is still fine on this stack (Jest 30 current; upgrades: Node 18+ floor, TS 5.4+, jsdom 26, deprecated alias matchers removed, `--testPathPatterns` rename). Cypress 13 works with Next 14; **Cypress 14** (2025) made `cy.origin()` mandatory for multi-domain navigation (Chrome removed `document.domain` setter support — relevant if tests cross subdomains), **Cypress 15** (2025-09) removed `cy.stub()` 3-arg form, `cy.exec()`'s `code` property (`exitCode`), and Webpack 4. So 13→15 migration is mostly mechanical but touches any cross-origin/subdomain specs.

### Docker — canonical 2026 pattern (vercel/next.js `with-docker` example)
Canonical reference (official example, currently maintained): https://github.com/vercel/next.js/tree/canary/examples/with-docker — key elements of the example Dockerfile (fetched today):
1. **Multi-stage**: `dependencies` → `builder` → `runner` (Node **LTS** slim base via `ARG NODE_VERSION`).
2. `next.config: { output: "standalone" }` + copying `.next/standalone`, `.next/static`, `public` into the runner — minimal image, no node_modules at runtime.
3. **BuildKit cache mounts** for `.npm`/yarn/pnpm caches and optional `.next/cache` (with the caveat that fetch-cache is then excluded — don't do it if you rely on build-time fetch caching).
4. `npm ci --frozen-lockfile` (reproducible), non-root `node` user, `ENV PORT=3000 HOSTNAME="0.0.0.0"`.

**This project's Dockerfile (verified):** single-stage `node:20.10.0-slim` (pin is now long EOL as a base — Node 20 is old; example uses current LTS), non-root `node` user ✅, `npm ci` ✅, but: no standalone mode, no stage separation, no cache mounts, `build:clean` runs formatting+lint+tests inside the image build (slows builds and can fail CI on formatting diffs), `CMD` commented out. The `output: "standalone"` key is absent from `next.config.mjs`.

---

## 6. Curated Reference List

### Next.js
- [Metadata and OG Images (getting started)](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) — current official intro to the Metadata API, incl. dynamic OG via next/og.
- [Upgrade guide: 14 → 15](https://nextjs.org/docs/app/guides/upgrading/version-15) — codemod path and the breaking changes (async request APIs, React 19, fetch caching) to plan for.
- [Caching and Revalidating — Previous Model](https://nextjs.org/docs/app/guides/caching-without-cache-components) — the v14-era caching model this project runs on (fetch revalidate / unstable_cache / revalidateTag).
- [Next.js Security Update — Dec 11, 2025](https://nextjs.org/blog/security-update-2025-12-11) — CVE-2025-55184/55183; documents 14.2.35 as the final patched 14.x.
- [Next.js 14 EOL status](https://endoflife.ai/nextjs/14) — endoflife.date tracking; EOL 2025-10-26, no further patches.

### Sanity
- [Query content in Next.js (App Router)](https://www.sanity.io/docs/nextjs/query-content-nextjs) — current recommended `next-sanity` usage: defineQuery/TypeGen, sanityFetch, Live Content.
- [Caching and revalidation in Next.js](https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs) — sanityFetch helper, time/tag/path-based revalidation, webhook patterns.
- [Live Content Guide](https://www.sanity.io/docs/developer-guides/live-content-guide) — defineLive/SanityLive setup; "most apps should use this."
- [next-sanity MIGRATE-v7-to-v8.md](https://github.com/sanity-io/next-sanity/blob/main/packages/next-sanity/MIGRATE-v7-to-v8.md) — entry-point migration doc for the project's current major (stega options, removed exports).
- [next-sanity on npm](https://www.npmjs.com/package/next-sanity) — registry status: 13.3.3, peer-dep matrix verification source.

### EmailJS
- [Is it okay to expose my Public Key?](https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/) — official security model: keys public by design, templates locked.
- [SDK Options](https://www.emailjs.com/docs/sdk/options/) — publicKey/privateKey, limitRate/throttle (429 behavior), blockHeadless, blockList.

### Forms / validation
- [react-hook-form/resolvers](https://github.com/react-hook-form/resolvers) — canonical zodResolver pattern + inference table (zod 4 support).

### i18n
- [i18next official Next.js App Router example](https://github.com/i18next/next-app-dir-i18next-example) — settings/server/client split, [locale] segments, resourcesToBackend.

### State
- [Zustand v5 migration guide](https://zustand.docs.pmnd.rs/reference/migrations/migrating-to-v5) — v4→v5 changes (React 18 floor, useShallow guidance).

### Testing
- [Next.js Testing guide](https://nextjs.org/docs/app/guides/testing) — official overview of Jest/Cypress/Playwright/Vitest roles (sub-guides: /testing/jest, /testing/cypress).
- [Upgrading Jest to v30](https://jestjs.io/docs/upgrading-to-jest30) — what changes between 29 and 30 (Node 18+, TS 5.4+, jsdom 26, matcher renames).
- [Cypress 15 upgrade paths from 13/14](https://www.cypress.io/blog/cypress-15-made-simple-upgrade-paths-from-13-and-14) — official summary of 14's cy.origin() change and 15's removals.

### Docker
- [vercel/next.js with-docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker) — canonical multi-stage + standalone Dockerfile (BuildKit cache mounts, non-root, LTS Node).

### Patterns (portfolio-specific)
- [Auditing my portfolio against Next.js 16 (2026)](https://kevinmurphywebdev.com/blog/nextjs-16-portfolio-teardown) — practical 2026 portfolio architecture: RSC-first, buildMetadata helper, generateStaticParams + dynamicParams=false, ISR on one route only, skip Cache Components when routes are all-static/all-dynamic.

---

## Recommended Action Plan (ordered)

1. **This week:** `npm i next@14.2.35` (CVE patch) → `npm i zustand@^5.0.15` → tighten `images.remotePatterns` + remove `eslint.ignoreDuringBuilds`.
2. **This sprint:** audit publish flow for Sanity content changes (webhook/revalidateTag or accept redeploy-driven ISR); add honeypot + server-side validation to the EmailJS form; run `npx next lint` (or ESLint direct) in CI via `format:verify` instead of mutating `format:fix`.
3. **Next quarter:** Next 15.5.23 + React 19 (+ @types/react 19) per the version-15 guide; then next-sanity 11 + sanity 4.8+/5.x + `sanityFetch`/`defineLive`; react-i18next 17 + zod 4 + resolvers 5 together; Cypress 14/15 after the framework migration; Dockerfile → with-docker pattern with `output: 'standalone'`.
4. **Ongoing:** re-run the `npm view` snapshot (table in §0) every few months; Next.js 15 LTS is EOL 2026-10-21 — the Next 16 line is the long-lived target.