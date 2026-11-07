import React from 'react';
import { BaseGame } from '../components/game/BaseGame';
import { Button } from '../components/Button';

interface BibleTimelineProps { onBack: () => void; }

export const BibleTimeline: React.FC<BibleTimelineProps> = ({ onBack }) => (
  <BaseGame gameId="bible-timeline" gameName="Bible Timeline" onBack={onBack} renderGame={(level, attemptId, onFinish) => (
    <Button onClick={() => onFinish(1)}>Submit Order (Level {level})</Button>
  )} />
);
