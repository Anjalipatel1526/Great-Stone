import React from 'react';

export const SectionLabel = ({ children, showDash = true, className = '' }) => {
  return (
    <div className={`flex items-center space-x-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 ${className}`}>
      {showDash && <span className="text-gold font-bold mr-1">—</span>}
      <span>{children}</span>
    </div>
  );
};

export default SectionLabel;
