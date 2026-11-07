import { useEffect, useState } from 'react';

export function useCountUp(target: number, duration: number, delay = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = Date.now() + delay;
    const update = () => {
      const now = Date.now();
      if (now < start) { requestAnimationFrame(update); return; }
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [target, duration, delay]);

  return value;
}
