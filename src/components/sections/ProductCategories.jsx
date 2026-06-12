import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../utils/animations';
import SectionLabel from '../ui/SectionLabel';

export const ProductCategories = () => {
  const collections = [
    {
      title: "Quartz Granite",
      subtitle: "8 colors · 7 styles",
      cta: "View Collection",
      path: "/products/quartz-granite",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Handmade SS 304",
      subtitle: "25-year warranty",
      cta: "View Collection",
      path: "/products/stainless-steel",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Steel Sink Series",
      subtitle: "Value-driven range",
      cta: "View Collection",
      path: "/products/stainless-steel?series=steel-series",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-grain-dark text-cream border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <SectionLabel className="text-stone-400">Collections</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream tracking-tight leading-tight">
            Three Collections. One Standard of Excellence.
          </h2>
        </div>

        {/* Categories Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {collections.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="relative aspect-[4/5] overflow-hidden group border border-stone-800 hover:border-gold/50 transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Content Panel */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 space-y-3">
                <span className="font-body text-[10px] uppercase tracking-widest text-gold font-bold">
                  {item.subtitle}
                </span>
                <h3 className="font-display text-3xl font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                
                {/* CTA Link */}
                <div className="pt-4 border-t border-stone-800/80 mt-2 flex items-center justify-between">
                  <Link to={item.path} className="flex items-center gap-2 group/btn font-body text-xs font-semibold uppercase tracking-wider text-stone-200 group-hover:text-gold transition-colors duration-200">
                    {item.cta}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProductCategories;
