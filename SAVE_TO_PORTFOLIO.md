# Save to Harsh's Portfolio

Use this note whenever Harsh says any of the following in a ChatGPT conversation:

- "Add this to my notes."
- "Save this to my portfolio."
- "This belongs in my portfolio."
- "Create a note from this."
- "Turn this into an article."
- "Add this to my learning section."
- "Save it for GPAT."

## Default destination

| What Harsh shares | Where it belongs |
|---|---|
| A pharmacy concept, definition, mechanism, calculation or exam topic | `learning/<subject>/<topic>.mdx` |
| A longer explanation, reflection, study method or industry overview | `articles/<topic>.mdx` |
| A short fact to revisit later | Add it to an appropriate lesson's revision summary or a clearly titled revision note |
| A question with verified exam provenance | PYQ archive with source metadata |
| A newly written question without verified exam provenance | Practice Questions, never an official PYQ |

## Publishing workflow

1. Read this note and `.agents/skills/pharma-content-writer/SKILL.md`.
2. Treat the material Harsh supplied as the primary source when he asks you to preserve it. Do not silently change its meaning.
3. Decide the best content type and check the existing library for duplicates.
4. Explain the topic for a B.Pharm learner with basic pharmacy knowledge: plain language first, technical detail second.
5. Verify scientific, clinical, regulatory and numeric claims against reliable sources. Cite sources actually consulted and list unresolved points as `[VERIFY]`.
6. Write original, useful MDX. A lesson should include learning outcomes, clear explanations, examples or visuals where helpful, a one-minute recap and an end-of-lesson interactive quiz.
7. Keep lesson quizzes, original practice questions, timed mock tests and verified PYQs separate.
8. Create a focused branch and pull request in `milesmoraliis759/content`.
9. Inspect the diff and run available checks. Merge only when content and checks are acceptable.
10. After merge, wait for the content repository's GitHub Action to open or update the portfolio content-bump PR.
11. Verify that the bump PR points to the exact merged content commit. Check its build and merge only when green.
12. Report both PRs, commit SHAs, checks, and whether Vercel actually deployed the change.

## Important boundaries

- Do not put lesson notes or articles directly in the portfolio source repository. The content repository is the source of truth.
- Never invent a PYQ year, shift, source, official answer or exam attribution.
- Never invent citations, standards, limits, doses, machine settings or regulatory requirements.
- Never include patient-identifiable information or confidential industrial-training data.
- Do not bypass failing checks or claim a deployment based only on a successful GitHub build.
- If a repository connection, permission, token, CI check or Vercel quota blocks a step, stop at that point and explain the blocker.

## How to invoke it

Harsh can simply write:

> **Save to Harsh's Portfolio:** [the material]

The phrase "add this to my notes" should be treated as the same instruction when the material is clearly intended for the pharmacy portfolio.

## ChatGPT portability note

This is a repository-owned instruction and Agent Skill. It does not create a native global ChatGPT slash command or automatically grant every new chat GitHub access. In a chat where the GitHub connection is available, load this instruction and follow the workflow. If a new chat cannot see this repository context, Harsh can paste the invocation above or share this file's GitHub link.
