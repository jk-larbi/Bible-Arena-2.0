import React from 'react';
import { BaseGame } from '../components/game/BaseGame';
import { Button } from '../components/Button';

interface WhoSaidItProps { onBack: () => void; }

export const WhoSaidIt: React.FC<WhoSaidItProps> = ({ onBack }) => (
  <BaseGame gameId="who-said-it" gameName="Who Said It?" onBack={onBack} renderGame={(level, attemptId, onFinish) => (
    <Button onClick={() => onFinish(1)}>Submit Speaker (Level {level})</Button>
  )} />
);
