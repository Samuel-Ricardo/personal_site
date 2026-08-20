# Disclaimer — `others/` Folder

> **Archival snapshot** — 2026-08-19. Contents moved here from the parent workspace root (`personal_portfolio/`) so the workspace could be deleted to free disk space. Nothing in this folder is used by the app build or runtime.

## What this folder contains

| Path | Origin | Purpose | Status |
|---|---|---|---|
| `docs/` (8 files) | `personal_portfolio/docs/` | Full documentation set | ⚠️ **Duplicate** of `docs/` at repo root (this commit's canonical copy). Kept for archival only. |
| `README.md` | `personal_portfolio/README.md` | Project overview | ⚠️ **Duplicate** of `README.md` at repo root. Kept for archival only. |
| `DEVOPS_REPORT.md` | `personal_portfolio/DEVOPS_REPORT.md` | Intermediate DevOps/CI-CD analysis report (Atlas agent) | Unique — source material for `docs/05-devops-deployment.md` |
| `research/` | `personal_portfolio/research/` | Online stack-research report (2026-08-19) | Unique — source material for `docs/07-references.md` |
| `node_modules/` | `personal_portfolio/node_modules/` | Orphan deps (`swiper`, `zustand`) from workspace-root `package.json` | Not used by the app; the app has its own deps in `personal_website/node_modules/` |
| `package.json` + `package-lock.json` | `personal_portfolio/` | Orphan manifest (only `swiper` + `zustand`) | Not used by the app |
| `gradient-grainy-texture.zip` (54 MB) | `personal_portfolio/` | Texture asset archive | Not referenced by any build |
| `green-blue-gradient-blur-background-vector.zip` (28 MB) | `personal_portfolio/` | Background vector archive | Not referenced by any build |

## Duplication notice

`others/docs/` and `others/README.md` are **byte-for-byte duplicates** of the canonical files committed at this repository's root (`docs/` and `README.md`). They were committed here deliberately so the original workspace tree could be deleted without losing the moved data. When cleaning up, prefer the root copies and treat these as a frozen backup.

## Secrets scan

All files were scanned for secrets before commit. No secret values were found — only **environment variable names** referenced in documentation (e.g. `NEXT_PUBLIC_SANITY_TOKEN`, `NEXT_PUBLIC_MAILER_PUBLIC_KEY`, `GITHUB_TOKEN`) and the phrase "design tokens". No `.env` files are present.

## Maintenance note

- **Do not edit** these files in place. They are a point-in-time archive.
- To evolve the documentation, edit the canonical `docs/` and `README.md` at the repo root.
- The `node_modules/`, orphan `package.json/lock`, and `.zip` archives are retained only to avoid silent data loss; they are safe to remove from history in a future `git filter-repo` cleanup if repo bloat becomes a concern (the two zips total ~82 MB).

<!-- others: archived 2026-08-19 from workspace root consolidation -->
