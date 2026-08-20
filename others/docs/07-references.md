# 07 · References

> Curated official documentation and authoritative sources cited in the audit. All URLs verified live from the 2026-08-19 stack-research snapshot (`research/2026-08-19_stack-research.md`).

**Priority tags:** 🔴 P0 · 🟠 P1 · 🟡 P2 — see parent README for legend.

---

## Next.js 14 (current stack) + Upgrade Ladder

| Reference | URL | One-line description |
|---|---|---|
| Next.js 14 docs (App Router) — current docs describe Next 16, but `/docs/14` and `/docs/15` return 404; use the "previous model" docs for v14 caching semantics | https://nextjs.org/docs/app/getting-started/metadata-and-og-images | Metadata and OG Images intro — current official intro (describes 16 behavior) |
| Next.js `generateMetadata` | https://nextjs.org/docs/app/api-reference/functions/generate-metadata | Dynamic server-side metadata per route |
| Next.js `generateStaticParams` | https://nextjs.org/docs/app/getting-started/metadata-and-og-images#generate-metadata | Dynamic segment pre-rendering + 404 for unknown paths |
| Caching — v14 previous model (no Cache Components) | https://nextjs.org/docs/app/guides/caching-without-cache-components | v14-era caching: fetch `revalidate`, `unstable_cache`, `revalidateTag` |
| Security update — Dec 11 2025 (CVE-2025-55184 / 55183) | https://nextjs.org/blog/security-update-2025-12-11 | 14.2.35 is the final patched 14.x; 14.2.10 is vulnerable |
| Next.js 14 EOL status | https://endoflife.ai/nextjs/14 | EOL 2025-10-26; no further patches |
| Upgrade 14 → 15 | https://nextjs.org/docs/app/guides/upgrading/version-15 | Codemod (`npx @next/codemod@canary upgrade`), async request APIs, React 19, fetch caching changes |
| Next.js Testing guide | https://nextjs.org/docs/app/guides/testing | Jest/Cypress/Playwright roles; sub-guides: `/testing/jest`, `/testing/cypress` |
| 2026 portfolio teardown (Next 16) | https://kevinmurphywebdev.com/blog/nextjs-16-portfolio-teardown | Practical 2026 portfolio: `buildMetadata` + `generateMetadata` + `generateStaticParams` + `dynamicParams=false`; skip Cache Components when routes are all-static/all-dynamic |

---

## Sanity + Next.js Integration

| Reference | URL | One-line description |
|---|---|---|
| Query content in Next.js (App Router) — current recommended approach | https://www.sanity.io/docs/nextjs/query-content-nextjs | `defineQuery` + TypeGen, `sanityFetch`, Live Content |
| Caching and revalidation in Next.js | https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs | `revalidateTag`/path-based revalidation, webhook patterns |
| Live Content Guide | https://www.sanity.io/docs/developer-guides/live-content-guide | `defineLive` / `SanityLive` — "most apps should use this" |
| next-sanity `MIGRATE-v7-to-v8.md` | https://github.com/sanity-io/next-sanity/blob/main/packages/next-sanity/MIGRATE-v7-to-v8.md | Migration doc: `stega` options, removed exports; v8 compatible with current stack |
| next-sanity npm | https://www.npmjs.com/package/next-sanity | Registry status: 13.3.3; peer-dep matrix for version compatibility |

---

## EmailJS

| Reference | URL | One-line description |
|---|---|---|
| FAQ: Is it okay to expose my Public Key? | https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/ | Official security model: keys public by design, templates locked |
| SDK Options (`limitRate`, `blockHeadless`, `blockList`) | https://www.emailjs.com/docs/sdk/options/ | Client-side deterrents (not security); `limitRate` throttles to 429 |
| SDK Init (`publicKey`, `privateKey`) | https://www.emailjs.com/docs/sdk/init/ | `emailjs.init()` pattern |
| EmailJS Pricing | https://www.emailjs.com/pricing/ | Free tier 200 requests/month; rate limits return `429` |

---

## Forms & Validation

| Reference | URL | One-line description |
|---|---|---|
| react-hook-form/resolvers | https://github.com/react-hook-form/resolvers | Canonical `zodResolver` + inference table (zod 3/4 support) |

---

## i18n

| Reference | URL | One-line description |
|---|---|---|
| i18next official Next.js App Router example | https://github.com/i18next/next-app-dir-i18next-example | `app/i18n/settings.ts` + `server.ts` + `client.tsx`; `[locale]` segments; `generateStaticParams` for locales |

---

## State (Zustand)

| Reference | URL | One-line description |
|---|---|---|
| Zustand v5 migration guide | https://zustand.docs.pmnd.rs/reference/migrations/migrating-to-v5 | v4→v5: React 18 floor, `useShallow` for selector objects, no default export |
| Zustand v5.0.0 release (stable since 2024-10-14) | https://github.com/pmndrs/zustand/releases/tag/v5.0.0 | Stable since Oct 2024; current 5.0.15 |

---

## Testing (Cypress + Jest)

| Reference | URL | One-line description |
|---|---|---|
| Next.js Testing guide — overview | https://nextjs.org/docs/app/guides/testing | Jest / Cypress / Playwright / Vitest roles |
| Upgrading Jest to v30 | https://jestjs.io/docs/upgrading-to-jest30 | Node 18+ floor, TypeScript 5.4+, jsdom 26, deprecated alias matchers |
| Cypress 15 upgrade paths from 13/14 (official summary) | https://www.cypress.io/blog/cypress-15-made-simple-upgrade-paths-from-13-and-14 | `cy.origin()` mandatory (14); `cy.stub()` 3-arg removal, `cy.exec()` removals (15) |

---

## Docker + Next.js

| Reference | URL | One-line description |
|---|---|---|
| Official `with-docker` example (vercel/next.js) | https://github.com/vercel/next.js/tree/canary/examples/with-docker | Canonical multi-stage + standalone Dockerfile; `output: "standalone"`; BuildKit cache mounts; non-root user; LTS Node |

---

## Patterns (Portfolio / Architecture)

| Reference | URL | One-line description |
|---|---|---|
| 2026 portfolio teardown (Next 16, practical architecture) | https://kevinmurphywebdev.com/blog/nextjs-16-portfolio-teardown | `buildMetadata`, `generateStaticParams` + `dynamicParams=false`, ISR on one route only, skip Cache Components when routes are all-static/all-dynamic |

---

## Note on Version Verification

- All package versions listed above were verified live via `npm view` against `registry.npmjs.org` on **2026-08-19** (see `research/2026-08-19_stack-research.md`).
- The project lockfile holds the pinned versions noted (`14.2.10`, `7.0.12`, `5.0.0-rc.2`, `29.7.0`, `13.6.3`). Before upgrading any package, re-verify the latest major/minor against the reference URLs above — major versions change quickly in this ecosystem.
- The two reports written in English (`ARCHITECTURE-ANALYSIS.md`, `UX_ANALYSIS_REPORT.md`, `DEVOPS_REPORT.md`, `stack-research.md`) contained **no Portuguese content**; all findings are already in English, so no translation was required for this documentation set.