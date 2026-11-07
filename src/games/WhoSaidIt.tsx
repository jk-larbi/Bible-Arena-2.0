import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const WhoSaidIt: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="who-said-it" gameName="Who Said It?" onBack={onBack} />
);
