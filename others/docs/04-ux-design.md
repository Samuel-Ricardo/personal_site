# 04 · UX & Design System

> A "developer-meets-neo" visual identity with a strong token foundation and cohesive motion language — undermined by dead themes, unassociated form fields, and 18+ WCAG 2.1 issues.

**Priority tags:** 🔴 P0 · 🟠 P1 · 🟡 P2 — see [README](README.md) legend.

## Table of Contents

1. [Design Tokens](#1-design-tokens)
2. [Typography](#2-typography)
3. [Component Inventory](#3-component-inventory)
4. [Accessibility Audit — WCAG 2.1](#4-accessibility-audit--wcag-21)
5. [UX Strengths](#5-ux-strengths)
6. [Responsive Behavior](#6-responsive-behavior)
7. [Brand & Visual Identity](#7-brand--visual-identity)
8. [Prioritized UX Roadmap](#8-prioritized-ux-roadmap)

---

## 1. Design Tokens

### Tailwind config — `tailwind.config.ts`

| Setting | Value | Notes |
|---|---|---|
| `darkMode` | `['class']` | Class-based, but no `.dark` class is ever applied (no theme switch) |
| `container` | centered, `2rem` padding, `2xl: 1400px` | shadcn default |
| Color tokens | shadcn HSL vars (`border`, `background`, `foreground`, `primary*`, `secondary*`, `muted*`, `accent*`, `card*`) **plus** app-level `--primary-color`/`--secondary-color` | **Two independent token systems coexist** |
| Custom colors | `title.secondary` → `var(--title-color)`, `secondary.soft` → `var(--secondary-color-soft)` | App-specific semantic tokens |
| Radius | `lg/md/sm` from `--radius: 0.5rem` | shadcn pattern |
| Keyframes | only `accordion-down`/`accordion-up` (Radix-style) | No project-specific keyframes despite heavy animation use |
| Plugins | `tailwindcss-animate`, `tailwind-scrollbar` | `scrollbar-thin` used in carousels |

### Global CSS — `src/app/globals.scss`

- Full shadcn HSL token set for `:root` (light) and `.dark` (slate base).
- **Conflicting mappings:** Tailwind's `primary`/`secondary` map to the **app SCSS vars** (`var(--primary-color)` = `#fff`), while `background`/`foreground`/`border` map to the **shadcn HSL** set. `--primary: 222.2 47.4% 11.2%` vs `--primary-color: #fff` — they drift.
- `:root { @apply scroll-smooth; }` — smooth scrolling **without reduced-motion gating**.

### Theme SCSS files — `src/app/style/themes/`

| File | Palette | Status |
|---|---|---|
| `default.scss` | `#fff` / `#00eaff` (cyan) / `#e7e7e7` / `#e7f8fb` | Always applied (`:root`) |
| `light.scss` | adds `--title-color: #225c85`, `--secondary-color-soft: #89f7fe`, about gradient `#ff758c → #ff7eb3` | Requires `.light-theme` class |
| `dark.scss` | `#000` / `#ff0000` / gray / `#e7f8fb` | Requires `.dark-theme` class — **dead code** |
| `coffee.scss` | brown / `#000` | Requires `.coffee-theme` class — **dead code** |

> 🔴 **Key finding:** the theme store (`src/hooks/config/ui/themes.hook.ts`, zustand) defaults to `'light'` and `setTheme` is **never called anywhere**. `AppTheme = 'light' | 'dark' | 'coffe'` (typo) vs `.coffee-theme` class (mismatch). No theme switcher UI, no persistence, no `prefers-color-scheme` — dark/coffee themes are unreachable.

### shadcn/ui — `components.json`

- Config present (`style: "default"`, `rsc: true`, `baseColor: "slate"`, `cssVariables: true`, aliases `@/components`, `@/lib/utils`).
- **No `src/components/ui/` directory exists** — zero shadcn components were ever generated. `cn()` helper exists (`src/lib/utils.ts`, clsx + tailwind-merge) but is **unused**; `class-variance-authority` is installed but **unused**.
- Takeaway: shadcn is configured as a foundation; the actual design system is custom SCSS + custom components.

## 2. Typography

6 Google fonts via `next/font/google`, **all `preload: true`** — registered in **two duplicate modules** (`src/modules/fonts/fonts.ts` and `src/app/style/fonts.ts`):

| Font | Role | Used? |
|---|---|---|
| `Space_Mono` | global body font (`layout.tsx`) | ✅ |
| `Inconsolata` | logo, hero container, titles, work-with section | ✅ |
| `Libre_Baskerville` | contact, articles sections | ✅ |
| `Fraunces` | registered in DI (`FONTS_REGISTRY.CLASSIC.FRAUNCES`) | ❌ never rendered |
| `Neuton` | registered in DI | ❌ never rendered |
| `Xanh_Mono` | defined + exported, **not registered** | ❌ never rendered |

> ⚠️ 3 of 6 font families are dead weight but still preloaded (≈ 3 extra font downloads on first paint). No type-scale system — sizes are per-component SCSS (hero 3.6rem→5rem).

## 3. Component Inventory

**105 `.tsx` in `src/components`** (~11,450 LOC in `src/` overall, 625 TS/TSX/SCSS files). Naming conventions: `<name>.component.tsx` (features), `.card.tsx`, `.section.tsx`, `.wrapper.tsx` (client state), `.page.tsx`, paired `*.style.scss`, folder-per-component. Several naming typos exist (`containe.componet.tsx`, `imgae/`, `infity.component.tsx`, `fonst.style.scss`, `testimony` vs `testimonial`).

| Group | Component | Role / Notes |
|---|---|---|
| Buttons | `Button` | Base, default `aria-label="normal button"` (⚠️ generic) |
| | `GlassButton` | Acrylic variant, default label `"acrylic design button"` (⚠️) |
| | `FluorescentButton` | Neon wrapper variant |
| | `NavigateButton` | 🔴 **`<button>` wrapping `<Link>`** — invalid nested interactive elements (hero CTAs) |
| Cards | `FrostedGlassCard` | Base glass surface |
| | `SimpleCard` | Occupation cards (work-with carousel) |
| | `ProjectCard` / `MainProjectCard` | Search-result / featured card — both render `<h1>` inside card (⚠️ outline) |
| | `ArticleCard` / `MainArticleCard` | Blog cards |
| | `TestimonyCard` | Selected testimonial detail (client, zustand) |
| | `SocialCard` | Testimonial thumbnails — clickable via `div.onclick` (🔴) |
| | `HighlightCard` | Highlight display |
| Forms | `Input` | **Stub** — empty labels, unused |
| | `AnimatedInput` / `AnimatedTextArea` | 🔴 labels not associated (no `htmlFor`/`id`), `focus:outline-none` |
| | `Submit` | `input type=submit` inside MotionDiv |
| Sliders | `Slider` (Swiper) | Autoplay 5s, fade, nav, pagination, loop, A11y; ⚠️ `scrollbar={{draggable:true}}` prop without Scrollbar module |
| | `SliderItem` | Wraps `SwiperSlide` — **unused** |
| | `InfinityHorizontalCarousel` | Occupations marquee (`infity` typo) |
| | `Slider` (static) | Testimonials horizontal scroll row |
| Navbar | `Navbar` | `<div id="navbar">` (not `<nav>`); ⚠️ renders `<Menu/>` **twice** (desktop `<li>` + root-level) |
| | `Menu`/`NavMenu` | 🔴 toggler is `<div onClick>` (no keyboard); no dialog semantics, no `aria-expanded`/`aria-controls`, no Escape, no focus trap/return |
| Motion | `MotionH1/H2/H3/P/Div/Section/…` | 12 thin `motion.*` wrappers ('use client') |
| Search | `SearchBar` | ⚠️ no label (placeholder only) |
| Social | `Social` | Floating share + 4 links; `aria-expanded` missing; ⚠️ closed items remain tabbable (opacity animation, no `display:none`); typo `'inacive'` breaks close state |
| Misc | `Logo`, `Line`, `Platform`, `MarkdownRenderer`, `Circuit` (canvas), `MouseBall` | Circuit: continuous `requestAnimationFrame` loop |

## 4. Accessibility Audit — WCAG 2.1

### Failing items (18+)

| # | Issue | File(s) | WCAG SC | Severity |
|---|---|---|---|---|
| A01 | `<button>` wrapping `<Link>` — nested interactive, double tab stop | `button/navigate/button.component.tsx` (hero CTA) | 2.1.1, 4.1.2 | 🔴 High |
| A02 | Form labels not associated (`<label>` w/o `htmlFor`, inputs w/o `id`), no `aria-invalid`/`aria-describedby` | `form/input/animated/*`, `form/textarea/animated/*`, `section/contact/form/fields/` | 1.3.1, 3.3.1, 4.1.2 | 🔴 High |
| A03 | Focus indicator removed (`focus:outline-none`) with no replacement; underline animates on viewport, not focus | `form/input/animated/input.style.scss` | 2.4.7 | 🔴 High |
| A04 | Menu toggler is `<div onClick>` — not keyboard-operable | `wrapper/toggler/menu/wrapper.component.tsx` | 2.1.1, 4.1.2 | 🔴 High |
| A05 | Testimonial selection via `div.onclick` — not keyboard-operable | `wrapper/testimonial/select.wrapper.tsx`, `card/social/*` | 2.1.1 | 🔴 High |
| A06 | No `prefers-reduced-motion` anywhere: framer variants, canvas rAF, autoplay Swiper, growing underline, blur-in text | `modules/animations/*`, `canvas/circuit.component.tsx`, `slider/slider.component.tsx`, `globals.scss` | 2.3.3 | 🔴 High |
| A07 | Multiple `<h1>` per page (hero, every section title, every card) — broken document outline | `app/page.tsx`, sections, cards | 1.3.1 | 🟠 Medium |
| A08 | No skip link; navbar is `<div>` not `<nav>`; no `<header>` landmark | `layout.tsx`, `navbar/navbar.component.tsx` | 2.4.1, 1.3.1 | 🟠 Medium |
| A09 | Color contrast fails: `#00eaff` on white ≈ **1.48:1**; `#89f7fe` on white ≈ 1.6:1; error text `red-500 #ef4444` on white ≈ **3.76:1** (fails AA small text) | `themes/light.scss`, `input.style.scss` | 1.4.3 | 🟠 Medium |
| A10 | Carousel autoplay (5s, loop) — no pause control for keyboard users (`pauseOnMouseEnter` only) | `slider/slider.component.tsx` | 2.2.2 | 🟠 Medium |
| A11 | Search input has no label, only placeholder | `search/search.component.tsx` | 1.3.1, 3.3.2 | 🟠 Medium |
| A12 | Generic/misleading default aria-labels ("normal button", "acrylic design button"); social toggle lacks `aria-expanded`; closed social links stay focusable (invisible focus) | `button/*`, `social/social.component.tsx` | 4.1.2, 2.4.7 | 🟠 Medium |
| A13 | Decorative backgrounds given meaningful alt text (announced to screen readers) — wrong alts ("Articles Section Background" on testimonials bg) | `assets/images/background/*` | 1.1.1 | 🟡 Low |
| A14 | Poorly descriptive/generic alts: "avatar", "hero avatar", "Card Image", "Loading"; `alt={`${data.company} icon`}` renders `[object Object] icon` | `card/testimony/avatar`, `hero/card/avatar`, `techs/galaxy/item`, `simple/image`, `experience/item` | 1.1.1 | 🟡 Low |
| A15 | `<canvas>` (decorative circuit) not `aria-hidden` | `canvas/circuit.component.tsx` | 1.1.1 | 🟡 Low |
| A16 | `lang="en"` hardcoded; react-i18next unused; static data has pt-br/en variants but no switching; `TEXT.find(async predicate)` always returns first item (bug) | `app/layout.tsx`, `gateway/CMS/static/assembler/assembler.dto.ts` | 3.1.1 | 🟡 Low |
| A17 | External links `target="_blank"` without `rel="noopener noreferrer"` | `social/social.component.tsx`, `hero/card/content/footer` | 2.4.4 (best practice) | 🟡 Low |
| A18 | No `not-found.tsx`/`error.tsx`/`loading.tsx`; `/jobs`, `/journey`, `/my/world` return generic "under development" pages with random giphy (alt="Loading") | `app/`, `pages/under_development.page.tsx` | 3.3.1, UX | 🟠 Medium |

### Passing (good)

- `<ul>/<li>` used for nav items, projects, techs, testimonials
- Swiper `A11y` module + clickable pagination
- `aria-label`s on floating social links; descriptive link text in nav
- Semantic `main` wrapper
- `toast` provides a status role
- Emoji-free critical actions

## 5. UX Strengths

1. Strong token foundation (shadcn-style HSL + SCSS vars) and consistent glass/neon effect language.
2. Holistic animation system (Animator variant factories, 0.25s stagger rhythm) — cohesive motion design.
3. Excellent form stack: RHF + zod resolver + `toast.promise` (loading/success/error) — a model for correct async UX.
4. Swiper with A11y module, clickable pagination, hover pause.
5. Semantic list markup in nav, projects, techs, testimonials; descriptive social link labels.
6. `next/font` self-hosted (no CLS from font swaps); decorative layering with `-z-50` backgrounds.
7. Engineering discipline: DI (Inversify), static-gateway fallback, ESLint/Prettier/Husky/Jest/Cypress.
8. Tech→portfolio search integration is a nice cross-link.

## 6. Responsive Behavior

| Aspect | Detail |
|---|---|
| SCSS breakpoints | `variables/screen.scss`: mobile ≤738px, tablet ≤1024px, desktop ≥1366px (+ height 600px); mixins `mobile/tablet/desktop` |
| Tailwind vs SCSS | Responsive styles live almost entirely in SCSS mixins; Tailwind `sm/md/lg` rarely used → **two breakpoint systems** |
| Navbar | Fixed top; hamburger `Menu` opens frosted `NavMenu`; mobile links shown ≤738px only |
| Hero | 70vh desktop; mobile: `min-h-screen`, column layout, `max-w-[80%]` |
| Sections | `.section` = `min-h-screen`, `w-screen`; rows→columns on mobile |
| Carousels | Swiper `slidesPerView={1}` centered (mobile-friendly); static testimonial row `overflow-x-scroll`, gap 64→24 |
| Overflow strategy | `overflow-x-hidden` on containers to contain `w-screen` children — a hack (P2 rework) |

## 7. Brand & Visual Identity

- **Concept:** "developer-meets-neo" — monospace tech aesthetic, cyan neon accents, frosted glass over colorful gradients, circuit canvas, dark-mode-ready but locked to light.
- **Palette (active):** white `#fff`, cyan `#00eaff`, gray `#e7e7e7`, ice cyan `#e7f8fb`, deep blue `#225c85`, soft cyan `#89f7fe`, pink-cyan about gradient, near-black text.
- **Typography:** Space Mono (body) / Inconsolata (headers-logo) / Libre Baskerville (editorial); no type-scale system.
- **Spacing:** Tailwind scale mixed with custom rem values; no spacing tokens beyond defaults.
- **Effects:** frosted glass tiers (2.5px→50px blur), neon glow lines, gradient backgrounds, motion blur-in, stagger delays, SVG path-draw icons, canvas network, hover scale/mount.
- **Consistency:** robust visual language; inconsistent in *application* — dead themes, duplicate font modules, typo'd class/state names (`inacive`, `coffe`).

## 8. Prioritized UX Roadmap

### 🔴 P0 — Must fix (correctness / blockers)

| # | Fix | Effort |
|---|---|---|
| 1 | **Rebuild `NavigateButton`** — render `<Link className="button">` directly (or `<button onClick={router.push}>`); remove nested `<button><a>` | S |
| 2 | **Associate form fields:** `id` + `htmlFor`, `aria-invalid`, `aria-describedby` on inputs/textarea; keep errors visible with icons | S |
| 3 | **Menu toggle a11y:** real `<button>` + `aria-expanded` + `aria-controls`, Escape to close, move focus back; render `Menu` once (remove duplicate) | S |
| 4 | **Visible focus everywhere:** replace `focus:outline-none` with a custom ring; drive underline from `:focus-within`, not `whileInView` | S |
| 5 | **Testimonial cards keyboard-operable** (`<button>` or tabindex + Enter/Space, `aria-pressed`/live region) | S |
| 6 | **Fix hero LCP:** `priority` + `sizes` on hero avatar; self-host hero image | S |
| 7 | **Self-host all imagery** (freepik hotlinks carry expired HMAC signatures `exp=1706905745` ≈ 2024; giphy hotlinks fragile) | M |

### 🟠 P1 — Should fix (WCAG compliance / UX quality)

| # | Fix | Effort |
|---|---|---|
| 8 | **Reduced motion:** wrap app in `<MotionConfig reducedMotion="user">`, gate canvas rAF + Swiper autoplay + `scroll-smooth` behind `prefers-reduced-motion`; add visible pause control to Swiper | M |
| 9 | **Document outline:** single page `<h1>`; section titles → `<h2>`; card titles → `<h3>` | M |
| 10 | **Add skip link** + convert navbar to `<nav>`; add global `<footer>` (copyright, nav, contact) | S |
| 11 | **Contrast:** replace cyan-on-white usages (1.48:1); error text → `red-700`/semantic token; audit `secondary-soft`; add axe contrast test in CI | S–M |
| 12 | **Search input label** (sr-only) + `aria-live` on results count | S |
| 13 | **Decorative images `alt=""` + `aria-hidden`**; fix `[object Object]` alt; descriptive per-testimonial alts (name) | S |
| 14 | **i18n:** implement it or remove the dependency; fix `TEXT.find(async)` predicate bug; set `lang` dynamically | M |
| 15 | **App shell states:** `not-found.tsx`, `error.tsx`, `loading.tsx` (skeletons), `sitemap.ts`, `robots.ts`; replace "under development" placeholders with content or 404 | M |
| 16 | **Form submission state:** disable submit while `isSubmitting`, reset on success, `aria-live` region for toast feedback | S |

### 🟡 P2 — Nice to have (polish)

| # | Fix | Effort |
|---|---|---|
| 17 | Font diet: drop/use Fraunces, Neuton, Xanh_Mono; consolidate the two font modules | S |
| 18 | Ship the theme switcher (light/dark/coffee) with localStorage + `prefers-color-scheme`; fix `coffe`/`.coffee-theme` mismatch; align breakpoints | M |
| 19 | Replace `FlexList` SCSS responsive rules with Tailwind utilities; remove `w-screen` + `overflow-x-hidden` hack via `max-w-full` rework | M |
| 20 | `rel="noopener noreferrer"` on all external links; `aria-label` defaults → meaningful names or omit | S |
| 21 | Fix naming typos (`containe.componet.tsx`, `imgae/`, `infity`, `fonst`) | S |
| 22 | Home portfolio: turn stacked full-height rows into a responsive grid (1/2/3 cols) with hover previews | M |

> Colors computed against WCAG 2.1 relative luminance (sRGB). Full methodology in the source UX report.

---

## Quick links

- Previous: [03 · Quality & Security](03-quality-security.md) · Parent: [README.md](README.md)
- Related: [01 · Architecture](01-architecture.md) (rendering/SEO) · [02 · Implementation](02-implementation.md) (components)
- Act: [06 · Roadmap](06-roadmap.md) · References: [07](07-references.md)