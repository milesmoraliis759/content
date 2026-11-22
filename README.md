# Harsh Mishra — Learning Content

This repository stores the articles and structured learning material displayed by the companion portfolio website.

The content is intentionally separate from the Next.js application. Write and maintain learning resources here; the portfolio reads these files from the `content/` Git submodule.

## Repository structure

```
content/
├── articles/       # Opinion, explainers, experiences and long-form posts
├── learning/       # Structured lessons and study notes
├── categories/     # Optional category metadata
└── README.md
```

## MDX format

Every article or lesson is an `.mdx` file with YAML frontmatter.

```mdx
---
title: "Understanding HPLC"
description: "A beginner-friendly introduction to high-performance liquid chromatography."
date: "2026-11-23"
updated: "2026-11-23"
category: "Pharmaceutical Analysis"
tags:
  - HPLC
  - Chromatography
  - GPAT
readTime: "8 min read"
level: "Beginner"
featured: true
published: true
---

# Understanding HPLC

Write the lesson here using Markdown.

## Principle

Explain the concept in clear, exam-oriented language.

## Key points

- Keep each point focused.
- Add examples, tables and diagrams where useful.
```

## Content conventions

- Use lowercase, hyphen-separated filenames, for example `hplc-basics.mdx`.
- Use `published: true` to make an item visible on the public site.
- Use `featured: true` for selected homepage highlights.
- Articles live in `articles/`; structured topic lessons live in `learning/`.
- Use accurate sources for scientific and medical claims. Add a **References** section to evidence-based material.
- Do not include patient-identifiable information or confidential training/company material.

## Initial content roadmap

1. Pharmaceutical Analysis — HPLC fundamentals
2. Pharmaceutics — Dissolution testing
3. Pharmacology — Antihypertensive drugs
4. Pharmacognosy — Crude drug evaluation
5. Industrial Pharmacy — Wet granulation workflow

## Companion website

The Next.js portfolio consumes this repository as a Git submodule:

[Portfolio repository](https://github.com/milesmoraliis759/portfolio)
