import * as fs from 'fs';
import * as path from 'path';

const filePath = path.resolve(process.cwd(), 'scripts', 'testQuizAccuracy.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const newSection11 = `  // ===================================================================
  // 11. BIBLE CHAIN: 250 curated challenges across 50 levels & 10 stages
  // ===================================================================
  {
    let checked = 0;
    let failures = 0;
    const challengeIds = new Set<string>();
    const failureLog: string[] = [];

    for (let level = 1; level <= 50; level++) {
      const items = buildLocalChallengesForLevel('bible-chain-challenge', level);
      if (items.length !== 5) {
        failures++;
        failureLog.push(\`L\${level}: expected five challenges, received \${items.length}\`);
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

        const isTyped = Boolean(item.metadata?.is_typed);
        if (!isTyped) {
          if (!Array.isArray(item.options) || item.options.length !== 4) {
            failures++;
            failureLog.push(\`\${item.id}: MC question does not have exactly 4 options\`);
          } else if (new Set(item.options).size !== 4) {
            failures++;
            failureLog.push(\`\${item.id}: MC question options are not all distinct\`);
          } else if (!item.options.includes(item.correct_answer)) {
            failures++;
            failureLog.push(\`\${item.id}: correct_answer "\${item.correct_answer}" not present in options\`);
          }
        }
      }
    }
    results.push({
      name: '11. Bible Chain integrity and uniqueness',
      scope: 'Full game: 250 challenges (50 levels x 5, 10 stages)',
      passed: checked === 250 && failures === 0,
      details: \`Checked \${checked} challenges across 50 levels. Invalid payloads, duplicate IDs, or missing answers: \${failures}. \${failureLog.slice(0, 4).join('; ')}\`,
    });
  }`;

content = content.replace(
  /\/\/ 11\. BIBLE CHAIN[\s\S]*?results\.push\(\{[\s\S]*?name: '11\. Bible Chain integrity and uniqueness'[\s\S]*?\}\);\s*\}/,
  newSection11.replace(/\r?\n/g, '\n')
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully updated testQuizAccuracy.ts');
