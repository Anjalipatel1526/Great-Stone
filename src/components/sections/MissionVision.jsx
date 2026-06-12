import React from 'react';
import { motion as motionElement } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../utils/animations';
import SectionLabel from '../ui/SectionLabel';

export const MissionVision = () => {
  return (
    <section className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motionElement.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative"
        >
          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold/30 -translate-x-1/2" />
          
          {/* Left Column: Mission */}
          <motionElement.div variants={fadeUp} className="space-y-6 flex flex-col justify-start">
            <SectionLabel>Our Mission</SectionLabel>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-stone-900 leading-tight">
              Honoring Geology. Refining Utility.
            </h3>
            <p className="font-body text-sm text-stone-500 leading-relaxed max-w-xl">
              To redefine the culinary workspaces of Indian homes by creating kitchen sinks that serve as the silent, durable foundations of every kitchen. We combine high-purity natural minerals with state-of-the-art polymerization casting to build fixtures that withstand the demands of time and cooking, never compromising on visual grace.
            </p>
          </motionElement.div>

          {/* Right Column: Vision */}
          <motionElement.div variants={fadeUp} className="space-y-6 flex flex-col justify-start lg:pl-10">
            <SectionLabel>Our Vision</SectionLabel>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-stone-900 leading-tight">
              Setting the Standard for Modern Spaces.
            </h3>
            <p className="font-body text-sm text-stone-500 leading-relaxed max-w-xl">
              To become the benchmark of architectural luxury in Indian modular kitchens. We envision a future where architects, interior designers, and homeowners specify Great & Stone sinks not as mere utilities, but as statement pieces of functional art that celebrate geological strength and meticulous engineering.
            </p>
          </motionElement.div>
        </motionElement.div>
      </div>
    </section>
  );
};

export default MissionVision;
