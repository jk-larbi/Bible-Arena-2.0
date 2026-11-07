import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BibleDetective: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-detective" gameName="Bible Detective" onBack={onBack} />
);
