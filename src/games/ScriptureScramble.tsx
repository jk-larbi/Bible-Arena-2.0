import React from 'react';
import { BaseGame } from '../components/game/BaseGame';
import { Button } from '../components/Button';

interface ScriptureScrambleProps { onBack: () => void; }

export const ScriptureScramble: React.FC<ScriptureScrambleProps> = ({ onBack }) => (
  <BaseGame gameId="scripture-scramble" gameName="Scripture Scramble" onBack={onBack} renderGame={(level, attemptId, onFinish) => (
    <Button onClick={() => onFinish(1)}>Submit Word (Level {level})</Button>
  )} />
);
