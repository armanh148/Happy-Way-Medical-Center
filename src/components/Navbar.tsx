'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, Menu, X, Calendar, Activity, ChevronRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (dept?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar with Location, Hours & Rating */}
      <div className="bg-slate-950 text-slate-300 text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block relative z-50">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href="#location"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition group"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition" />
              <span>3rd Floor, The Residence 7 Bldg, Al Rolla St, Sharjah</span>
            </a>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">Open Now:</span>
              <span>9:00 AM – 10:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800 text-slate-200 shadow-sm">
              <div className="flex text-amber-400">
                <Star className="w-3 h-3 fill-amber-400" />
              </div>
              <span className="font-bold text-white text-xs">4.7 / 5</span>
              <span className="text-slate-400 text-[10px]">(405+ Reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-blue-400 bg-blue-950/60 border border-blue-800/50 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-3 h-3 text-blue-400" />
              <span>MOHAP Certified Facility</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-3 border-b border-slate-200/80'
            : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo matching actual Happy Way Brand (Green Happy + Blue Way) */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-green-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-green-600/25 group-hover:shadow-blue-600/30 group-hover:scale-105 transition-all duration-300">
                  <Activity className="w-6 h-6 text-white stroke-[2.5]" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-2xl font-black font-heading tracking-tight leading-none">
                  <span className="text-emerald-600 group-hover:text-emerald-500 transition">HAPPY</span>
                  <span className="text-blue-700 group-hover:text-blue-600 transition">WAY</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-500 mt-1 flex items-center gap-1">
                  <span>Medical Center</span>
                  <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                  <span className="text-blue-600">Sharjah</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 text-sm font-semibold text-slate-700">
              <a 
                href="#services" 
                className="px-3.5 py-2 rounded-xl hover:text-emerald-700 hover:bg-emerald-50/70 transition-all duration-200"
              >
                Services & Specialties
              </a>
              <a 
                href="#app-features" 
                className="px-3.5 py-2 rounded-xl hover:text-blue-700 hover:bg-blue-50/70 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Digital Patient App</span>
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm group-hover:scale-105 transition">
                  EMR Sync
                </span>
              </a>
              <a 
                href="#doctors" 
                className="px-3.5 py-2 rounded-xl hover:text-emerald-700 hover:bg-emerald-50/70 transition-all duration-200"
              >
                Our Specialists
              </a>
              <a 
                href="#reviews" 
                className="px-3.5 py-2 rounded-xl hover:text-emerald-700 hover:bg-emerald-50/70 transition-all duration-200"
              >
                Reviews (4.7★)
              </a>
              <a 
                href="#location" 
                className="px-3.5 py-2 rounded-xl hover:text-blue-700 hover:bg-blue-50/70 transition-all duration-200"
              >
                Location & Hours
              </a>
            </div>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+971586846600"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80 text-xs font-bold border border-slate-200/90 hover:border-emerald-300 transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+971 58 684 6600</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="btn-shine relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-700/20 active:scale-95 transition-all duration-200"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-200" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold sm:hidden flex items-center gap-1 shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition border border-slate-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-xl">
            <div className="flex flex-col space-y-2 pt-2 font-medium text-slate-800 text-sm">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-emerald-50 flex items-center justify-between border-b border-slate-100"
              >
                <span className="font-semibold">Services & Specialties</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#app-features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-blue-50 flex items-center justify-between border-b border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Digital Patient App & EMR</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Reports
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#doctors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-emerald-50 flex items-center justify-between border-b border-slate-100"
              >
                <span className="font-semibold">Medical Specialists</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-emerald-50 flex items-center justify-between border-b border-slate-100"
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold">Patient Reviews</span>
                  <span className="text-amber-500 font-bold text-xs">★ 4.7</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-blue-50 flex items-center justify-between border-b border-slate-100"
              >
                <span className="font-semibold">Location & Clinic Map</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-700 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20"
                >
                  <Calendar className="w-4 h-4 text-emerald-200" />
                  <span>Book Consultation Online</span>
                </button>
                <a
                  href="tel:+971586846600"
                  className="w-full py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Direct Hotline: +971 58 684 6600</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
