type GameSound = 'correct' | 'incorrect' | 'tick' | 'complete' | 'enabled' | 'select' | 'start' | 'hint' | 'reward' | 'navigate';

let sharedAudioContext: AudioContext | null = null;
let masterVolumeNode: GainNode | null = null;
let masterVolume = 0.65;
let unlockListenersInstalled = false;
let soundEnabled = true;
let audioUnlocked = false;
let ambientNodes: AudioNode[] = [];
let ambientOscillators: OscillatorNode[] = [];

function readSoundPreference(): boolean {
  try { return localStorage.getItem('biblearena-game-sound') !== 'off'; } catch { return true; }
}

function readMasterVolume(): number {
  try {
    const saved = localStorage.getItem('biblearena-master-volume');
    if (saved === null) return 0.65;
    const value = Number(saved);
    return Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0.65;
  } catch { return 0.65; }
}

function getMasterVolumeNode(context: AudioContext): GainNode {
  if (!masterVolumeNode || masterVolumeNode.context !== context) {
    masterVolumeNode = context.createGain();
    masterVolumeNode.gain.value = masterVolume;
    masterVolumeNode.connect(context.destination);
  }
  return masterVolumeNode;
}

export function getBibleArenaVolume(): number { masterVolume = readMasterVolume(); return masterVolume; }

export function setBibleArenaVolume(value: number): void {
  masterVolume = Math.max(0, Math.min(1, value));
  try { localStorage.setItem('biblearena-master-volume', String(masterVolume)); } catch { /* volume still applies for this session */ }
  const context = getAudioContext();
  if (context) getMasterVolumeNode(context).gain.setTargetAtTime(masterVolume, context.currentTime, 0.035);
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
    masterVolume = readMasterVolume();
    return sharedAudioContext;
  } catch {
    return null;
  }
}

let celebrationSources: OscillatorNode[] = [];

function stopLevelCelebration(): void {
  celebrationSources.forEach((source) => {
    try { source.stop(); } catch { /* Already stopped. */ }
    try { source.disconnect(); } catch { /* Already disconnected. */ }
  });
  celebrationSources = [];
}

/**
 * A short original Ghanaian highlife-gospel-inspired instrumental flourish.
 * It is intentionally reserved for the level-results moment; answer sounds
 * remain unchanged. All notes are generated locally with Web Audio.
 */
export function playLevelCelebration(enabled = true): void {
  if (!enabled || !soundEnabled) return;
  const context = getAudioContext();
  if (!context || context.state !== 'running') return;

  stopLevelCelebration();
  const master = getMasterVolumeNode(context);
  const start = context.currentTime + 0.06;
  const beat = 60 / 112;
  const notes: Record<string, number> = {
    C3:130.81, G3:196, A3:220, F3:174.61,
    C4:261.63, E4:329.63, G4:392, A4:440,
    B4:493.88, C5:523.25, D5:587.33, E5:659.25, G5:783.99
  };

  const addTone = (
    frequency: number,
    at: number,
    length: number,
    volume: number,
    wave: OscillatorType = 'triangle',
    endFrequency?: number
  ) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = wave;
    oscillator.frequency.setValueAtTime(frequency, at);
    if (endFrequency) oscillator.frequency.exponentialRampToValueAtTime(endFrequency, at + Math.min(0.12, length));
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.exponentialRampToValueAtTime(volume, at + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + length);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(at);
    oscillator.stop(at + length + 0.025);
    celebrationSources.push(oscillator);
    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
      celebrationSources = celebrationSources.filter((item) => item !== oscillator);
    };
  };

  try {
    // Four bright major-key bars: syncopated keys, moving bass and a joyful hook.
    const chords = [
      ['C4','E4','G4'], ['G4','B4','D5'],
      ['A4','C5','E5'], ['F4','A4','C5']
    ];
    const bass = ['C3','C3','G3','G3','A3','A3','F3','G3'];
    for (let bar = 0; bar < 4; bar++) {
      const barStart = start + bar * beat * 4;
      // Off-beat chord stabs create a light highlife bounce.
      [0.5, 1.5, 2.5, 3.5].forEach((halfBeat) => {
        chords[bar].forEach((note) => addTone(notes[note], barStart + halfBeat * beat, beat * 0.28, 0.035, 'triangle'));
      });
      [0, 1, 2, 3].forEach((wholeBeat) => {
        const bassNote = bass[bar * 2 + (wholeBeat % 2)];
        addTone(notes[bassNote], barStart + wholeBeat * beat, beat * 0.72, 0.12, 'sine');
      });
      // A simple uplifting melody, deliberately original rather than a known song.
      const melody = [
        ['G4',0],['C5',0.75],['D5',1.5],['E5',2.25],['G5',3],
        ['D5',0],['G5',0.75],['E5',1.5],['D5',2.25],['B4',3],
        ['C5',0],['E5',0.75],['G5',1.5],['E5',2.25],['C5',3],
        ['A4',0],['C5',0.75],['D5',1.5],['C5',2.25],['G4',3]
      ] as Array<[string, number]>;
      melody.filter((_, index) => Math.floor(index / 5) === bar).forEach(([note, beatOffset]) => {
        addTone(notes[note], barStart + beatOffset * beat, beat * 0.48, 0.075, 'triangle');
      });
      // Soft kick on beats 1 and 3; clap-like snare on beats 2 and 4.
      [0, 2].forEach((b) => addTone(105, barStart + b * beat, 0.16, 0.17, 'sine', 48));
      [1, 3].forEach((b) => {
        addTone(190, barStart + b * beat, 0.09, 0.045, 'triangle', 120);
        addTone(720, barStart + b * beat, 0.035, 0.018, 'square');
      });
    }
  } catch {
    stopLevelCelebration();
  }
}

