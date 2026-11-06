import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all rounded-xl active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-[#D66B3D] text-white hover:bg-[#C05A2F] shadow-sm',
    secondary: 'bg-[#171B24] text-[#F3EBDD] hover:bg-[#222836]',
    outline: 'border-2 border-[#171B24]/20 text-[#171B24] hover:bg-[#171B24]/5',
    ghost: 'text-[#171B24] hover:bg-[#171B24]/10',
    danger: 'bg-rose-600 text-white hover:bg-rose-700'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
