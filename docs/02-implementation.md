# 02 · Implementation

> Deep-dive into how the portfolio actually works: features, state management, styling, DI services, patterns worth keeping, and the tech debt that ships with them.

**Priority tags:** 🔴 P0 · 🟠 P1 · 🟡 P2 — see [README](README.md) legend.

## Table of Contents

1. [Feature Inventory](#1-feature-inventory)
2. [State Management](#2-state-management)
3. [Styling Stack](#3-styling-stack)
4. [DI Services](#4-di-services)
5. [Notable Patterns](#5-notable-patterns)
6. [Technical Debt](#6-technical-debt)
7. [Dead Code Inventory](#7-dead-code-inventory)
8. [Library Usage Verdict](#8-library-usage-verdict)
9. [Strengths & Weaknesses](#9-strengths--weaknesses)

---

## 1. Feature Inventory

| Feature | Implementation | Data path | Status |
|---|---|---|---|
| **Home page** — 10 async sections | Uses the Assembler facade — each section calls `MODULES.ASSEMBLER.SERVICE.MAIN().assembleX()` directly during render | Assembler → use cases → gateways → Sanity | ✅ Works; N+1 queries (see [01-architecture.md](01-architecture.md) §3) |
| **Hero** — canvas circuit + frosted card | `canvas/circuit.component.tsx` (`requestAnimationFrame` loop, mouse-reactive) + `HeroCard` with motion blur-in | Static + `assembleHero()` | ✅; LCP risk — 1920×1080 avatar without `priority` (UX A-finding) |
| **Portfolio** — featured slider + search | Swiper (navigation, pagination, A11y, autoplay, fade) + Server-Action search form → `/portfolio?searchTerm=` filtered `ProjectCard` list | GROQ + `filterPortfolio` + `revalidatePath` + redirect | ⚠️ B1 broken async map on main slider; search = full page reload |
| **Project showroom** — `/project/[id]` | `decodeURIComponent(id)` → `findOneProjectByTitle`; body rendered via MarkdownRenderer | GROQ parameterized for title, interpolated for identifier lookups | ⚠️ R3 injection surface; no `generateStaticParams` |
| **Articles** — index + shelf | Mirrors portfolio (Swiper + search). Shelf: canvas bg, `MarkdownRenderer`, platform links | `findOneByTitle` + `plarforms` typo (B2) | 🔴 B2 — main articles lose platform links |
| **Blog rendering** | `components/markdown/markdown.component.tsx`: react-markdown + GFM + `rehype-raw` + rehype-highlight | Sanity `tp_text` content | 🔴 XSS surface (R8) — DOMPurify path dead |
| **Contact form** | react-hook-form + `zodResolver(CONTACT_FORM_SCHEMA)` (name ≥3, email format, message ≥10) → `useEmail` hook → DI chain → EmailJS `emailjs.send()` | `fields.component.tsx` → `EmailController` → `EmailService` → `EmailJSGateway` → `@emailjs/browser` | ✅ Model async UX (`toast.promise`); ⚠️ no labels/aria (see [04-ux-design.md](04-ux-design.md)), no rate limiting |
| **Embedded Sanity Studio** | `/sanity/studio/[[...index]]` client route, `sanity.config.ts` with structure + vision tools | — | ⚠️ Studio + Vision console exposed in production (security finding) |
| **Testimonials carousel** | Custom static horizontal scroll row + zustand-selected `TestimonyCard` | `select.wrapper.tsx` (`div.onclick`) | ⚠️ not keyboard-operable (UX A05) |
| **Occupations marquee** | `carousel/horizontal/infity.component.tsx` — independent rAF loop | Static/`assembleOccupations()` | ✅ works; naming typo (`infity`) |
| **Techs galaxy** | Custom orbit UI; tech chips link to `/portfolio?searchTerm=<name>` | GROQ | ✅ nice cross-link integration |
| **Canvas circuit animation** | `hooks/canvas/**` (framer, points generator, network/point render hooks) | Client | ✅ genuinely implemented; ⚠️ no reduced-motion gating (UX A06) |
| **Search** | Server Action `<form action={handlePortfolioSearch}>` → `revalidatePath` + `redirect` with query string | `src/actions/search/*` | ⚠️ heavyweight: full page reload for an in-memory `.filter()` |

## 2. State Management

**Zustand — UI-only state, 3 stores.** No `persist` anywhere; no selectors beyond component-level usage.

| Store | File | State | Status |
|---|---|---|---|
| `useTheme` | `src/hooks/config/ui/themes.hook.ts` | `{ theme: 'light', setTheme }` | **Dead in practice** — `setTheme` is never called; app is permanently `light-theme`; `AppTheme` has a typo: `'coffe'` vs `.coffee-theme` class |
| `useMenu` | `src/hooks/navigation/menu.hook.ts` | `{ open, toggle, setOpen }` | Used by menu container, item, toggler wrapper |
| `useSelectedTestimonial` | `src/hooks/testimonial/select.hook.ts` | `{ selected, setSelected }` — `scrollIntoView` on select | Used by `SelectTestimonialWrapper`; stores a **ref**, not serializable data |

> ⚠️ The requested layer diagram ("zustand between UI and services") is **not** what the code does — zustand holds only UI state. All domain data flows RSC → Inversify graph (see [01-architecture.md](01-architecture.md) §1).

**Legacy residue:** `src/global/testimonial/selected.global.ts` — a zustand global store that is **dead code** (dual-state anti-pattern residue).

## 3. Styling Stack

Three systems coexist; SCSS dominates.

| System | Usage | Verdict |
|---|---|---|
| **SCSS** | 109 `.scss` files, ~1,441 lines using `@apply`; BEM-ish `.page-container`, `.frosted-glass`, `.neon-line`; breakpoint mixins in `variables/screen.scss` | Dominant |
| **Tailwind** | `globals.scss` directives + utility classes in JSX (`page.tsx`, `under_development.page.tsx`, `Circuit` className) | Coexistent; responsive utilities rarely used |
| **styled-components** | `^6.1.8` in package.json | ❌ **0 imports — pure dead dependency** |

**shadcn/ui state:** `components.json` exists (`style: default`, `rsc: true`, `baseColor: slate`, aliases `@/components`, `@/lib/utils`) but **no `src/components/ui/` directory exists** — zero shadcn components were ever generated. `cn()` exists in `src/lib/utils.ts` but is unused; `class-variance-authority` (cva) is installed but unused.

**Design tokens (3 layers, two of them conflicting):**

1. Shadcn HSL variables in `src/app/globals.scss` (`:root` + `.dark`: `--background`, `--primary`, `--border`, `--radius`) consumed by `tailwind.config.ts`.
2. App SCSS theme vars (`--primary-color`, `--secondary-color`, …) in `src/app/style/themes/{default,light,dark,coffee}.scss` — **4 themes, only `default` reachable**; dark/coffee are dead code.
3. Utility modules (`frosted_glass.scss`, `neon.style.scss`) exported via `global.module.scss`.

> ⚠️ **Token conflict:** Tailwind's `primary`/`secondary` map to the **app** SCSS vars (`var(--primary-color)` = `#fff`), while `background`/`foreground`/`border` map to the **shadcn** HSL set. `--primary: 222.2 47.4% 11.2%` vs `--primary-color: #fff` — two independent token systems that drift.

**Notable leftovers:** `tailwind.config.old` at app root; `:root { @apply scroll-smooth; }` without reduced-motion gating; `w-screen` + `overflow-x-hidden` used to contain full-width sections.

## 4. DI Services

Covered in depth in [01-architecture.md](01-architecture.md) §5. Implementation-level facts:

- **~90 DI files / 18 merged containers** for ~30 actual operations — the boilerplate cost of the pattern.
- **Per-domain layering:** `controller → service → use_case → gateway(interface) → gateway impl` with DTO/entity/interface files. Use cases extend gateway support classes (`XxxGatewaySupport`) and delegate via property injection.
- **Dual implementation strategy (Sanity vs Static):** `@core` binds both `MAIN` and `STATIC` controllers; the **static lane is half-wired and broken**:
  - `person.module.ts:260` binds the same key twice (`STATIC.FIND.ALL` → both `FindAllStaticPersonUseCase` **and** `FindOneStaticPersonUseCase`; `STATIC.FIND.ONE` never bound) — B7
  - `StaticPersonGateway.findOne` uses `PERSONS.find(async person => …)` — an async predicate is always truthy → returns `PERSONS[0]` — B8
  - `StaticAssemblerService` declares 8 methods as uninitialized class fields; calling them throws — B9
  - `GATEWAY_FACTORY` exposes the typo'd registry `CMS_GATEWAT_REGISTRY` — inconsistent with the retriever-factory convention
- **Client/server leakage:** 4 client files import `@/modules/app.factory`, pulling the full graph into the browser bundle (R4).

## 5. Notable Patterns

**Keep these:**

- **Symbol-keyed DI** with per-domain containers merged via `Container.merge` — clean modular boundaries, swappable gateways by binding.
- **`lazyInject` property decorators** avoiding constructor-injection cycles — elegant for gateway support classes.
- **Animator presets** as pure functions → reusable `{...SLIDE_UP()({transition:{delay:.5}})}` spread API — a consistent, declarative motion language (13 presets: emerge, slide, growth, hover, slideIn, progress, svg).
- **Server Action search param flow** — `filterPortfolio`/`filterArticles` are pure async filters (testable in isolation).
- **Assembler facade** — one service composes hero/about/projects/articles/… and keeps sections dumb and parallel.
- **`Project.fromAsyncDTOs`** — returns `Promise<Project>[]` allowing parallel hydration.
- **Server-first rendering** — 27 client files vs ~500 server-capable files; client islands are the exception, not the rule.

## 6. Technical Debt

| Area | Debt | Severity |
|---|---|---|
| Testing | Zero test files; `--passWithNoTests` in every script; `coverage/` holds empty artifacts | 🔴 P0 |
| Security | `rehype-raw` unsanitized; GROQ interpolation; `NEXT_PUBLIC_SANITY_TOKEN`; `remotePatterns '**'`; no security headers; Studio + Vision in prod | 🔴 P0 |
| Versions | Next 14.2.10 (EOL, unpatched vs 14.2.35), next-sanity 7 (~6 majors behind), zustand RC in lockfile, eslint-config-next 14.1.0 mismatch, Node 20 EOL (Docker), jest 29 breaks on Node 25 | 🔴 P0 |
| Rendering | No revalidate/generateStaticParams; N+1 GROQ fan-out; Promise-leaking entities | 🟠 P1 |
| Architecture | Client → `app.factory` coupling; controller→service→use_case pass-through chains; ~90 DI files | 🟠 P1 |
| Naming consistency | `imgae/`, `tesimony/`, `infity`, `fonst`, `containe.componet.tsx`, `HightlightSchema`/`hightlight` type/`positon` field, `plarforms`, `CMS_GATEWAT_REGISTRY`, `coffe` theme | 🟡 P2 |
| Type safety | `strict: false`; `children: any` props (24 files with `any`); `toDTO()` unsound cast on Promise fields | 🟠 P1 |
| i18n | react-i18next installed with ZERO usage; `lang` filters in GROQ dead in practice; `html lang="en"` hardcoded | 🟡 P2 |
| Static data lane | Broken bindings, async `.find()` bug, unimplemented methods — half-built abstraction | 🟡 P2 (fix or delete) |

## 7. Dead Code Inventory

| Item | Type | Notes |
|---|---|---|
| `src/pages/` | Folder | **Empty** — App Router only; Pages Router never used. Delete. |
| `src/app/pages/missing_data.page.tsx` | Component | Never imported. Delete. |
| `next-mdx-remote` | Dependency | No `.mdx` files exist; never imported. Remove. |
| `styled-components` | Dependency | 0 imports. Remove. |
| `react-i18next` | Dependency | 0 usages, no setup. Remove or implement (ADR-004). |
| `class-variance-authority` | Dependency | Unused (shadcn never materialized). Remove with `components.json` decision. |
| `lucide-react` | Dependency | 0 imports — custom SVG icons used instead. Remove. |
| `dompurify` | Dependency | Installed but the sanitizing path (`markdown.action.ts`) is never called. **Re-wire it (P0) or remove.** |
| `remark`, `remark-html` | Dependencies | Only used by the dead `markdownToHtml` action. Keep only if the action is resurrected. |
| `@testing-library/jest-dom`, `jsdom` | Dependencies | Test-only, in runtime `dependencies` (bloat). Move to devDependencies or remove. |
| `sanity/lib/client.ts`, `sanity/lib/image.ts` | Files | 0 imports from app code — the engine's hardcoded client is the live path. Consolidate (P0). |
| `src/modules/gateway/CMS/static/*` | Subsystem | Broken half-wired static fallback (B7–B9). Fix or delete. |
| `src/local/data/static/*` | Data | Only consumed by the broken static lane. |
| `src/actions/markdown.action.ts` | Action | DOMPurify sanitizer — dead. **Resurrect as the server render path (P0).** |
| `src/actions/get/testimonial/first.action.ts` | Action | No-op residue of the abandoned "first testimonial" flow. |
| `src/global/testimonial/selected.global.ts` | Store | Dead zustand global store. Delete. |
| `src/app/style/fonts.ts` | Module | Byte-for-byte duplicate of `src/modules/fonts/fonts.ts`. Consolidate. |
| `XANH_MONO` | Font | Exported + registry symbol, never bound. Delete. |
| `Fraunces`, `Neuton` | Fonts | Registered in DI, never rendered — still preloaded. Drop or use. |
| Themes `dark.scss`, `coffee.scss` (+ `.dark` shadcn vars) | Styling | Unreachable — theme store never calls `setTheme`. Decide: ship switcher or delete. |
| `SliderItem` (`slider/item/item.component.tsx`) | Component | Unused — Slider already wraps SwiperSlide. |
| `Input` (`form/input/input.component.tsx`) | Component | Stub — renders empty labels, unused. |
| `tailwind.config.old` | Config | Leftover. Delete. |
| `components/historic/` | Folder | Empty. Delete. |
| `components.json`, `cn()`, tailwind-animate/scrollbar plugins | Config | Configured foundation for shadcn that was never used — keep as base or document the decision. |

## 8. Library Usage Verdict

| Library | Claimed | Actual | Verdict |
|---|---|---|---|
| **swiper** `^11.1.12` | Carousel | `slider.component.tsx` + `slider/item`: Nav/Pagination/A11y/Autoplay/EffectFade | ✅ Meaningful (project hero carousel) |
| **zustand** `^5.0.0-rc.2` | State | 3 stores (menu, theme, testimonial); no persistence | 🟡 Meaningful (menu, testimonial) — theme store is a no-op; RC of a mature lib |
| **inversify** `^6` + `inversify-inject-decorators` | IoC | ~90 DI files, 18 merged containers, decorators in controllers/services/gateways/use-cases | ✅ Meaningful — but over-engineered for app size; broken "static" lane is the counter-evidence |
| **framer-motion** `^11` | Animation | Animator presets + 12 Motion wrappers | ✅ Core to the visual identity |
| **react-markdown** `^9` | Markdown | Article content + project body | ✅ Works; ⚠️ `rehype-raw` XSS gap |
| **@emailjs/browser** `^4.3.1` | Email | Contact form DI chain | ✅ Public-key model correct; ⚠️ no abuse protection |
| **next-mdx-remote** | MDX | — | ❌ Unused (react-markdown instead) |
| **react-i18next** | i18n | — | ❌ Unused (no setup whatsoever) |
| **styled-components** | Styling | — | ❌ Unused |
| **cva** | Variants | — | ❌ Unused (shadcn present only as `components.json`) |
| **lucide-react** | Icons | — | ❌ Unused (custom SVG icons instead) |
| **dompurify** | Sanitize | — | ❌ Unused — and needed (rehype-raw) |

## 9. Strengths & Weaknesses

| Strengths | Weaknesses |
|---|---|
| Disciplined hexagonal-ish layering with typed `Symbol.for` registries | DI ceremony (~90 files) far exceeds app complexity; factories called ad-hoc in server components |
| `lazyInject` property injection elegantly avoids circular deps | Static fallback lane broken (wrong keys, async `find` bug, unimplemented methods) — half-built abstraction |
| Clean Animator-preset API; motion primitives kept as client islands (27/500) | **Zero tests**: `--passWithNoTests`, empty coverage, no Cypress specs, ESLint skipped in builds |
| Assembler facade keeps sections dumb and parallel | GROQ string interpolation (injection via URL), N+1 fan-out, hardcoded `tk1o3drt` projectId, no revalidation |
| Well-organized Sanity schema set (`sanity/schemas/**`) | 6+ unused/duplicate deps + duplicate `fonts.ts` + dead themes + dead pages |
| Server Actions for search (no API routes needed) | `revalidatePath` + `redirect` search = full page reload; `NEXT_PUBLIC_SANITY_TOKEN` in env config |
| Working Swiper + canvas + custom carousel features | Typo directory `imgae/`, typo GROQ field `plarforms`, typo registry symbol, dead view page |
| Clean `next/font` DI integration | 6 preloaded Google fonts; hardcoded `light` theme makes 3 of 4 SCSS themes unreachable |
| Env config isolated in `@config` module | Engine bypasses it (hardcoded values); Dockerfile lacks `CMD`; compose runs dev mode |

---

## Quick links

- Previous: [01 · Architecture](01-architecture.md) · Parent: [README.md](README.md)
- Next: [03 · Quality & Security](03-quality-security.md) · [04 · UX & Design](04-ux-design.md)
- Act: [06 · Roadmap](06-roadmap.md) — dead-code removal = P2, XSS/versions = P0