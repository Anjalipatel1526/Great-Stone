import React from 'react';

export const ColorSwatch = ({ 
  name, 
  hex, 
  available = true, 
  isSelected = false, 
  onClick, 
  className = '' 
}) => {
  return (
    <div 
      className={`flex flex-col items-center group ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="relative">
        {/* Color Circle */}
        <div 
          className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 transition-all duration-300 shadow-inner ${
            isSelected 
              ? 'border-gold scale-105 ring-2 ring-gold/25' 
              : 'border-stone-200 group-hover:border-stone-500 group-hover:scale-102'
          }`}
          style={{ backgroundColor: hex }}
        >
          {!available && (
            <div className="absolute inset-0 bg-stone-900/60 rounded-full flex items-center justify-center">
              <span className="text-[9px] font-body uppercase text-stone-300 font-semibold tracking-wider">Out</span>
            </div>
          )}
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1 bg-stone-900 text-cream text-[10px] uppercase tracking-wider font-semibold opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10 border border-stone-700">
          {name}
        </div>
      </div>
      
      {/* Label */}
      <span className="mt-3 text-[11px] font-body font-medium uppercase tracking-[0.12em] text-stone-500 text-center transition-colors group-hover:text-stone-900">
        {name}
      </span>
    </div>
  );
};

export default ColorSwatch;
