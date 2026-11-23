# Content repository instructions

Use .agents/skills/save-to-harsh-portfolio/SKILL.md and SAVE_TO_PORTFOLIO.md whenever Harsh asks to save, add or turn anything into portfolio content. Then use .agents/skills/pharma-content-writer/SKILL.md for pharmacy writing, research, lesson structure and question quality.

Audience default: a B.Pharm learner with basic pharmacy knowledge. Explain simply before using specialist terminology. A complete lesson should end with a short lesson quiz. Keep topic-wise practice, mock tests and verified PYQs as separate assessment layers.

When asked to “add this to my notes”, follow the skill's publishing workflow: branch → content PR → checks/review → merge → wait for the portfolio content-bump PR → verify the submodule commit and CI → merge the bump PR only when green.

Never fabricate sources, exam/year/shift metadata, official limits or deployment status. If a required check or repository permission is missing, stop and report the blocker.
