---
name: save-to-harsh-portfolio
description: Route Harsh's requests to save, add, capture or turn material into notes, lessons, articles or GPAT study content into the Harsh Mishra pharmacy portfolio content repository.
---

# Save to Harsh's Portfolio

## Trigger phrases

Use this skill when Harsh says:
- "Add this to my notes"
- "Save this to my portfolio"
- "This belongs in my portfolio"
- "Create a note from this"
- "Turn this into an article"
- "Add this to my learning section"
- "Save it for GPAT"
- "Save to Harsh's Portfolio"

Treat these phrases as equivalent when the context clearly concerns pharmacy learning, study notes, articles or portfolio content.

## First decision: what is being saved?

- Concept, mechanism, calculation, drug class, instrument, process or syllabus topic → learning lesson.
- Long-form explanation, reflection, study method or industry overview → article.
- Short revision fact → suitable existing lesson's recap or a dedicated concise revision note.
- Verified exam question → PYQ archive, retaining exact source provenance.
- Original question → practice bank, clearly labelled Practice Question.

Ask one clarification only if the intended content type or meaning cannot be determined safely.

## Audience

Write for a normal B.Pharm learner with basic pharmacy knowledge. Start with the everyday meaning, define terminology at first use, then build towards mechanisms, comparisons and GPAT/NIPER detail. Never assume specialist knowledge.

## Source handling

- Preserve user-supplied text and files as the primary source when asked.
- Distinguish user-provided material from independently researched additions.
- Verify scientific, clinical, regulatory and numerical claims using authoritative sources.
- Cite only sources actually consulted.
- Mark unresolved claims `[VERIFY]`; never make up references, legal limits, drug doses, official exam metadata or machine settings.
- Protect patient privacy and industrial confidentiality.

## Repository workflow

Read `SAVE_TO_PORTFOLIO.md` and `.agents/skills/pharma-content-writer/SKILL.md` in the content repository.

1. Search for duplicates.
2. Draft original MDX with the existing frontmatter and renderer-supported components.
3. For lessons, include learning outcomes, a plain-language explanation, worked example or visual when useful, pharmacy relevance, GPAT/NIPER takeaways, one-minute recap, 3–5 interactive end-of-lesson questions and references.
4. For articles, use a clear narrative, practical examples and sources; use inline QuickCheck only when it improves the reading experience.
5. Keep verified PYQs separate from generated practice questions.
6. Create a branch in `milesmoraliis759/content`, commit the content and open a focused PR.
7. Inspect the diff and available CI. Merge only when the material is accurate and checks pass.
8. Wait for `portfolio-content-bump.yml` to create/update the portfolio submodule PR.
9. Verify the bump points to the exact content merge SHA, run/check portfolio CI, and merge only when green.
10. Report the content PR, bump PR, commit SHAs, checks and actual deployment status.

## Stop conditions

Stop and report the blocker if:
- GitHub is not connected or write permission is unavailable.
- The content or portfolio CI fails.
- The bump PR references the wrong content commit.
- A secret/token or branch-protection rule prevents the workflow.
- Vercel deployment is rate-limited.

Never bypass a required check or claim the content is live without deployment confirmation.

## Important capability boundary

A skill in this repository is reusable instruction for an agent working with this repository. It does not itself install a global ChatGPT command or guarantee that every new ChatGPT chat has the GitHub connector. When the user invokes the phrase in a chat with GitHub access, use this workflow; otherwise explain the missing connection and keep the prepared content available.
