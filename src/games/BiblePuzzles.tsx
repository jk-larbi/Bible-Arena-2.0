import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BiblePuzzles: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-puzzles" gameName="Bible Puzzles" onBack={onBack} />
);
