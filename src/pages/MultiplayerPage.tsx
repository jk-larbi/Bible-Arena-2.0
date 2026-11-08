import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import jsQR from 'jsqr';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { GAMES_LIST, GameInfo } from '../data/gamesList';
import { createRoom, isValidCode, normalizeCode } from '../lib/rooms';
import { useSession } from '../lib/auth';
import { BackButton } from '../components/BackButton';
import {
  Users,
  Gamepad2,
  QrCode,
  KeyRound,
  SlidersHorizontal,
  Camera,
  ArrowRight,
  Upload,
  Video,
  AlertCircle
} from 'lucide-react';

export const MultiplayerPage: React.FC = () => {
  const nav = useNavigate();
  const { user } = useSession();

  // Navigation & Modal States
  const [isHostModalOpen, setIsHostModalOpen] = useState(false);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);

  // Host Configuration State
  const [selectedGame, setSelectedGame] = useState<GameInfo>(GAMES_LIST[0]);
  const [displayName, setDisplayName] = useState(
    user?.user_metadata?.username || user?.user_metadata?.full_name || ''
  );
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [timeLimit, setTimeLimit] = useState<number>(20);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  // Join PIN State
  const [pinCode, setPinCode] = useState('');

  // Camera / QR Scan State
  const [scanInputUrl, setScanInputUrl] = useState('');
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [decodingPhoto, setDecodingPhoto] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const processScannedText = useCallback((raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return false;

    // Check URL pattern e.g. https://.../join/ABC123 or /join/ABC123
    const match = trimmed.match(/\/join\/([ABCDEFGHJKLMNPQRSTUVWXYZ2-9]{6})/i);
    if (match?.[1]) {
      setIsScanModalOpen(false);
      nav(`/join/${match[1].toUpperCase()}`);
      return true;
    }

    // Check direct 6-character room PIN
    const normalized = normalizeCode(trimmed);
    if (isValidCode(normalized)) {
      setIsScanModalOpen(false);
      nav(`/join/${normalized}`);
      return true;
    }

    return false;
  }, [nav]);

  // Scan video frames in real time
  const scanVideoFrame = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.readyState < 2) {
      animationFrameRef.current = requestAnimationFrame(scanVideoFrame);
      return;
    }

    try {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (ctx && canvas.width > 0 && canvas.height > 0) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });
        if (code && code.data) {
          const handled = processScannedText(code.data);
          if (handled) return; // Stop scanning once successfully decoded
        }
      }
    } catch {
      // Ignore frame read errors
    }

    animationFrameRef.current = requestAnimationFrame(scanVideoFrame);
  }, [processScannedText]);

  // Manage Camera Feed when Scanner Modal opens/closes
  useEffect(() => {
    if (!isScanModalOpen) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
      }
      setCameraActive(false);
      setCameraError(null);
      return;
    }

    let isMounted = true;

    async function startCamera() {
      setCameraError(null);
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('Camera access is not supported on this browser.');
        }
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment', width: { ideal: 640 }, height: { ideal: 480 } }
        });
        if (!isMounted) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        mediaStreamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute('playsinline', 'true');
          await videoRef.current.play();
        }
        setCameraActive(true);
        animationFrameRef.current = requestAnimationFrame(scanVideoFrame);
      } catch (err) {
        console.warn('Camera stream error:', err);
        setCameraError('Camera access unavailable. Use image upload or enter room PIN below.');
        setCameraActive(false);
      }
    }

    startCamera();

    return () => {
      isMounted = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
      }
    };
  }, [isScanModalOpen, scanVideoFrame]);

  const handleHostGameAction = async () => {
    setError('');
    const name = displayName.trim() || 'Player';
    setBusy(true);
    try {
      const room = await createRoom(selectedGame.id, name, {
        difficulty,
        questionCount,
        timeLimit
      });
      setIsHostModalOpen(false);
      nav(`/room/${room.id}`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const handleJoinWithPin = () => {
    const code = normalizeCode(pinCode);
    if (code) {
      nav(`/join/${code}`);
    } else {
      nav('/join');
    }
  };

  const handleOpenScannedUrl = () => {
    const trimmed = scanInputUrl.trim();
    if (!trimmed) return;
    
    // Extract PIN if full URL is pasted e.g. https://.../join/ABC123
    const match = trimmed.match(/\/join\/([ABCDEFGHJKLMNPQRSTUVWXYZ2-9]{6})/i);
    if (match?.[1]) {
      setIsScanModalOpen(false);
      nav(`/join/${match[1].toUpperCase()}`);
    } else if (isValidCode(normalizeCode(trimmed))) {
      setIsScanModalOpen(false);
      nav(`/join/${normalizeCode(trimmed)}`);
    } else if (trimmed.startsWith('http')) {
      window.location.href = trimmed;
    } else {
      setError('Invalid QR code URL or PIN.');
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 text-[#171B24] sm:px-6 sm:py-8 lg:px-8">
      <div className="mb-8 flex items-center">
        <BackButton fallback="/" />
      </div>

      <header className="mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-12">
        <span className="inline-flex items-center rounded-full bg-[#D66B3D]/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#D66B3D]">
          Multiplayer arenas
        </span>
        <h1 className="font-serif text-3xl font-extrabold leading-tight tracking-tight text-[#171B24] sm:text-5xl sm:leading-[1.12]">
          Play Bible Games Together
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-7 text-[#171B24]/70 sm:text-base">
          Create a live room with friends, scan an invitation, or enter a room PIN to join the match.
        </p>
      </header>

      {error && (
        <div role="alert" className="mx-auto mb-6 max-w-2xl rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-center text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <section aria-label="Multiplayer options" className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        <article className="flex min-h-[350px] flex-col rounded-[28px] border border-[#171B24]/[0.08] bg-white p-6 shadow-[0_12px_30px_rgba(23,27,36,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(23,27,36,0.12)] sm:min-h-[380px] sm:p-7">
          <div className="mb-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#D66B3D] text-white shadow-md">
            <Gamepad2 className="h-7 w-7" />
          </div>
          <div className="mb-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#D66B3D]">Start a match</p>
            <h2 className="mb-3 font-serif text-[26px] font-bold leading-tight text-[#171B24] sm:text-[28px]">Host a Game</h2>
            <p className="max-w-[34ch] text-[15px] leading-7 text-[#5A6275]">
              Choose a Bible game, set the rules, and create a room with its own QR code and PIN.
            </p>
          </div>
          <div className="mt-auto">
            <Button variant="primary" size="lg" className="min-h-[54px] w-full justify-center bg-[#D66B3D] text-white shadow-sm hover:bg-[#c25a2c]" onClick={() => setIsHostModalOpen(true)}>
              <span>Choose Game & Host</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </article>

        <article className="flex min-h-[350px] flex-col rounded-[28px] border border-[#171B24]/[0.08] bg-white p-6 shadow-[0_12px_30px_rgba(23,27,36,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(23,27,36,0.12)] sm:min-h-[380px] sm:p-7">
          <div className="mb-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#3156C9] text-white shadow-md">
            <QrCode className="h-7 w-7" />
          </div>
          <div className="mb-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#3156C9]">Quick join</p>
            <h2 className="mb-3 font-serif text-[26px] font-bold leading-tight text-[#171B24] sm:text-[28px]">Scan QR Code</h2>
            <p className="max-w-[34ch] text-[15px] leading-7 text-[#5A6275]">
              Scan the host’s QR code with your camera or upload a saved QR image to join instantly.
            </p>
          </div>
          <div className="mt-auto">
            <Button variant="primary" size="lg" className="min-h-[54px] w-full justify-center bg-[#3156C9] text-white shadow-sm hover:bg-[#2544A5]" onClick={() => setIsScanModalOpen(true)}>
              <Camera className="mr-2 h-4 w-4" />
              <span>Open QR Scanner</span>
            </Button>
          </div>
        </article>

        <article className="flex min-h-[350px] flex-col rounded-[28px] border border-[#171B24]/[0.08] bg-white p-6 shadow-[0_12px_30px_rgba(23,27,36,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(23,27,36,0.12)] sm:col-span-2 sm:min-h-[300px] sm:p-7 xl:col-span-1 xl:min-h-[380px]">
          <div className="mb-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#171B24] text-white shadow-md">
            <KeyRound className="h-7 w-7" />
          </div>
          <div className="mb-6">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5A6275]">Enter invitation</p>
            <h2 className="mb-3 font-serif text-[26px] font-bold leading-tight text-[#171B24] sm:text-[28px]">Join with PIN</h2>
            <p className="max-w-[34ch] text-[15px] leading-7 text-[#5A6275]">
              Have a room code from your host? Enter the 6-character PIN below to join the waiting room.
            </p>
          </div>
          <div className="mt-auto space-y-3">
            <label htmlFor="multiplayer-room-pin" className="sr-only">Six-character room PIN</label>
            <input
              id="multiplayer-room-pin"
              type="text"
              value={pinCode}
              onChange={(e) => setPinCode(normalizeCode(e.target.value).slice(0, 6))}
              onKeyDown={(e) => { if (e.key === 'Enter' && pinCode.length === 6 && isValidCode(pinCode)) handleJoinWithPin(); }}
              placeholder="ENTER PIN"
              maxLength={6}
              autoCapitalize="characters"
              autoComplete="off"
              className="h-[54px] w-full rounded-2xl border border-[#171B24]/15 bg-[#F3EBDD] px-4 text-center font-mono text-lg font-bold uppercase tracking-[0.28em] text-[#171B24] placeholder:font-medium placeholder:tracking-[0.22em] placeholder:text-[#7A7F89] focus:border-[#3156C9] focus:outline-none focus:ring-2 focus:ring-[#3156C9]/20"
            />
            <Button variant="secondary" size="lg" className="min-h-[54px] w-full justify-center bg-[#171B24] text-white hover:bg-[#2b3140]" onClick={handleJoinWithPin} disabled={pinCode.length > 0 && !isValidCode(pinCode)}>
              Enter Room <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </article>
      </section>

      {/* Host Game Modal */}
      <Modal
        isOpen={isHostModalOpen}
        onClose={() => setIsHostModalOpen(false)}
        title="Host a Live Game Room"
      >
        <div className="space-y-6 text-[#171B24]">
          {/* 1. Select Game */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5A6275]">
              1. Choose Game to Host
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
              {GAMES_LIST.map((game) => {
                const isSelected = selectedGame.id === game.id;
                return (
                  <div
                    key={game.id}
                    onClick={() => setSelectedGame(game)}
                    className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D66B3D] ${
                      isSelected
                        ? 'bg-[#3156C9] text-white border-[#3156C9] shadow-sm font-bold'
                        : 'bg-[#F3EBDD] border-[#171B24]/10 hover:bg-[#EADBCE]'
                    }`}
                  >
                    <div className="w-[76px] h-[62px] rounded-xl overflow-hidden shrink-0 bg-[#171B24]/10 border border-black/5">
                      <img
                        src={`${import.meta.env.BASE_URL}assets/games/${game.imageFile.replace(/\.(png|jpe?g)$/i, '.webp')}`}
                        alt={`${game.title} game artwork`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onError={(event) => {
                          const image = event.currentTarget;
                          if (!image.src.endsWith(game.imageFile)) {
                            image.src = `${import.meta.env.BASE_URL}assets/games/${game.imageFile}`;
                          }
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm leading-snug line-clamp-2">{game.title}</p>
                      <p className={`text-[10px] truncate ${isSelected ? 'text-white/80' : 'text-[#5A6275]'}`}>
                        {game.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#3156C9]/20 bg-[#3156C9]/5 p-3">
              <img
                src={`${import.meta.env.BASE_URL}assets/games/${selectedGame.imageFile.replace(/\.(png|jpe?g)$/i, '.webp')}`}
                alt={`${selectedGame.title} selected artwork`}
                className="h-16 w-24 rounded-xl object-cover bg-white"
                onError={(event) => {
                  event.currentTarget.src = `${import.meta.env.BASE_URL}assets/games/${selectedGame.imageFile}`;
                }}
              />
              <div className="min-w-0 text-left">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#3156C9]">Selected for hosting</p>
                <p className="font-bold text-sm text-[#171B24]">{selectedGame.title}</p>
                <p className="text-[11px] text-[#5A6275]">{selectedGame.category}</p>
              </div>
            </div>
          </div>

          {/* 2. Display Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5A6275] mb-1">
              2. Your Host Display Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="e.g. Scholar Grace"
              maxLength={24}
              className="w-full px-4 py-3 rounded-xl bg-[#F3EBDD] border border-[#171B24]/15 font-semibold text-sm text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#3156C9]"
            />
          </div>

          {/* 3. Game Settings (Difficulty, Questions, Time) */}
          <div className="p-4 bg-[#F3EBDD]/60 rounded-2xl border border-[#171B24]/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3156C9]">
              <SlidersHorizontal className="w-4 h-4" /> Room Rules & Settings
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block font-semibold mb-1 text-[#5A6275]">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl bg-white border border-[#171B24]/15 font-semibold text-[#171B24]"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-[#5A6275]">Questions</label>
                <select
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl bg-white border border-[#171B24]/15 font-semibold text-[#171B24]"
                >
                  <option value={5}>5 Questions</option>
                  <option value={10}>10 Questions</option>
                  <option value={15}>15 Questions</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-[#5A6275]">Timer / Question</label>
                <select
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl bg-white border border-[#171B24]/15 font-semibold text-[#171B24]"
                >
                  <option value={15}>15 Seconds</option>
                  <option value={20}>20 Seconds</option>
                  <option value={30}>30 Seconds</option>
                </select>
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full bg-[#D66B3D] hover:bg-[#c25a2c] text-white min-h-[48px]"
            onClick={handleHostGameAction}
            disabled={busy || displayName.trim().length < 2}
          >
            {busy ? 'Generating Room & QR Code…' : `Host ${selectedGame.title} Now`}
          </Button>
        </div>
      </Modal>

      {/* Live Camera & QR Code Scanner Modal */}
      <Modal
        isOpen={isScanModalOpen}
        onClose={() => setIsScanModalOpen(false)}
        title="Live Camera QR Scanner"
      >
        <div className="space-y-4 text-center text-[#171B24]">
          {/* Camera Viewfinder View */}
          <div className="relative overflow-hidden rounded-2xl bg-[#171B24] aspect-video border-2 border-[#171B24] flex items-center justify-center shadow-inner">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={`w-full h-full object-cover ${cameraActive ? 'block' : 'hidden'}`}
            />

            {/* Laser Scan Reticle Overlay */}
            {cameraActive && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-48 h-48 border-2 border-dashed border-[#D66B3D] rounded-2xl relative flex items-center justify-center shadow-2xl">
                  <div className="w-full h-0.5 bg-[#D66B3D] absolute animate-pulse shadow-[0_0_8px_#D66B3D]" />
                </div>
                <p className="mt-3 text-[11px] font-bold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                  Point camera at host's QR Code
                </p>
              </div>
            )}

            {!cameraActive && (
              <div className="p-6 text-center text-white/80 space-y-2">
                <Video className="w-8 h-8 mx-auto text-[#D66B3D] animate-bounce" />
                <p className="text-xs font-semibold">
                  {cameraError || 'Initializing camera stream…'}
                </p>
              </div>
            )}
          </div>

          {/* Upload Photo Option */}
          <div className="p-3 bg-[#F3EBDD] rounded-xl flex items-center justify-between border border-[#171B24]/10 text-xs">
            <span className="font-semibold text-[#5A6275]">Have a saved QR image?</span>
            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#171B24]/15 font-bold text-[#171B24] hover:bg-[#171B24] hover:text-white transition-colors cursor-pointer shadow-xs">
              <Upload className="w-3.5 h-3.5 text-[#3156C9]" />
              <span>{decodingPhoto ? 'Scanning Photo…' : 'Select QR Photo'}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                disabled={decodingPhoto}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  setDecodingPhoto(true);
                  setError('');
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const img = new Image();
                    img.onload = () => {
                      try {
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        if (!ctx) throw new Error('Could not initialize canvas context');
                        ctx.drawImage(img, 0, 0);
                        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        const code = jsQR(imageData.data, imageData.width, imageData.height);
                        if (code && code.data) {
                          const handled = processScannedText(code.data);
                          if (!handled) {
                            setScanInputUrl(code.data);
                          }
                        } else {
                          setError('No valid QR code was detected in this photo. Please enter the room PIN below.');
                        }
                      } catch (decodeErr) {
                        setError('Could not decode photo: ' + (decodeErr as Error).message);
                      } finally {
                        setDecodingPhoto(false);
                      }
                    };
                    img.onerror = () => {
                      setError('Failed to load image file.');
                      setDecodingPhoto(false);
                    };
                    img.src = event.target?.result as string;
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </label>
          </div>

          {/* Fallback Text Input */}
          <div className="space-y-2 text-left">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5A6275]">
              Invitation URL or Scanned PIN
            </label>
            <input
              type="text"
              value={scanInputUrl}
              onChange={(e) => setScanInputUrl(e.target.value)}
              placeholder="e.g. ABC123 or https://.../join/ABC123"
              className="w-full px-4 py-3 rounded-xl bg-[#F3EBDD] border border-[#171B24]/15 font-mono text-sm text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#3156C9]"
            />
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full bg-[#3156C9] hover:bg-[#2544A5] text-white min-h-[48px]"
            onClick={handleOpenScannedUrl}
            disabled={!scanInputUrl.trim()}
          >
            Join Scanned Room
          </Button>
        </div>
      </Modal>
    </div>
  );
};
