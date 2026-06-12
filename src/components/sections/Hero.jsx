import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, scaleIn } from '../../utils/animations';
import Button from '../ui/Button';

export const Hero = () => {
  return (
    <section className="bg-cream text-stone-900 min-h-[calc(100vh-80px)] flex flex-col justify-between pt-12 md:pt-16 pb-8 md:pb-12 px-6 md:px-12 relative overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto w-full flex-grow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="flex flex-col space-y-8 z-10"
        >
          <div className="space-y-4">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              SILENT CONFIDENCE
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-stone-900">
              Where Stone <br className="hidden md:inline" /> Meets Function.
            </h1>
          </div>
          
          <p className="font-body text-base md:text-lg text-stone-600 leading-relaxed max-w-xl">
            Premium quartz granite and stainless steel kitchen sinks — engineered for India's finest homes. Combining European engineering with Indian craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link to="/products">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white">
                Explore Collection
              </Button>
            </Link>
            
            <Link to="/about" className="inline-flex items-center justify-center">
              <Button variant="ghost" size="lg" className="group py-3 flex items-center gap-2 text-stone-600 hover:text-stone-900">
                Our Story 
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          viewport={{ once: true }}
          className="relative aspect-video lg:aspect-square w-full border border-stone-200 shadow-xl overflow-hidden bg-stone-50 group"
        >
          {/* Overlay to dim image slightly */}
          <div className="absolute inset-0 bg-stone-950/5 z-10 transition-colors duration-500 group-hover:bg-transparent" />
          
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
            alt="Luxury kitchen featuring Great & Stone quartz granite sink"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-102"
          />
        </motion.div>
      </div>

      {/* Bottom Stats Strip */}
      <div className="max-w-7xl mx-auto w-full pt-12 md:pt-16 mt-auto">
        <div className="border-t border-stone-200 pt-6 flex flex-wrap gap-4 md:gap-8 justify-start lg:justify-between items-center text-xs font-body tracking-[0.15em] text-stone-500 uppercase">
          <div className="flex items-center gap-3 bg-white px-4 py-2 border border-stone-200">
            <span className="text-gold">•</span>
            <span>75–80% Natural Quartz</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 border border-stone-200">
            <span className="text-gold">•</span>
            <span>10–25 Year Warranty</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 border border-stone-200">
            <span className="text-gold">•</span>
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
