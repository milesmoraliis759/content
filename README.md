# Harsh Mishra — Learning Content

This repository stores the articles and structured learning material displayed by the companion portfolio website.

## Save content from any chat

If Harsh says **“add this to my notes”**, **“save this to my portfolio”** or **“create an article from this”**, follow [`SAVE_TO_PORTFOLIO.md`](./SAVE_TO_PORTFOLIO.md) and the reusable [Save to Harsh's Portfolio skill](./.agents/skills/save-to-harsh-portfolio/SKILL.md). This repository is the source of truth for portfolio lessons and articles.

## Repository structure

- `articles/` — explainers, reflections and long-form posts
- `learning/` — structured pharmacy lessons and revision notes
- `.github/workflows/portfolio-content-bump.yml` — opens a PR in the portfolio after changes land on this repository's `main` branch

## MDX format

Each item is an `.mdx` file with YAML frontmatter. Useful fields include `title`, `description`, `date`, `category`, `tags`, `readTime`, `level`, `featured` and `published`.

Set `published: false` to keep a draft off the website. Use `featured: true` for selected homepage highlights. Use lowercase, hyphen-separated filenames.

### Pharmacy MDX components

The portfolio renderer supports standard Markdown/GFM (headings, nested ordered and unordered lists, tables, blockquotes, task lists, links, inline code and fenced code) plus these reusable MDX components:

- `<Callout type="note|tip|exam|caution" title="Optional title">…</Callout>` — explanatory notes and exam traps.
- `<Definition term="Term">…</Definition>` — highlighted definitions.
- `<Formula label="Optional label">…</Formula>` — centred formulas or equations.
- `<DrugCard name="Drug" drugClass="Class" mechanism="Mechanism" uses="Uses" adverseEffects="Adverse effects" />` — compact drug profiles.
- `<ProcessFlow title="Optional title">…</ProcessFlow>` — stepwise processes, usually containing a numbered list.
- `<QuickCheck question="…" options={["…", "…"]} answer={0} explanation="…" />` — one interactive concept question, commonly used in articles.
- `<LessonQuiz title="…" questionsJson="…" />` — multi-question assessment at the end of a lesson; `questionsJson` is a JSON-encoded array of question objects.

Use these components only when they improve understanding; ordinary Markdown remains the default. The website styles tables for horizontal scrolling on small screens and preserves semantic list markup.

## Automatic portfolio update

When a pull request is merged into `main`, GitHub Actions checks out the portfolio, advances its `content` submodule to the new content commit and opens or updates a PR in the portfolio repository. Review and merge that PR to publish the new material.

**One-time setup required:** In this repository, open **Settings → Secrets and variables → Actions → New repository secret** and add:

- Name: `PORTFOLIO_BUMP_TOKEN`
- Value: a fine-grained GitHub personal access token with access to `milesmoraliis759/portfolio`, granting **Contents: Read and write** and **Pull requests: Read and write**.

The workflow deliberately skips the cross-repository steps until this secret exists. Never commit the token or put it in a workflow file.

## Content conventions

- Articles live in `articles/`; structured lessons live in `learning/`.
- Use reliable sources for scientific and medical claims; include references where appropriate.
- Do not publish patient-identifiable information or confidential company/training material.
- Educational material is not personal medical advice.

## Companion website

[Harsh Mishra — Portfolio](https://github.com/milesmoraliis759/portfolio)
