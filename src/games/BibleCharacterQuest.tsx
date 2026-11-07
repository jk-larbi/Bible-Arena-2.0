import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BibleCharacterQuest: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-character-quest" gameName="Bible Character Quest" onBack={onBack} />
);
