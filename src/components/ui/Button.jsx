import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-body uppercase font-medium tracking-wider transition-all duration-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gold';
  
  const variants = {
    primary: 'bg-gold text-stone-900 hover:bg-opacity-90 active:bg-opacity-100 border border-gold shadow-md hover:shadow-lg',
    outline: 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-stone-900',
    ghost: 'bg-transparent text-stone-200 border-none hover:underline hover:text-white px-0 py-0',
    dark: 'bg-stone-900 text-cream border border-stone-200 hover:bg-stone-700 hover:text-white',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  };

  const selectedSize = variant === 'ghost' ? '' : sizes[size];

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${selectedSize} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
