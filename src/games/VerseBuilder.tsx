import React, { useState, useEffect, useRef } from 'react';
import { VERSE_BUILDER_ITEMS, VerseBuilderItem } from '../data/initialQuestions';
import { Button } from '../components/Button';
import { LevelMap } from '../components/LevelMap';
import { ArrowLeft } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { AutoAdvanceBar } from '../components/AutoAdvanceBar';
import { AnswerFeedback, Reveal } from '../components/AnswerFeedback';
import { LeaveGameButton } from '../components/LeaveGameButton';

interface VerseBuilderProps {
  onBack: () => void;
  onCompleteLevel: (gameId: string, level: number, score: number) => void;
}

const QUESTION_SECONDS = 60;
const REVEAL_SECONDS = 5;

export const VerseBuilder: React.FC<VerseBuilderProps> = ({ onBack, onCompleteLevel }) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [maxCompleted, setMaxCompleted] = useState(0);
  const [showLevelMap, setShowLevelMap] = useState(false);
  const [score, setScore] = useState(0);

  const item: VerseBuilderItem = VERSE_BUILDER_ITEMS[(currentLevel - 1) % VERSE_BUILDER_ITEMS.length];
  const isLast = currentLevel === VERSE_BUILDER_ITEMS.length;

  const [availableWords, setAvailableWords] = useState<{ id: string; text: string }[]>([]);
  const [selectedWords, setSelectedWords] = useState<{ id: string; text: string }[]>([]);
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const locked = useRef(false);

  useEffect(() => {
    const words = item.words.map((text, i) => ({ id: `${text}-${i}`, text }));
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    setAvailableWords(words);
    setSelectedWords([]);
    setReveal(null);
    locked.current = false;
  }, [currentLevel, item]);

  function handleSettle(builtVerse: string | null) {
    if (locked.current) return;
    locked.current = true;

    const targetVerse = item.words.join(' ');
    const isCorrect = builtVerse !== null && builtVerse === targetVerse;

    if (isCorrect) {
      const earned = 250;
      setScore(s => s + earned);
      if (currentLevel > maxCompleted) setMaxCompleted(currentLevel);
      onCompleteLevel('verse-builder', currentLevel, earned);
    }

    setReveal({
      is_correct: isCorrect,
      correct_answer: targetVerse,
      explanation: 'Passage reconstructed from Holy Scripture.',
      reference: item.reference,
      picked: builtVerse
    });
  }

  const answering = useCountdown(reveal === null, QUESTION_SECONDS, () => handleSettle(selectedWords.map(w => w.text).join(' ')), currentLevel);

  const advancing = useCountdown(reveal !== null, REVEAL_SECONDS, () => {
    if (isLast) {
      onBack();
      return;
    }
    setReveal(null);
    locked.current = false;
    setCurrentLevel(l => l + 1);
  }, currentLevel);

  const handleSelectWord = (wordObj: { id: string; text: string }) => {
    if (reveal !== null || locked.current) return;
    const newAvailable = availableWords.filter(w => w.id !== wordObj.id);
    setAvailableWords(newAvailable);

    const newSelected = [...selectedWords, wordObj];
    setSelectedWords(newSelected);

    if (newSelected.length === item.words.length) {
      const builtText = newSelected.map(w => w.text).join(' ');
      handleSettle(builtText);
    }
  };

  const handleReturnWord = (wordObj: { id: string; text: string }) => {
    if (reveal !== null || locked.current) return;
    setSelectedWords(selectedWords.filter(w => w.id !== wordObj.id));
    setAvailableWords([...availableWords, wordObj]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-[#171B24]">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <LeaveGameButton exitTo="/" onLeave={onBack} />
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-[#171B24]">Score: <strong className="text-[#3156C9]">{score}</strong></span>
          <Button variant="secondary" size="sm" onClick={() => setShowLevelMap(true)}>
            Level {currentLevel} / {VERSE_BUILDER_ITEMS.length}
          </Button>
        </div>
      </div>

      {showLevelMap ? (
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#171B24]/10">
          <LevelMap
            totalLevels={VERSE_BUILDER_ITEMS.length}
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
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/10 text-center">
          <div className="flex justify-between items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-[#3156C9]/10 text-xs font-bold text-[#3156C9] uppercase tracking-wider">
              Verse Builder • {item.reference}
            </span>
            {reveal === null && (
              <span className="tabular-nums font-mono text-[#D66B3D] font-bold text-lg">⏱ {answering.secondsLeft}s</span>
            )}
          </div>

          <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#171B24] mt-3 mb-6">
            Tap word tiles in correct order to reconstruct verse
          </h2>

          {/* Assembly Tray */}
          <div className="min-h-[110px] bg-[#F3EBDD] rounded-2xl p-4 border-2 border-dashed border-[#171B24]/20 flex flex-wrap gap-2.5 items-center justify-center mb-8 touch-manipulation">
            {selectedWords.map((w) => (
              <button
                key={w.id}
                disabled={reveal !== null}
                onClick={() => handleReturnWord(w)}
                className="px-4 py-3 rounded-2xl bg-[#171B24] text-white text-sm sm:text-base font-medium shadow-md hover:bg-rose-600 transition-colors cursor-pointer min-h-[44px] min-w-[44px] disabled:cursor-default"
              >
                {w.text}
              </button>
            ))}
            {selectedWords.length === 0 && (
              <span className="text-sm text-[#171B24]/50">Tap word tiles below to place them here in sequence</span>
            )}
          </div>

          {/* Word Pool */}
          <div className="flex flex-wrap gap-3 justify-center mb-8 touch-manipulation">
            {availableWords.map((w) => (
              <button
                key={w.id}
                disabled={reveal !== null}
                onClick={() => handleSelectWord(w)}
                className="px-4 py-3 rounded-2xl bg-white text-[#171B24] text-sm sm:text-base font-medium border border-[#171B24]/20 hover:bg-[#3156C9] hover:text-white transition-all shadow-sm cursor-pointer min-h-[44px] min-w-[44px] disabled:cursor-default"
              >
                {w.text}
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
