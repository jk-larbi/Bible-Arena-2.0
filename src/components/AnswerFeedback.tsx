export type Reveal = {
  is_correct: boolean | null;       // null in multiplayer when you haven't answered yet
  correct_answer: string;
  explanation: string | null;
  reference: string | null;
  picked: string | null;
  marks_awarded?: number;
  is_new_marks?: boolean;
};

export function AnswerFeedback({ r }: { r: Reveal }) {
  const label = r.picked === null ? "Time's up" : r.is_correct ? 'Correct' : 'Incorrect';
  const marksText = r.is_correct
    ? r.is_new_marks === false
      ? '+10 Marks (Level Replay • Already Mastered)'
      : '+10 Marks Earned!'
    : '0 Marks';

  return (
    <section className="mt-4 rounded-2xl bg-[#F3EBDD] p-5 text-[#171B24] border border-[#171B24]/10 shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
        <p className="text-xl font-bold flex items-center gap-2">
          <span className={r.is_correct ? 'text-emerald-700' : 'text-rose-700'}>
            {r.is_correct ? '✓' : '✕'} {label}
          </span>
        </p>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            r.is_correct ? 'bg-emerald-600 text-white shadow-sm' : 'bg-stone-300 text-stone-700'
          }`}
        >
          {marksText}
        </span>
      </div>
      <p className="mt-1 text-base">
        Correct Answer: <strong className="text-[#171B24]">{r.correct_answer}</strong>
      </p>
      {r.reference && (
        <p className="mt-2 text-sm font-bold text-[#3156C9]">
          Scripture Reference: {r.reference}
        </p>
      )}
      {r.explanation && (
        <p className="mt-2 text-sm text-[#171B24]/90 leading-relaxed bg-white/60 p-3 rounded-xl border border-[#171B24]/10">
          {r.explanation}
        </p>
      )}
    </section>
  );
}
