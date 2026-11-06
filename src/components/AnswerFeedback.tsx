export type Reveal = {
  is_correct: boolean | null;       // null in multiplayer when you haven't answered yet
  correct_answer: string;
  explanation: string | null;
  reference: string | null;
  picked: string | null;
};

export function AnswerFeedback({ r }: { r: Reveal }) {
  const label = r.picked === null ? "Time's up" : r.is_correct ? 'Correct' : 'Not quite';
  return (
    <section className="mt-4 rounded-2xl bg-[#F3EBDD] p-4 text-[#171B24]">
      <p className="text-lg font-bold">{label}</p>
      <p className="mt-1">Answer: <strong>{r.correct_answer}</strong></p>
      {r.explanation && <p className="mt-2 text-sm">{r.explanation}</p>}
      {r.reference && <p className="mt-1 text-sm font-semibold text-[#3156C9]">{r.reference}</p>}
    </section>
  );
}
