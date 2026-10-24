'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Navigation, 
  Send, 
  CheckCircle2, 
  Calendar,
  Building,
  ExternalLink
} from 'lucide-react';

export default function LocationContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'General Consultation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="location" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Visit Us in Sharjah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Conveniently Located in Al Rolla, Sharjah
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Easily accessible with ample surrounding parking, nearby public transport links, and prompt elevator access.
          </p>
        </div>

        {/* Main Grid: Location Details + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Address, Hours & Interactive Map View */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Address */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                    <Building className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm font-heading">Clinic Address</h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    3rd Floor, The Residence 7 Bldg,<br />
                    Al Rolla St, Sharjah, United Arab Emirates
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100">
                  <a
                    href="https://maps.google.com/?q=The+Residence+7+Al+Rolla+Sharjah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Card 2: Contact & Helpline */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm font-heading">Call & WhatsApp</h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    Direct Reception: <strong>+971 58 684 6600</strong><br />
                    WhatsApp inquiries handled promptly
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href="tel:+971586846600"
                    className="px-2.5 py-1 bg-slate-900 text-white rounded-lg text-[11px] font-bold"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/971586846600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-emerald-600 text-white rounded-lg text-[11px] font-bold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>

            {/* Working Hours Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-teal-600" />
                <h3 className="font-bold text-slate-900 text-sm font-heading">Clinical Operating Hours</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-medium text-slate-700">Saturday – Thursday</span>
                  <span className="font-bold text-teal-800">9:00 AM – 10:00 PM</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-medium text-slate-700">Friday (Afternoon)</span>
                  <span className="font-bold text-teal-800">2:00 PM – 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Visualizer / Directions Preview */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 text-white relative h-72 sm:h-80">
              {/* Map background styling */}
              <div className="absolute inset-0 bg-[#0f172a] opacity-95">
                {/* SVG stylistic map grid */}
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2dd4bf" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Map Pin UI Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <div className="w-14 h-14 rounded-full bg-teal-500/20 border-2 border-teal-400 text-teal-300 flex items-center justify-center shadow-glow-teal animate-pulse mb-3">
                  <MapPin className="w-7 h-7 text-teal-300" />
                </div>
                
                <h4 className="text-xl font-bold font-heading text-white">
                  Happy Way Medical Center
                </h4>
                <p className="text-slate-300 text-xs mt-1 max-w-sm">
                  3rd Floor, The Residence 7 Bldg, Al Rolla St, Sharjah (Opposite Rolla Square)
                </p>

                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <a
                    href="https://maps.google.com/?q=The+Residence+7+Al+Rolla+Sharjah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition flex items-center gap-1.5 shadow-md"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get GPS Directions</span>
                  </a>
                  <a
                    href="tel:+971586846600"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>

              {/* Landmark badges */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-400 z-10 hidden sm:flex">
                <span>Nearby: Rolla Square Bus Station (3 min walk)</span>
                <span>Parking Available</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Direct Inquiry & Quick Booking Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
            <div className="mb-6">
              <span className="text-teal-600 font-bold text-xs uppercase tracking-wider block mb-1">
                Fast Contact Form
              </span>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Send An Inquiry or Question
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Have questions about insurance coverage, dental pricing, or doctor availability? We will reply within 30 minutes during working hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-10 bg-teal-50/50 rounded-2xl border border-teal-200/70 p-6 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-slate-900 font-heading">Inquiry Received</h4>
                <p className="text-slate-600 text-xs mt-2">
                  Thank you! Our clinical receptionist will contact you on <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-5 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmed Sultan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 5X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800 bg-white"
                  >
                    <option value="General Consultation">General Medicine & Routine Health</option>
                    <option value="Advanced Dentistry">Advanced Dentistry & Whitening</option>
                    <option value="Orthodontics & Braces">Orthodontics & Aligners</option>
                    <option value="Pediatrics">Pediatrics & Baby Vaccination</option>
                    <option value="Cardiology">Cardiology & ECG</option>
                    <option value="Dermatology">Dermatology & Skin Care</option>
                    <option value="Insurance Question">Insurance Coverage Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Message or Question
                  </label>
                  <textarea
                    rows={3}
                    placeholder="How can our doctors assist you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 active:scale-[0.99] shadow-md"
                >
                  <Send className="w-3.5 h-3.5 text-teal-400" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
