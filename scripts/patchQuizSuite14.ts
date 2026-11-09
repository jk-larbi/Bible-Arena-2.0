import * as fs from 'fs';
import * as path from 'path';

const filePath = path.resolve(process.cwd(), 'scripts/testQuizAccuracy.ts');
let code = fs.readFileSync(filePath, 'utf-8');

const suite14Code = `  // ===================================================================
  // 14. VERSE BUILDER: 250 curated challenges across 10 stages
  // ===================================================================
  {
    let checked = 0;
    let failures = 0;
    const challengeIds = new Set<string>();
    const failureLog: string[] = [];
    const mechanicsCount = new Map<string, number>();

    for (let level = 1; level <= 50; level++) {
      const items = buildLocalChallengesForLevel('verse-builder', level);
      if (items.length !== 5) {
        failures++;
        failureLog.push(\`L\${level}: expected 5 challenges, got \${items.length}\`);
      }
      for (const item of items) {
        checked++;
        if (challengeIds.has(item.id)) {
          failures++;
          failureLog.push(\`\${item.id}: duplicate challenge ID\`);
        }
        challengeIds.add(item.id);

        if (!item.question_text || !item.correct_answer || !item.explanation || !item.reference) {
          failures++;
          failureLog.push(\`\${item.id}: missing required textual field\`);
        }

        const mechanic = item.metadata?.mechanic || 'unknown';
        mechanicsCount.set(mechanic, (mechanicsCount.get(mechanic) || 0) + 1);

        const isTyped = Boolean(item.metadata?.is_typed);
        const isTiles = Boolean(item.metadata?.is_tiles);

        if (isTyped) {
          if (item.options.length > 0) {
            failures++;
            failureLog.push(\`\${item.id}: typed challenge should have empty options\`);
          }
        } else if (isTiles) {
          if (!Array.isArray(item.options) || item.options.length === 0) {
            failures++;
            failureLog.push(\`\${item.id}: word tiles question missing options\`);
          }
        } else {
          if (!Array.isArray(item.options) || item.options.length !== 4) {
            failures++;
            failureLog.push(\`\${item.id}: MC question does not have exactly 4 options\`);
          } else if (new Set(item.options).size !== 4) {
            failures++;
            failureLog.push(\`\${item.id}: MC options are not all unique\`);
          } else if (!item.options.includes(item.correct_answer)) {
            failures++;
            failureLog.push(\`\${item.id}: correct_answer "\${item.correct_answer}" not found in options\`);
          }
        }
      }
    }

    results.push({
      name: '14. Verse Builder 250-challenge curriculum and mechanics integrity',
      scope: 'Full game: 250 challenges (50 levels x 5, 10 stages)',
      passed: checked === 250 && failures === 0,
      details: \`Checked \${checked} challenges across 50 levels. Mechanics: \${[...mechanicsCount.entries()].map(([m, c]) => \`\${m}: \${c}\`).join(', ')}. Failures: \${failures}. \${failureLog.slice(0, 4).join('; ')}\`,
    });
  }

  // ===================================================================
  // SUMMARY REPORT`;

code = code.replace('  // ===================================================================\n  // SUMMARY REPORT', suite14Code);
if (!code.includes('14. Verse Builder')) {
  // Try CRLF
  code = code.replace('  // ===================================================================\r\n  // SUMMARY REPORT', suite14Code);
}

fs.writeFileSync(filePath, code, 'utf-8');
console.log('Added Suite 14 to testQuizAccuracy.ts!');
