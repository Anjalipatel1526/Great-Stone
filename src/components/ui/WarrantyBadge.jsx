import React from 'react';
import { Shield } from 'lucide-react';

export const WarrantyBadge = ({ years, type, variant = 'gold', className = '' }) => {
  const themes = {
    gold: {
      border: 'border-gold/30',
      bg: 'bg-gold/5',
      text: 'text-gold',
      iconColor: '#C9A96E',
      badgeLabel: 'Gold Standard Coverage'
    },
    silver: {
      border: 'border-stone-400/30',
      bg: 'bg-stone-400/5',
      text: 'text-stone-400',
      iconColor: '#A8A29E',
      badgeLabel: 'Silver Premium Coverage'
    },
    bronze: {
      border: 'border-stone-600/30',
      bg: 'bg-stone-600/5',
      text: 'text-stone-600',
      iconColor: '#8C7B6B',
      badgeLabel: 'Classic Coverage'
    }
  };

  const theme = themes[variant] || themes.gold;

  return (
    <div className={`flex flex-col items-center justify-center p-6 border ${theme.border} ${theme.bg} text-center transition-all duration-300 hover:border-gold/50 ${className}`}>
      <div className="relative mb-3 flex items-center justify-center">
        <Shield size={48} strokeWidth={1} className={theme.text} />
        <span className="absolute font-display text-lg font-bold text-cream mt-0.5" style={{ color: theme.iconColor }}>
          {years}
        </span>
      </div>
      
      <span className="font-display text-2xl font-semibold text-stone-900 mb-1">
        {years} Year Warranty
      </span>
      
      <span className="font-body text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
        {type}
      </span>
      
      <span className="font-body text-[10px] uppercase tracking-widest text-gold font-bold">
        {theme.badgeLabel}
      </span>
    </div>
  );
};

export default WarrantyBadge;
