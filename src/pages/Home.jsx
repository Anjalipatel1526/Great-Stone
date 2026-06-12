import React from 'react';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ProductCategories from '../components/sections/ProductCategories';
import MaterialProcess from '../components/sections/MaterialProcess';
import ColorCollection from '../components/sections/ColorCollection';
import WarrantyStrip from '../components/sections/WarrantyStrip';
import MissionVision from '../components/sections/MissionVision';
import ContactCTA from '../components/sections/ContactCTA';
import TextureStrip from '../components/ui/TextureStrip';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* Texture Strip Instance 1 */}
      <TextureStrip text="75–80% Natural Quartz  ·  Advanced Polymerization Casting  ·  Gujarat & NCR Manufacturing" />
      
      {/* 2. Why Choose Us */}
      <WhyChooseUs />
      
      {/* Texture Strip Instance 2 */}
      <TextureStrip text="Scratch & Heat Resistant  ·  Hygienic Non-Porous Surface  ·  Computer-Controlled Casting" />
      
      {/* 3. Product Categories */}
      <ProductCategories />
      
      {/* Texture Strip Instance 3 */}
      <TextureStrip text="Quartz Granite Composite  ·  Handmade SUS 304 Series  ·  Classic Utility Steel" />
      
      {/* 4. Materials & Manufacturing Science */}
      <MaterialProcess />
      
      {/* Texture Strip Instance 4 */}
      <TextureStrip text="Phantom Black  ·  Smoke Grey  ·  Ivory  ·  Forest Green  ·  Choco Brown" />
      
      {/* 5. Color Swatches Collection */}
      <ColorCollection />
      
      {/* 6. Warranty Indicators Strip */}
      <WarrantyStrip />
      
      {/* 7. Mission and Vision statement */}
      <MissionVision />
      
      {/* 8. Contact Call-To-Action */}
      <ContactCTA />
    </div>
  );
};

export default Home;
