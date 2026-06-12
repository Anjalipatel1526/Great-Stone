import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../utils/animations';
import SectionLabel from '../ui/SectionLabel';

export const MaterialProcess = () => {
  const steps = [
    {
      percentage: "80%",
      label: "Natural Quartz Sand",
      detail: "Imported high-purity crystalline quartz forms the foundation of every sink, delivering natural stone hardness."
    },
    {
      percentage: "20%",
      label: "Premium Acrylic Resins",
      detail: "Specially formulated polymer binders provide elasticity, allowing the sink to absorb heavy thermal shocks without cracking."
    },
    {
      percentage: "280°C",
      label: "Thermal Resistance",
      detail: "Tested to withstand extreme heat, allowing boiling water and hot pans to be placed directly in the basin."
    },
    {
      percentage: "100%",
      label: "Hygienic Structure",
      detail: "High-pressure casting yields a completely non-porous surface that repels stains, grease, and bacterial growth."
    }
  ];

  return (
    <section className="py-24 bg-stone-900 text-cream relative overflow-hidden border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Explanation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <SectionLabel className="text-stone-400">Material Science</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
              Forged in High Pressure.<br />Casted for Durability.
            </h2>
            <p className="font-body text-sm text-stone-300 leading-relaxed max-w-xl">
              Great & Stone Quartz Granite sinks are built using advanced polymerization casting. We blend natural quartz crystals with acrylic polymers under computer-controlled vacuum conditions. The result is a rock-hard composite sink that matches the tactile richness of premium stone while offering complete structural resilience.
            </p>
            
            <div className="pt-4 flex flex-col space-y-3 font-body text-xs uppercase tracking-wider text-stone-400">
              <div className="flex items-center gap-3">
                <span className="text-gold font-bold">✓</span> Anti-Fading Organic Pigment Infusion
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold font-bold">✓</span> Computer-Monitored Wall Consistency
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold font-bold">✓</span> Heavy-Metal Free Eco Casting
              </div>
            </div>
          </motion.div>

          {/* Right Column: Process Metrics */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="p-6 bg-stone-850 border border-stone-800 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">
                  {step.percentage}
                </div>
                <div className="font-body text-xs font-semibold uppercase tracking-wider text-cream mb-2">
                  {step.label}
                </div>
                <p className="font-body text-[11px] text-stone-400 leading-relaxed">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MaterialProcess;
