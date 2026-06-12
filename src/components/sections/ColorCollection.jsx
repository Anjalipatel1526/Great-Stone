import React from 'react';
import { motion } from 'framer-motion';
import { quartzColors } from '../../data/colors';
import { fadeUp, staggerContainer } from '../../utils/animations';
import SectionLabel from '../ui/SectionLabel';
import ColorSwatch from '../ui/ColorSwatch';

export const ColorCollection = () => {
  return (
    <section className="py-24 bg-cream border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <SectionLabel>Colour Collection</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight leading-tight">
            Eight Shades. Infinite Kitchens.
          </h2>
          <p className="font-body text-xs uppercase tracking-widest text-gold font-bold mt-2">
            Available across the Quartz Granite Collection
          </p>
        </div>

        {/* Swatches Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 max-w-5xl mx-auto"
        >
          {quartzColors.map((color, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <ColorSwatch 
                name={color.name} 
                hex={color.hex} 
                available={true}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ColorCollection;
