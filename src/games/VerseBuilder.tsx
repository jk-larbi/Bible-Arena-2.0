import React from 'react';
import { BaseGame } from '../components/game/BaseGame';
import { Button } from '../components/Button';

interface VerseBuilderProps { onBack: () => void; }

export const VerseBuilder: React.FC<VerseBuilderProps> = ({ onBack }) => (
  <BaseGame gameId="verse-builder" gameName="Verse Builder" onBack={onBack} renderGame={(level, attemptId, onFinish) => (
    <Button onClick={() => onFinish(1)}>Submit Verse (Level {level})</Button>
  )} />
);