let ambientMusicSource: AudioBufferSourceNode | null = null;
let ambientMusicGain: GainNode | null = null;

function stopAmbient(): void {
  if (ambientMusicSource) {
    try { ambientMusicSource.stop(); } catch { /* Already stopped. */ }
    try { ambientMusicSource.disconnect(); } catch { /* Already disconnected. */ }
  }
  if (ambientMusicGain) {
    try { ambientMusicGain.disconnect(); } catch { /* Already disconnected. */ }
  }
  ambientMusicSource = null;
  ambientMusicGain = null;
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

/** Build a short, original, peaceful instrumental loop locally with Web Audio. */
function createBackgroundMusic(context: AudioContext): AudioBuffer {
  const sampleRate = context.sampleRate;
  const secondsPerBeat = 60 / 82;
  const barLength = secondsPerBeat * 4;
  const loopLength = barLength * 8;
  const buffer = context.createBuffer(1, Math.ceil(sampleRate * loopLength), sampleRate);
  const samples = buffer.getChannelData(0);

  const frequencies: Record<string, number> = {
    C3: 130.81, G3: 196, A3: 220, F3: 174.61,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23,
    G4: 392, A4: 440, B4: 493.88, C5: 523.25,
    D5: 587.33, E5: 659.25, G5: 783.99
  };

  const addNote = (frequency: number, start: number, duration: number, volume: number, tone: 'pad' | 'plucked' = 'plucked') => {
    const first = Math.max(0, Math.floor(start * sampleRate));
    const last = Math.min(samples.length, Math.floor((start + duration) * sampleRate));
    const attack = tone === 'pad' ? 0.22 : 0.012;
    const release = tone === 'pad' ? 0.38 : 0.16;
    for (let i = first; i < last; i++) {
      const t = i / sampleRate - start;
      const remaining = duration - t;
      const envelope = Math.min(1, t / attack, remaining / release);
      const fundamental = Math.sin(2 * Math.PI * frequency * t);
      const harmonic = Math.sin(2 * Math.PI * frequency * 2 * t) * (tone === 'pad' ? 0.18 : 0.28);
      const softThird = Math.sin(2 * Math.PI * frequency * 3 * t) * 0.06;
      samples[i] += (fundamental + harmonic + softThird) * Math.max(0, envelope) * volume;
    }
  };

  const chords = [
    { notes: ['C4', 'E4', 'G4'], bass: 'C3' },
    { notes: ['G3', 'B4', 'D5'], bass: 'G3' },
    { notes: ['A3', 'C4', 'E4'], bass: 'A3' },
    { notes: ['F4', 'A4', 'C5'], bass: 'F3' }
  ];
  Array.from({ length: 8 }, (_, bar) => chords[bar % 4]).forEach((chord, bar) => {
    const start = bar * barLength;
    chord.notes.forEach((note) => addNote(frequencies[note], start, barLength, 0.075, 'pad'));
    addNote(frequencies[chord.bass], start, barLength * 0.92, 0.13, 'pad');
    // Gentle broken-chord notes give the background a recognisable musical pulse.
    const arpeggio = [chord.notes[0], chord.notes[2], chord.notes[1], chord.notes[2]];
    arpeggio.forEach((note, beat) => addNote(frequencies[note], start + beat * secondsPerBeat, secondsPerBeat * 0.72, 0.085));
  });

  const melody: Array<[string, number, number]> = [
    ['G4',0,0.7],['C5',0.75,0.65],['D5',1.5,0.65],['E5',2.25,0.8],['D5',3.25,0.55],
    ['B4',4,0.7],['D5',4.75,0.65],['G5',5.5,0.8],['D5',6.5,0.55],
    ['C5',7,0.7],['E5',7.75,0.65],['D5',8.5,0.65],['C5',9.25,0.8],['A4',10.25,0.55],
    ['A4',11,0.7],['C5',11.75,0.65],['F5',12.5,0.8],['E5',13.5,0.55],['D5',14.25,0.6],['C5',15,0.8]
  ];
  // The four-bar melody is repeated with a slight variation in the second half.
  const extendedMelody = melody.concat(melody.map(([note, beat, duration]) => [note, beat + 16, duration] as [string, number, number]));
  extendedMelody.forEach(([note, beat, duration]) => {
    const frequency = frequencies[note] || (note === 'F5' ? 698.46 : 0);
    if (frequency) addNote(frequency, beat * secondsPerBeat, duration * secondsPerBeat, 0.11);
  });

  let peak = 0;
  for (let i = 0; i < samples.length; i++) peak = Math.max(peak, Math.abs(samples[i]));
  if (peak > 0.92) {
    const scale = 0.92 / peak;
    for (let i = 0; i < samples.length; i++) samples[i] *= scale;
  }
  return buffer;
}

function startAmbient(): void {
  if (!soundEnabled || !audioUnlocked || ambientMusicSource) return;
  const context = getAudioContext();
  if (!context || context.state !== 'running') return;
  try {
    const source = context.createBufferSource();
    const gain = context.createGain();
    source.buffer = createBackgroundMusic(context);
    source.loop = true;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.linearRampToValueAtTime(0.22, context.currentTime + 2.2);
    source.connect(gain);
    gain.connect(getMasterVolumeNode(context));
    source.start();
    ambientMusicSource = source;
    ambientMusicGain = gain;
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
      gain.connect(getMasterVolumeNode(context));
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
