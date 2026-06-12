import React from 'react';

export const Badge = ({ children, variant = 'stone', className = '' }) => {
  const variants = {
    stone: 'bg-stone-700 text-stone-200 border border-stone-500/30',
    gold: 'bg-gold/10 text-gold border border-gold/30',
    cream: 'bg-cream text-stone-900 border border-stone-200',
    dark: 'bg-stone-900 text-stone-100 border border-stone-700',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-[10px] font-body font-semibold uppercase tracking-wider rounded-none ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
