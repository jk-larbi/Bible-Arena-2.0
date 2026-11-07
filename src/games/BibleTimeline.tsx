import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const BibleTimeline: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="bible-timeline" gameName="Bible Timeline" onBack={onBack} />
);
