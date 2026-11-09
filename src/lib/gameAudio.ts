type GameSound = 'correct' | 'incorrect' | 'tick' | 'complete' | 'enabled' | 'select' | 'start' | 'hint' | 'reward' | 'navigate';

let sharedAudioContext: AudioContext | null = null;
let unlockListenersInstalled = false;
let soundEnabled = true;
let audioUnlocked = false;
let ambientNodes: AudioNode[] = [];
let ambientOscillators: OscillatorNode[] = [];

function readSoundPreference(): boolean {
  try { return localStorage.getItem('biblearena-game-sound') !== 'off'; } catch { return true; }
}

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

function stopAmbient(): void {
  ambientOscillators.forEach((oscillator) => {
    try { oscillator.stop(); } catch { /* Already stopped. */ }
    try { oscillator.disconnect(); } catch { /* Already disconnected. */ }
  });
  ambientNodes.forEach((node) => {
    try { node.disconnect(); } catch { /* Already disconnected. */ }
  });
  ambientOscillators = [];
  ambientNodes = [];
}

function startAmbient(): void {
  if (!soundEnabled || !audioUnlocked || ambientOscillators.length > 0) return;
  const context = getAudioContext();
  if (!context || context.state !== 'running') return;

  try {
    // A quiet, original synthesized ambient chord. No external audio file or network request.
    const master = context.createGain();
    const filter = context.createBiquadFilter();
    const lfo = context.createOscillator();
    const lfoDepth = context.createGain();
    master.gain.setValueAtTime(0.0001, context.currentTime);
    master.gain.linearRampToValueAtTime(0.075, context.currentTime + 1.8);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(720, context.currentTime);
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.075, context.currentTime);
    lfoDepth.gain.setValueAtTime(0.012, context.currentTime);
    lfo.connect(lfoDepth);
    lfoDepth.connect(master.gain);
    filter.connect(master);
    master.connect(context.destination);

    [146.83, 196, 220].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const voiceGain = context.createGain();
      oscillator.type = index === 1 ? 'triangle' : 'sine';
      oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      voiceGain.gain.setValueAtTime(index === 0 ? 0.48 : index === 1 ? 0.34 : 0.28, context.currentTime);
      oscillator.connect(voiceGain);
      voiceGain.connect(filter);
      oscillator.start();
      ambientOscillators.push(oscillator);
      ambientNodes.push(voiceGain);
    });
    lfo.start();
    ambientOscillators.push(lfo);
    ambientNodes.push(lfoDepth, filter, master);
  } catch {
    stopAmbient();
  }
}

/** Start or resume audio only after a real user gesture, as required by mobile browsers. */
export function unlockBibleArenaAudio(): void {
  const context = getAudioContext();
  if (!context) return;
  audioUnlocked = true;
  context.onstatechange = () => {
    if (context.state === 'running' && soundEnabled) startAmbient();
  };
  try {
    const resume = context.state === 'running' ? Promise.resolve() : context.resume();
    void resume.then(() => {
      if (soundEnabled) startAmbient();
    }).catch(() => undefined);
  } catch { /* Audio is optional and must never block gameplay. */ }
}

function syncSoundPreference(): void {
  soundEnabled = readSoundPreference();
  if (!soundEnabled) {
    stopAmbient();
    return;
  }
  if (audioUnlocked) unlockBibleArenaAudio();
}

/** Install app-wide sound: background ambience plus subtle feedback for interactive controls. */
export function installBibleArenaAudioUnlock(): () => void {
  if (typeof document === 'undefined') return () => undefined;
  if (!unlockListenersInstalled) {
    const unlock = () => unlockBibleArenaAudio();
    const interactionSound = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const control = target.closest('button, a, [role="button"], [data-audio-click]');
      if (!control || control.hasAttribute('data-audio-silent') || control.getAttribute('aria-pressed') === 'true' && control.getAttribute('aria-label')?.toLowerCase().includes('mute')) return;
      const label = (control.getAttribute('aria-label') || control.textContent || '').toLowerCase();
      if (label.includes('sound') || label.includes('mute')) return;
      playBibleArenaSound('select', soundEnabled);
    };
    document.addEventListener('pointerdown', unlock, { capture: true, passive: true });
    document.addEventListener('touchend', unlock, { capture: true, passive: true });
    document.addEventListener('keydown', unlock, { capture: true });
    document.addEventListener('click', unlock, { capture: true, passive: true });
    document.addEventListener('click', interactionSound, true);
    window.addEventListener('biblearena:sound-change', syncSoundPreference);
    window.addEventListener('storage', syncSoundPreference);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && audioUnlocked && soundEnabled) unlockBibleArenaAudio();
    });
    soundEnabled = readSoundPreference();
    unlockListenersInstalled = true;
  }
  return () => undefined;
}

export function playBibleArenaSound(kind: GameSound, enabled = true, force = false): void {
  if ((!enabled || !soundEnabled) && !force) return;
  const context = getAudioContext();
  if (!context) return;
  unlockBibleArenaAudio();

  const patterns: Record<GameSound, number[]> = {
    correct: [587.33, 739.99, 880],
    incorrect: [293.66, 220],
    tick: [740],
    complete: [523.25, 659.25, 783.99, 1046.5],
    enabled: [659.25, 783.99, 987.77],
    select: [880],
    start: [392, 523.25, 659.25],
    hint: [659.25, 783.99],
    reward: [659.25, 783.99, 1046.5, 1318.51],
    navigate: [523.25, 659.25],
  };
  const notes = patterns[kind];
  const now = context.currentTime + 0.025;
  const spacing = kind === 'tick' || kind === 'select' ? 0 : 0.12;
  const peak = kind === 'tick' ? 0.055 : kind === 'select' ? 0.035 : kind === 'incorrect' ? 0.09 : 0.13;
  const duration = kind === 'tick' || kind === 'select' ? 0.075 : 0.2;

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
