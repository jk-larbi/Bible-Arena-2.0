import { useEffect, useRef, useState } from 'react';

/** Counts down `seconds`, then calls onZero once. Restarts when `active` or `resetKey` changes. */
export function useCountdown(active: boolean, seconds: number, onZero: () => void, resetKey: unknown = 0) {
  const [left, setLeft] = useState(seconds);
  const cb = useRef(onZero);
  cb.current = onZero;

  useEffect(() => {
    setLeft(seconds);
    if (!active) return;
    const end = Date.now() + seconds * 1000;
    let fired = false;
    const id = setInterval(() => {
      const ms = Math.max(0, end - Date.now());
      setLeft(ms / 1000);
      if (ms === 0 && !fired) { fired = true; clearInterval(id); cb.current(); }
    }, 100);
    return () => clearInterval(id);
  }, [active, seconds, resetKey]);

  return { secondsLeft: Math.ceil(left), progress: seconds > 0 ? left / seconds : 0 };
}
