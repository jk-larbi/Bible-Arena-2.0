import React, { useState, useEffect, useRef } from 'react';
import { LevelMap } from '../LevelMap';
import { ResultsScreen } from '../ResultsScreen';
import { LeaveGameButton } from '../LeaveGameButton';
import { AnswerFeedback, type Reveal } from '../AnswerFeedback';
import { AutoAdvanceBar } from '../AutoAdvanceBar';
import { useCountdown } from '../../hooks/useCountdown';
import {
  getLevelMap,
  startLevel,
  finishLevel,
  getLevelChallenges,
  submitChallengeAnswer,
  CHALLENGES_PER_LEVEL,
  type LevelNode,
  type LevelResult,
} from '../../lib/levels';
import type { ChallengeItem } from '../../data/bibleContentBank';
import { Lightbulb, ArrowUp, ArrowDown, RotateCcw, CheckCircle2 } from 'lucide-react';

interface BaseGameProps {
  gameId: string;
  gameName: string;
  onBack: () => void;
  renderGame?: (
    level: number,
    attemptId: string,
    content: ChallengeItem[],
    onFinish: (attemptId: string, index: number, answer: string, duration: number) => void
  ) => React.ReactNode;
}

const QUESTION_SECONDS = 35;
const REVEAL_SECONDS = 5;

