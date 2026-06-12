import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../../utils/animations';
import Button from '../ui/Button';

export const ContactCTA = () => {
  return (
    <section className="bg-grain-dark py-24 border-t border-stone-850 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center space-y-8 max-w-2xl mx-auto"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            GET IN TOUCH
          </span>
          
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-cream leading-tight tracking-tight">
            Ready to Transform Your Kitchen?
          </h2>
          
          <p className="font-body text-base text-stone-300 max-w-md">
            Talk to our kitchen sink specialists today to find the perfect style, size, and material for your home.
          </p>
          
          <div className="pt-4">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="group flex items-center gap-2">
                Get in Touch
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="pt-8 border-t border-stone-800/80 w-full flex justify-center gap-6 md:gap-10 text-[10px] md:text-xs font-body uppercase tracking-[0.15em] text-stone-400">
            <span>Gujarat HQ</span>
            <span className="text-gold/40">•</span>
            <span>NCR Showroom</span>
            <span className="text-gold/40">•</span>
            <a href="mailto:hello@greatandstone.com" className="hover:text-cream transition-colors duration-250">
              hello@greatandstone.com
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Structural Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
    </section>
  );
};

export default ContactCTA;
