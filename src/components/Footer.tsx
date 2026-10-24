'use client';

import React from 'react';
import { Activity, Phone, MapPin, Mail, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Emergency Callout Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 border-b border-slate-800 py-4 px-4">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-white font-semibold text-xs sm:text-sm">
              Urgent Consultation or Medical Queries?
            </span>
            <span className="text-slate-400 hidden md:inline text-xs">
              Direct front-desk hotline available during working hours.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+971586846600"
              className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 transition inline-flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +971 58 684 6600</span>
            </a>
            <a
              href="https://wa.me/971586846600"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-600 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-teal-400 flex items-center justify-center text-white shadow-md">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold font-heading text-white tracking-tight block">
                  Happy Way Medical Center
                </span>
                <span className="text-[10px] uppercase tracking-widest text-teal-400 font-semibold block -mt-1">
                  Multi-Specialty & Advanced Dental Clinic
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Providing compassionate, patient-centered healthcare, precision dentistry, and digital lab diagnostics to the community of Sharjah, UAE.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>3rd Floor, The Residence 7 Bldg, Al Rolla St, Sharjah, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+971 58 684 6600</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>MOHAP UAE Regulated Facility • Verified Practo Partner</span>
              </div>
            </div>
          </div>

          {/* Clinical Departments */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Clinical Departments
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-teal-400 transition">Advanced Dentistry & Orthodontics</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">General & Internal Medicine</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Pediatrics & Baby Vaccination</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Cardiology & ECG Diagnostics</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Orthopedics & Joint Care</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Dermatology & Cosmetology</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Patient Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#app-features" className="hover:text-teal-400 transition">Patient Portal & Lab App</a></li>
              <li><a href="#doctors" className="hover:text-teal-400 transition">Our Doctors & Clinicians</a></li>
              <li><a href="#reviews" className="hover:text-teal-400 transition">Patient Reviews (4.7 ★)</a></li>
              <li><a href="#location" className="hover:text-teal-400 transition">Clinic Location & Parking</a></li>
              <li><a href="#app-features" className="hover:text-teal-400 transition">Insurance Partners & Claims</a></li>
              <li><a href="https://wa.me/971586846600" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">WhatsApp Support</a></li>
            </ul>
          </div>

          {/* Clinic Timings & Back to Top */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2 font-heading">
              Opening Hours
            </h4>
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-[11px] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Sat – Thu:</span>
                <span className="text-white font-semibold">9:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Friday:</span>
                <span className="text-white font-semibold">2:00 PM – 9:00 PM</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition flex items-center justify-center gap-2 text-xs font-medium"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Happy Way Medical Center. All rights reserved. Sharjah, UAE.</p>
          <div className="flex items-center gap-4">
            <span>Powered by Next.js</span>
            <span className="text-slate-700">•</span>
            <span>MOHAP License Verified</span>
            <span className="text-slate-700">•</span>
            <span>Practo Healthcare Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
