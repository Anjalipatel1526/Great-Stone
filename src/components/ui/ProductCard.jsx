import React from 'react';
import Badge from './Badge';

export const ProductCard = ({ 
  image, 
  collection, 
  name, 
  bowlType, 
  sizes = [], 
  warrantyYears, 
  onClick,
  className = '' 
}) => {
  return (
    <div 
      className={`group bg-white border border-stone-200 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-stone-300 ${className}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-stone-50">
        {/* Collection Tag (top-left) */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant={collection === 'Quartz Granite' ? 'gold' : 'dark'}>
            {collection}
          </Badge>
        </div>
        
        {/* Product Image */}
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-cream border border-cream/40 px-4 py-2 hover:bg-cream hover:text-stone-900 transition-colors duration-200">
            View Details
          </span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <span className="font-body text-[10px] uppercase tracking-widest text-stone-500 font-medium block mb-1">
            {bowlType}
          </span>
          <h3 className="font-display text-xl font-semibold text-stone-900 tracking-tight group-hover:text-gold transition-colors duration-200 mb-2">
            {name}
          </h3>
        </div>
        
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between mt-auto">
          {/* Sizes */}
          <div className="text-[11px] font-body text-stone-500">
            <span className="font-semibold text-stone-700">Sizes: </span>
            {sizes.join(" | ")}
          </div>
          
          {/* Warranty tag */}
          <div className="font-body text-[11px] font-semibold text-gold uppercase tracking-wider">
            {warrantyYears} Yr Warranty
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
