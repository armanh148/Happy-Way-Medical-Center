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
    <section id="location" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm border border-teal-200/80">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Visit Us in Rolla, Sharjah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
            Conveniently Located In The Heart Of <br className="hidden sm:block" />
            <span className="teal-gradient-text">Al Rolla, Sharjah</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Easily accessible with surrounding municipal parking, direct elevator access to the 3rd floor, and within a 2-minute walk from Rolla Square bus terminal.
          </p>
        </div>

        {/* Main Grid: Location Details + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Address, Hours & Interactive Map View */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Address */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-200/60 text-teal-700 flex items-center justify-center mb-4">
                    <Building className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-heading">Clinic Address</h3>
                  <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                    3rd Floor, The Residence 7 Bldg,<br />
                    Al Rolla St, Sharjah, United Arab Emirates
                  </p>
                  <p className="text-[11px] text-teal-700 font-semibold mt-2 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5" />
                    <span>Paid RTA & Clinic Parking Nearby</span>
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <a
                    href="https://maps.google.com/?q=The+Residence+7+Al+Rolla+Sharjah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1.5 group"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </a>
                </div>
              </div>

              {/* Card 2: Contact & Helpline */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-200/60 text-teal-700 flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-heading">Direct Helpline & WhatsApp</h3>
                  <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                    Main Desk: <strong className="text-slate-900">+971 58 684 6600</strong><br />
                    Immediate multilingual front desk support
                  </p>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>WhatsApp Responding in &lt; 5 mins</span>
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href="tel:+971586846600"
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition shadow-sm"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/971586846600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Working Hours Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <h3 className="font-bold text-slate-900 text-base font-heading">Clinical Operating Hours</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open Today
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Saturday – Thursday</span>
                  <span className="font-bold text-teal-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    9:00 AM – 10:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Friday (Afternoon)</span>
                  <span className="font-bold text-teal-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    2:00 PM – 9:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Map Visualizer / Directions Preview */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 text-white relative min-h-[300px]">
              {/* Map background styling */}
              <div className="absolute inset-0 bg-slate-950 opacity-95">
                <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-map" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#14b8a6" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-map)" />
                </svg>
              </div>

              {/* Map Pin UI Overlay */}
              <div className="relative z-10 p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 border-2 border-teal-400 text-teal-300 flex items-center justify-center shadow-glow-teal animate-pulse mb-3.5">
                  <MapPin className="w-8 h-8 text-teal-300" />
                </div>
                
                <h4 className="text-xl sm:text-2xl font-black font-heading text-white">
                  Happy Way Medical Center
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-1.5 max-w-md leading-relaxed">
                  3rd Floor, The Residence 7 Bldg, Al Rolla St, Sharjah <br />
                  <span className="text-teal-400 font-semibold">(Directly opposite Rolla Square & Rolla Bus Station)</span>
                </p>

                <div className="mt-5 flex flex-wrap gap-3 justify-center">
                  <a
                    href="https://maps.google.com/?q=The+Residence+7+Al+Rolla+Sharjah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-lg shadow-teal-500/25"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get GPS Directions</span>
                  </a>
                  <a
                    href="tel:+971586846600"
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-teal-400" />
                    <span>Call Desk</span>
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-6 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-teal-400" />
                    <span>Rolla Bus Terminal: 2 Min Walk</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-teal-400" />
                    <span>High-Speed Passenger Elevators</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Direct Inquiry & Quick Booking Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl">
            <div className="mb-6">
              <span className="text-teal-600 font-bold text-xs uppercase tracking-wider block mb-1">
                Fast Clinical Helpdesk
              </span>
              <h3 className="text-2xl font-black font-heading text-slate-900 tracking-tight">
                Send An Inquiry or Question
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                Have questions about insurance coverage, dental pricing, or doctor availability? We reply within 30 minutes during clinic hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12 bg-teal-50/70 rounded-2xl border border-teal-200/80 p-6 animate-in fade-in">
                <div className="w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3.5 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">Inquiry Received Successfully</h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xs mx-auto">
                  Thank you <strong className="text-slate-900">{formData.name || 'Patient'}</strong>! Our clinical front-desk will contact you on <strong className="text-teal-700">{formData.phone}</strong> promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmed Sultan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500 text-slate-900 placeholder-slate-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Mobile Number (WhatsApp Preferred)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 5X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500 text-slate-900 placeholder-slate-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500 text-slate-900 bg-white transition"
                  >
                    <option value="General Consultation">General Medicine & Routine Health</option>
                    <option value="Advanced Dentistry">Advanced Dentistry & Laser Whitening</option>
                    <option value="Orthodontics & Braces">Orthodontics & Hollywood Smile</option>
                    <option value="Pediatrics">Pediatrics & Baby Vaccination</option>
                    <option value="Cardiology">Cardiology & ECG Diagnostics</option>
                    <option value="Orthopedics">Orthopedics & Joint Care</option>
                    <option value="Dermatology">Dermatology & Cosmetology</option>
                    <option value="Insurance Question">Insurance Coverage Pre-Check</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Message or Medical Query
                  </label>
                  <textarea
                    rows={3}
                    placeholder="How can our clinical team assist you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500 text-slate-900 placeholder-slate-400 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shine w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-[0.99] shadow-lg shadow-teal-900/15 border border-slate-700"
                >
                  <Send className="w-4 h-4 text-teal-400" />
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
