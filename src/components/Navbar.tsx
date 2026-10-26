'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, Menu, X, Calendar, Activity, ChevronRight, ShieldCheck, Clock, Sparkles, MessageSquare } from 'lucide-react';

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Bar with Location, Hours & Rating */}
      <div className="bg-slate-950 text-slate-300 text-[11px] sm:text-xs py-2 px-3 sm:px-4 border-b border-slate-800/80 relative z-50">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6">
            <a 
              href="#location"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition group text-[11px] sm:text-xs"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 group-hover:scale-110 transition" />
              <span className="truncate max-w-[200px] sm:max-w-none">The Residence 7, Rolla, Sharjah</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">Open:</span>
              <span>9 AM – 10 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-1.5 bg-slate-900/90 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-slate-800 text-slate-200 shadow-sm text-[10px] sm:text-xs">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
              <span className="font-bold text-white">4.7</span>
              <span className="text-slate-400 hidden xs:inline">(405+ Reviews)</span>
            </div>
            <a 
              href="tel:+971586846600"
              className="flex sm:hidden items-center gap-1 text-emerald-400 font-bold text-[11px] bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-full"
            >
              <Phone className="w-3 h-3" />
              <span>Call</span>
            </a>
            <div className="hidden md:flex items-center gap-1 text-blue-400 bg-blue-950/60 border border-blue-800/50 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase">
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
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-2.5 sm:py-3 border-b border-slate-200/80'
            : 'bg-white/90 backdrop-blur-md py-3 sm:py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-green-500 to-blue-600 flex items-center justify-center text-white shadow-md sm:shadow-lg shadow-green-600/25 group-hover:scale-105 transition-all duration-300">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-lg sm:text-2xl font-black font-heading tracking-tight leading-none">
                  <span className="text-emerald-600 group-hover:text-emerald-500 transition">HAPPY</span>
                  <span className="text-blue-700 group-hover:text-blue-600 transition">WAY</span>
                </div>
                <span className="text-[9px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-500 mt-0.5 flex items-center gap-1">
                  <span>Medical Center</span>
                  <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                  <span className="text-blue-600">Sharjah</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-[13px] xl:text-sm font-semibold text-slate-700">
              <a 
                href="#services" 
                className="px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-xl hover:text-emerald-700 hover:bg-emerald-50/70 transition-all duration-200"
              >
                Services & Specialties
              </a>
              <a 
                href="#app-features" 
                className="px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-xl hover:text-blue-700 hover:bg-blue-50/70 transition-all duration-200 flex items-center gap-1.5 group"
              >
                <span>Digital Patient App</span>
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-[9px] xl:text-[10px] font-extrabold px-1.5 xl:px-2 py-0.5 rounded-full shadow-sm group-hover:scale-105 transition">
                  EMR Sync
                </span>
              </a>
              <a 
                href="#doctors" 
                className="px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-xl hover:text-emerald-700 hover:bg-emerald-50/70 transition-all duration-200"
              >
                Our Specialists
              </a>
              <a 
                href="#reviews" 
                className="px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-xl hover:text-emerald-700 hover:bg-emerald-50/70 transition-all duration-200"
              >
                Reviews (4.7★)
              </a>
              <a 
                href="#location" 
                className="px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-xl hover:text-blue-700 hover:bg-blue-50/70 transition-all duration-200"
              >
                Location & Hours
              </a>
            </div>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-2.5">
              <a
                href="tel:+971586846600"
                className="flex items-center gap-1.5 px-2.5 py-1.5 xl:px-3.5 xl:py-2.5 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80 text-xs font-bold border border-slate-200/90 hover:border-emerald-300 transition-all duration-200"
              >
                <div className="w-5 h-5 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="hidden xl:inline">+971 58 684 6600</span>
                <span className="xl:hidden text-[11px]">Call</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="btn-shine relative inline-flex items-center justify-center gap-1.5 px-3.5 py-2 xl:px-5 xl:py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-700/20 active:scale-95 transition-all duration-200 shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-200" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Actions: Fast Book + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-2 bg-gradient-to-r from-emerald-600 to-blue-700 text-white rounded-xl text-xs font-bold sm:hidden flex items-center gap-1.5 shadow-md active:scale-95 transition"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-200" />
                <span>Book</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition border border-slate-200 active:scale-95"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen/Drawer Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[96px] bottom-0 bg-slate-950/40 backdrop-blur-sm z-50">
            <div className="bg-white border-b border-slate-200 px-5 pt-3 pb-8 max-h-[calc(100vh-100px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200 shadow-2xl">
              <div className="flex flex-col space-y-1 pt-2 font-medium text-slate-800 text-sm">
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3.5 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 flex items-center justify-between border-b border-slate-100"
                >
                  <span className="font-semibold text-slate-900">Services & Specialties</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="#app-features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3.5 rounded-xl hover:bg-blue-50 active:bg-blue-100 flex items-center justify-between border-b border-slate-100"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">Digital Patient App & EMR</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Lab Reports
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="#doctors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3.5 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 flex items-center justify-between border-b border-slate-100"
                >
                  <span className="font-semibold text-slate-900">Medical Specialists</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="#reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3.5 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 flex items-center justify-between border-b border-slate-100"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">Patient Reviews</span>
                    <span className="text-amber-500 font-bold text-xs bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">★ 4.7</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href="#location"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3.5 rounded-xl hover:bg-blue-50 active:bg-blue-100 flex items-center justify-between border-b border-slate-100"
                >
                  <span className="font-semibold text-slate-900">Location & Rolla Map</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>

                {/* Mobile Quick Action Buttons */}
                <div className="pt-4 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-700 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25 active:scale-[0.98] transition"
                  >
                    <Calendar className="w-4 h-4 text-emerald-200" />
                    <span>Book Consultation Online</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:+971586846600"
                      className="py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Call Mobile</span>
                    </a>
                    <a
                      href="https://wa.me/971586846600"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Operating hours footer inside mobile menu */}
                <div className="pt-4 mt-2 border-t border-slate-100 text-center">
                  <p className="text-[11px] text-slate-500">
                    Open Daily 9:00 AM – 10:00 PM • Fri 2:00 PM – 9:00 PM
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    3rd Floor, The Residence 7, Rolla, Sharjah
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
