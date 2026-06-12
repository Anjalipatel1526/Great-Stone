import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Determine if Navbar needs a dark or light background
  const isHomePage = location.pathname === '/';
  const isQuartzPage = location.pathname === '/products/quartz-granite';
  const hasDarkHero = isQuartzPage;
  
  const navbarBgClass = (isScrolled || !hasDarkHero)
    ? 'bg-white/90 text-stone-900 shadow-md border-b border-stone-200/60 backdrop-blur-md'
    : 'bg-transparent text-cream border-b border-transparent';

  const logoColorClass = (isScrolled || !hasDarkHero)
    ? 'text-stone-900'
    : 'text-cream';

  const linkColorClass = (isScrolled || !hasDarkHero)
    ? 'text-stone-700 hover:text-gold'
    : 'text-stone-300 hover:text-cream';

  const buttonClass = (isScrolled || !hasDarkHero)
    ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-cream'
    : 'border-gold text-gold hover:bg-gold hover:text-stone-900';

  const productsMenu = [
    { name: "All Products", path: "/products" },
    { name: "Quartz Granite", path: "/products/quartz-granite" },
    { name: "Handmade SS 304", path: "/products/stainless-steel" },
    { name: "Steel Sink Series", path: "/products/stainless-steel?series=steel-series" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out py-4 md:py-5 ${navbarBgClass}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <span className={`font-display text-2xl md:text-3xl font-bold tracking-wider transition-colors duration-500 ${logoColorClass}`}>
              GREAT & STONE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link 
              to="/" 
              className={`font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${linkColorClass} ${
                location.pathname === '/' ? 'text-gold font-bold' : ''
              }`}
            >
              Home
            </Link>
            
            {/* Products Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1 font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${linkColorClass}`}
              >
                Products <ChevronDown size={14} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-stone-900 border border-stone-800 shadow-2xl py-2 z-50 rounded-none"
                  >
                    {productsMenu.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-6 py-3 font-body text-xs uppercase tracking-wider text-stone-300 hover:text-gold hover:bg-stone-800/50 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/about" 
              className={`font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${linkColorClass} ${
                location.pathname === '/about' ? 'text-gold font-bold' : ''
              }`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${linkColorClass} ${
                location.pathname === '/contact' ? 'text-gold font-bold' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className={`border px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-widest rounded-none transition-all duration-300 ${buttonClass}`}>
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 w-full h-full bg-stone-900 z-40 flex flex-col pt-24 px-8 pb-10 justify-between overflow-y-auto"
          >
            {/* Nav Links */}
            <div className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="font-display text-3xl font-medium text-cream hover:text-gold transition-colors duration-200"
              >
                Home
              </Link>
              
              <div className="border-t border-stone-800 pt-4">
                <span className="font-body text-xs uppercase tracking-widest text-stone-500 block mb-3">Products</span>
                <div className="flex flex-col space-y-4 pl-4 border-l border-gold/40">
                  {productsMenu.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="font-display text-xl text-stone-300 hover:text-gold transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/about" 
                className="font-display text-3xl font-medium text-cream hover:text-gold transition-colors duration-200 border-t border-stone-800 pt-4"
              >
                About
              </Link>

              <Link 
                to="/contact" 
                className="font-display text-3xl font-medium text-cream hover:text-gold transition-colors duration-200 border-t border-stone-800 pt-4"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Footer Info */}
            <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col space-y-4">
              <Link to="/contact" className="w-full">
                <button className="w-full py-4 bg-gold text-stone-900 font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-200">
                  Get a Quote
                </button>
              </Link>
              <div className="text-center text-[10px] uppercase tracking-widest text-stone-500">
                Gujarat  ·  NCR  ·  hello@greatandstone.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
