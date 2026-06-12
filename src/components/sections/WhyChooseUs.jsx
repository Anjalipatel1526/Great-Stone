import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Cpu, Palette, Layers, Award } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../utils/animations';
import SectionLabel from '../ui/SectionLabel';

export const WhyChooseUs = () => {
  const cards = [
    {
      icon: <Shield className="text-gold" size={24} strokeWidth={1.5} />,
      title: "Scratch & Heat Resistant",
      description: "Endures temperatures up to 280°C and daily heavy metal cookware use without showing marks."
    },
    {
      icon: <Sparkles className="text-gold" size={24} strokeWidth={1.5} />,
      title: "Non-Porous Hygienic Surface",
      description: "Anti-microbial surface properties deny liquid absorption, preventing mold, odor, and stains."
    },
    {
      icon: <Cpu className="text-gold" size={24} strokeWidth={1.5} />,
      title: "Computer-Controlled Casting",
      description: "Precision polymerized casting ensures uniform wall thickness and absolute density consistency."
    },
    {
      icon: <Palette className="text-gold" size={24} strokeWidth={1.5} />,
      title: "8 Signature Color Finishes",
      description: "Curated organic color pigments blended thoroughly for colors that do not fade over years."
    },
    {
      icon: <Layers className="text-gold" size={24} strokeWidth={1.5} />,
      title: "Advanced Quartz Composite",
      description: "Forged with 80% natural quartz sand and 20% high-grade polymer resin for concrete-hard reliability."
    },
    {
      icon: <Award className="text-gold" size={24} strokeWidth={1.5} />,
      title: "Industry-Leading Warranties",
      description: "Backed by premium warranties up to 25 years, assuring absolute peace of mind."
    }
  ];

  return (
    <section className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <SectionLabel>Built Different</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight leading-tight">
            Engineered for the kitchen.<br />Built for a lifetime.
          </h2>
        </div>

        {/* Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white p-8 border border-stone-200/80 hover:border-gold/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col space-y-4 group"
            >
              <div className="p-3 bg-stone-50 w-fit group-hover:bg-gold/10 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-stone-900 tracking-tight group-hover:text-gold transition-colors duration-200">
                {card.title}
              </h3>
              <p className="font-body text-xs text-stone-500 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
