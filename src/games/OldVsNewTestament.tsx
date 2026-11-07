import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const OldVsNewTestament: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="old-vs-new-testament" gameName="Old vs New Testament" onBack={onBack} />
);
