import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BibleMatchUp: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-match-up" gameName="Bible Match-Up" onBack={onBack} />
);
