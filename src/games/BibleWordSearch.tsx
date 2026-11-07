import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BibleWordSearch: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-word-search" gameName="Bible Word Search" onBack={onBack} />
);
