import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentRoot = path.join(root, "articles");
const learningRoot = path.join(root, "learning");
const failures = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(file);
    return entry.isFile() && entry.name.endsWith(".mdx") ? [file] : [];
  });
}

const files = [...walk(contentRoot), ...walk(learningRoot)];
for (const file of files) {
  const relative = path.relative(root, file).replaceAll(path.sep, "/");
  const source = fs.readFileSync(file, "utf8");
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) {
    failures.push(relative + ": missing YAML frontmatter");
    continue;
  }
  const fm = frontmatter[1];
  for (const key of ["title", "description", "date", "category"]) {
    if (!new RegExp("^\\s*" + key + ":\\s*.+$", "m").test(fm)) failures.push(relative + ": missing " + key);
  }
  if (/^published:\s*false\s*$/m.test(fm)) continue;
  const isQuestionBank = relative.startsWith("learning/gpat-practice/");
  if (!isQuestionBank && /^#\s+.+$/m.test(source.slice(frontmatter[0].length))) {
    failures.push(relative + ": body must start at H2; page template owns the H1");
  }
  if (relative.startsWith("learning/") && !isQuestionBank && !source.includes("<LessonQuiz")) {
    failures.push(relative + ": published lesson is missing its end-of-lesson LessonQuiz");
  }
  if (relative.startsWith("articles/") && !source.includes("<QuickCheck")) {
    failures.push(relative + ": published article is missing an inline QuickCheck");
  }
}

if (failures.length) {
  console.error("Content validation failed:");
  for (const failure of failures) console.error("- " + failure);
  process.exit(1);
}
console.log("Validated " + files.length + " MDX files: frontmatter, heading structure and assessment components.");
