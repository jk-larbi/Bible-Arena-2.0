import React from 'react';

interface TimerRingProps {
  timeLeft: number;
  totalTime: number;
  size?: number;
}

export const TimerRing: React.FC<TimerRingProps> = ({ timeLeft, totalTime, size = 56 }) => {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(1, timeLeft / totalTime));
  const strokeDashoffset = circumference - progress * circumference;
  const isUrgent = timeLeft <= 5;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          className="text-[#171B24]/10"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`transition-all duration-1000 ${isUrgent ? 'text-rose-600 animate-pulse' : 'text-[#D66B3D]'}`}
          fill="transparent"
        />
      </svg>
      <div className={`absolute inset-0 flex items-center justify-center font-bold text-sm ${isUrgent ? 'text-rose-600 animate-bounce' : 'text-[#171B24]'}`}>
        {timeLeft}
      </div>
    </div>
  );
};
