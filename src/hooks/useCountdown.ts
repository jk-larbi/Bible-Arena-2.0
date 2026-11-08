import { useEffect, useRef, useState } from 'react';

/** Counts down `seconds`, then calls onZero once. Restarts when `active` or `resetKey` changes. */
export function useCountdown(active: boolean, seconds: number, onZero: () => void, resetKey: unknown = 0, bonusSeconds = 0) {
  const [left, setLeft] = useState(seconds);
  const cb = useRef(onZero);
  const bonusRef = useRef(bonusSeconds);
  cb.current = onZero;
  bonusRef.current = bonusSeconds;

  useEffect(() => {
    setLeft(seconds);
    if (!active) return;
    let appliedBonus = bonusRef.current;
    let end = Date.now() + (seconds + appliedBonus) * 1000;
    let fired = false;
    const id = setInterval(() => {
      const nextBonus = bonusRef.current;
      if (nextBonus !== appliedBonus) {
        end += (nextBonus - appliedBonus) * 1000;
        appliedBonus = nextBonus;
      }
      const ms = Math.max(0, end - Date.now());
      setLeft(ms / 1000);
      if (ms === 0 && !fired) { fired = true; clearInterval(id); cb.current(); }
    }, 100);
    return () => clearInterval(id);
  }, [active, seconds, resetKey]);

  return { secondsLeft: Math.ceil(left), progress: seconds > 0 ? left / seconds : 0 };
}
