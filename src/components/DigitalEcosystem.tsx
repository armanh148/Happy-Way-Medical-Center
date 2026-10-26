'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Smartphone, 
  Monitor, 
  FileCheck2, 
  Bell, 
  CreditCard, 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Lock,
  HeartHandshake,
  Check,
  QrCode,
  FileText,
  Clock,
  Sparkles,
  MessageSquare,
  Activity,
  Shield,
  Wifi,
  Battery,
  CalendarCheck,
  MapPin,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function DigitalEcosystem() {
  const [activeFeature, setActiveFeature] = useState<'mobile' | 'emr'>('mobile');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <section id="app-features" className="py-16 sm:py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden dark-mesh">
      {/* Dynamic radial glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Next-Gen Connected Healthcare</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
            Our Digital Healthcare Ecosystem: <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(16,185,129,0.35)]">
              Patient Mobile Hub &amp; Desktop EMR
            </span>
          </h2>

          <p className="mt-3.5 text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto px-1">
            Healthcare shouldn&apos;t end when you leave the clinic. Access instant diagnostic test reports, electronic prescriptions, and cashless UAE insurance processing in one unified digital platform.
          </p>

          {/* High-End Segmented Tab Controller */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl w-full max-w-md mx-auto gap-1.5">
            <button
              onClick={() => setActiveFeature('mobile')}
              className={`flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFeature === 'mobile'
                  ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/30 font-extrabold border border-emerald-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-4 h-4 shrink-0" />
              <span>Mobile Patient App</span>
            </button>
            <button
              onClick={() => setActiveFeature('emr')}
              className={`flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFeature === 'emr'
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 font-extrabold border border-blue-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Monitor className="w-4 h-4 shrink-0" />
              <span>Desktop Hospital EMR</span>
            </button>
          </div>
        </div>

        {/* Feature Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Visual Realistic Device Simulation Frame */}
          <div className="lg:col-span-7 relative">
            
            {activeFeature === 'mobile' ? (
              /* Realistic iPhone 15 Pro Titanium Simulation Frame */
              <div className="max-w-[420px] mx-auto rounded-[48px] p-3 sm:p-3.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border-[3px] border-slate-600/80 shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_50px_rgba(16,185,129,0.12)] relative animate-in fade-in zoom-in-95 duration-300">
                {/* Physical Hardware Buttons */}
                <div className="absolute -left-1.5 top-24 w-1 h-7 bg-slate-500 rounded-l-md" />
                <div className="absolute -left-1.5 top-36 w-1 h-12 bg-slate-500 rounded-l-md" />
                <div className="absolute -left-1.5 top-52 w-1 h-12 bg-slate-500 rounded-l-md" />
                <div className="absolute -right-1.5 top-32 w-1 h-16 bg-slate-500 rounded-r-md" />

                {/* Inner Screen Surface */}
                <div className="rounded-[40px] bg-slate-950 border border-slate-800 p-3.5 sm:p-4 overflow-hidden relative shadow-inner space-y-3">
                  
                  {/* Subtle Screen Gloss Sheen */}
                  <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full blur-2xl" />

                  {/* iOS Dynamic Island & Status Bar */}
                  <div className="flex items-center justify-between px-2 pt-1 pb-1">
                    <span className="text-[11px] font-mono font-bold text-slate-300">9:41</span>
                    <div className="w-28 h-5 bg-black rounded-full flex items-center justify-between px-2.5 text-[9px] text-slate-400 border border-slate-800 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[8px] text-slate-400 font-medium">MOHAP Live</span>
                      <span className="w-2 h-2 rounded-full bg-slate-700" />
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="text-[9px] font-bold text-emerald-400">5G</span>
                      <Wifi className="w-3 h-3 text-slate-300" />
                      <Battery className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>

                  {/* App Navigation Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="font-extrabold text-white text-xs tracking-tight">Happy Way Portal</span>
                      <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded-full border border-emerald-800 font-bold">
                        Live Sync
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-cyan-400 font-semibold bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/60">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>NABIDH Verified</span>
                    </div>
                  </div>

                  {/* Digital UAE Health Pass (Apple Wallet Style Card) */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/90 via-slate-900 to-blue-950/90 border border-emerald-500/40 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1">
                        <Shield className="w-3 h-3" /> UAE Emirates Health Pass
                      </span>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold border border-emerald-500/40">
                        Active Coverage
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-slate-950 flex items-center justify-center font-black text-sm shadow-md shrink-0">
                          MA
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-xs sm:text-sm text-white truncate">Maryam Al Suwaidi</h4>
                          <p className="text-[10px] text-slate-300 mt-0.5 truncate">
                            ID: <span className="font-mono text-emerald-400 font-bold">#HW-8492</span> • NextCare Gold
                          </p>
                        </div>
                      </div>

                      <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0" title="Instant Reception Check-in QR">
                        <QrCode className="w-5 h-5 text-emerald-300" />
                      </div>
                    </div>
                  </div>

                  {/* High-Tech Diagnostic Report Card */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 shadow-md">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-white leading-snug">
                            Complete Blood Count &amp; Lipid Panel
                          </h5>
                          <p className="text-[10px] text-emerald-400 font-medium mt-0.5">
                            Validated by Dr. Tariq Mansour • Verified MOHAP Sign-off
                          </p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 text-[9px] font-black rounded-md uppercase shrink-0">
                        Ready
                      </span>
                    </div>

                    {/* Specimen and Download Section */}
                    <div className="bg-slate-950/90 p-2.5 rounded-xl border border-slate-800 text-xs flex flex-col xs:flex-row xs:items-center justify-between gap-2">
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-slate-400">Specimen Collected: Today, 10:15 AM</span>
                        <p className="text-white font-semibold text-[11px] flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>Official PDF with MOHAP QR Barcode</span>
                        </p>
                      </div>
                      <button
                        onClick={handleSimulateDownload}
                        className="w-full xs:w-auto px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 shrink-0"
                      >
                        {downloadSuccess ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3] text-slate-950" />
                            <span>Downloaded!</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                            <span>Download PDF</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Scheduled Appointment Ticket Card */}
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 shadow-md">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                        <CalendarCheck className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider block">
                          Next Scheduled Visit
                        </span>
                        <h5 className="text-xs font-bold text-white truncate">Dental Whitening &amp; Alignment Check</h5>
                        <p className="text-[10px] text-slate-400 truncate">
                          Dr. Sarah Al Nuaimi • Today 4:30 PM (Suite 302)
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-2 py-0.5 rounded-lg font-bold shrink-0">
                      Auto Confirmed
                    </span>
                  </div>

                  {/* WhatsApp Notification Bubble */}
                  <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center gap-2 text-[11px] text-emerald-300">
                    <Bell className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-bounce" />
                    <span className="truncate">WhatsApp alert dispatched with Google Maps pin &amp; elevator guide.</span>
                  </div>

                  {/* Simulator Bottom Footer Bar */}
                  <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 px-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Synchronized With Practo UAE</span>
                    </div>
                    <span className="text-emerald-400 font-bold">100% Paperless</span>
                  </div>

                </div>
              </div>
            ) : (
              /* High-End Hospital EMR Clinical Command Center Frame */
              <div className="rounded-3xl border border-slate-800 shadow-2xl bg-slate-900/95 overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
                
                {/* Desktop Workstation Window Titlebar */}
                <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 ml-2">Happy Way Clinical EMR Workstation v4.2</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-800">
                    MOHAP Connected • 100% Secure
                  </span>
                </div>

                <div className="p-4 sm:p-6 space-y-4">
                  {/* Live Vital Signs Ticker */}
                  <div className="grid grid-cols-3 gap-2.5 text-center">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex items-center justify-center gap-1 text-emerald-400 text-xs mb-0.5">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        <span className="text-[10px] uppercase font-bold">Heart Rate</span>
                      </div>
                      <span className="text-base sm:text-lg font-black font-heading text-white">72 BPM</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex items-center justify-center gap-1 text-blue-400 text-xs mb-0.5">
                        <Shield className="w-3.5 h-3.5" />
                        <span className="text-[10px] uppercase font-bold">Blood Pressure</span>
                      </div>
                      <span className="text-base sm:text-lg font-black font-heading text-white">120/80</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex items-center justify-center gap-1 text-cyan-400 text-xs mb-0.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span className="text-[10px] uppercase font-bold">Oxygen SpO2</span>
                      </div>
                      <span className="text-base sm:text-lg font-black font-heading text-white">99%</span>
                    </div>
                  </div>

                  {/* Cashless Insurance Approval Bar */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-950 via-blue-950/40 to-slate-950 border border-blue-500/30 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-bold text-xs sm:text-sm text-white truncate">Direct Cashless Insurance Pre-Approval</h5>
                        <p className="text-[10px] text-slate-400 mt-0.5 truncate">Pre-auth cleared in 42s with Daman / NextCare / MetLife</p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400 bg-slate-900 px-2.5 py-1 rounded-xl border border-slate-800 shrink-0">
                      Cashless 100%
                    </span>
                  </div>

                  {/* Accepted Insurances Badges */}
                  <div>
                    <span className="text-[10px] text-slate-400 block mb-2 font-bold uppercase tracking-wider">
                      Integrated UAE Cashless Networks:
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-slate-300">
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px]">Daman</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px]">NextCare</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px]">MedNet</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px]">MetLife</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px]">AXA / GIG</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px]">Sukoon</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px]">Al Buhaira</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

          </div>

          {/* Right Column: Explanatory Features List & WhatsApp Concierge */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            {activeFeature === 'mobile' ? (
              <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-300">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <span className="text-[10px] sm:text-xs font-black text-emerald-400 uppercase tracking-widest">
                    Patient Convenience First
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white mt-1 leading-tight">
                    Your Complete Medical File &amp; Reports In Your Pocket
                  </h3>
                </div>

                {/* 3 Modernized Interactive Feature Cards */}
                <div className="space-y-3 sm:space-y-3.5">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800/90 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-lg">
                    <div className="flex items-start gap-3.5">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-300 mt-0.5 border border-emerald-500/30 shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                        <FileCheck2 className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                            Automated Digital Lab Results
                          </h4>
                          <span className="text-[9px] bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                            Zero Wait
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                          No waiting or traveling back for printed slips. Blood profiles, dental X-rays, and ECG reports arrive instantly with verified clinician notes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800/90 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-lg">
                    <div className="flex items-start gap-3.5">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-300 mt-0.5 border border-emerald-500/30 shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                        <Bell className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                            1-Click Slot Rescheduling &amp; WhatsApp Alerts
                          </h4>
                          <span className="text-[9px] bg-blue-500/15 text-blue-400 px-2 py-0.5 rounded-full font-bold">
                            2-Way Bot
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                          Book follow-up consultations, modify appointment dates, and receive automated WhatsApp notifications before every clinic visit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800/90 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-lg">
                    <div className="flex items-start gap-3.5">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-300 mt-0.5 border border-emerald-500/30 shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                            UAE Health Data &amp; NABIDH Compliant
                          </h4>
                          <span className="text-[9px] bg-cyan-500/15 text-cyan-400 px-2 py-0.5 rounded-full font-bold">
                            256-bit AES
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                          Enterprise 256-bit bank-grade encryption fully adhering to UAE Ministry of Health &amp; Prevention (MOHAP) patient privacy regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VIP Digital Concierge & Instant WhatsApp Link */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-teal-950/70 border border-emerald-500/40 shadow-xl relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-green-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                        <MessageSquare className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-xs sm:text-sm font-black text-white">Get Instant Portal Access</h5>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">
                          Direct app access link dispatched to your WhatsApp in &lt; 30 seconds
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20please%20send%20me%20the%20Patient%20Portal%20app%20download%20link."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 shrink-0 border border-emerald-400/50"
                    >
                      <span>Send Link On WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            ) : (
              <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-300">
                <div className="border-l-4 border-blue-500 pl-4">
                  <span className="text-[10px] sm:text-xs font-black text-blue-400 uppercase tracking-widest">
                    Clinic Administration &amp; EMR
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white mt-1 leading-tight">
                    Paperless EMR &amp; Instant UAE Insurance Clearances
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-3.5">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-lg">
                    <div className="flex items-start gap-3.5">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 text-blue-300 mt-0.5 border border-blue-500/30 shrink-0 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-md">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-blue-300 transition-colors">
                            Direct Cashless Insurance Pre-Approvals
                          </h4>
                          <span className="text-[9px] bg-blue-500/15 text-blue-300 px-2 py-0.5 rounded-full font-bold">
                            42s Clearance
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                          Our desktop EMR connects directly with Daman, NextCare, MedNet, MetLife, AXA, Oman Insurance, and Al Buhaira for instant electronic claim clearance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-lg">
                    <div className="flex items-start gap-3.5">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 text-blue-300 mt-0.5 border border-blue-500/30 shrink-0 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-md">
                        <HeartHandshake className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-blue-300 transition-colors">
                            Integrated Practo &amp; Local Registry Sync
                          </h4>
                          <span className="text-[9px] bg-emerald-500/15 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                            Live Sync
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                          Seamless bidirectional bridge keeping your Practo appointment history and local clinic electronic records perpetually updated.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-lg">
                    <div className="flex items-start gap-3.5">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 text-blue-300 mt-0.5 border border-blue-500/30 shrink-0 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-md">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-blue-300 transition-colors">
                            Zero Paper Prescription Loss
                          </h4>
                          <span className="text-[9px] bg-cyan-500/15 text-cyan-300 px-2 py-0.5 rounded-full font-bold">
                            Direct E-Pharmacy
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                          Doctors input prescriptions directly into the EMR; nearby pharmacies receive digital codes for instant dispensing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EMR Demonstration Action Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900/90 to-indigo-950/70 border border-blue-500/40 shadow-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                        <Monitor className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-black text-white">Clinical EMR Integration</h5>
                        <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">
                          Inquire about enterprise UAE EMR &amp; NABIDH interoperability
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20I%20have%20an%20inquiry%20regarding%20insurance%20and%20EMR%20records."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 shrink-0 border border-blue-400/50"
                    >
                      <span>Inquire On WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
