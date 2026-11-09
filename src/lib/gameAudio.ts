type GameSound = 'correct' | 'incorrect' | 'tick' | 'complete' | 'enabled';

let sharedAudioContext: AudioContext | null = null;
let unlockListenersInstalled = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    const AudioContextClass = window.AudioContext
      || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!sharedAudioContext || sharedAudioContext.state === 'closed') {
      sharedAudioContext = new AudioContextClass();
    }
    return sharedAudioContext;
  } catch {
    return null;
  }
}

/** Call this directly from a real click/tap/key interaction to satisfy browser autoplay policies. */
export function unlockBibleArenaAudio(): void {
  const context = getAudioContext();
  if (!context || context.state === 'running') return;
  try { void context.resume().catch(() => undefined); } catch { /* Audio is optional. */ }
}

/** Install one shared gesture listener so audio can resume after a tab/app is backgrounded. */
export function installBibleArenaAudioUnlock(): () => void {
  if (typeof document === 'undefined') return () => undefined;
  if (!unlockListenersInstalled) {
    const unlock = () => unlockBibleArenaAudio();
    document.addEventListener('pointerdown', unlock, { capture: true, passive: true });
    document.addEventListener('touchend', unlock, { capture: true, passive: true });
    document.addEventListener('keydown', unlock, { capture: true });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        // The next pointer/key gesture performs the actual unlock if the browser suspended audio.
      }
    });
    unlockListenersInstalled = true;
  }
  return () => undefined;
}

export function playBibleArenaSound(kind: GameSound, enabled = true, force = false): void {
  if (!enabled && !force) return;
  const context = getAudioContext();
  if (!context) return;
  unlockBibleArenaAudio();

  const patterns: Record<GameSound, number[]> = {
    correct: [587.33, 739.99, 880],
    incorrect: [293.66, 220],
    tick: [740],
    complete: [523.25, 659.25, 783.99, 1046.5],
    enabled: [659.25, 783.99, 987.77],
  };
  const notes = patterns[kind];
  const now = context.currentTime + 0.025;
  const spacing = kind === 'tick' ? 0 : 0.12;
  const peak = kind === 'tick' ? 0.07 : kind === 'incorrect' ? 0.10 : 0.16;
  const duration = kind === 'tick' ? 0.10 : 0.22;

  try {
    notes.forEach((frequency, index) => {
      const start = now + index * spacing;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = kind === 'incorrect' ? 'triangle' : 'sine';
      oscillator.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(peak, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.025);
      oscillator.onended = () => {
        oscillator.disconnect();
        gain.disconnect();
      };
    });
  } catch {
    // Unsupported or interrupted audio must never block gameplay.
  }
}
