import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const ScriptureScramble: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="scripture-scramble" gameName="Scripture Scramble" onBack={onBack} />
);
