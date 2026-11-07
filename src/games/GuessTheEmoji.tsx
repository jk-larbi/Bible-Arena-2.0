import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const GuessTheEmoji: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="guess-the-emoji" gameName="Guess the Emoji" onBack={onBack} />
);
