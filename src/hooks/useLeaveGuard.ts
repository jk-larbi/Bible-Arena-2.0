import { useEffect, useRef } from 'react';

/** While `active`, the browser/phone back gesture and tab close call `onAttempt` instead of leaving. */
export function useLeaveGuard(active: boolean, onAttempt: () => void) {
  const cb = useRef(onAttempt);
  cb.current = onAttempt;

  useEffect(() => {
    if (!active) return;
    window.history.pushState({ guard: true }, '');
    const onPop = () => { window.history.pushState({ guard: true }, ''); cb.current(); };
    const onUnload = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('popstate', onPop);
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [active]);
}
