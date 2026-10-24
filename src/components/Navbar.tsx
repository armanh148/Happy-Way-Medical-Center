'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, Menu, X, Calendar, Activity, ChevronRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (dept?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar with Location, Hours & Rating */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 hover:text-white transition">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>3rd Floor, The Residence 7 Bldg, Al Rolla St, Sharjah</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open Today: 9:00 AM – 10:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-semibold text-white">4.7</span>
              <span className="text-slate-400 text-[11px]">(405+ Practo & Google Reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-teal-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-medium text-[11px] uppercase tracking-wider">MOHAP Licensed Facility</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-100'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100/60'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-700 via-brand-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-teal-500/25 group-hover:scale-105 transition-transform duration-200">
                <Activity className="w-6 h-6 text-white stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-slate-900 group-hover:text-brand-700 transition">
                  Happy Way
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-brand-600 -mt-1">
                  Medical Center & Dental
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <a href="#services" className="hover:text-brand-600 transition">
                Services
              </a>
              <a href="#app-features" className="hover:text-brand-600 transition flex items-center gap-1.5">
                <span>Patient App</span>
                <span className="bg-brand-50 text-brand-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-brand-200/60">
                  New
                </span>
              </a>
              <a href="#doctors" className="hover:text-brand-600 transition">
                Doctors
              </a>
              <a href="#reviews" className="hover:text-brand-600 transition">
                Reviews
              </a>
              <a href="#location" className="hover:text-brand-600 transition">
                Location
              </a>
            </div>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+971586846600"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-slate-700 hover:text-brand-700 hover:bg-slate-50 text-xs font-semibold border border-slate-200/80 transition"
              >
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                <span>+971 58 684 6600</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-slate-900 via-brand-darkTeal to-slate-900 hover:from-brand-800 hover:to-teal-800 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-teal-500/20 active:scale-95 transition-all duration-200"
              >
                <Calendar className="w-3.5 h-3.5 text-teal-300" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-2 bg-brand-600 text-white rounded-lg text-xs font-bold sm:hidden"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3.5 pt-2 font-medium text-slate-800 text-sm">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Services & Departments</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#app-features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Digital Patient App & Lab Portal</span>
                <span className="bg-brand-100 text-brand-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  New
                </span>
              </a>
              <a
                href="#doctors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Medical Specialists</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Patient Reviews (4.7 ★)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Location & Rolla Clinic Map</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-teal-400" />
                  Book Consultation
                </button>
                <a
                  href="tel:+971586846600"
                  className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  Direct Call: +971 58 684 6600
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
