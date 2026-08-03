# Contributing Guide

Quick reference for how we work on this repo. Keep it simple, keep `main` clean.

## Branching

- Never commit directly to `main` — it's protected, and direct pushes will be rejected anyway.
- Create a new branch for every feature/fix:
  ```
  git checkout main
  git pull
  git checkout -b <type>/<short-description>
  ```
- Branch naming:
  - `feature/<name>` — new functionality (e.g. `feature/login-page`)
  - `fix/<name>` — bug fixes (e.g. `fix/api-timeout`)
  - `chore/<name>` — config, docs, cleanup (e.g. `chore/update-readme`)

## Commits

- Keep commits small and focused — one logical change per commit.
- Write clear messages in imperative mood:
  - ✅ `Add auth middleware for protected routes`
  - ❌ `fixed stuff`
- Format: `<type>: <short summary>`
  - Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `test`

## Before opening a PR

- Pull the latest `main` and rebase/merge your branch to avoid conflicts:
  ```
  git checkout main
  git pull
  git checkout <your-branch>
  git merge main
  ```
- Make sure your code runs locally and doesn't break existing functionality.
- Remove debug prints, commented-out code, and unused files.
- Double check no `.env` files, API keys, or secrets are staged (`git status` before committing).

## Opening a PR

1. Push your branch: `git push origin <your-branch>`
2. Open a PR into `main` on GitHub.
3. Fill in a short description: what changed, and why.
4. Link any related issue if applicable.
5. Wait for review/approval before merging (per branch protection rules).

## Code style

- Prefer simple, readable code over clever abstractions.
- Keep functions small and single-purpose.
- Match the existing formatting/structure already in the file you're editing.
- Comment only where intent isn't obvious from the code itself.

## After merge

- Delete your feature branch (locally and on GitHub) once merged, to keep things tidy.
- Pull the latest `main` before starting your next branch.

---