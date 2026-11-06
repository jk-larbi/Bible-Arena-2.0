import React, { useState, useEffect, useRef } from 'react';
import { SCRABBLE_ITEMS, ScrambleItem } from '../data/initialQuestions';
import { Button } from '../components/Button';
import { LevelMap } from '../components/LevelMap';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { AutoAdvanceBar } from '../components/AutoAdvanceBar';
import { AnswerFeedback, Reveal } from '../components/AnswerFeedback';
import { LeaveGameButton } from '../components/LeaveGameButton';

interface ScriptureScrambleProps {
  onBack: () => void;
  onCompleteLevel: (gameId: string, level: number, score: number) => void;
}

const QUESTION_SECONDS = 60;
const REVEAL_SECONDS = 5;

export const ScriptureScramble: React.FC<ScriptureScrambleProps> = ({ onBack, onCompleteLevel }) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [maxCompleted, setMaxCompleted] = useState(0);
  const [showLevelMap, setShowLevelMap] = useState(false);
  const [score, setScore] = useState(0);

  const item: ScrambleItem = SCRABBLE_ITEMS[(currentLevel - 1) % SCRABBLE_ITEMS.length];
  const isLast = currentLevel === SCRABBLE_ITEMS.length;

  const [shuffledLetters, setShuffledLetters] = useState<{ id: string; char: string; used: boolean }[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<{ id: string; char: string }[]>([]);
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const locked = useRef(false);

  useEffect(() => {
    const chars = item.word.split('').map((char, index) => ({
      id: `${char}-${index}`,
      char,
      used: false
    }));
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    setShuffledLetters(chars);
    setSelectedLetters([]);
    setReveal(null);
    locked.current = false;
  }, [currentLevel, item]);

  function handleSettle(pickedWord: string | null) {
    if (locked.current) return;
    locked.current = true;

    const isCorrect = pickedWord !== null && pickedWord === item.word;
    if (isCorrect) {
      const earnedScore = 100 + answering.secondsLeft * 5;
      setScore(s => s + earnedScore);
      if (currentLevel > maxCompleted) setMaxCompleted(currentLevel);
      onCompleteLevel('scripture-scramble', currentLevel, earnedScore);
    }

    setReveal({
      is_correct: isCorrect,
      correct_answer: item.word,
      explanation: `Scripture word from ${item.reference}`,
      reference: item.reference,
      picked: pickedWord
    });
  }

  const answering = useCountdown(reveal === null, QUESTION_SECONDS, () => handleSettle(selectedLetters.map(l => l.char).join('')), currentLevel);

  const advancing = useCountdown(reveal !== null, REVEAL_SECONDS, () => {
    if (isLast) {
      onBack();
      return;
    }
    setReveal(null);
    locked.current = false;
    setCurrentLevel(l => l + 1);
  }, currentLevel);

  const handleSelectLetter = (index: number) => {
    if (reveal !== null || locked.current) return;
    const letter = shuffledLetters[index];
    if (letter.used) return;

    const newShuffled = [...shuffledLetters];
    newShuffled[index].used = true;
    setShuffledLetters(newShuffled);

    const updatedSelected = [...selectedLetters, { id: letter.id, char: letter.char }];
    setSelectedLetters(updatedSelected);

    const newWord = updatedSelected.map(l => l.char).join('');
    if (newWord === item.word) {
      handleSettle(newWord);
    }
  };

  const handleRemoveLetter = (index: number) => {
    if (reveal !== null || locked.current) return;
    const removed = selectedLetters[index];
    const newSelected = selectedLetters.filter((_, i) => i !== index);
    setSelectedLetters(newSelected);

    const newShuffled = shuffledLetters.map(l => l.id === removed.id ? { ...l, used: false } : l);
    setShuffledLetters(newShuffled);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-[#171B24]">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <LeaveGameButton exitTo="/" onLeave={onBack} />
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-[#171B24]">Score: <strong className="text-[#D66B3D]">{score}</strong></span>
          <Button variant="secondary" size="sm" onClick={() => setShowLevelMap(true)}>
            Level {currentLevel} / {SCRABBLE_ITEMS.length}
          </Button>
        </div>
      </div>

      {showLevelMap ? (
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#171B24]/10">
          <LevelMap
            totalLevels={SCRABBLE_ITEMS.length}
            currentLevel={currentLevel}
            maxCompleted={maxCompleted}
            onSelectLevel={(lvl) => {
              setCurrentLevel(lvl);
              setShowLevelMap(false);
            }}
          />
          <div className="text-center mt-4">
            <Button variant="secondary" onClick={() => setShowLevelMap(false)}>Resume Game</Button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#171B24]/10 text-center relative">
          <div className="flex justify-between items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-[#171B24]/5 text-xs font-bold text-[#171B24] uppercase tracking-wider">
              Word Scramble • Level {currentLevel}
            </span>
            {reveal === null && (
              <span className="tabular-nums font-mono text-[#D66B3D] font-bold text-lg">⏱ {answering.secondsLeft}s</span>
            )}
          </div>

          <h2 className="font-serif font-bold text-3xl text-[#171B24] mb-2">Unscramble Sacred Word</h2>
          <p className="text-sm text-[#171B24]/60 mb-8 flex items-center justify-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#D66B3D]" />
            <span>Scripture Reference: {item.reference}</span>
          </p>

          {/* Answer Slots */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 min-h-[64px] items-center">
            {selectedLetters.map((l, index) => (
              <button
                key={`${l.id}-${index}`}
                disabled={reveal !== null}
                onClick={() => handleRemoveLetter(index)}
                className="w-12 h-14 rounded-2xl bg-[#171B24] text-white font-serif font-bold text-xl flex items-center justify-center shadow-md hover:bg-rose-600 transition-colors cursor-pointer disabled:cursor-default"
              >
                {l.char}
              </button>
            ))}
            {selectedLetters.length === 0 && (
              <span className="text-sm text-[#171B24]/40 italic">Tap scrambled letters below to construct the word</span>
            )}
          </div>

          {/* Scrambled Pool */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {shuffledLetters.map((l, index) => (
              <button
                key={l.id}
                disabled={l.used || reveal !== null}
                onClick={() => handleSelectLetter(index)}
                className={`w-12 h-14 rounded-2xl font-serif font-bold text-xl flex items-center justify-center transition-all cursor-pointer ${
                  l.used
                    ? 'bg-stone-200 text-stone-400 opacity-40 cursor-not-allowed'
                    : 'bg-[#F3EBDD] text-[#171B24] border border-[#171B24]/20 hover:bg-[#D66B3D] hover:text-white shadow-sm'
                }`}
              >
                {l.char}
              </button>
            ))}
          </div>

          {reveal && (
            <div className="text-left">
              <AnswerFeedback r={reveal} />
              <AutoAdvanceBar progress={advancing.progress} secondsLeft={advancing.secondsLeft} isLast={isLast} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
