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
  ChevronRight 
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (dept?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden hero-mesh">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-brand-300/20 via-teal-200/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Pill & Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-slate-200 text-xs font-semibold text-slate-800">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Now Accepting New Patients</span>
            <span className="text-slate-300">|</span>
            <span className="text-brand-700 font-bold">Sharjah, UAE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50/80 border border-amber-200/60 text-xs font-bold text-amber-900">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.7 Rating (405+ Verified Patient Reviews)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-semibold text-teal-800">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>MOHAP Certified • Direct Insurance Billing</span>
          </div>
        </div>

        {/* Hero Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-slate-900 leading-[1.08]">
            EXCEPTIONAL CARE & <br className="hidden sm:block" />
            <span className="teal-gradient-text">ADVANCED DENTAL SOLUTIONS</span> <br className="hidden sm:block" />
            IN SHARJAH
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Trusted multi-specialty healthcare with a <strong className="font-semibold text-slate-800">4.7-star patient satisfaction rating</strong>. Located at The Residence 7, Al Rolla St, Sharjah.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl hover:shadow-teal-900/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <Calendar className="w-4 h-4 text-brand-400 group-hover:scale-110 transition" />
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All Departments</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* 3-Column Interactive Grid Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Multi-Specialty Care */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl card-hover-effect flex flex-col justify-between border border-slate-800">
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Happy Way Medical Center Multi-Specialty Care"
                fill
                className="object-cover object-center opacity-40 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </div>

            {/* Top Tag & Header */}
            <div className="relative z-10 p-7 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-bold uppercase tracking-wider text-teal-300">
                  <Activity className="w-3.5 h-3.5 text-teal-400" />
                  Multi-Specialty Care
                </span>
                <span className="text-xs font-semibold text-slate-400">01</span>
              </div>

              <h2 className="text-2xl font-bold font-heading text-white leading-tight mb-2 group-hover:text-teal-300 transition">
                Advanced Diagnostics & Specialized Consultations
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Comprehensive healthcare under one roof—from cardiology and pediatrics to orthopedics and primary family wellness.
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Routine health screenings & ECG diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Pediatric, orthopedic & chronic care specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Fast-track specialist referrals with no long queues</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer Action */}
            <div className="relative z-10 p-7 sm:p-8 pt-0 mt-auto">
              <button
                onClick={() => onOpenBooking('General Medicine')}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-teal-500 hover:text-white backdrop-blur-md border border-white/20 text-white font-semibold text-xs tracking-wide uppercase transition-all flex items-center justify-between group/btn"
              >
                <span>Book Specialist Visit</span>
                <ArrowUpRight className="w-4 h-4 text-teal-300 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
              </button>
            </div>
          </div>

          {/* Card 2: Expert Doctors */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl card-hover-effect flex flex-col justify-between border border-slate-800">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/doctor-consulting.jpg"
                alt="Happy Way Medical Center Expert Doctors"
                fill
                className="object-cover object-center opacity-40 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-7 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-bold uppercase tracking-wider text-teal-300">
                  <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
                  Expert Doctors
                </span>
                <span className="text-xs font-semibold text-slate-400">02</span>
              </div>

              <h2 className="text-2xl font-bold font-heading text-white leading-tight mb-2 group-hover:text-teal-300 transition">
                Find The Right Medical Expert & Book Instantly
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect directly with board-certified physicians dedicated to compassionate patient communication and accurate diagnosis.
              </p>

              {/* Doctor highlights */}
              <div className="mt-5 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Multilingual team (English, Arabic, Hindi, Urdu)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Seamless transition from Practo booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Same-day urgent appointments available</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer Action */}
            <div className="relative z-10 p-7 sm:p-8 pt-0 mt-auto">
              <button
                onClick={() => onOpenBooking('General Medicine')}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-teal-500 hover:text-white backdrop-blur-md border border-white/20 text-white font-semibold text-xs tracking-wide uppercase transition-all flex items-center justify-between group/btn"
              >
                <span>Select & Book Doctor</span>
                <ArrowUpRight className="w-4 h-4 text-teal-300 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
              </button>
            </div>
          </div>

          {/* Card 3: Advanced Dental & Lab */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl card-hover-effect flex flex-col justify-between border border-slate-800">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/dental-suite.jpg"
                alt="Happy Way Medical Center Advanced Dental & Lab"
                fill
                className="object-cover object-center opacity-40 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-7 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-bold uppercase tracking-wider text-teal-300">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  Advanced Dental & Lab
                </span>
                <span className="text-xs font-semibold text-slate-400">03</span>
              </div>

              <h2 className="text-2xl font-bold font-heading text-white leading-tight mb-2 group-hover:text-teal-300 transition">
                Precision Dentistry & Integrated Lab Report App
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                State-of-the-art painless dental suites, cosmetic smile makeovers, and automated digital lab reports delivered to your phone.
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Digital 3D intraoral scans & laser whitening</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Root canal therapy, crowns, implants & veneers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Real-time digital lab reports directly in patient app</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer Action */}
            <div className="relative z-10 p-7 sm:p-8 pt-0 mt-auto">
              <button
                onClick={() => onOpenBooking('Dentistry')}
                className="w-full py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md flex items-center justify-between group/btn"
              >
                <span>Book Dental Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
              </button>
            </div>
          </div>

        </div>

        {/* Quick Highlights Strip Below Hero */}
        <div className="mt-12 bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Zero Wait Time</h4>
              <p className="text-slate-500 text-xs">Confirmed scheduled appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 pt-4 md:pt-2 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Major UAE Insurances</h4>
              <p className="text-slate-500 text-xs">Instant cashless approvals</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 pt-4 md:pt-2 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-600 flex items-center justify-center shrink-0">
              <Smile className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">4.7 / 5.0 Rating</h4>
              <p className="text-slate-500 text-xs">405+ Happy patient reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 pt-4 md:pt-2 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-600 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Digital Lab Reports</h4>
              <p className="text-slate-500 text-xs">Direct PDF to mobile app & WhatsApp</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
