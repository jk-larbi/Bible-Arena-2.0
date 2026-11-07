import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BibleCrossword: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-crossword" gameName="Bible Crossword" onBack={onBack} />
);
