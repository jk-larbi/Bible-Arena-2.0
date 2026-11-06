import React, { useState, useEffect, useMemo, useRef } from 'react';
import { EMOJI_PUZZLES, EmojiPuzzle } from '../data/emojiQuestions';
import { Button } from '../components/Button';
import { LevelMap } from '../components/LevelMap';
import { 
  ArrowLeft, 
  BookOpen, 
  Sparkles, 
  Flame,
  Send
} from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { AutoAdvanceBar } from '../components/AutoAdvanceBar';
import { AnswerFeedback, Reveal } from '../components/AnswerFeedback';
import { LeaveGameButton } from '../components/LeaveGameButton';

interface GuessTheEmojiProps {
  onBack: () => void;
  onCompleteLevel: (gameId: string, level: number, score: number) => void;
}

const QUESTION_SECONDS = 30;
const REVEAL_SECONDS = 5;

export const GuessTheEmoji: React.FC<GuessTheEmojiProps> = ({ onBack, onCompleteLevel }) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [maxCompleted, setMaxCompleted] = useState(0);
  const [showLevelMap, setShowLevelMap] = useState(false);
  
  const [gameMode, setGameMode] = useState<'timed' | 'practice'>('timed');

  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAttempted, setTotalAttempted] = useState(0);

  const currentPuzzle: EmojiPuzzle = useMemo(() => {
    const idx = (currentLevel - 1) % EMOJI_PUZZLES.length;
    return EMOJI_PUZZLES[idx];
  }, [currentLevel]);

  const isLast = currentLevel === 100;

  const [userInput, setUserInput] = useState('');
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const locked = useRef(false);

  useEffect(() => {
    setUserInput('');
    setReveal(null);
    locked.current = false;
  }, [currentLevel]);

  const normalize = (str: string) => {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
  };

  const evaluateAnswer = (answerText: string): boolean => {
    const normInput = normalize(answerText);
    if (!normInput) return false;
    if (normalize(currentPuzzle.answer) === normInput) return true;
    return currentPuzzle.acceptedAnswers.some(
      (variant) => normalize(variant) === normInput
    );
  };

  function processAnswerResult(chosenText: string | null) {
    if (locked.current) return;
    locked.current = true;

    const correct = chosenText ? evaluateAnswer(chosenText) : false;
    setTotalAttempted((prev) => prev + 1);

    if (correct) {
      setCorrectCount((prev) => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);

      const timeBonus = gameMode === 'timed' ? answering.secondsLeft * 10 : 50;
      const roundScore = Math.max(50, 150 + timeBonus);

      setScore((s) => s + roundScore);
      if (currentLevel > maxCompleted) setMaxCompleted(currentLevel);
      onCompleteLevel('guess-the-emoji', currentLevel, roundScore);
    } else {
      setStreak(0);
    }

    setReveal({
      is_correct: correct,
      correct_answer: currentPuzzle.answer,
      explanation: currentPuzzle.explanation,
      reference: currentPuzzle.reference,
      picked: chosenText
    });
  }

  const answering = useCountdown(reveal === null && gameMode === 'timed', QUESTION_SECONDS, () => processAnswerResult(null), currentLevel);

  const advancing = useCountdown(reveal !== null, REVEAL_SECONDS, () => {
    if (isLast) {
      onBack();
      return;
    }
    setReveal(null);
    locked.current = false;
    setCurrentLevel(lvl => Math.min(lvl + 1, 100));
  }, currentLevel);

  const handleSubmitText = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (reveal !== null || !userInput.trim()) return;
    processAnswerResult(userInput);
  };

  const handleSelectOption = (optionText: string) => {
    if (reveal !== null) return;
    processAnswerResult(optionText);
  };

  const accuracyPct = totalAttempted > 0 
    ? Math.round((correctCount / totalAttempted) * 100) 
    : 100;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-[#171B24]">
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <LeaveGameButton exitTo="/" onLeave={onBack} />

        <div className="flex items-center gap-3">
          <div className="bg-[#171B24]/10 p-1 rounded-full flex items-center text-xs font-semibold">
            <button
              onClick={() => setGameMode('timed')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                gameMode === 'timed' ? 'bg-[#171B24] text-[#F3EBDD]' : 'text-[#171B24]/70 hover:text-[#171B24]'
              }`}
            >
              Timed
            </button>
            <button
              onClick={() => setGameMode('practice')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                gameMode === 'practice' ? 'bg-[#171B24] text-[#F3EBDD]' : 'text-[#171B24]/70 hover:text-[#171B24]'
              }`}
            >
              Practice
            </button>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold">
            <Flame className="w-4 h-4 text-[#D66B3D] fill-[#D66B3D]" />
            <span>Streak: {streak}</span>
          </div>

          <span className="text-sm font-semibold text-[#171B24]">
            Score: <strong className="text-[#D66B3D] font-mono">{score}</strong>
          </span>

          <Button variant="secondary" size="sm" onClick={() => setShowLevelMap(true)}>
            Level {currentLevel} / 100
          </Button>
        </div>
      </div>

      {showLevelMap ? (
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#171B24]/10">
          <LevelMap
            totalLevels={100}
            currentLevel={currentLevel}
            maxCompleted={maxCompleted}
            onSelectLevel={(lvl) => {
              setCurrentLevel(lvl);
              setShowLevelMap(false);
            }}
          />
          <div className="text-center mt-6">
            <Button variant="secondary" onClick={() => setShowLevelMap(false)}>Resume Emoji Quest</Button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#171B24]/15 relative">
          
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-[#D66B3D]/10 text-xs font-bold text-[#D66B3D] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Guess The Emoji • Level {currentLevel} ({currentPuzzle.difficulty})
            </span>

            {gameMode === 'timed' && reveal === null && (
              <span className="tabular-nums font-mono text-[#D66B3D] font-bold text-lg">⏱ {answering.secondsLeft}s</span>
            )}
          </div>

          {/* EMOJI DISPLAY CARD */}
          <div className="bg-gradient-to-br from-[#171B24] via-[#222836] to-[#0A0D14] rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl border border-white/10 mb-8 relative overflow-hidden group">
            <span className="text-xs uppercase font-semibold text-amber-300/80 tracking-widest block mb-3">
              Category: {currentPuzzle.category}
            </span>

            <div className="text-5xl sm:text-7xl md:text-8xl tracking-widest my-4 filter drop-shadow-lg animate-fadeIn select-none">
              {currentPuzzle.emojis}
            </div>
          </div>

          {/* INPUT AREA */}
          {reveal === null ? (
            <div className="space-y-6">
              {currentPuzzle.options && currentPuzzle.options.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#171B24]/60 block mb-3 text-center">
                    Tap to Choose Your Answer
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentPuzzle.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelectOption(opt)}
                        className="w-full min-h-[52px] px-4 py-3 rounded-2xl bg-[#F3EBDD] hover:bg-[#D66B3D] hover:text-white text-[#171B24] font-semibold text-sm sm:text-base border border-[#171B24]/15 shadow-sm transition-all cursor-pointer text-center"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmitText} className="pt-2">
                <div className="flex gap-2 max-w-xl mx-auto">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Or type answer here..."
                    className="flex-1 px-4 py-3.5 rounded-2xl bg-white border border-[#171B24]/20 text-[#171B24] text-base focus:outline-none focus:ring-2 focus:ring-[#D66B3D] shadow-inner"
                  />
                  <Button type="submit" variant="primary" size="md" icon={<Send className="w-4 h-4" />}>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <AnswerFeedback r={reveal} />
              <AutoAdvanceBar progress={advancing.progress} secondsLeft={advancing.secondsLeft} isLast={isLast} />
            </div>
          )}

          {/* STATS SUMMARY */}
          <div className="mt-8 pt-6 border-t border-[#171B24]/10 grid grid-cols-3 text-center text-xs text-[#171B24]/70">
            <div>
              <span className="block text-[10px] uppercase font-bold text-[#171B24]/40">Accuracy</span>
              <strong className="text-sm font-bold text-[#171B24] font-mono">{accuracyPct}%</strong>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-[#171B24]/40">Solved</span>
              <strong className="text-sm font-bold text-emerald-700 font-mono">{correctCount} Puzzles</strong>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-[#171B24]/40">Best Streak</span>
              <strong className="text-sm font-bold text-[#D66B3D] font-mono">{bestStreak} 🔥</strong>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
