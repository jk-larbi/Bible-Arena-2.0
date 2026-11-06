import React, { useState, useEffect, useRef } from 'react';
import { SCRIPTURE_CHALLENGE_QUESTIONS, ChallengeQuestion } from '../data/initialQuestions';
import { Button } from '../components/Button';
import { LevelMap } from '../components/LevelMap';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { AutoAdvanceBar } from '../components/AutoAdvanceBar';
import { AnswerFeedback, Reveal } from '../components/AnswerFeedback';
import { LeaveGameButton } from '../components/LeaveGameButton';

interface ScriptureChallengeProps {
  onBack: () => void;
  onCompleteLevel: (gameId: string, level: number, score: number) => void;
}

const QUESTION_SECONDS = 20;
const REVEAL_SECONDS = 5; // one constant pause duration

export const ScriptureChallenge: React.FC<ScriptureChallengeProps> = ({ onBack, onCompleteLevel }) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [maxCompleted, setMaxCompleted] = useState(0);
  const [showLevelMap, setShowLevelMap] = useState(false);
  const [score, setScore] = useState(0);

  const [reveal, setReveal] = useState<Reveal | null>(null);
  const locked = useRef(false);

  const q: ChallengeQuestion = SCRIPTURE_CHALLENGE_QUESTIONS[(currentLevel - 1) % SCRIPTURE_CHALLENGE_QUESTIONS.length];
  const isLast = currentLevel === SCRIPTURE_CHALLENGE_QUESTIONS.length;

  useEffect(() => {
    setReveal(null);
    locked.current = false;
  }, [currentLevel]);

  function handleSettle(picked: string | null) {
    if (locked.current) return;
    locked.current = true;

    const isCorrect = picked !== null && picked === q.correctAnswer;
    if (isCorrect) {
      const earned = 100 + answering.secondsLeft * 10;
      setScore(s => s + earned);
      if (currentLevel > maxCompleted) setMaxCompleted(currentLevel);
      onCompleteLevel('scripture-challenge', currentLevel, earned);
    }

    setReveal({
      is_correct: isCorrect,
      correct_answer: q.correctAnswer,
      explanation: q.explanation,
      reference: q.reference,
      picked
    });
  }

  // Question timer
  const answering = useCountdown(reveal === null, QUESTION_SECONDS, () => handleSettle(null), currentLevel);

  // Auto-advance timer (5 seconds pause)
  const advancing = useCountdown(reveal !== null, REVEAL_SECONDS, () => {
    if (isLast) {
      onBack();
      return;
    }
    setReveal(null);
    locked.current = false;
    setCurrentLevel(l => l + 1);
  }, currentLevel);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-[#171B24]">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <LeaveGameButton exitTo="/" onLeave={onBack} />
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-[#171B24]">Score: <strong className="text-rose-700">{score}</strong></span>
          <Button variant="secondary" size="sm" onClick={() => setShowLevelMap(true)}>
            Level {currentLevel} / {SCRIPTURE_CHALLENGE_QUESTIONS.length}
          </Button>
        </div>
      </div>

      {showLevelMap ? (
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#171B24]/10">
          <LevelMap
            totalLevels={SCRIPTURE_CHALLENGE_QUESTIONS.length}
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
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#171B24]/10">
          <div className="flex justify-between items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-rose-600/10 text-xs font-bold text-rose-700 uppercase tracking-wider">
              Quiz • Level {currentLevel} ({q.difficulty})
            </span>
            {reveal === null && (
              <span className="tabular-nums font-mono text-[#D66B3D] font-bold text-lg">⏱ {answering.secondsLeft}s</span>
            )}
          </div>

          <h2 className="font-serif font-bold text-2xl text-[#171B24] mb-8">{q.question}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {q.options.map((opt) => {
              let btnStyle = 'bg-[#F3EBDD] text-[#171B24] border-[#171B24]/15 hover:bg-[#D66B3D] hover:text-white';
              if (reveal !== null) {
                if (opt === reveal.correct_answer) {
                  btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                } else if (opt === reveal.picked && !reveal.is_correct) {
                  btnStyle = 'bg-rose-600 text-white border-rose-600';
                } else {
                  btnStyle = 'bg-stone-100 text-stone-400 opacity-50';
                }
              }

              return (
                <button
                  key={opt}
                  disabled={reveal !== null}
                  onClick={() => handleSettle(opt)}
                  className={`p-4 rounded-2xl font-semibold text-left border transition-all cursor-pointer disabled:cursor-default ${btnStyle}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {reveal && (
            <div>
              <AnswerFeedback r={reveal} />
              <AutoAdvanceBar progress={advancing.progress} secondsLeft={advancing.secondsLeft} isLast={isLast} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
