import React from 'react';
import { BaseGame } from '../components/game/BaseGame';
import { Button } from '../components/Button';

export const BibleCharacterQuest: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="bible-character-quest" gameName="Bible Character Quest" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
export const BibleWordSearch: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="bible-word-search" gameName="Bible Word Search" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
export const BibleCrossword: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="bible-crossword" gameName="Bible Crossword" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
export const CompleteTheScripture: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="complete-the-scripture" gameName="Complete the Scripture" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
export const BibleMatchUp: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="bible-match-up" gameName="Bible Match-Up" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
