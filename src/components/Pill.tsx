import React from 'react';

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  count?: number;
}

export const Pill: React.FC<PillProps> = ({
  label,
  isActive = false,
  onClick,
  icon,
  count
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 cursor-pointer ${
        isActive
          ? 'bg-[#171B24] text-[#F3EBDD] shadow-md scale-105'
          : 'bg-[#F3EBDD] text-[#171B24] border border-[#171B24]/15 hover:bg-[#171B24]/10'
      }`}
    >
      {icon && <span className="text-base">{icon}</span>}
      <span>{label}</span>
      {count !== undefined && (
        <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#171B24]/10 text-[#171B24]'}`}>
          {count}
        </span>
      )}
    </button>
  );
};
