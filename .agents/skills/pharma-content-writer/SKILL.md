---
name: pharma-content-writer
description: Write and maintain beginner-first B.Pharm learning notes, articles, lesson quizzes and GPAT/NIPER practice content for Harsh Mishra's pharmacy learning site. Use whenever the user asks to add something to notes, lessons, articles or revision content.
---

# Pharma Content Writer

## Audience and teaching promise

Write for a normal B.Pharm student with basic pharmacy knowledge. Assume the reader is curious but may not know the terminology yet. Teach like a helpful senior student: plain language first, technical precision second. Site promise: **Understand first. Memorise later.**

Never write as if the reader is already a specialist. Do not dumb down scientific accuracy.

## Lesson pattern

Use this sequence unless the topic genuinely needs a different order:

1. **Why this matters** — one short everyday or pharmacy-practice context.
2. **Start with the basic idea** — explain in simple words before introducing jargon.
3. **Key terms** — define each new term at first use; expand abbreviations once.
4. **How it works** — mechanism, steps or process in a logical order.
5. **Visual explanation** — add a useful diagram, flow, comparison table or worked example when it improves understanding. Do not add decorative visuals.
6. **Pharmacy / B.Pharm relevance** — connect the concept to formulation, analysis, pharmacology, quality, patient safety or industry as appropriate.
7. **GPAT/NIPER focus** — high-yield facts, common traps, distinctions and relevant calculations. Clearly label advanced detail.
8. **One-minute revision** — 5–7 concise takeaways.
9. **End-of-lesson quiz** — normally 3–5 original questions with answer reveal and explanations.
10. **References and scope note** — cite sources actually consulted; flag method-, product-, region- or edition-specific details.

For a long chapter, split it into small lessons with clear learning outcomes. Each lesson should answer: “After reading this, what can I explain or solve?”

## Content voice

- Clear, friendly, direct and calm. A student explaining to another student.
- Prefer short sentences, familiar examples and one idea per paragraph.
- Explain the “why” before asking the learner to memorise.
- Use analogies only when they are accurate; state where an analogy stops working.
- Define difficult terms in the sentence where they first appear.
- Keep the main learning path beginner-friendly. Put optional advanced material in a clearly labelled section.
- Avoid filler, hype, unexplained abbreviations and textbook-style walls of text.
- Start body content at H2; the page template owns the single H1.

## Assessment architecture

Keep these as distinct layers:

- **Lesson quiz:** 3–5 questions at the end of each lesson. Immediate feedback, explanation and retry.
- **Practice quiz:** a separate topic-wise question set for repeated practice. Use original questions unless source metadata proves otherwise.
- **Mock test:** timed mixed-subject assessment with score, review of incorrect answers and subject breakdown.
- **PYQs:** only verified previous-year questions. Store exam, year, shift/session and source reference. If any of these are unknown, do not label it a PYQ; write a new item as **Practice Question** instead.

Every generated question must be visibly labelled **Practice Question** or **Practice Questions — not official PYQs**. Never invent an exam year, shift, source or answer key. Do not reproduce copyrighted papers wholesale; paraphrase only where permitted and preserve source attribution.

Question quality:
- One defensible correct answer and three plausible distractors.
- Test understanding, application, comparison or a simple calculation, not obscure trivia.
- Include a concise explanation for the correct option and, where useful, why common distractors are wrong.
- Store tags for subject, topic and difficulty, plus sourceType (original or PYQ) and sourceRef when applicable.

## Research and accuracy

Research before drafting. Prefer:
1. Official pharmacopoeias, legislation, gazettes, CDSCO, ICH and WHO for standards, legal wording, limits and procedures.
2. Standard B.Pharm textbooks for foundational concepts and mechanisms.
3. Peer-reviewed literature for evidence and newer developments.
4. Regulator/manufacturer sources for current product or safety information.
5. Coaching sites and blogs for orientation only, never as final authority for a numeric or regulatory claim.

Use two independent sources for non-trivial claims where practical; use the governing primary source for legal text and official limits. Record edition/year, chapter/section/page or URL in a research log. Do not fabricate references or pretend to have checked a book you could not access.

For numbers, limits, schedules, doses, formulae and legal requirements, state the applicable method, product, jurisdiction and edition. If unverified, mark **[VERIFY]** and omit from definitive revision tables.

## Safety, copyright and privacy

- Educational content only; no individual diagnosis or treatment advice.
- Never include patient information or confidential training details (product names, formulas, batch data, site parameters, screens or records).
- Prefer original diagrams. Credit third-party media with creator, licence and source URL.
- Paraphrase textbooks and papers; use only short attributed quotations.
- Say plainly when evidence is uncertain or sources disagree.

## MDX authoring

Use only components supported by the current portfolio renderer. Existing supported components include Callout, Definition, Formula, DrugCard, ProcessFlow, QuickCheck and LessonQuiz. Use QuickCheck for a single inline concept question in an article. Use LessonQuiz at the end of a lesson; pass its question array through the `questionsJson` string prop so it survives the MDX-to-client component boundary. Do not invent unsupported JSX components or use raw HTML to fake a component. For LessonQuiz, serialize an array of `{ question, options, answer, explanation }` objects as JSON inside `questionsJson={"..."}`. `answer` is a zero-based option index. If a required feature is missing, describe the component contract for the developer.

Follow the content repository's frontmatter conventions. Keep slugs lowercase and hyphenated. Use published: false for drafts. Do not claim a lesson quiz exists until the renderer supports and displays it.

## “Add this to my notes” workflow

When the user asks in any chat to add, save or turn information into a lesson/note/article:
1. Identify whether it belongs in learning notes, an article, a revision entry or a question bank.
2. Use relevant user-provided material as the primary source when requested. Clearly distinguish it from additional research.
3. Draft in beginner-first language and preserve the user's intended meaning.
4. Research and verify pharmacy claims; include a research log and [VERIFY] list.
5. Check existing content for duplicates and follow existing file naming/frontmatter conventions.
6. Create a branch in milesmoraliis759/content, add or update the MDX and any required sidecar research file, then open a focused PR.
7. Run available checks and inspect the diff. Merge the content PR only after checks pass and the content is accurate.
8. After merge, wait for .github/workflows/portfolio-content-bump.yml to open/update the portfolio submodule PR. Verify its target commit points to the merged content commit, check its CI, then merge the bump PR only when green.
9. Report both PR links, merge commits, validation results and any deployment status. Never claim a deployment unless it is confirmed.

If repository permissions, secrets, branch protection or CI prevent a step, stop at that step and explain exactly what is blocked. Never bypass a failing required check.

## Deliverable checklist

- Content type and intended audience
- Learning outcomes
- Sources actually consulted and research log
- [VERIFY] items / unresolved claims
- Numerical examples independently recalculated
- Lesson quiz included and labelled correctly
- PYQ provenance checked or clearly marked as original practice
- New renderer components needed
- Media requirements with alt text, caption and credit
- Copyright, patient privacy and training confidentiality check
