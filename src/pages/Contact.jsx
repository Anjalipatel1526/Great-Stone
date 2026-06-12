import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import SectionLabel from '../components/ui/SectionLabel';
import Button from '../components/ui/Button';

export const Contact = () => {
  const location = useLocation();
  
  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'general',
    message: ''
  });

  // Validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prepopulate if state was passed via React Router navigation (e.g. from product drawer)
  useEffect(() => {
    if (location.state) {
      setFormData(prev => ({
        ...prev,
        enquiryType: location.state.enquiryType || 'general',
        message: location.state.message || ''
      }));
    }
  }, [location]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field error
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Validate fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        enquiryType: 'general',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-cream min-h-screen pb-24">
      {/* 1. Header */}
      <div className="bg-grain-dark py-20 text-center border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center space-y-4">
          <SectionLabel className="text-stone-400">Get in Touch</SectionLabel>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-cream tracking-tight">
            Connect With Our Design Studios
          </h1>
          <p className="font-body text-sm text-stone-300 max-w-xl leading-relaxed">
            Request catalog folders, arrange trade showroom visits, or request customized project quoting parameters.
          </p>
        </div>
      </div>

      {/* 2. Contact Split Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-stone-200">
            <h2 className="font-display text-3xl font-semibold text-stone-900 mb-6">
              Enquiry Form
            </h2>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-stone-50 border border-gold/30 p-8 text-center flex flex-col items-center space-y-4"
              >
                <CheckCircle2 size={48} className="text-gold" />
                <h3 className="font-display text-2xl font-semibold text-stone-900">Enquiry Received</h3>
                <p className="font-body text-xs text-stone-500 max-w-sm leading-relaxed">
                  Thank you for contacting Great & Stone. A kitchen fittings specialist will review your parameters and email detailed specifications within 24 business hours.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="dark"
                  className="mt-2 text-xs"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-[11px] font-body font-semibold uppercase tracking-wider text-stone-600">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 bg-stone-50 border text-sm font-body focus:outline-none focus:ring-1 focus:ring-gold rounded-none ${
                        errors.name ? 'border-red-500' : 'border-stone-200'
                      }`}
                      placeholder="e.g. Architect Rajesh Kumar"
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-semibold uppercase tracking-wide">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-[11px] font-body font-semibold uppercase tracking-wider text-stone-600">
                      Phone Number *
                    </label>
                    <input 
                      type="text" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 bg-stone-50 border text-sm font-body focus:outline-none focus:ring-1 focus:ring-gold rounded-none ${
                        errors.phone ? 'border-red-500' : 'border-stone-200'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 font-semibold uppercase tracking-wide">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-[11px] font-body font-semibold uppercase tracking-wider text-stone-600">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 bg-stone-50 border text-sm font-body focus:outline-none focus:ring-1 focus:ring-gold rounded-none ${
                        errors.email ? 'border-red-500' : 'border-stone-200'
                      }`}
                      placeholder="name@agency.com"
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-semibold uppercase tracking-wide">{errors.email}</p>}
                  </div>

                  {/* Enquiry Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiryType" className="block text-[11px] font-body font-semibold uppercase tracking-wider text-stone-600">
                      Enquiry Type
                    </label>
                    <select 
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full p-3 bg-stone-50 border border-stone-200 text-sm font-body focus:outline-none focus:ring-1 focus:ring-gold rounded-none"
                    >
                      <option value="general">General Information</option>
                      <option value="trade-enquiry">Architect / Trade enquiry</option>
                      <option value="dealership">Dealership Opportunities</option>
                      <option value="custom">Custom Dimensions</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-[11px] font-body font-semibold uppercase tracking-wider text-stone-600">
                    Message Details *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full p-3 bg-stone-50 border text-sm font-body focus:outline-none focus:ring-1 focus:ring-gold rounded-none resize-none ${
                      errors.message ? 'border-red-500' : 'border-stone-200'
                    }`}
                    placeholder="Specify project parameters, sizing tags, material choices, and delivery timelines..."
                  />
                  {errors.message && <p className="text-[10px] text-red-500 font-semibold uppercase tracking-wide">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Dispatching parameters...</span>
                  ) : (
                    <>
                      <span>Transmit Enquiry</span>
                      <Send size={14} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Office info & Trade */}
          <div className="lg:col-span-5 space-y-10">
            {/* Showrooms */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-semibold text-stone-900">
                Our Studios
              </h2>
              
              <div className="space-y-6 divide-y divide-stone-250">
                {/* Gujarat HQ */}
                <div className="pt-0 space-y-3">
                  <span className="font-body text-[10px] uppercase font-bold tracking-widest text-gold block">
                    Manufacturing HQ
                  </span>
                  <h4 className="font-display text-xl font-semibold text-stone-900">
                    Morbi, Gujarat
                  </h4>
                  <div className="space-y-2 text-xs font-body text-stone-500">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                      <span>Plot 108, GIDC Industrial Estate, Morbi - 363641, Gujarat</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone size={14} className="text-gold shrink-0" />
                      <span>+91 2822 290100</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock size={14} className="text-gold shrink-0" />
                      <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                  {/* Map Embed Placeholder */}
                  <div className="w-full h-32 bg-stone-900 flex items-center justify-center overflow-hidden border border-stone-850 relative group">
                    <div className="absolute inset-0 bg-grain-dark opacity-90" />
                    <span className="relative font-body text-[10px] uppercase font-semibold text-stone-400 tracking-widest group-hover:text-gold transition-colors duration-300">
                      [MORBI HQ MAP VIEW]
                    </span>
                  </div>
                </div>

                {/* NCR Showroom */}
                <div className="pt-6 space-y-3">
                  <span className="font-body text-[10px] uppercase font-bold tracking-widest text-gold block">
                    North Distribution Studio
                  </span>
                  <h4 className="font-display text-xl font-semibold text-stone-900">
                    Noida, NCR
                  </h4>
                  <div className="space-y-2 text-xs font-body text-stone-500">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                      <span>A-42, Sector 63, Noida - 201301, Uttar Pradesh</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone size={14} className="text-gold shrink-0" />
                      <span>+91 120 4912345</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock size={14} className="text-gold shrink-0" />
                      <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                  {/* Map Embed Placeholder */}
                  <div className="w-full h-32 bg-stone-900 flex items-center justify-center overflow-hidden border border-stone-850 relative group">
                    <div className="absolute inset-0 bg-grain-dark opacity-90" />
                    <span className="relative font-body text-[10px] uppercase font-semibold text-stone-400 tracking-widest group-hover:text-gold transition-colors duration-300">
                      [NCR STUDIO MAP VIEW]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trade Inquiries block */}
            <div className="p-6 border border-gold/30 bg-gold/5 space-y-4">
              <div className="flex items-center gap-2 text-gold">
                <Award size={18} />
                <h4 className="font-body text-xs font-semibold uppercase tracking-widest">
                  Trade Partnerships
                </h4>
              </div>
              <h3 className="font-display text-xl font-semibold text-stone-900 leading-snug">
                For Architects, Designers & Builders
              </h3>
              <p className="font-body text-xs text-stone-500 leading-relaxed">
                We provide physical material color sample chips, custom CAD layouts, and specialized wholesale margins for bulk project specification.
              </p>
              <div className="pt-2">
                <a 
                  href="mailto:trade@greatandstone.com" 
                  className="font-body text-[10px] uppercase font-bold tracking-wider text-gold hover:underline flex items-center gap-1.5"
                >
                  Contact trade desk <Send size={10} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
