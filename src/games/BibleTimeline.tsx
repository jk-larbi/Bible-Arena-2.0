import React, { useState, useEffect } from 'react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/initialQuestions';
import { Button } from '../components/Button';
import { ArrowLeft, CheckCircle2, ArrowUp, ArrowDown } from 'lucide-react';
import { LeaveGameButton } from '../components/LeaveGameButton';

interface BibleTimelineProps {
  onBack: () => void;
  onCompleteLevel: (gameId: string, level: number, score: number) => void;
}

export const BibleTimeline: React.FC<BibleTimelineProps> = ({ onBack, onCompleteLevel }) => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [isWon, setIsWon] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffled = [...TIMELINE_EVENTS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setEvents(shuffled);
    setIsWon(false);
  }, []);

  const moveEvent = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= events.length) return;
    const updated = [...events];
    const temp = updated[index];
    updated[index] = updated[newIndex];
    updated[newIndex] = temp;
    setEvents(updated);
  };

  const checkOrder = () => {
    let isCorrect = true;
    for (let i = 0; i < events.length - 1; i++) {
      if (events[i].year < events[i + 1].year) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      setIsWon(true);
      setScore(500);
      onCompleteLevel('bible-timeline', 1, 500);
    } else {
      alert('Not quite right yet! Check the historical epochs and try reordering.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <LeaveGameButton exitTo="/" onLeave={onBack} />
        <span className="text-sm font-semibold text-[#171B24]">Score: <strong className="text-emerald-700">{score}</strong></span>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/15">
        <div className="text-center mb-6">
          <span className="px-3 py-1 rounded-full bg-emerald-800/10 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            Chronology & Epochs
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#171B24] mt-2">Bible Timeline Challenge</h2>
          <p className="text-sm text-[#171B24]/70">Arrange historical biblical events from Creation (earliest) to Resurrection (latest)</p>
        </div>

        <div className="space-y-3 mb-8">
          {events.map((ev, index) => (
            <div key={ev.id} className="flex items-center justify-between bg-[#F3EBDD] p-4 rounded-2xl border border-[#171B24]/10 shadow-sm gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-[#171B24] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif font-bold text-base text-[#171B24] truncate">{ev.title}</h4>
                  <p className="text-xs text-[#171B24]/70 truncate">{ev.description} • <strong className="text-emerald-800">{ev.reference}</strong></p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => moveEvent(index, 'up')}
                  disabled={index === 0}
                  className="p-3 rounded-xl bg-white hover:bg-[#171B24]/10 disabled:opacity-30 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
                  aria-label="Move up"
                >
                  <ArrowUp className="w-4 h-4 text-[#171B24]" />
                </button>
                <button
                  onClick={() => moveEvent(index, 'down')}
                  disabled={index === events.length - 1}
                  className="p-3 rounded-xl bg-white hover:bg-[#171B24]/10 disabled:opacity-30 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
                  aria-label="Move down"
                >
                  <ArrowDown className="w-4 h-4 text-[#171B24]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {!isWon ? (
            <Button variant="primary" size="lg" className="min-h-[48px] w-full sm:w-auto" onClick={checkOrder}>
              Check Chronology
            </Button>
          ) : (
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center w-full animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h3 className="font-serif font-bold text-2xl text-emerald-900 mb-1">Timeline Perfectly Mastered!</h3>
              <p className="text-sm text-emerald-800">You earned 500 XP.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
