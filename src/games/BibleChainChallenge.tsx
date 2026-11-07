import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BibleChainChallenge: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-chain-challenge" gameName="Bible Chain Challenge" onBack={onBack} />
);
