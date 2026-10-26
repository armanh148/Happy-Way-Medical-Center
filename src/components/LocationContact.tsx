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
  ExternalLink,
  MessageSquare,
  Car,
  Compass
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
    <section id="location" className="py-14 sm:py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3.5 shadow-sm border border-emerald-200/80">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Visit Us in Rolla, Sharjah</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
            Conveniently Located In The Heart Of <br className="hidden sm:block" />
            <span className="brand-gradient-text">Al Rolla, Sharjah</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600 leading-relaxed px-1">
            Easily accessible with surrounding municipal parking, direct elevator access to the 3rd floor, and within a 2-minute walk from Rolla Square bus terminal.
          </p>
        </div>

        {/* Main Grid: Location Details + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column (7 cols): Address, Hours & Interactive Map View */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              
              {/* Card 1: Address */}
              <div className="luxury-card-light rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center mb-3 sm:mb-4">
                    <Building className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-heading">Clinic Address</h3>
                  <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                    3rd Floor, The Residence 7 Bldg,<br />
                    Al Rolla St, Sharjah, United Arab Emirates
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-2 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 shrink-0" />
                    <span>Paid RTA & Clinic Parking Nearby</span>
                  </p>
                </div>
                <div className="pt-3.5 mt-3.5 border-t border-slate-100">
                  <a
                    href="https://maps.google.com/?q=The+Residence+7+Al+Rolla+Sharjah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5 group"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </a>
                </div>
              </div>

              {/* Card 2: Contact & Helpline */}
              <div className="luxury-card-light rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-blue-50 border border-blue-200/60 text-blue-700 flex items-center justify-center mb-3 sm:mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-heading">Direct Helpline & WhatsApp</h3>
                  <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                    Mobile: <strong className="text-slate-900">+971 58 684 6600</strong><br />
                    Landline: <strong className="text-slate-900">06 530 0540</strong>
                  </p>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>WhatsApp Active Daily</span>
                  </p>
                </div>
                <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <a
                    href="tel:+971586846600"
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[11px] font-bold transition shadow-sm"
                  >
                    Mobile
                  </a>
                  <a
                    href="tel:065300540"
                    className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-[11px] font-bold transition shadow-sm"
                  >
                    Landline
                  </a>
                  <a
                    href="https://wa.me/971586846600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[11px] font-bold transition shadow-sm flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Working Hours Card */}
            <div className="luxury-card-light rounded-3xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-heading">Clinical Operating Hours</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] sm:text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open Today
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700 text-[11px] sm:text-xs">Sat – Thu</span>
                  <span className="font-bold text-emerald-800 bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-slate-200 text-[11px] sm:text-xs">
                    9:00 AM – 10:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700 text-[11px] sm:text-xs">Friday (Afternoon)</span>
                  <span className="font-bold text-blue-800 bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-slate-200 text-[11px] sm:text-xs">
                    2:00 PM – 9:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Map Visualizer / Directions Preview */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 text-white relative min-h-[280px] sm:min-h-[300px]">
              {/* Map background styling */}
              <div className="absolute inset-0 bg-slate-950 opacity-95">
                <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-map-green" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22c55e" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-map-green)" />
                </svg>
              </div>

              {/* Map Pin UI Overlay */}
              <div className="relative z-10 p-5 sm:p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 flex items-center justify-center shadow-glow-green animate-pulse mb-3">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300" />
                </div>
                
                <h4 className="text-lg sm:text-2xl font-black font-heading text-white">
                  Happy Way Medical Center
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-md leading-relaxed px-1">
                  3rd Floor, The Residence 7 Bldg, Al Rolla St, Sharjah <br />
                  <span className="text-emerald-400 font-semibold">(Opposite Rolla Square & Rolla Bus Station)</span>
                </p>

                <div className="mt-4 sm:mt-5 flex flex-col xs:flex-row gap-2.5 sm:gap-3 w-full xs:w-auto justify-center">
                  <a
                    href="https://maps.google.com/?q=The+Residence+7+Al+Rolla+Sharjah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine min-h-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-95"
                  >
                    <Navigation className="w-4 h-4 shrink-0" />
                    <span>Get GPS Directions</span>
                  </a>
                  <a
                    href="tel:+971586846600"
                    className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Call Mobile</span>
                  </a>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Rolla Bus: 2 Min Walk</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Elevator to 3rd Floor</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Direct Inquiry & Quick Booking Form */}
          <div className="lg:col-span-5 luxury-card-light rounded-3xl p-5 sm:p-8">
            <div className="mb-5 sm:mb-6">
              <span className="text-emerald-700 font-bold text-[10px] sm:text-xs uppercase tracking-wider block mb-1">
                Fast Clinical Helpdesk
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900 tracking-tight">
                Send An Inquiry or Question
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                Have questions about insurance coverage, dental pricing, or doctor availability? We reply within 30 minutes during clinic hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-10 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 p-5 sm:p-6 animate-in fade-in">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">Inquiry Received</h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-xs mx-auto">
                  Thank you <strong className="text-slate-900">{formData.name || 'Patient'}</strong>! Our clinical front-desk will contact you on <strong className="text-emerald-700">{formData.phone}</strong> promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-5 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmed Sultan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 text-slate-900 placeholder-slate-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Mobile Number (WhatsApp Preferred)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 5X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 text-slate-900 placeholder-slate-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 text-slate-900 bg-white transition"
                  >
                    <option value="General Consultation">General Medicine & Routine Health</option>
                    <option value="Advanced Dentistry">Advanced Dentistry & Laser Whitening</option>
                    <option value="Gynecology & Obstetrics">Gynecology & Obstetrics</option>
                    <option value="Pediatrics">Pediatrics & Baby Vaccination</option>
                    <option value="Cardiology">Cardiology & ECG Diagnostics</option>
                    <option value="Orthopedics">Orthopedics & Joint Care</option>
                    <option value="Insurance Question">Insurance Cashless Coverage Pre-Check</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Message or Medical Query
                  </label>
                  <textarea
                    rows={3}
                    placeholder="How can our doctors assist you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 text-slate-900 placeholder-slate-400 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shine w-full min-h-[48px] py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-[0.99] shadow-lg shadow-emerald-900/15"
                >
                  <Send className="w-4 h-4 text-emerald-200 shrink-0" />
                  <span>Submit Clinical Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
