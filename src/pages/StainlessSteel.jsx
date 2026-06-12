import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldAlert, VolumeX, ArrowDown, Settings, Layers, Star } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import SectionLabel from '../components/ui/SectionLabel';
import WarrantyBadge from '../components/ui/WarrantyBadge';
import Button from '../components/ui/Button';

export const StainlessSteel = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <ShieldAlert className="text-gold" size={24} strokeWidth={1.5} />,
      title: "Corrosion & Rust Resistant",
      description: "Forged with high nickel and chromium ratios, creating a self-healing chromium oxide film that prevents rust."
    },
    {
      icon: <ArrowDown className="text-gold" size={24} strokeWidth={1.5} />,
      title: "10-Inch Deep Bowls",
      description: "Significantly deeper than standard sinks, offering maximum containment for high-volume cookware and preventing splashback."
    },
    {
      icon: <VolumeX className="text-gold" size={24} strokeWidth={1.5} />,
      title: "Sound Shield Protection",
      description: "Heavy-duty rubber pads applied to all exterior walls combined with undercoat spray to deaden high-frequency noise."
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative h-[55vh] min-h-[400px] bg-stone-900 flex items-center justify-center overflow-hidden">
        {/* Dark Hero Image */}
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80" 
          alt="Stainless Steel Kitchen Fittings" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center z-10 space-y-6">
          <SectionLabel className="text-stone-400 justify-center">Industrial Grace</SectionLabel>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-cream tracking-tight"
          >
            Stainless Steel Series
          </motion.h1>
          <p className="font-body text-sm md:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Crafted from high-grade SUS 304 and SUS 204 alloys. Precision welded with sound-shield undercoatings and brush finishes designed to match contemporary steel faucets.
          </p>
        </div>
      </section>

      {/* 2. Two Collections Split */}
      <section className="py-24 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Handmade SS 304 */}
          <div className="p-8 border border-stone-200 bg-stone-50/50 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 text-[10px] font-body font-semibold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                Premium Line
              </span>
              <h3 className="font-display text-3xl font-semibold text-stone-900">
                Handmade SS 304
              </h3>
              <p className="font-body text-sm text-stone-500 leading-relaxed">
                Handcrafted from premium-grade SUS 304 stainless steel. Designed with sharp zero-radius corners, x-channel drainage lines, and heavy 1.2mm-1.5mm sheets. These sinks offer professional-grade performance and lifetime resistance to staining or rust.
              </p>
              <ul className="space-y-2.5 font-body text-xs text-stone-600 pt-2">
                <li className="flex items-center gap-2">✓ 1.2mm - 1.5mm Heavy Duty Sheet Gauge</li>
                <li className="flex items-center gap-2">✓ Physical Vapor Deposition (PVD) Color Options</li>
                <li className="flex items-center gap-2">✓ 25-Year Structural Integrity Warranty</li>
              </ul>
            </div>
            
            <div className="pt-6">
              <Button 
                variant="dark" 
                onClick={() => navigate('/products?category=handmade-ss')}
                className="w-full sm:w-auto text-xs px-6 py-3"
              >
                Explore Handmade SS
              </Button>
            </div>
          </div>

          {/* Steel Sink Series */}
          <div className="p-8 border border-stone-200 bg-stone-50/50 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 text-[10px] font-body font-semibold uppercase tracking-wider bg-stone-700 text-stone-200 border border-stone-500/30">
                Classic Utility Line
              </span>
              <h3 className="font-display text-3xl font-semibold text-stone-900">
                Steel Sink Series
              </h3>
              <p className="font-body text-sm text-stone-500 leading-relaxed">
                Our value-engineered range built from sturdy SUS 204 grade stainless steel. These models provide clean lines, hygienic curved corners, and glossy polished finishes. Perfect for secondary kitchens, utility rooms, and residential builders seeking premium quality at high-efficiency costs.
              </p>
              <ul className="space-y-2.5 font-body text-xs text-stone-600 pt-2">
                <li className="flex items-center gap-2">✓ 1.0mm Gauge Steel Sheets</li>
                <li className="flex items-center gap-2">✓ High Gloss Polishing for bright reflectivity</li>
                <li className="flex items-center gap-2">✓ 10-Year Rust & Crack Warranty</li>
              </ul>
            </div>
            
            <div className="pt-6">
              <Button 
                variant="outline" 
                onClick={() => navigate('/products?category=steel-series')}
                className="w-full sm:w-auto text-xs px-6 py-3 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
              >
                Explore Steel Series
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Feature Cards Section */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <SectionLabel className="justify-center">Engineering Details</SectionLabel>
            <h2 className="font-display text-4xl font-semibold text-stone-900 tracking-tight">
              Acoustic Silence & Durability
            </h2>
            <p className="font-body text-xs text-gold font-bold uppercase tracking-wider">
              Under-the-hood engineering highlights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 border border-stone-200 hover:border-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="p-3 bg-stone-50 w-fit">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-stone-900">
                  {f.title}
                </h3>
                <p className="font-body text-xs text-stone-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Warranty callout section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <SectionLabel className="justify-center font-bold">Guaranteed Performance</SectionLabel>
            <h2 className="font-display text-4xl font-semibold text-stone-900 tracking-tight">
              Dual Warranty Tiers
            </h2>
            <p className="font-body text-sm text-stone-500 leading-relaxed max-w-md mx-auto">
              Our steel products are backed by specific structural warranties to verify material purity and craftsmanship trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <WarrantyBadge 
              years={25} 
              type="Handmade SS 304 Collection" 
              variant="silver" 
            />
            <WarrantyBadge 
              years={10} 
              type="Steel Sink Series (SS 204)" 
              variant="bronze" 
            />
          </div>
          
          <div className="text-center pt-12">
            <Button variant="dark" onClick={() => navigate('/contact')} className="px-8 py-3.5">
              Contact Dealership
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StainlessSteel;
