import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronRight, PhoneCall, Info } from 'lucide-react';
import { products } from '../data/products';
import { fadeUp, staggerContainer, slideInRight } from '../utils/animations';
import SectionLabel from '../components/ui/SectionLabel';
import ProductCard from '../components/ui/ProductCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // State for category filtering
  const [activeFilter, setActiveFilter] = useState('All');
  
  // State for drawer
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync category filter with URL query param if present
  useEffect(() => {
    const categoryQuery = searchParams.get('category');
    if (categoryQuery) {
      if (categoryQuery === 'quartz-granite') setActiveFilter('Quartz Granite');
      else if (categoryQuery === 'handmade-ss') setActiveFilter('Handmade SS 304');
      else if (categoryQuery === 'steel-series') setActiveFilter('Steel Sink Series');
    }
  }, [searchParams]);

  // Set filter and update URL
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'All') {
      searchParams.delete('category');
    } else if (filter === 'Quartz Granite') {
      searchParams.set('category', 'quartz-granite');
    } else if (filter === 'Handmade SS 304') {
      searchParams.set('category', 'handmade-ss');
    } else if (filter === 'Steel Sink Series') {
      searchParams.set('category', 'steel-series');
    }
    
    setSearchParams(searchParams);
  };

  // Filter products
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.collection === activeFilter);

  // Handle inquiry click - passes product details to Contact page state
  const handleInquiry = (product) => {
    navigate('/contact', { 
      state: { 
        enquiryType: 'trade-enquiry',
        message: `Hello, I would like to request a quote and inspect sizing for the "${product.name}" from the "${product.collection}" collection.` 
      } 
    });
  };

  return (
    <div className="bg-stone-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-grain-dark py-20 text-center border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center space-y-4">
          <SectionLabel className="text-stone-400">Our Collections</SectionLabel>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-cream tracking-tight">
            The Complete Product Catalog
          </h1>
          <p className="font-body text-sm text-stone-300 max-w-xl leading-relaxed">
            Browse our catalog of luxury kitchen sinks. Select a model to view technical specifications, material composites, and dimensions.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b border-stone-200 sticky top-[72px] md:top-[80px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between overflow-x-auto whitespace-nowrap scrollbar-none">
          <div className="flex space-x-2 md:space-x-4">
            {['All', 'Quartz Granite', 'Handmade SS 304', 'Steel Sink Series'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`font-body text-xs font-semibold uppercase tracking-widest px-5 py-2.5 transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-stone-900 text-cream' 
                    : 'bg-stone-50 text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {filter === 'Handmade SS 304' ? 'Handmade SS' : filter === 'Steel Sink Series' ? 'Steel Series' : filter}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center text-xs font-body text-stone-500 gap-1.5 select-none">
            <Info size={14} className="text-gold" />
            <span>Click any product card to view specifications</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div 
          layout
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                variants={fadeUp}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard 
                  image={product.image}
                  collection={product.collection}
                  name={product.name}
                  bowlType={product.bowlType}
                  sizes={product.sizes}
                  warrantyYears={product.warrantyYears}
                  onClick={() => setSelectedProduct(product)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-stone-500">No products found matching this filter.</p>
          </div>
        )}
      </div>

      {/* Slide-over Product Detail Drawer */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-stone-950 z-50 cursor-pointer"
            />
            
            {/* Drawer Panel */}
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideInRight}
              className="fixed top-0 right-0 h-full w-full sm:w-[550px] bg-white shadow-2xl z-50 overflow-y-auto flex flex-col justify-between"
            >
              {/* Drawer Content */}
              <div>
                {/* Header Image Panel */}
                <div className="relative aspect-video sm:aspect-[4/3] bg-stone-900 overflow-hidden">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/10 to-transparent" />
                  
                  {/* Close button */}
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-6 right-6 p-2 bg-stone-900/60 hover:bg-stone-900 text-cream transition-colors duration-200 focus:outline-none"
                  >
                    <X size={20} />
                  </button>

                  {/* Header Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="font-body text-[10px] uppercase tracking-widest text-gold font-bold mb-1 block">
                      {selectedProduct.collection}
                    </span>
                    <h2 className="font-display text-3xl font-semibold tracking-tight text-white">
                      {selectedProduct.name}
                    </h2>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-8 space-y-8">
                  {/* Badges Panel */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Badge variant="gold">{selectedProduct.warrantyYears} Year Warranty</Badge>
                    <Badge variant="stone">{selectedProduct.bowlType}</Badge>
                    <Badge variant="cream">{selectedProduct.color}</Badge>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-stone-500">
                      Product Overview
                    </h4>
                    <p className="font-body text-sm text-stone-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-stone-500">
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProduct.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-stone-700">
                          <CheckCircle size={14} className="text-gold shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications Table */}
                  <div className="space-y-3">
                    <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-stone-500">
                      Technical Specifications
                    </h4>
                    <div className="border border-stone-200 divide-y divide-stone-200">
                      <div className="grid grid-cols-2 p-3 text-xs">
                        <span className="font-semibold text-stone-700">Composite Material</span>
                        <span className="text-stone-600">{selectedProduct.longFeatures?.material || selectedProduct.collection}</span>
                      </div>
                      {selectedProduct.longFeatures?.finish && (
                        <div className="grid grid-cols-2 p-3 text-xs">
                          <span className="font-semibold text-stone-700">Texture Finish</span>
                          <span className="text-stone-600">{selectedProduct.longFeatures.finish}</span>
                        </div>
                      )}
                      {selectedProduct.longFeatures?.thickness && (
                        <div className="grid grid-cols-2 p-3 text-xs">
                          <span className="font-semibold text-stone-700">Gauge Thickness</span>
                          <span className="text-stone-600">{selectedProduct.longFeatures.thickness}</span>
                        </div>
                      )}
                      <div className="grid grid-cols-2 p-3 text-xs">
                        <span className="font-semibold text-stone-700">Installation Type</span>
                        <span className="text-stone-600">{selectedProduct.longFeatures?.installation || 'Undermount / Overmount'}</span>
                      </div>
                      <div className="grid grid-cols-2 p-3 text-xs">
                        <span className="font-semibold text-stone-700">Basin Depth</span>
                        <span className="text-stone-600">{selectedProduct.longFeatures?.depth || '10 inches'}</span>
                      </div>
                      <div className="grid grid-cols-2 p-3 text-xs">
                        <span className="font-semibold text-stone-700">Available Dimensions</span>
                        <span className="text-stone-600">{selectedProduct.sizes.join(" | ")} inches</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Footer CTA */}
              <div className="p-6 bg-stone-50 border-t border-stone-200 flex gap-4">
                <Button 
                  onClick={() => handleInquiry(selectedProduct)} 
                  variant="primary" 
                  className="flex-grow py-3.5 flex items-center justify-center gap-2"
                >
                  <PhoneCall size={14} />
                  Request Pricing
                </Button>
                
                <Button 
                  onClick={() => setSelectedProduct(null)} 
                  variant="dark" 
                  className="py-3.5"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
