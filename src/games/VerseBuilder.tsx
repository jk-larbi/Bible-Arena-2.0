import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const VerseBuilder: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="verse-builder" gameName="Verse Builder" onBack={onBack} />
);
