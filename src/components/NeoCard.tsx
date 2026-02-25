import React from 'react';

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'black' | 'lime' | 'orange';
  elevation?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
}

export default function NeoCard({ children, className = '', variant = 'white', elevation = 'md', ...props }: NeoCardProps) {
  const bgColors = {
    white: 'bg-white text-ink',
    black: 'bg-ink text-white',
    lime: 'bg-lime text-ink',
    orange: 'bg-orange text-ink',
  };

  const shadows = {
    sm: 'shadow-[4px_4px_0px_0px_var(--color-ink)]',
    md: 'shadow-[8px_8px_0px_0px_var(--color-ink)]',
    lg: 'shadow-[12px_12px_0px_0px_var(--color-ink)]',
  };

  return (
    <div
      className={`
        ${bgColors[variant]} ${shadows[elevation]}
        border-4 border-ink p-6
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
