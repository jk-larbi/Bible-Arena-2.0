import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BibleGeographyQuest: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-geography-quest" gameName="Bible Geography Quest" onBack={onBack} />
);
