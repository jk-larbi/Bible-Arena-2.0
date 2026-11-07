import React from 'react';
import { BaseGame } from '../components/game/BaseGame';
import { Button } from '../components/Button';

interface ScriptureChallengeProps { onBack: () => void; }

export const ScriptureChallenge: React.FC<ScriptureChallengeProps> = ({ onBack }) => (
  <BaseGame gameId="scripture-challenge" gameName="Scripture Challenge" onBack={onBack} renderGame={(level, attemptId, content, onFinish) => (
    <Button onClick={() => onFinish(attemptId, 1, 'A', 0)}>Submit Answer (Level {level})</Button>
  )} />
);
