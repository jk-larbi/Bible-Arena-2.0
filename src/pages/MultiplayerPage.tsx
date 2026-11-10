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
  const questionCount = 150;
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

      <div className="mb-6 rounded-2xl border border-[#3156C9]/15 bg-white p-4 shadow-sm sm:flex sm:items-center sm:justify-between">
        <div><p className="font-extrabold text-[#171B24]">Create your own Scripture Challenge</p><p className="mt-1 text-sm text-[#5A6275]">Write Bible questions and invite friends with a link or code.</p></div>
        <button type="button" onClick={() => nav('/community-challenges')} className="mt-3 rounded-xl bg-[#3156C9] px-4 py-2.5 text-sm font-bold text-white sm:mt-0">Community Challenges</button>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
        <span className="px-3.5 py-1.5 rounded-full bg-[#D66B3D]/10 text-xs font-extrabold text-[#D66B3D] uppercase tracking-wider">
          Multiplayer Arenas
        </span>
        <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-[#171B24]">
          Live Bible Games & QR Rooms
        </h1>
        <p className="text-sm sm:text-base text-[#171B24]/70">
          Host a live match or join friends instantly by scanning a QR code or tapping an invite link.
        </p>
      </div>

      {error && (
        <div className="max-w-md mx-auto p-4 rounded-2xl bg-red-100 text-red-700 text-sm font-semibold text-center border border-red-200 mb-6">
          {error}
        </div>
      )}

      {/* Compact icon-and-label actions */}
      <div className="mx-auto grid w-full max-w-4xl grid-cols-3 items-stretch gap-3 sm:gap-5">
        <button
          type="button"
          onClick={() => setIsHostModalOpen(true)}
          aria-label="Host a Game"
          className="group flex min-h-[142px] w-full flex-col items-center justify-center gap-4 rounded-2xl border border-[#171B24]/10 bg-white px-2 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D66B3D]/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D66B3D]/20 active:scale-[0.98] sm:min-h-[170px] sm:gap-5 sm:rounded-3xl sm:py-6"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D66B3D] text-white shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-[72px] sm:w-[72px] sm:rounded-[1.4rem]">
            <Gamepad2 className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.1} />
          </span>
          <span className="block font-serif text-base font-bold leading-tight text-[#171B24] sm:text-xl">Host a Game</span>
        </button>

        <button
          type="button"
          onClick={() => setIsScanModalOpen(true)}
          aria-label="Scan QR Code"
          className="group flex min-h-[142px] w-full flex-col items-center justify-center gap-4 rounded-2xl border border-[#171B24]/10 bg-white px-2 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3156C9]/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3156C9]/20 active:scale-[0.98] sm:min-h-[170px] sm:gap-5 sm:rounded-3xl sm:py-6"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#3156C9] text-white shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-[72px] sm:w-[72px] sm:rounded-[1.4rem]">
            <QrCode className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.1} />
          </span>
          <span className="block font-serif text-base font-bold leading-tight text-[#171B24] sm:text-xl">Scan QR Code</span>
        </button>

        <button
          type="button"
          onClick={() => nav('/join')}
          aria-label="Join with PIN"
          className="group flex min-h-[142px] w-full flex-col items-center justify-center gap-4 rounded-2xl border border-[#171B24]/10 bg-white px-2 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#171B24]/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#171B24]/15 active:scale-[0.98] sm:min-h-[170px] sm:gap-5 sm:rounded-3xl sm:py-6"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#171B24] text-white shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-[72px] sm:w-[72px] sm:rounded-[1.4rem]">
            <KeyRound className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.1} />
          </span>
          <span className="block font-serif text-base font-bold leading-tight text-[#171B24] sm:text-xl">Join with PIN</span>
        </button>
      </div>

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
                <div className="w-full rounded-xl border border-[#171B24]/15 bg-white p-2.5 font-semibold text-[#171B24]">
                  All available questions
                </div>
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
