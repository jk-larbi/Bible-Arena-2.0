import React, { useState, useEffect } from 'react';
import { LevelMap } from '../LevelMap';
import { ResultsScreen } from '../ResultsScreen';
import { getLevelMap, startLevel, recordChallenge, finishLevel, type LevelNode, type LevelResult } from '../../lib/levels';

interface BaseGameProps {
  gameId: string;
  gameName: string;
  onBack: () => void;
  renderGame: (
    level: number, 
    attemptId: string, 
    content: any[], 
    onFinish: (attemptId: string, index: number, answer: string, duration: number) => void
  ) => React.ReactNode;
}

export const BaseGame: React.FC<BaseGameProps> = ({ gameId, gameName, onBack, renderGame }) => {
  const [levels, setLevels] = useState<LevelNode[]>([]);
  const [attempt, setAttempt] = useState<{ id: string; startIndex: number } | null>(null);
  const [level, setLevel] = useState<number | null>(null);
  const [result, setResult] = useState<LevelResult | null>(null);
  
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    getLevelMap(gameId).then(setLevels);
  }, [gameId]);

  useEffect(() => {
    if (level) {
      getLevelChallenges(gameId, level).then(setContent).catch(e => setError(e.message));
    }
  }, [gameId, level]);

  async function handlePlay(lvl: number, restart: boolean) {
    try {
        const s = await startLevel(gameId, lvl, restart);
        setAttempt(s);
        setLevel(lvl);
        setResult(null);
    } catch (e) { setError((e as Error).message); }
  }

  async function handleFinishChallenge(attemptId: string, index: number, answer: string, duration: number) {
      try {
          const { data, error } = await supabase.rpc('submit_challenge_answer', {
            p_attempt: attemptId,
            p_challenge_index: index,
            p_answer: answer,
            p_hints_used: 0,
            p_duration_ms: duration
          });
          if (error) throw error;
          
          if (index === 10) {
            setResult(await finishLevel(attemptId));
          }
      } catch (e) { setError((e as Error).message); }
  }

  if (result) {
    return <ResultsScreen 
        gameName={gameName} 
        level={level!} 
        result={result} 
        nextLevelAvailable={true} 
        onNext={() => handlePlay(level! + 1, true)}
        onReplay={() => handlePlay(level!, true)}
        onBack={onBack}
    />;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-[#171B24]">
      {!attempt ? (
        <LevelMap gameName={gameName} levels={levels} onPlay={handlePlay} />
      ) : (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#171B24]/10">
            <h2 className="font-serif font-bold text-2xl text-[#171B24] mb-8">{gameName} - Level {level}</h2>
            {content.length > 0 ? renderGame(level!, attempt.id, content, handleFinishChallenge) : <p>Loading challenges...</p>}
        </div>
      )}
    </div>
  );
};
