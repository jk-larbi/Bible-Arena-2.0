import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BibleRiddles: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-riddles" gameName="Bible Riddles" onBack={onBack} />
);
