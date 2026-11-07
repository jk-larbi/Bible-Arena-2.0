import React from 'react';
import { BaseGame } from '../components/game/BaseGame';
import { Button } from '../components/Button';

export const BiblePuzzles: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="bible-puzzles" gameName="Bible Puzzles" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
export const BibleRiddles: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="bible-riddles" gameName="Bible Riddles" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
export const BibleGeographyQuest: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="bible-geography-quest" gameName="Bible Geography Quest" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
export const BibleMemoryChallenge: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="bible-memory-challenge" gameName="Bible Memory Challenge" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
export const BibleDetective: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="bible-detective" gameName="Bible Detective" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
export const BibleChainChallenge: React.FC<{ onBack: () => void; }> = ({ onBack }) => (
  <BaseGame gameId="bible-chain-challenge" gameName="Bible Chain Challenge" onBack={onBack} renderGame={(lvl, _, onFinish) => <Button onClick={() => onFinish(1)}>Submit (Level {lvl})</Button>} />
);
