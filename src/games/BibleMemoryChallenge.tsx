import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BibleMemoryChallenge: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-memory-challenge" gameName="Bible Memory Challenge" onBack={onBack} />
);
