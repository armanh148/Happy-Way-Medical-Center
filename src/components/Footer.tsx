'use client';

import React from 'react';
import { Activity, Phone, MapPin, Mail, Clock, ShieldCheck, Heart, ArrowUp, MessageSquare } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Emergency & Quick Consultation Callout Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 border-b border-slate-800/90 py-4 px-4">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-white font-bold text-xs sm:text-sm">
              Urgent Medical Query or Consultation Needed?
            </span>
            <span className="text-slate-400 hidden md:inline text-xs">
              Front-desk telephone hotline active daily 9:00 AM – 10:00 PM.
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
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition inline-flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-700 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-teal-600/20">
                <Activity className="w-6 h-6 text-white stroke-[2.4]" />
              </div>
              <div>
                <span className="text-xl font-black font-heading text-white tracking-tight block">
                  Happy Way Medical Center
                </span>
                <span className="text-[10px] uppercase tracking-widest text-teal-400 font-bold block -mt-1">
                  Multi-Specialty & Advanced Dental Clinic • Sharjah
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing empathetic, patient-centered healthcare, painless precision dentistry, and instant digital lab test reports to the community of Sharjah, UAE.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>3rd Floor, The Residence 7 Bldg, Al Rolla St, Sharjah, UAE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+971 58 684 6600 (Telephone & WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>UAE MOHAP Licensed Facility • Practo Health Partner</span>
              </div>
            </div>
          </div>

          {/* Clinical Departments */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Clinical Departments
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-teal-400 transition">Advanced Dentistry & Implants</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Orthodontics & Hollywood Smile</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">General & Internal Medicine</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Pediatrics & Baby Vaccination</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Cardiology & ECG Diagnostics</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Orthopedics & Joint Care</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Dermatology & Skin Aesthetics</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Patient Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#app-features" className="hover:text-teal-400 transition">Patient Portal & Lab App</a></li>
              <li><a href="#doctors" className="hover:text-teal-400 transition">Our Specialists & Doctors</a></li>
              <li><a href="#reviews" className="hover:text-teal-400 transition">Verified Reviews (4.7 ★)</a></li>
              <li><a href="#location" className="hover:text-teal-400 transition">Clinic Location & Parking</a></li>
              <li><a href="#app-features" className="hover:text-teal-400 transition">Cashless Insurance Partners</a></li>
              <li><a href="https://wa.me/971586846600" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">WhatsApp Direct Helpline</a></li>
            </ul>
          </div>

          {/* Clinic Timings & Back to Top */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2 font-heading">
              Operating Hours
            </h4>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-xs space-y-2 shadow-inner">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Sat – Thu:</span>
                <span className="text-white font-bold">9:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Friday:</span>
                <span className="text-white font-bold">2:00 PM – 9:00 PM</span>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Emergency slots available daily</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider"
            >
              <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Happy Way Medical Center. All rights reserved. Rolla, Sharjah, United Arab Emirates.</p>
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span>MOHAP Licensed Facility</span>
            <span className="text-slate-800">•</span>
            <span>Practo Healthcare Partner</span>
            <span className="text-slate-800">•</span>
            <span>Cashless Insurance Direct Billing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
