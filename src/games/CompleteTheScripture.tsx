import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const CompleteTheScripture: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="complete-the-scripture" gameName="Complete the Scripture" onBack={onBack} />
);
