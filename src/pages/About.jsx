import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Heart, Award, Gem, Compass } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import SectionLabel from '../components/ui/SectionLabel';

export const About = () => {
  const values = [
    {
      icon: <Gem size={22} className="text-gold" />,
      title: "Quality Excellence",
      desc: "We accept no compromise. Every batch of quartz slurry and stainless weld is inspected under laser metrics."
    },
    {
      icon: <Compass size={22} className="text-gold" />,
      title: "Design Innovation",
      desc: "Constantly expanding colors, styles, and workstation integrations to match international kitchen standards."
    },
    {
      icon: <Heart size={22} className="text-gold" />,
      title: "Customer Trust",
      desc: "Delivering reliable support and lifetime structural warranties to build a foundation that endures."
    },
    {
      icon: <ShieldCheck size={22} className="text-gold" />,
      title: "Reliability",
      desc: "Punctual logistics and dealership guarantees, satisfying architectural and modular kitchen trade requirements."
    },
    {
      icon: <Target size={22} className="text-gold" />,
      title: "Integrity",
      desc: "Ethical casting materials, lead-free raw ingredients, and sustainable employee safety parameters."
    }
  ];

  const milestones = [
    { year: "2012", title: "Mineral Roots", desc: "Founders establish mineral extraction & grading lines in Morbi, Gujarat." },
    { year: "2015", title: "First Quartz Cast", desc: "Launches local polymerization quartz-granite casting factory." },
    { year: "2019", title: "SS Expansion", desc: "Introduces zero-radius handmade SUS 304 stainless steel sink models." },
    { year: "2022", title: "Noida Studio", desc: "Establishes regional distribution hub and trade studio in Noida, NCR." },
    { year: "2024", title: "Next-Gen Castings", desc: "Installs computer-controlled vacuum molding ovens." }
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-36 pb-28 bg-grain-dark text-cream border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center z-10 space-y-6">
          <SectionLabel className="text-stone-400 justify-center">Our Heritage</SectionLabel>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight text-cream"
          >
            Silent Confidence.
          </motion.h1>
          <p className="font-body text-sm md:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Great & Stone is India's premium kitchen sink manufacturer. Since 2012, we have combined geological raw materials with high-pressure casting systems to engineer structural art.
          </p>
        </div>
      </section>

      {/* 2. Brand Story Section */}
      <section className="py-24 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Panel */}
          <div className="relative aspect-video sm:aspect-square overflow-hidden bg-stone-100 border border-stone-200 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80" 
              alt="Artisanal metal welding and quartz composites"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Narrative */}
          <div className="space-y-6">
            <SectionLabel>The Journey</SectionLabel>
            <h2 className="font-display text-4xl font-semibold text-stone-900 leading-tight">
              Honoring India's craftsmanship. Matching European standards.
            </h2>
            <div className="font-body text-sm text-stone-500 space-y-4 leading-relaxed">
              <p>
                Great & Stone was founded with a singular purpose: to challenge the notion that high-end kitchen fittings must always be imported. Located in Morbi, Gujarat—India's ceramics capital—we utilized local mineral wealth and engineered the country's first automated quartz polymerization casting facility.
              </p>
              <p>
                By blending high-purity natural quartz crystals with advanced polymer compounds, we crafted sinks capable of resisting scratching, stains, and boiling temperatures. In 2019, we expanded our footprint by opening a stainless steel workshop, delivering heavy-gauge SUS 304 basins with acoustic rubber deadening systems.
              </p>
              <p>
                Today, Great & Stone serves premium dealers, architects, and homeowners across the nation, representing the quiet strength of high-end Indian manufacturing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Manufacturing Infrastructure */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <SectionLabel className="justify-center">Infrastructure</SectionLabel>
            <h2 className="font-display text-4xl font-semibold text-stone-900 tracking-tight leading-tight">
              State-of-the-Art Facilities
            </h2>
            <p className="font-body text-sm text-stone-500 max-w-md mx-auto">
              Our casting yard and metal fabrication workshops are located in core industrial zones to ensure smooth logistical delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gujarat HQ */}
            <div className="bg-white p-8 border border-stone-200 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <span className="font-body text-[10px] uppercase font-bold tracking-widest text-gold">Morbi, Gujarat</span>
                <h3 className="font-display text-2xl font-semibold text-stone-900">Composite Casting Center</h3>
                <p className="font-body text-xs text-stone-500 leading-relaxed">
                  Our main 75,000 sq. ft. quartz composite plant. Houses heavy vacuum casting chambers, chemical blend circuits, and high-pressure steam ovens that harden the quartz sand.
                </p>
              </div>
              <div className="text-[11px] font-body text-stone-400 border-t border-stone-100 pt-4 flex justify-between uppercase tracking-wider">
                <span>Capacity: 15,000 Sinks / month</span>
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>

            {/* NCR Showroom */}
            <div className="bg-white p-8 border border-stone-200 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <span className="font-body text-[10px] uppercase font-bold tracking-widest text-gold">Noida, NCR</span>
                <h3 className="font-display text-2xl font-semibold text-stone-900">Steel Workshop & Studio</h3>
                <p className="font-body text-xs text-stone-500 leading-relaxed">
                  Dedicated to heavy-gauge steel shearing, acoustic pad attachment, and trade support. Features a state-of-the-art interactive design showroom for architects and kitchen consultants.
                </p>
              </div>
              <div className="text-[11px] font-body text-stone-400 border-t border-stone-100 pt-4 flex justify-between uppercase tracking-wider">
                <span>Fabrication & Showroom</span>
                <span>Custom Size Solutions</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <SectionLabel className="justify-center">Our Principles</SectionLabel>
            <h2 className="font-display text-4xl font-semibold text-stone-900 tracking-tight">
              Guided by Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 border border-stone-200 bg-stone-50/20 hover:border-gold/30 hover:bg-white transition-all duration-300 space-y-4">
                <div className="p-3.5 bg-stone-50 border border-stone-200/50 w-fit">
                  {v.icon}
                </div>
                <h4 className="font-display text-lg font-semibold text-stone-900">{v.title}</h4>
                <p className="font-body text-[11px] text-stone-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Horizontal Timeline Strip */}
      <section className="py-24 bg-stone-900 text-cream overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 min-w-[900px]">
          
          <div className="mb-16">
            <SectionLabel className="text-stone-400">Milestones</SectionLabel>
            <h2 className="font-display text-4xl font-semibold text-cream mt-2">Historical Progression</h2>
          </div>

          <div className="relative flex justify-between items-start pt-10">
            {/* Horizontal timeline line */}
            <div className="absolute top-[60px] left-0 right-0 h-[2px] bg-stone-850 z-0" />
            
            {milestones.map((m, idx) => (
              <div key={idx} className="relative z-10 w-[160px] space-y-4 flex flex-col items-center text-center">
                {/* Year Badge */}
                <div className="font-display text-2xl font-bold text-gold bg-stone-900 border border-gold/40 px-3 py-1 mb-2">
                  {m.year}
                </div>
                
                {/* Connector Dot */}
                <div className="w-3.5 h-3.5 rounded-full bg-gold border-4 border-stone-900 shadow z-20" />
                
                <div className="space-y-1">
                  <h4 className="font-display text-sm font-semibold text-white">{m.title}</h4>
                  <p className="font-body text-[10px] text-stone-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
