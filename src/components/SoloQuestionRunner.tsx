import { useRef, useState } from 'react';
import { supabase, isBackendConfigured } from '../lib/supabase';
import { useCountdown } from '../hooks/useCountdown';
import { AutoAdvanceBar } from './AutoAdvanceBar';
import { AnswerFeedback, type Reveal } from './AnswerFeedback';

const QUESTION_SECONDS = 15;
const REVEAL_SECONDS = 5;   // change this one number to adjust the pause

export type Q = { id: string; prompt: string; options: string[]; explanation?: string; reference?: string; correctAnswer?: string };

export function SoloQuestionRunner({ questions, onFinish }: { questions: Q[]; onFinish: (correct: number) => void }) {
  const [i, setI] = useState(0);
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState('');
  const locked = useRef(false);               // blocks double taps and late answers
  const q = questions[i];
  const isLast = i === questions.length - 1;

  async function settle(picked: string | null) {
    if (locked.current) return;
    locked.current = true;
    setError('');

    let isCorrect = false;
    let correctAnswer = q.correctAnswer || '';
    let explanation = q.explanation || null;
    let reference = q.reference || null;

    if (!correctAnswer && !(isBackendConfigured && supabase)) {
      locked.current = false;
      setError('This question is missing its answer key. Please refresh or report this question.');
      return;
    }

    if (isBackendConfigured && supabase) {
      try {
        const { data, error } = await supabase.rpc('check_answer', { p_question_id: q.id, p_answer: picked ?? '' });
        if (!error && data?.[0]) {
          const row = data[0];
          const serverAnswer = String(row.correct_answer ?? '').trim();
          const localAnswer = String(q.correctAnswer ?? '').trim();
          if (serverAnswer && localAnswer && serverAnswer.toLowerCase() !== localAnswer.toLowerCase()) {
            // Never grade the displayed question against a stale server answer key.
            correctAnswer = localAnswer;
            explanation = q.explanation || null;
            reference = q.reference || null;
            isCorrect = picked !== null && picked.trim().toLowerCase() === localAnswer.toLowerCase();
          } else if (serverAnswer) {
            correctAnswer = serverAnswer;
            explanation = row.explanation ?? explanation;
            reference = row.reference ?? reference;
            isCorrect = Boolean(row.is_correct);
          } else {
            isCorrect = picked !== null && Boolean(localAnswer) && picked.trim().toLowerCase() === localAnswer.toLowerCase();
          }
        } else {
          isCorrect = picked !== null && Boolean(correctAnswer) && picked.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
        }
      } catch {
        isCorrect = picked !== null && Boolean(correctAnswer) && picked.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
      }
    } else {
      isCorrect = picked !== null && Boolean(correctAnswer) && picked.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
    }

    if (!correctAnswer.trim()) {
      locked.current = false;
      setError('This question has no verified answer key. Please refresh or report this question.');
      return;
    }

    if (picked !== null && isCorrect) setCorrect((c) => c + 1);
    setReveal({
      is_correct: isCorrect,
      correct_answer: correctAnswer,
      explanation,
      reference,
      picked
    });
  }

  // Question timer: when it hits zero, lock and reveal
  const answering = useCountdown(reveal === null, QUESTION_SECONDS, () => settle(null), i);

  // Reveal timer: when it hits zero, advance automatically
  const advancing = useCountdown(reveal !== null, REVEAL_SECONDS, () => {
    const finalCorrect = correct;
    if (isLast) { onFinish(finalCorrect); return; }
    setReveal(null);
    locked.current = false;
    setI((n) => n + 1);
  }, i);

  if (!q) return null;

  return (
    <div className="mx-auto max-w-xl p-4 text-[#171B24]">
      <div className="flex justify-between items-center text-sm font-semibold text-[#5A6275]">
        <span className="tabular-nums">Question {i + 1} of {questions.length}</span>
        {reveal === null && (
          <span className="tabular-nums font-mono text-base text-[#D66B3D]">⏱ {answering.secondsLeft}s</span>
        )}
      </div>

      <h2 className="mt-2 font-serif text-2xl font-bold">{q.prompt}</h2>

      <div className="mt-4 grid gap-3">
        {q.options.map((o) => {
          const isCorrect = reveal && o === reveal.correct_answer;
          const isWrongPick = reveal && o === reveal.picked && !reveal.is_correct;
          return (
            <button key={o} disabled={reveal !== null} onClick={() => settle(o)}
              className={`min-h-[48px] rounded-xl border p-3 text-left text-base font-semibold transition-all cursor-pointer disabled:cursor-default
                ${isCorrect ? 'border-green-600 bg-green-100 text-green-950 font-bold' : ''}
                ${isWrongPick ? 'border-red-600 bg-red-100 text-red-950' : ''}
                ${!reveal ? 'bg-white border-[#D4CEBF] hover:bg-[#F3EBDD]' : ''}`}>
              {o}
            </button>
          );
        })}
      </div>

      {error && <p className="mt-3 text-sm text-red-600" role="alert">{error}</p>}

      {reveal && (<>
        <AnswerFeedback r={reveal} />
        <AutoAdvanceBar progress={advancing.progress} secondsLeft={advancing.secondsLeft} isLast={isLast} />
      </>)}
    </div>
  );
}
