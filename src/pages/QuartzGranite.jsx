import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, ShieldAlert, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { quartzColors } from '../data/colors';
import { fadeUp, staggerContainer } from '../utils/animations';
import SectionLabel from '../components/ui/SectionLabel';
import ColorSwatch from '../components/ui/ColorSwatch';
import WarrantyBadge from '../components/ui/WarrantyBadge';
import Button from '../components/ui/Button';

export const QuartzGranite = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(quartzColors[0]);

  const variants = [
    { name: "Single Bowl", desc: "Minimal, deep single basin for sleek modular kitchen setups." },
    { name: "Double Bowl", desc: "Dual basins for separation of washing and prep work." },
    { name: "Mega Bowl", desc: "Expansive extra-large workspace for massive cookware." },
    { name: "Lab Sinks", desc: "Deep specialized utility sinks with high chemical resistance." },
    { name: "Multi-Functional", desc: "Workstations featuring built-in tracks for sliding accessories." },
    { name: "Drain Board", desc: "Sinks with integrated sloped channels for water drainage." },
    { name: "Acrylic Quartz", desc: "Smooth finishes with maximum acrylic polymerization flex." }
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] bg-stone-900 flex items-center justify-center overflow-hidden">
        {/* Dark Hero Image */}
        <img 
          src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1600&q=80" 
          alt="Luxury kitchen with Quartz Granite sink" 
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center z-10 space-y-6">
          <SectionLabel className="text-stone-400 justify-center">Premium Composite Series</SectionLabel>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-cream tracking-tight"
          >
            Quartz Granite Collection
          </motion.h1>
          <p className="font-body text-sm md:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Engineered composites forged from 80% natural quartz sand and high-grade acrylic resins. Designed to match the timeless rigidity of natural granite while offering modern anti-stain and thermal resistance.
          </p>
        </div>
      </section>

      {/* 2. Color Collection Section */}
      <section className="py-24 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Color Detail / Description */}
            <div className="lg:col-span-5 space-y-6">
              <SectionLabel>Colour Collection</SectionLabel>
              <h2 className="font-display text-4xl font-semibold text-stone-900 leading-tight">
                Curated Organic Shades
              </h2>
              <p className="font-body text-sm text-stone-500 leading-relaxed">
                Our color pigments are blended homogeneously throughout the quartz mix, meaning the color goes all the way through. It will not fade under UV exposure or heavy scrubbing.
              </p>
              
              {/* Selected Color Card */}
              <div className="p-6 bg-stone-50 border border-stone-200/60 mt-4 flex items-center space-x-6">
                <div 
                  className="w-16 h-16 rounded-full border border-stone-300 shadow-inner shrink-0" 
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <div>
                  <h4 className="font-display text-xl font-semibold text-stone-900">{selectedColor.name}</h4>
                  <span className="font-body text-[11px] uppercase tracking-wider text-gold font-bold">
                    Color Code: {selectedColor.hex}
                  </span>
                  <p className="font-body text-[11px] text-stone-400 mt-1">
                    Available in single, double, and workstations.
                  </p>
                </div>
              </div>
            </div>

            {/* Swatches Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {quartzColors.map((color, idx) => (
                  <ColorSwatch 
                    key={idx}
                    name={color.name}
                    hex={color.hex}
                    isSelected={selectedColor.name === color.name}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Product Variants Layout */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <SectionLabel className="justify-center">Versatile Geometry</SectionLabel>
            <h2 className="font-display text-4xl font-semibold text-stone-900 tracking-tight leading-tight">
              Designed For Every Architectural Spec
            </h2>
            <p className="font-body text-xs text-gold font-bold uppercase tracking-wider">
              Seven distinct profiles for Indian culinary habits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {variants.map((v, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 border border-stone-200/80 hover:border-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-body text-[10px] uppercase tracking-widest text-gold font-semibold block mb-2">
                    Variant 0{idx + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">
                    {v.name}
                  </h3>
                  <p className="font-body text-[11px] text-stone-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-stone-100 mt-6 flex items-center justify-between">
                  <button 
                    onClick={() => navigate('/products?category=quartz-granite')} 
                    className="font-body text-[10px] uppercase font-bold tracking-wider text-stone-700 hover:text-gold transition-colors duration-200 flex items-center gap-1"
                  >
                    View Models <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Materials & Manufacturing Process */}
      <section className="py-24 bg-stone-900 text-cream border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Explanation */}
          <div className="space-y-6">
            <SectionLabel className="text-stone-400">Material Integrity</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
              The Polymerization casting process
            </h2>
            <p className="font-body text-sm text-stone-300 leading-relaxed">
              We blend 75–80% natural quartz sand with advanced acrylic polymerization resins. The slurry is cast into computerized heavy-duty steel molds under a complete vacuum. High-pressure polymerization ensures a high-density molecular bond. This process eliminates any structural micro-pores or air bubbles, creating a solid, impact-resistant surface that repels water and prevents cracks.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gold">
                  <Layers size={16} />
                  <span className="font-body text-xs font-semibold uppercase tracking-wider">High Density</span>
                </div>
                <p className="font-body text-[11px] text-stone-400 leading-relaxed">
                  Advanced casting generates high impact resistance.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gold">
                  <Flame size={16} />
                  <span className="font-body text-xs font-semibold uppercase tracking-wider">Heat Defense</span>
                </div>
                <p className="font-body text-[11px] text-stone-400 leading-relaxed">
                  Tested up to 280°C to withstand direct pan placements.
                </p>
              </div>
            </div>
          </div>

          {/* Graphic Process Cards */}
          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 bg-stone-850 border border-stone-800 flex items-start gap-4">
              <div className="p-3 bg-stone-900 border border-stone-850 text-gold font-display text-xl font-bold">1</div>
              <div>
                <h4 className="font-display text-lg font-semibold text-white">Vacuum Homogenization</h4>
                <p className="font-body text-xs text-stone-400 mt-1">
                  Quartz mineral powder and acrylic polymers are blended under vacuum, removing any trace of moisture or air.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-stone-850 border border-stone-800 flex items-start gap-4">
              <div className="p-3 bg-stone-900 border border-stone-850 text-gold font-display text-xl font-bold">2</div>
              <div>
                <h4 className="font-display text-lg font-semibold text-white">Curing & Hardening</h4>
                <p className="font-body text-xs text-stone-400 mt-1">
                  Molds are thermally cured using steam circuits to speed polymerization and set internal density.
                </p>
              </div>
            </div>

            <div className="p-6 bg-stone-850 border border-stone-800 flex items-start gap-4">
              <div className="p-3 bg-stone-900 border border-stone-850 text-gold font-display text-xl font-bold">3</div>
              <div>
                <h4 className="font-display text-lg font-semibold text-white">Surface Toughening</h4>
                <p className="font-body text-xs text-stone-400 mt-1">
                  Sinks undergo diamond-brush sanding to refine exterior aesthetics and smooth out structural edges.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Warranty callout section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center space-y-6">
          <SectionLabel>Long-Term Trust</SectionLabel>
          <h2 className="font-display text-4xl font-semibold text-stone-900 tracking-tight">
            Guaranteed Structural Strength
          </h2>
          <p className="font-body text-sm text-stone-500 leading-relaxed max-w-xl">
            Our Quartz Granite sinks are covered by an industry-leading 10-year warranty, protecting against discoloration, cracking, warping, and thermal failure.
          </p>
          <div className="pt-4 w-full max-w-sm">
            <WarrantyBadge 
              years={10} 
              type="Quartz Granite Collection" 
              variant="gold" 
            />
          </div>
          <div className="pt-6">
            <Button variant="dark" onClick={() => navigate('/contact')} className="px-8 py-3.5">
              Contact Dealer
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default QuartzGranite;
