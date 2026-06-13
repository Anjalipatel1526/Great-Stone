import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const cn = (...classes) => classes.filter(Boolean).join(' ');

export const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  const getActiveItem = () => {
    const path = location.pathname;
    if (path === '/') return "Home";
    if (path.startsWith('/about')) return "About";
    if (path.startsWith('/products')) return "Products";
    if (path.startsWith('/contact')) return "Contact";
    return "Home";
  };

  const active = getActiveItem();

  const textColor = "text-white";

  return (
    <div className="absolute top-4 md:top-6 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 relative">
        {/* Left Side: Logo & Brand Name */}
        <Link to="/" className="flex items-center space-x-3 shrink-0">
          <img 
            src="/logo.png" 
            alt="Great & Stone Logo" 
            className="h-16 md:h-20 w-auto object-contain" 
          />
          <span className={`font-display text-lg md:text-xl font-bold tracking-wider transition-colors duration-300 ${textColor}`}>
            GREAT & STONE
          </span>
        </Link>

        {/* Center: Floating Glassmorphic Nav Pill */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <nav className={cn(
            "flex p-1.5 gap-2 items-center bg-stone-950/40 backdrop-blur-xl border border-white/10 rounded-full shadow-lg ring-1 ring-black/5"
          )}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "relative px-5 py-2 text-sm md:text-base font-semibold transition-colors duration-300 rounded-full",
                  active === item.name ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                {active === item.name && (
                  <motion.div
                    layoutId="glass-active"
                    className="absolute inset-0 bg-white/10 border border-white/20 shadow-sm rounded-full backdrop-blur-md"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: Empty spacer to balance layout or CTA button if desired */}
        <div className="w-[180px] hidden md:block shrink-0 pointer-events-none" />

        {/* Mobile View Navigation (Fallback for small screens) */}
        <div className="md:hidden">
          <nav className={cn(
            "flex p-1 gap-1 items-center bg-stone-950/40 backdrop-blur-xl border border-white/10 rounded-full shadow-md ring-1 ring-black/5"
          )}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "relative px-2.5 py-1 text-xs font-medium transition-colors duration-300 rounded-full",
                  active === item.name ? "text-white" : "text-white/60"
                )}
              >
                {active === item.name && (
                  <motion.div
                    layoutId="glass-active-mobile"
                    className="absolute inset-0 bg-white/10 border border-white/20 shadow-sm rounded-full backdrop-blur-md"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
