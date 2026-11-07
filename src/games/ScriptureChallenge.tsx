import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const ScriptureChallenge: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="scripture-challenge" gameName="Scripture Challenge" onBack={onBack} />
);
