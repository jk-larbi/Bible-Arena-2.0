import React from 'react';
import { BaseGame } from '../components/game/BaseGame';
import { Button } from '../components/Button';

interface FindTheBibleBookProps { onBack: () => void; }

export const FindTheBibleBook: React.FC<FindTheBibleBookProps> = ({ onBack }) => (
  <BaseGame gameId="find-the-bible-book" gameName="Find the Bible Book" onBack={onBack} renderGame={(level, attemptId, onFinish) => (
    <Button onClick={() => onFinish(1)}>Submit Book (Level {level})</Button>
  )} />
);
