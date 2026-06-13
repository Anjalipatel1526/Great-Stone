import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, scaleIn } from '../../utils/animations';
import Button from '../ui/Button';

export const Hero = () => {
  const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden">
      
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ image 2.jpg" 
          alt="Modern luxury kitchen interior"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-stone-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-stone-900/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-grow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-44 md:pt-40 lg:pt-36 pb-8 md:pb-12 px-6 md:px-12">
        
        {/* Left Column: Text Content with Glassmorphism */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="flex flex-col space-y-8 z-10"
        >
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl"
               style={{ 
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)',
               }}
          >
            <div className="space-y-4 mb-6">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                SILENT CONFIDENCE
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white">
                Where Stone <br className="hidden md:inline" /> Meets Function.
              </h1>
            </div>
            
            <p className="font-body text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-8">
              Premium quartz granite and stainless steel kitchen sinks — engineered for India's finest homes. Combining European engineering with Indian craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link to="/products">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-stone-900 backdrop-blur-sm transition-all duration-300">
                  Explore More
                </Button>
              </Link>
              
              <Link to="/about" className="inline-flex items-center justify-center">
                <Button variant="ghost" size="lg" className="group py-3 flex items-center gap-2 text-white/70 hover:text-white">
                  Our Story 
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Image Carousel with Glassmorphism Frame */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          viewport={{ once: true }}
          className="relative w-full max-w-sm md:max-w-md mx-auto lg:ml-auto p-3 rounded-2xl md:rounded-3xl group aspect-[3/4] backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl"
          style={{ 
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          {/* Overlay to dim image slightly */}
          <div className="absolute inset-0 bg-stone-950/5 z-10 transition-colors duration-500 group-hover:bg-transparent pointer-events-none rounded-xl md:rounded-2xl" />
          
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt={`Luxury kitchen featuring Great & Stone quartz granite sink - Image ${currentIndex + 1}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full object-cover rounded-xl md:rounded-2xl"
            />
          </AnimatePresence>

          {/* Indicators / Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-stone-950/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/85'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Strip with Glassmorphism */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-8 md:pb-12 mt-auto">
        <div className="border-t border-white/15 pt-6 flex flex-wrap gap-4 md:gap-8 justify-start lg:justify-between items-center text-xs font-body tracking-[0.15em] text-white/60 uppercase">
          <div className="flex items-center gap-3 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/15 rounded-lg"
               style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <span className="text-gold">•</span>
            <span>75–80% Natural Quartz</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/15 rounded-lg"
               style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <span className="text-gold">•</span>
            <span>10–25 Year Warranty</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/15 rounded-lg"
               style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <span className="text-gold">•</span>
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
