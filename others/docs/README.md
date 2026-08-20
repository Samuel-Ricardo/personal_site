# Documentation — Samuel Ricardo Personal Portfolio

> Consolidated technical documentation for the Samuel Ricardo portfolio (Next.js 14 App Router + Sanity + Inversify). Generated 2026-08-19 from a full four-report analysis (architecture, UX, DevOps, QA) plus stack research and implementation review.

## Purpose

This documentation set makes the project's *de facto* architecture explicit. Before this set existed, the architecture was encoded only in directory naming conventions — new contributors had to reverse-engineer the Inversify factory/registry pattern from code. Each page is task-oriented: use it to understand a system, fix a finding, or plan a change.

## How to Navigate

1. Start at the **[root README](../README.md)** for the executive summary and quick start.
2. Read **01** (architecture) and **02** (implementation) to understand how the app works.
3. Use **03** (quality/security), **04** (UX), and **05** (DevOps) for audit findings in each domain.
4. Jump to **06** (roadmap) when ready to act — it consolidates every finding into a prioritized plan.
5. Keep **07** (references) open while implementing: it lists the official docs the findings are based on.

## Document Map

| # | Document | Covers | Primary source reports |
|---|---|---|---|
| – | [README.md](README.md) | Index, legend, maintenance | — |
| 01 | [01-architecture.md](01-architecture.md) | Layering, routes, data flow, rendering, DI, risks R1–R14, ADRs | Architecture |
| 02 | [02-implementation.md](02-implementation.md) | Features, state, styling, DI services, patterns, dead code | Implementation |
| 03 | [03-quality-security.md](03-quality-security.md) | Testing reality, security audit, dependencies, scorecard | QA/security |
| 04 | [04-ux-design.md](04-ux-design.md) | Tokens, fonts, components, WCAG 2.1 audit, UX roadmap | UX/accessibility |
| 05 | [05-devops-deployment.md](05-devops-deployment.md) | CI/CD, git hygiene, local DX, env vars, deployment | DevOps |
| 06 | [06-roadmap.md](06-roadmap.md) | Consolidated P0/P1/P2 plan, quick wins, definitions of done | All |
| 07 | [07-references.md](07-references.md) | Curated official references by topic | Research |

## Priority Legend

Priority tags appear throughout the docs and match the roadmap in `06`.

| Tag | Meaning | Typical timeline |
|---|---|---|
| 🔴 **P0** | Correctness/security blockers — broken behavior, injection/XSS surfaces, green-gate CI, unrunnable artifacts | Fix first, this week |
| 🟠 **P1** | High-value improvements — performance, rendering strategy, CI hardening, WCAG compliance | Next sprint |
| 🟡 **P2** | Polish/maintainability — cleanup, naming, dependency diet, i18n/theme switcher decisions | Backlog |

Status markers: ✅ done/healthy · ⚠️ present but risky/misconfigured · ❌ broken/missing · 🔴/🟠/🟡 severity (priority).

## Maintenance Note

- **Generated:** 2026-08-19.
- **Sources:** `ARCHITECTURE-ANALYSIS.md`, `UX_ANALYSIS_REPORT.md`, `DEVOPS_REPORT.md`, `research/2026-08-19_stack-research.md`, structure map, implementation analysis, QA/security audit.
- **Version snapshot:** Next.js `14.2.10` · React 18 · TypeScript 5 · Sanity `3.25`/next-sanity `7.0.12` · zustand `5.0.0-rc.2` · Jest 29 · Cypress 13.
- **Re-verification cadence:** re-run the `npm view` version snapshot and git hygiene checks whenever the roadmap items touch `package.json`, `.github/`, or `Dockerfile` (see `05-devops-deployment.md` and `07-references.md`).
- **Accuracy caveat:** findings describe commit `09654d4` (branch `feature/update_infos`). Line numbers and file paths were verified at analysis time; treat them as starting points, not gospel.

## Conventions Used in This Set

- CommonMark-compliant Markdown; code fences with language tags; no secrets in any file.
- Mermaid (```mermaid) for architecture and flow diagrams — rendered by GitHub and most Markdown viewers.
- Tables for structured data; blockquotes for key warnings.
- Cross-links to sibling pages at the bottom of each document under **Quick links**.

<!-- docs: generated 2026-08-19 by documentation consolidation task -->