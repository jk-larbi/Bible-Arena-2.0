import React from 'react';
import { BaseGame } from '../components/game/BaseGame';

export const FindTheBibleBook: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <BaseGame gameId="find-the-bible-book" gameName="Find the Bible Book" onBack={onBack} />
);
