import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../utils/animations';

export const WarrantyStrip = () => {
  const items = [
    {
      years: "10",
      label: "Years",
      type: "Quartz Granite Sinks"
    },
    {
      years: "25",
      label: "Years",
      type: "SS 304 Stainless Steel"
    },
    {
      years: "10",
      label: "Years",
      type: "SS 204 Stainless Steel"
    }
  ];

  return (
    <section className="bg-gold py-12 border-y border-gold shadow-inner">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-stone-900/10 text-stone-900"
        >
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="flex flex-col items-center justify-center text-center p-4 first:pt-0 last:pb-0 md:py-4"
            >
              <div className="flex items-baseline space-x-1.5">
                <span className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  {item.years}
                </span>
                <span className="font-body text-xs font-semibold uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-stone-900/80 mt-1">
                {item.type}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WarrantyStrip;
