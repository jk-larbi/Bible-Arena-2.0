import { buildLocalChallengesForLevel } from '../src/data/bibleContentBank';

const seen = new Set<string>();
const errors: string[] = [];
let checked = 0;

for (let level = 1; level <= 5; level++) {
  const questions = buildLocalChallengesForLevel('scripture-challenge', level);
  if (questions.length !== 10) {
    errors.push(`Level ${level}: expected 10 questions, received ${questions.length}`);
  }

  for (const question of questions) {
    checked++;
    if (!question.metadata?.curated) errors.push(`${question.id}: opening question is not marked curated`);
    if (!question.question_text.trim()) errors.push(`${question.id}: missing question text`);
    if (!question.explanation.trim()) errors.push(`${question.id}: missing explanation`);
    if (!question.reference.trim()) errors.push(`${question.id}: missing Scripture reference`);
    if (question.options.length !== 4) errors.push(`${question.id}: expected four options`);
    if (new Set(question.options.map((option) => option.trim().toLowerCase())).size !== 4) {
      errors.push(`${question.id}: answer options are not distinct`);
    }
    if (!question.options.some((option) => option.trim().toLowerCase() === question.correct_answer.trim().toLowerCase())) {
      errors.push(`${question.id}: correct answer is missing from options`);
    }
    if (seen.has(question.question_text.trim().toLowerCase())) {
      errors.push(`${question.id}: duplicate question text`);
    }
    seen.add(question.question_text.trim().toLowerCase());
  }
}

if (checked !== 50) errors.push(`Expected 50 opening questions, checked ${checked}`);

if (errors.length) {
  console.error(`Scripture Challenge quality check failed (${errors.length} issue(s)):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`PASS: ${checked} curated Scripture Challenge questions across Levels 1–5.`);
console.log('PASS: all questions have four distinct options, a correct answer, an explanation and a Scripture reference.');
console.log('PASS: no duplicate question text in the opening bank.');
