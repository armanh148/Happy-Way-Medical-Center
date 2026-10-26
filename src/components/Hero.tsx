'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Star, 
  ArrowUpRight, 
  Sparkles, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Stethoscope, 
  FileText, 
  Smile, 
  CheckCircle2, 
  Activity, 
  ChevronRight,
  PhoneCall,
  MapPin,
  HeartPulse
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (dept?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden hero-mesh">
      {/* Background Ambient Glow Accents in Logo Green & Blue */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-emerald-400/15 via-blue-400/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Pill & Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/90 text-xs font-semibold text-slate-800 hover:border-emerald-300 transition">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Now Accepting Patients & Walk-ins</span>
            <span className="text-slate-300">|</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-600" />
              Al Rolla St, Sharjah
            </span>
          </div>

          <a 
            href="#reviews"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 backdrop-blur-md border border-amber-200 text-xs font-bold text-amber-900 shadow-sm hover:bg-amber-100/80 transition"
          >
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.7 Rating (405+ Verified Patient Reviews)</span>
          </a>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 backdrop-blur-md border border-blue-200/80 text-xs font-semibold text-blue-900 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>UAE MOHAP Licensed • Cashless Insurance Pre-Approvals</span>
          </div>
        </div>

        {/* Hero Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-emerald-800 bg-emerald-100/80 border border-emerald-300/70 px-4 py-1 rounded-full">
              Sharjah&apos;s Trusted Healthcare & Dental Center
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-slate-900 leading-[1.08]">
            EXCEPTIONAL CARE & <br className="hidden sm:block" />
            <span className="brand-gradient-text">ADVANCED DENTAL SOLUTIONS</span> <br className="hidden sm:block" />
            IN SHARJAH
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Multi-specialty outpatient clinics, board-certified doctors, and pain-free dentistry with a <strong className="font-semibold text-slate-900">4.7-star patient satisfaction rating</strong>. Located at The Residence 7, Al Rolla St, Sharjah.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="btn-shine w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl hover:shadow-green-900/25 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group border border-emerald-500/40"
            >
              <Calendar className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition" />
              <span>Book Priority Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </button>

            <a
              href="https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex items-center justify-center gap-2.5"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Front Desk</span>
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl text-slate-600 hover:text-slate-900 font-semibold text-sm transition-all flex items-center justify-center gap-1.5 hover:bg-slate-100/60"
            >
              <span>Explore Departments</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* 3-Column Interactive Grid Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Multi-Specialty Care (Green Accent) */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-950 text-white shadow-xl card-hover-effect flex flex-col justify-between border border-slate-800/90 glow-border-hover">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-transparent z-20" />

            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Happy Way Medical Center Multi-Specialty Care"
                fill
                className="object-cover object-center opacity-35 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/40" />
            </div>

            {/* Top Tag & Header */}
            <div className="relative z-10 p-7 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 backdrop-blur-md border border-emerald-500/30 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  Multi-Specialty Care
                </span>
                <span className="text-xs font-mono font-bold text-slate-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/10">01</span>
              </div>

              <h2 className="text-2xl font-bold font-heading text-white leading-tight mb-2 group-hover:text-emerald-300 transition">
                Advanced Diagnostics & Primary Medicine
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Comprehensive primary and specialist care under one roof—from cardiology and internal medicine to pediatric and chronic disease wellness.
              </p>

              <div className="mt-5 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Routine health screenings & 12-lead ECG diagnostics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Pediatrics, gynecology & chronic condition specialists</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Fast-track specialist referrals with no waiting queues</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer Action */}
            <div className="relative z-10 p-7 sm:p-8 pt-0 mt-auto">
              <button
                onClick={() => onOpenBooking('General Medicine')}
                className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-emerald-600 hover:text-white backdrop-blur-md border border-white/20 hover:border-emerald-400 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-between group/btn shadow-md"
              >
                <span>Book Specialist Visit</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
              </button>
            </div>
          </div>

          {/* Card 2: Expert Doctors (Blue Accent) */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-950 text-white shadow-xl card-hover-effect flex flex-col justify-between border border-slate-800/90 glow-border-hover">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-transparent z-20" />

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/doctor-consulting.jpg"
                alt="Happy Way Medical Center Expert Doctors"
                fill
                className="object-cover object-center opacity-35 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-7 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 backdrop-blur-md border border-blue-500/30 text-[11px] font-bold uppercase tracking-wider text-blue-300">
                  <Stethoscope className="w-3.5 h-3.5 text-blue-400" />
                  Board-Certified Doctors
                </span>
                <span className="text-xs font-mono font-bold text-slate-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/10">02</span>
              </div>

              <h2 className="text-2xl font-bold font-heading text-white leading-tight mb-2 group-hover:text-blue-300 transition">
                Find The Right Expert & Book Instantly
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect directly with board-certified physicians dedicated to compassionate patient communication and accurate, evidence-based care.
              </p>

              {/* Doctor highlights */}
              <div className="mt-5 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Multilingual team (English, Arabic, Hindi, Urdu)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Seamless transition from Practo online bookings</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Same-day urgent appointments always available</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer Action */}
            <div className="relative z-10 p-7 sm:p-8 pt-0 mt-auto">
              <button
                onClick={() => onOpenBooking('General Medicine')}
                className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-blue-600 hover:text-white backdrop-blur-md border border-white/20 hover:border-blue-400 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-between group/btn shadow-md"
              >
                <span>Select & Book Doctor</span>
                <ArrowUpRight className="w-4 h-4 text-blue-300 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
              </button>
            </div>
          </div>

          {/* Card 3: Advanced Dental Suite (Logo Green & Blue) */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-950 text-white shadow-xl card-hover-effect flex flex-col justify-between border border-slate-800/90 glow-border-hover">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-transparent z-20" />

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/dental-suite.jpg"
                alt="Happy Way Medical Center Advanced Dental & Lab"
                fill
                className="object-cover object-center opacity-35 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-7 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 backdrop-blur-md border border-emerald-500/30 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Advanced Dental Suite
                </span>
                <span className="text-xs font-mono font-bold text-slate-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/10">03</span>
              </div>

              <h2 className="text-2xl font-bold font-heading text-white leading-tight mb-2 group-hover:text-emerald-300 transition">
                Precision Dentistry & Hollywood Smile Design
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                State-of-the-art painless dental suites, cosmetic smile makeovers, and automated diagnostic reports delivered to your phone.
              </p>

              <div className="mt-5 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Digital 3D intraoral scans & laser teeth whitening</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Root canal therapy, crowns, implants & porcelain veneers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Real-time digital lab reports directly in patient app</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer Action */}
            <div className="relative z-10 p-7 sm:p-8 pt-0 mt-auto">
              <button
                onClick={() => onOpenBooking('Dentistry')}
                className="btn-shine w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-500 hover:to-blue-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-between group/btn"
              >
                <span>Book Dental Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
              </button>
            </div>
          </div>

        </div>

        {/* Quick Highlights Strip Below Hero */}
        <div className="mt-12 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-lg shadow-slate-900/5 border border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="flex items-center gap-3.5 p-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">Zero Wait Times</h4>
              <p className="text-slate-500 text-xs mt-0.5">Prompt booked appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-1 pt-4 md:pt-1 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 text-blue-700 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">Direct UAE Insurance</h4>
              <p className="text-slate-500 text-xs mt-0.5">Instant cashless approvals</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-1 pt-4 md:pt-1 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">4.7 / 5.0 Rating</h4>
              <p className="text-slate-500 text-xs mt-0.5">405+ Verified patient reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-1 pt-4 md:pt-1 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">Digital Lab Reports</h4>
              <p className="text-slate-500 text-xs mt-0.5">Direct PDF to mobile & WhatsApp</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
