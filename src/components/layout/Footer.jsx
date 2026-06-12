import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-grain-dark text-stone-200 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Col 1: Brand */}
        <div className="flex flex-col space-y-4">
          <Link to="/" className="font-display text-2xl font-bold tracking-wider text-cream">
            GREAT & STONE
          </Link>
          <p className="font-body text-xs text-stone-400 leading-relaxed max-w-xs">
            Crafting luxury kitchen sinks of unmatched quality and silent confidence. Engineering trust for India's finest architectural spaces.
          </p>
          <div className="flex space-x-4 pt-2">
            {/* Inline SVG Facebook */}
            <a href="#" className="text-stone-400 hover:text-gold transition-colors duration-200" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            {/* Inline SVG Instagram */}
            <a href="#" className="text-stone-400 hover:text-gold transition-colors duration-200" aria-label="Instagram">
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* Inline SVG LinkedIn */}
            <a href="#" className="text-stone-400 hover:text-gold transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Products */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
            Products
          </h4>
          <ul className="flex flex-col space-y-2.5 text-xs text-stone-400">
            <li>
              <Link to="/products" className="hover:text-cream transition-colors duration-200">
                Explore Catalog
              </Link>
            </li>
            <li>
              <Link to="/products/quartz-granite" className="hover:text-cream transition-colors duration-200">
                Quartz Granite Collection
              </Link>
            </li>
            <li>
              <Link to="/products/stainless-steel" className="hover:text-cream transition-colors duration-200">
                Handmade SS 304 Series
              </Link>
            </li>
            <li>
              <Link to="/products/stainless-steel?series=steel-series" className="hover:text-cream transition-colors duration-200">
                Steel Sink Series
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Company */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
            Company
          </h4>
          <ul className="flex flex-col space-y-2.5 text-xs text-stone-400">
            <li>
              <Link to="/about" className="hover:text-cream transition-colors duration-200">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cream transition-colors duration-200">
                Contact & Showrooms
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors duration-200">
                Architect Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors duration-200">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
            Locations
          </h4>
          <div className="flex flex-col space-y-3 text-xs text-stone-400">
            <div className="flex items-start space-x-2.5">
              <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
              <span>
                <strong>Gujarat HQ:</strong> Plot 108, GIDC Industrial Estate, Morbi, Gujarat
              </span>
            </div>
            <div className="flex items-start space-x-2.5">
              <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
              <span>
                <strong>NCR Showroom:</strong> A-42, Sector 63, Noida, Uttar Pradesh
              </span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Mail size={14} className="text-gold shrink-0" />
              <a href="mailto:hello@greatandstone.com" className="hover:text-cream transition-colors duration-200">
                hello@greatandstone.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-stone-800/60 flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-500 font-body uppercase tracking-wider gap-4">
        <div>
          © {new Date().getFullYear()} Great & Stone. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-stone-300 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-stone-300 transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-stone-300 transition-colors duration-200">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