export const BaseGame: React.FC<BaseGameProps> = ({ gameId, gameName, onBack }) => {
  const [levels, setLevels] = useState<LevelNode[]>([]);
  const [loadingMap, setLoadingMap] = useState(true);
  const [attempt, setAttempt] = useState<{ attemptId: string; startIndex: number } | null>(null);
  const [level, setLevel] = useState<number | null>(null);
  const [challenges, setChallenges] = useState<ChallengeItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0); // 0..9
  const [result, setResult] = useState<LevelResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Interactive per-mechanic state
  const [scramblePicked, setScramblePicked] = useState<number[]>([]);
  const [versePicked, setVersePicked] = useState<number[]>([]);
  const [timelineOrder, setTimelineOrder] = useState<string[]>([]);
  const [clueStep, setClueStep] = useState(1);
  const [wordSearchFound, setWordSearchFound] = useState<string[]>([]);
  const [crosswordAcross, setCrosswordAcross] = useState('');
  const [crosswordDown, setCrosswordDown] = useState('');
  const [matchSelectedLeft, setMatchSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [memoryFlipped, setMemoryFlipped] = useState<number[]>([]);
  const [memorySolved, setMemorySolved] = useState<number[]>([]);
  const [memoryCards, setMemoryCards] = useState<{ id: number; text: string; pairKey: string }[]>([]);

  const locked = useRef(false);
  const challengeStart = useRef(Date.now());

  const refreshMap = async () => {
    setLoadingMap(true);
    try {
      const nodes = await getLevelMap(gameId);
      setLevels(nodes);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoadingMap(false);
    }
  };

  useEffect(() => {
    refreshMap();
  }, [gameId]);

  const currentChallenge: ChallengeItem | undefined = challenges[currentIdx];

  // Reset interactive state whenever challenge changes
  useEffect(() => {
    setReveal(null);
    setHintsUsed(0);
    setShowHint(false);
    setScramblePicked([]);
    setVersePicked([]);
    setClueStep(1);
    setWordSearchFound([]);
    setCrosswordAcross('');
    setCrosswordDown('');
    setMatchSelectedLeft(null);
    setMatchedPairs({});
    setMemoryFlipped([]);
    setMemorySolved([]);
    locked.current = false;
    challengeStart.current = Date.now();

    if (currentChallenge) {
      if (gameId === 'bible-timeline' || gameId === 'bible-puzzles') {
        setTimelineOrder([...currentChallenge.options]);
      }
      if (gameId === 'bible-memory-challenge') {
        const pairs: { a: string; b: string }[] = currentChallenge.metadata?.memoryPairs || [];
        const deck: { id: number; text: string; pairKey: string }[] = [];
        pairs.forEach((p, idx) => {
          deck.push({ id: idx * 2, text: p.a, pairKey: `pair-${idx}` });
          deck.push({ id: idx * 2 + 1, text: p.b, pairKey: `pair-${idx}` });
        });
        // Shuffle deterministically by challenge index
        setMemoryCards(
          deck.sort((a, b) => ((a.id * 7 + currentIdx) % 5) - ((b.id * 7 + currentIdx) % 5))
        );
      }
    }
  }, [currentIdx, currentChallenge?.id, gameId]);

  async function handlePlay(lvl: number, restart: boolean) {
    setError(null);
    try {
      const [started, loadedChallenges] = await Promise.all([
        startLevel(gameId, lvl, restart),
        getLevelChallenges(gameId, lvl),
      ]);
      setAttempt(started);
      setLevel(lvl);
      setChallenges(loadedChallenges);
      setCurrentIdx(Math.min(started.startIndex, CHALLENGES_PER_LEVEL - 1));
      setResult(null);
      setReveal(null);
    } catch (e) {
      setError((e as Error).message);
    }
  }

  async function settleAnswer(pickedAnswer: string | null) {
    if (locked.current || !attempt || !currentChallenge) return;
    locked.current = true;
    setError(null);

    const duration = Math.max(100, Date.now() - challengeStart.current);
    try {
      const res = await submitChallengeAnswer(
        attempt.attemptId,
        currentIdx + 1,
        pickedAnswer ?? '',
        hintsUsed,
        duration
      );

      setReveal({
        is_correct: res.is_correct,
        correct_answer: res.correct_answer,
        explanation: res.explanation,
        reference: res.reference,
        picked: pickedAnswer,
      });
    } catch (e) {
      locked.current = false;
      setError((e as Error).message);
    }
  }

  const answering = useCountdown(
    Boolean(attempt && !result && reveal === null && currentChallenge),
    QUESTION_SECONDS,
    () => settleAnswer(null),
    currentIdx
  );

  const isLastChallenge = currentIdx === CHALLENGES_PER_LEVEL - 1;

  const advancing = useCountdown(
    reveal !== null && !result,
    REVEAL_SECONDS,
    async () => {
      if (!attempt) return;
      if (isLastChallenge) {
        try {
          const finalRes = await finishLevel(attempt.attemptId);
          setResult(finalRes);
          await refreshMap();
        } catch (e) {
          setError((e as Error).message);
        }
        return;
      }
      setReveal(null);
      locked.current = false;
      setCurrentIdx((idx) => idx + 1);
    },
    currentIdx
  );

  const handleUseHint = () => {
    setShowHint(true);
    setHintsUsed((h) => h + 1);
    if (gameId === 'bible-character-quest' || gameId === 'bible-detective') {
      setClueStep((s) => Math.min(3, s + 1));
    }
  };

  if (result && level !== null) {
    const nextNode = levels.find((l) => l.level === level + 1);
    return (
      <ResultsScreen
        gameName={gameName}
        level={level}
        result={result}
        nextLevelAvailable={Boolean(nextNode?.is_published ?? level < 50)}
        onNext={() => handlePlay(level + 1, true)}
        onReplay={() => handlePlay(level, true)}
        onBack={() => {
          setResult(null);
          setAttempt(null);
          setLevel(null);
          refreshMap();
        }}
      />
    );
  }

  if (!attempt || level === null) {
    return (
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#171B24]/15 text-sm font-semibold text-[#171B24] hover:bg-[#F3EBDD] cursor-pointer"
          >
            ← Back to Game Library
          </button>
          {error && (
            <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg">
              {error}
            </span>
          )}
        </div>
        {loadingMap ? (
          <div className="rounded-2xl bg-[#171B24] p-8 text-center text-[#F3EBDD]">
            Loading levels for {gameName}...
          </div>
        ) : (
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <LevelMap gameName={gameName} levels={levels} onPlay={handlePlay} />
          </div>
        )}
      </div>
    );
  }

  if (!currentChallenge) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <p className="text-base font-semibold">Loading challenge {currentIdx + 1} of 10...</p>
      </div>
    );
  }

  // Render mechanic-specific interactive body
  const renderMechanicUI = () => {
    // 1. SCRIPTURE SCRAMBLE (Letter tile rearranging)
    if (gameId === 'scripture-scramble') {
      const letters = currentChallenge.options;
      const builtWord = scramblePicked.map((idx) => letters[idx]).join('');
      return (
        <div className="space-y-6">
          <div className="min-h-[64px] p-4 rounded-2xl bg-[#F3EBDD] border-2 border-dashed border-[#171B24]/20 flex flex-wrap items-center justify-center gap-2">
            {scramblePicked.length === 0 ? (
              <span className="text-sm text-[#171B24]/50">Tap scrambled letters below to spell the biblical word</span>
            ) : (
              scramblePicked.map((letterIdx, pos) => (
                <button
                  key={`picked-${pos}`}
                  disabled={reveal !== null}
                  onClick={() => setScramblePicked(scramblePicked.filter((_, i) => i !== pos))}
                  className="w-11 h-12 rounded-xl bg-[#171B24] text-white font-serif font-bold text-lg flex items-center justify-center shadow cursor-pointer"
                >
                  {letters[letterIdx]}
                </button>
              ))
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {letters.map((char, idx) => {
              const used = scramblePicked.includes(idx);
              return (
                <button
                  key={`pool-${idx}`}
                  disabled={used || reveal !== null}
                  onClick={() => {
                    const next = [...scramblePicked, idx];
                    setScramblePicked(next);
                    const candidate = next.map((i) => letters[i]).join('');
                    if (candidate.length === letters.length) {
                      settleAnswer(candidate);
                    }
                  }}
                  className={`w-11 h-12 rounded-xl font-serif font-bold text-lg flex items-center justify-center border transition-all cursor-pointer ${
                    used
                      ? 'bg-stone-200 text-stone-400 opacity-40 cursor-not-allowed'
                      : 'bg-white text-[#171B24] border-[#171B24]/20 hover:bg-[#D66B3D] hover:text-white shadow-sm'
                  }`}
                >
                  {char}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-3">
            <button
              disabled={reveal !== null || scramblePicked.length === 0}
              onClick={() => setScramblePicked([])}
              className="px-4 py-2.5 rounded-xl border border-[#171B24]/20 text-xs font-semibold hover:bg-[#F3EBDD] inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear Letters
            </button>
            <button
              disabled={reveal !== null || builtWord.length === 0}
              onClick={() => settleAnswer(builtWord)}
              className="px-6 py-2.5 rounded-xl bg-[#D66B3D] text-white text-sm font-bold hover:bg-[#c25a2c] cursor-pointer disabled:opacity-40"
            >
              Check Word
            </button>
          </div>
        </div>
      );
    }

    // 2. VERSE BUILDER (Word tile assembly)
    if (gameId === 'verse-builder') {
      const words = currentChallenge.options;
      const builtSentence = versePicked.map((idx) => words[idx]).join(' ');
      return (
        <div className="space-y-6">
          <div className="min-h-[88px] p-4 rounded-2xl bg-[#F3EBDD] border-2 border-dashed border-[#171B24]/20 flex flex-wrap items-center justify-center gap-2">
            {versePicked.length === 0 ? (
              <span className="text-sm text-[#171B24]/50">Tap word tiles in sequence to assemble the verse</span>
            ) : (
              versePicked.map((wIdx, pos) => (
                <button
                  key={`vb-picked-${pos}`}
                  disabled={reveal !== null}
                  onClick={() => setVersePicked(versePicked.filter((_, i) => i !== pos))}
                  className="px-3.5 py-2 rounded-xl bg-[#171B24] text-white text-sm font-semibold shadow cursor-pointer"
                >
                  {words[wIdx]}
                </button>
              ))
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {words.map((word, idx) => {
              const used = versePicked.includes(idx);
              return (
                <button
                  key={`vb-pool-${idx}`}
                  disabled={used || reveal !== null}
                  onClick={() => {
                    const next = [...versePicked, idx];
                    setVersePicked(next);
                    if (next.length === words.length) {
                      settleAnswer(next.map((i) => words[i]).join(' '));
                    }
                  }}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                    used
                      ? 'bg-stone-200 text-stone-400 opacity-40 cursor-not-allowed'
                      : 'bg-white text-[#171B24] border-[#171B24]/20 hover:bg-[#3156C9] hover:text-white'
                  }`}
                >
                  {word}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-3">
            <button
              disabled={reveal !== null || versePicked.length === 0}
              onClick={() => setVersePicked([])}
              className="px-4 py-2.5 rounded-xl border border-[#171B24]/20 text-xs font-semibold hover:bg-[#F3EBDD] cursor-pointer disabled:opacity-40"
            >
              Reset Tiles
            </button>
            <button
              disabled={reveal !== null || versePicked.length === 0}
              onClick={() => settleAnswer(builtSentence)}
              className="px-6 py-2.5 rounded-xl bg-[#D66B3D] text-white text-sm font-bold cursor-pointer disabled:opacity-40"
            >
              Submit Verse
            </button>
          </div>
        </div>
      );
    }

    // 3. BIBLE TIMELINE & BIBLE PUZZLES (Chronological / Fragment Ordering)
    if (gameId === 'bible-timeline' || gameId === 'bible-puzzles') {
      const separator = gameId === 'bible-timeline' ? ' -> ' : ' | ';
      const moveItem = (idx: number, dir: -1 | 1) => {
        const target = idx + dir;
        if (target < 0 || target >= timelineOrder.length) return;
        const copy = [...timelineOrder];
        [copy[idx], copy[target]] = [copy[target], copy[idx]];
        setTimelineOrder(copy);
      };
      return (
        <div className="space-y-4">
          <div className="space-y-2.5">
            {timelineOrder.map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F3EBDD] border border-[#171B24]/15"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#171B24] text-white text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="font-serif font-bold text-base text-[#171B24]">{item}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    disabled={reveal !== null || idx === 0}
                    onClick={() => moveItem(idx, -1)}
                    aria-label="Move up"
                    className="p-2 rounded-lg bg-white border border-[#171B24]/15 disabled:opacity-30 cursor-pointer"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <button
                    disabled={reveal !== null || idx === timelineOrder.length - 1}
                    onClick={() => moveItem(idx, 1)}
                    aria-label="Move down"
                    className="p-2 rounded-lg bg-white border border-[#171B24]/15 disabled:opacity-30 cursor-pointer"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            disabled={reveal !== null}
            onClick={() => settleAnswer(timelineOrder.join(separator))}
            className="w-full min-h-[48px] rounded-xl bg-[#D66B3D] text-white font-bold text-base hover:bg-[#c25a2c] cursor-pointer"
          >
            {gameId === 'bible-timeline' ? 'Verify Chronological Order' : 'Assemble Sacred Mosaic'}
          </button>
        </div>
      );
    }

    // 4. BIBLE WORD SEARCH (Interactive word-finding grid)
    if (gameId === 'bible-word-search') {
      const targetWords: string[] = currentChallenge.metadata?.words || currentChallenge.options;
      return (
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2 justify-center">
            {targetWords.map((w) => {
              const found = wordSearchFound.includes(w);
              return (
                <button
                  key={w}
                  disabled={reveal !== null || found}
                  onClick={() => {
                    const next = [...wordSearchFound, w];
                    setWordSearchFound(next);
                    if (next.length === targetWords.length) {
                      settleAnswer(targetWords.join(','));
                    }
                  }}
                  className={`px-4 py-2 rounded-xl font-mono text-sm font-bold border transition-all cursor-pointer ${
                    found
                      ? 'bg-emerald-700 text-white border-emerald-700 line-through'
                      : 'bg-[#F3EBDD] text-[#171B24] border-[#171B24]/20 hover:bg-[#3156C9] hover:text-white'
                  }`}
                >
                  {found ? `✓ ${w}` : `Locate: ${w}`}
                </button>
              );
            })}
          </div>
          <div className="bg-[#171B24] text-[#F3EBDD] p-4 rounded-2xl font-mono text-center tracking-widest text-sm sm:text-base space-y-1.5 select-none">
            {targetWords.map((w, rIdx) => {
              const pad = 'ABCDEFGHJKLMNPQRSTVWXYZ';
              const rowStr = (
                pad.slice(rIdx, rIdx + 2) +
                w +
                pad.slice(rIdx + 2, rIdx + 10)
              ).slice(0, 10);
              return (
                <div key={rIdx} className="flex justify-center gap-2">
                  {rowStr.split('').map((ch, cIdx) => (
                    <span
                      key={cIdx}
                      className="w-7 h-7 rounded bg-white/10 flex items-center justify-center font-bold"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-center text-[#5A6275]">
            Spot each hidden biblical word in the letter matrix above and tap its tag to mark it found.
          </p>
        </div>
      );
    }

    // 5. BIBLE CROSSWORD (Intersecting Across & Down Clues)
    if (gameId === 'bible-crossword') {
      const acrossAns: string = currentChallenge.metadata?.acrossAnswer || currentChallenge.options[0] || '';
      const downAns: string = currentChallenge.metadata?.downAnswer || currentChallenge.options[1] || '';
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F3EBDD] border border-[#171B24]/15">
              <label className="block text-xs font-bold uppercase text-[#D66B3D] mb-1">
                Across ({acrossAns.length} letters)
              </label>
              <p className="text-xs text-[#171B24]/80 mb-2">{currentChallenge.metadata?.acrossClue}</p>
              <input
                type="text"
                disabled={reveal !== null}
                value={crosswordAcross}
                onChange={(e) => setCrosswordAcross(e.target.value.toUpperCase())}
                placeholder={`Starts with ${acrossAns[0] || ''}...`}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#171B24]/20 font-mono uppercase font-bold"
              />
            </div>
            <div className="p-4 rounded-2xl bg-[#F3EBDD] border border-[#171B24]/15">
              <label className="block text-xs font-bold uppercase text-[#3156C9] mb-1">
                Down ({downAns.length} letters)
              </label>
              <p className="text-xs text-[#171B24]/80 mb-2">{currentChallenge.metadata?.downClue}</p>
              <input
                type="text"
                disabled={reveal !== null}
                value={crosswordDown}
                onChange={(e) => setCrosswordDown(e.target.value.toUpperCase())}
                placeholder={`Starts with ${downAns[0] || ''}...`}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#171B24]/20 font-mono uppercase font-bold"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-between items-center">
            <button
              type="button"
              disabled={reveal !== null}
              onClick={() => {
                setCrosswordAcross(acrossAns);
                setCrosswordDown(downAns);
              }}
              className="text-xs font-semibold text-[#3156C9] underline cursor-pointer"
            >
              Auto-fill intersecting letters ({acrossAns} / {downAns})
            </button>
            <button
              type="button"
              disabled={reveal !== null}
              onClick={() => settleAnswer(`${crosswordAcross.trim()}|${crosswordDown.trim()}`)}
              className="px-6 py-2.5 rounded-xl bg-[#D66B3D] text-white font-bold text-sm cursor-pointer"
            >
              Submit Crossword
            </button>
          </div>
        </div>
      );
    }

    // 6. BIBLE MATCH-UP (Pair matching)
    if (gameId === 'bible-match-up') {
      const pairs: { left: string; right: string }[] = currentChallenge.metadata?.pairs || [];
      const leftItems = pairs.map((p) => p.left);
      const rightItems = pairs.map((p) => p.right);
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#5A6275]">1. Select Biblical Figure</span>
              {leftItems.map((left) => {
                const isMatched = Boolean(matchedPairs[left]);
                const isSelected = matchSelectedLeft === left;
                return (
                  <button
                    key={left}
                    disabled={reveal !== null || isMatched}
                    onClick={() => setMatchSelectedLeft(left)}
                    className={`w-full p-3 rounded-xl text-left text-sm font-bold border transition-all cursor-pointer ${
                      isMatched
                        ? 'bg-emerald-100 border-emerald-600 text-emerald-900'
                        : isSelected
                        ? 'bg-[#3156C9] text-white border-[#3156C9]'
                        : 'bg-white border-[#171B24]/15 hover:bg-[#F3EBDD]'
                    }`}
                  >
                    {left} {isMatched && '✓'}
                  </button>
                );
              })}
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#5A6275]">2. Match Defining Act</span>
              {rightItems.map((right) => {
                const alreadyUsed = Object.values(matchedPairs).includes(right);
                return (
                  <button
                    key={right}
                    disabled={reveal !== null || alreadyUsed || !matchSelectedLeft}
                    onClick={() => {
                      if (!matchSelectedLeft) return;
                      const next = { ...matchedPairs, [matchSelectedLeft]: right };
                      setMatchedPairs(next);
                      setMatchSelectedLeft(null);
                      if (Object.keys(next).length === pairs.length) {
                        const formatted = pairs.map((p) => `${p.left}=${next[p.left]}`).join('|');
                        settleAnswer(formatted);
                      }
                    }}
                    className={`w-full p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                      alreadyUsed
                        ? 'bg-stone-100 text-stone-400 border-stone-200'
                        : 'bg-[#F3EBDD] border-[#171B24]/15 hover:bg-[#D66B3D] hover:text-white'
                    }`}
                  >
                    {right}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    // 7. BIBLE MEMORY CHALLENGE (Flip-card pair matching)
    if (gameId === 'bible-memory-challenge' && memoryCards.length > 0) {
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {memoryCards.map((card, idx) => {
              const isSolved = memorySolved.includes(idx);
              const isFlipped = memoryFlipped.includes(idx) || isSolved;
              return (
                <button
                  key={card.id}
                  disabled={reveal !== null || isFlipped || memoryFlipped.length >= 2}
                  onClick={() => {
                    const nextFlipped = [...memoryFlipped, idx];
                    setMemoryFlipped(nextFlipped);
                    if (nextFlipped.length === 2) {
                      const [firstIdx, secondIdx] = nextFlipped;
                      if (memoryCards[firstIdx].pairKey === memoryCards[secondIdx].pairKey) {
                        const nextSolved = [...memorySolved, firstIdx, secondIdx];
                        setMemorySolved(nextSolved);
                        setMemoryFlipped([]);
                        if (nextSolved.length === memoryCards.length) {
                          settleAnswer(currentChallenge.correct_answer);
                        }
                      } else {
                        setTimeout(() => setMemoryFlipped([]), 700);
                      }
                    }
                  }}
                  className={`min-h-[80px] p-3 rounded-2xl font-serif font-bold text-sm border transition-all flex items-center justify-center text-center cursor-pointer ${
                    isSolved
                      ? 'bg-emerald-700 text-white border-emerald-700'
                      : isFlipped
                      ? 'bg-[#3156C9] text-white border-[#3156C9]'
                      : 'bg-[#F3EBDD] text-[#171B24] border-[#171B24]/20 hover:bg-[#D66B3D] hover:text-white'
                  }`}
                >
                  {isFlipped ? card.text : '✦ Tap to Flip'}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    // 8. Progressive Clues + Multiple Choice / Binary Classification / Standard Games
    const clues: string[] | undefined = currentChallenge.metadata?.clues;
    return (
      <div className="space-y-5">
        {clues && clues.length > 0 && (
          <div className="space-y-2 bg-[#F3EBDD] p-4 rounded-2xl border border-[#171B24]/15">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D66B3D]">
                Investigation Clues ({clueStep} of {clues.length} revealed)
              </span>
              {clueStep < clues.length && reveal === null && (
                <button
                  type="button"
                  onClick={handleUseHint}
                  className="text-xs font-bold text-[#3156C9] hover:underline cursor-pointer"
                >
                  + Reveal Next Clue
                </button>
              )}
            </div>
            {clues.slice(0, clueStep).map((c, idx) => (
              <p key={idx} className="text-sm text-[#171B24] font-medium">
                • {c}
              </p>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {currentChallenge.options.map((opt) => {
            let btnStyle =
              'bg-[#F3EBDD] text-[#171B24] border-[#171B24]/15 hover:bg-[#D66B3D] hover:text-white';
            if (reveal !== null) {
              if (opt.toLowerCase() === reveal.correct_answer.toLowerCase()) {
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
                onClick={() => settleAnswer(opt)}
                className={`min-h-[52px] p-4 rounded-2xl font-semibold text-left border transition-all cursor-pointer disabled:cursor-default ${btnStyle}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-[#171B24]">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <LeaveGameButton
          exitTo="/"
          onLeave={() => {
            setAttempt(null);
            setLevel(null);
            refreshMap();
          }}
        />
        <div className="flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-full bg-[#171B24] text-[#F3EBDD] text-xs font-bold">
            Level {level} • Challenge {currentIdx + 1} / {CHALLENGES_PER_LEVEL}
          </span>
          {reveal === null && (
            <span className="tabular-nums font-mono text-[#D66B3D] font-bold text-base">
              ⏱ {answering.secondsLeft}s
            </span>
          )}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D66B3D]">
            {gameName} • Scripture Reference: {currentChallenge.reference}
          </span>
          {reveal === null && !showHint && (
            <button
              type="button"
              onClick={handleUseHint}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#3156C9] hover:underline cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5" /> Hint
            </button>
          )}
        </div>

        {showHint && (
          <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
            <strong>Scriptural Hint:</strong> Look closely at passage{' '}
            <strong>{currentChallenge.reference}</strong> —{' '}
            {currentChallenge.explanation.slice(0, 75)}...
          </div>
        )}

        <h2
          className={`font-serif font-bold text-[#171B24] mb-6 ${
            gameId === 'guess-the-emoji' ? 'text-4xl sm:text-6xl text-center py-6 bg-[#171B24] rounded-2xl text-white' : 'text-xl sm:text-2xl'
          }`}
        >
          {currentChallenge.question_text}
        </h2>

        {renderMechanicUI()}

        {error && (
          <p className="mt-4 text-sm text-red-600 font-semibold" role="alert">
            {error}
          </p>
        )}

        {reveal && (
          <div className="mt-6">
            <AnswerFeedback r={reveal} />
            <AutoAdvanceBar
              progress={advancing.progress}
              secondsLeft={advancing.secondsLeft}
              isLast={isLastChallenge}
            />
          </div>
        )}
      </div>
    </div>
  );
};
