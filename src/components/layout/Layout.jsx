import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream flex flex-col justify-between selection:bg-gold selection:text-stone-900 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex-grow pt-20" /* offset for sticky navbar */
      >
        {children}
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
