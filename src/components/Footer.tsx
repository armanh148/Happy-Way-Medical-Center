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
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 border-b border-slate-800/90 py-3.5 sm:py-4 px-4">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="text-white font-bold text-xs sm:text-sm">
              Urgent Medical Query or Consultation Needed?
            </span>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
            <a
              href="tel:+971586846600"
              className="flex-1 sm:flex-none min-h-[40px] px-3.5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition inline-flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>+971 58 684 6600</span>
            </a>
            <a
              href="tel:065300540"
              className="flex-1 sm:flex-none min-h-[40px] px-3.5 py-2 rounded-xl bg-blue-700 text-white font-bold text-xs hover:bg-blue-600 transition inline-flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>06 530 0540</span>
            </a>
            <a
              href="https://wa.me/971586846600"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[40px] px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition inline-flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp Front Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="sm:col-span-2 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20 shrink-0">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.4]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xl font-black font-heading tracking-tight leading-none">
                  <span className="text-emerald-400">HAPPY</span>
                  <span className="text-blue-400">WAY</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mt-1">
                  Multi-Specialty & Dental Clinic • Sharjah
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing empathetic, patient-centered healthcare, painless precision dentistry, and instant digital lab test reports to the community of Sharjah, UAE.
            </p>

            <div className="pt-1 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>3rd Floor, The Residence 7 Bldg, Al Rolla St, Sharjah, UAE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+971 58 684 6600 / 06 530 0540</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UAE MOHAP Licensed Facility • Practo Health Partner</span>
              </div>
            </div>
          </div>

          {/* Clinical Departments */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 sm:mb-4 font-heading">
              Clinical Departments
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-emerald-400 transition block py-0.5">Advanced Dentistry & Implants</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition block py-0.5">Orthodontics & Hollywood Smile</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition block py-0.5">General & Family Medicine</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition block py-0.5">Gynecology & Obstetrics</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition block py-0.5">Pediatrics & Baby Vaccination</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition block py-0.5">Cardiology & ECG Diagnostics</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition block py-0.5">Orthopedics & Joint Care</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 sm:mb-4 font-heading">
              Patient Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#app-features" className="hover:text-emerald-400 transition block py-0.5">Patient Portal & Lab App</a></li>
              <li><a href="#doctors" className="hover:text-emerald-400 transition block py-0.5">Our Specialists & Doctors</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition block py-0.5">Verified Reviews (4.7 ★)</a></li>
              <li><a href="#location" className="hover:text-emerald-400 transition block py-0.5">Clinic Location & Parking</a></li>
              <li><a href="#app-features" className="hover:text-emerald-400 transition block py-0.5">Cashless Insurance Partners</a></li>
              <li><a href="https://wa.me/971586846600" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition block py-0.5">WhatsApp Direct Helpline</a></li>
            </ul>
          </div>

          {/* Clinic Timings & Back to Top */}
          <div className="space-y-3.5 sm:space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1 font-heading">
              Operating Hours
            </h4>
            <div className="bg-slate-900 p-3.5 sm:p-4 rounded-2xl border border-slate-800 text-xs space-y-1.5 shadow-inner">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Sat – Thu:</span>
                <span className="text-white font-bold">9:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Friday:</span>
                <span className="text-white font-bold">2:00 PM – 9:00 PM</span>
              </div>
              <div className="pt-1.5 border-t border-slate-800/80 text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>Walk-in consultations welcomed</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full min-h-[44px] py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider active:scale-[0.99]"
            >
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Happy Way Medical Center. All rights reserved. Rolla, Sharjah, UAE.</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px]">
            <span>MOHAP Licensed Facility</span>
            <span className="text-slate-800">•</span>
            <span>Practo Healthcare Partner</span>
            <span className="text-slate-800">•</span>
            <span>Direct Cashless Billing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
