import React from 'react';
import { BaseGame } from '../components/game/BaseGame';
import { Button } from '../components/Button';

interface GuessTheEmojiProps { onBack: () => void; }

export const GuessTheEmoji: React.FC<GuessTheEmojiProps> = ({ onBack }) => (
  <BaseGame gameId="guess-the-emoji" gameName="Guess the Emoji" onBack={onBack} renderGame={(level, attemptId, onFinish) => (
    <Button onClick={() => onFinish(1)}>Submit Guess (Level {level})</Button>
  )} />
);
