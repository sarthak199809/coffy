import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NeoButton({ children, className = '', variant = 'primary', size = 'md', ...props }: NeoButtonProps) {
  const bgColors = {
    primary: 'bg-lime text-ink',
    secondary: 'bg-orange text-ink',
    white: 'bg-white text-ink',
    black: 'bg-ink text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-6 text-xl',
  };

  return (
    <button
      className={`
        ${bgColors[variant]} ${sizes[size]}
        border-4 border-ink font-display uppercase tracking-wider
        transition-all duration-150 ease-in-out
        shadow-[6px_6px_0px_0px_var(--color-ink)]
        hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_var(--color-ink)]
        active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
