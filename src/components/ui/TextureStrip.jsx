import React from 'react';

export const TextureStrip = ({ text, className = '' }) => {
  const defaultText = "75–80% Natural Quartz  ·  Advanced Polymerization Casting  ·  Gujarat & NCR Manufacturing";
  const displayTokens = (text || defaultText).split("  ·  ");

  return (
    <div className={`w-full py-10 bg-grain-stone border-y border-stone-900/10 flex items-center justify-center text-center ${className}`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
        {displayTokens.map((token, index) => (
          <React.Fragment key={index}>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-stone-200">
              {token}
            </span>
            {index < displayTokens.length - 1 && (
              <span className="hidden md:inline text-gold/60 select-none">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TextureStrip;
