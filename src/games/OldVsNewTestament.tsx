import React from 'react';
import { BaseGame } from '../components/game/BaseGame';
import { Button } from '../components/Button';

interface OldVsNewTestamentProps { onBack: () => void; }

export const OldVsNewTestament: React.FC<OldVsNewTestamentProps> = ({ onBack }) => (
  <BaseGame gameId="old-vs-new-testament" gameName="Old vs New Testament" onBack={onBack} renderGame={(level, attemptId, onFinish) => (
    <Button onClick={() => onFinish(1)}>Submit Sort (Level {level})</Button>
  )} />
);
