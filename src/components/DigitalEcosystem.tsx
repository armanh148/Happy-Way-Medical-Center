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
  Sparkles
} from 'lucide-react';

export default function DigitalEcosystem() {
  const [activeFeature, setActiveFeature] = useState<'mobile' | 'emr'>('mobile');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="app-features" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden dark-mesh">
      {/* Decorative radial ambient lights */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-xs font-bold uppercase tracking-wider text-teal-300 mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-teal-400" />
            <span>Next-Gen Connected Healthcare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
            Our Digital Healthcare Ecosystem: <br />
            <span className="teal-gradient-text">Patient Mobile Hub & Desktop EMR</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Healthcare shouldn&apos;t end when you walk out the clinic door. Access verified lab test reports, electronic prescriptions, and cashless UAE insurance claim processing in one unified digital platform.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
            <button
              onClick={() => setActiveFeature('mobile')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeFeature === 'mobile'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile Patient App</span>
            </button>
            <button
              onClick={() => setActiveFeature('emr')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeFeature === 'emr'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Desktop EMR & Insurance Billing</span>
            </button>
          </div>
        </div>

        {/* Feature Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Interactive Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/90 group backdrop-blur-xl p-5 sm:p-7">
              
              {activeFeature === 'mobile' ? (
                /* Mobile App Interactive Simulation */
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  {/* Mock Phone Status Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="font-semibold text-white">Happy Way Patient App</span>
                      <span className="text-[10px] bg-teal-950 text-teal-400 px-2 py-0.5 rounded-full border border-teal-800">v2.4 Live</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                      <span>256-Bit Encrypted</span>
                    </div>
                  </div>

                  {/* Patient ID Profile Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-950/80 via-slate-900 to-teal-950/80 border border-teal-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-lg border border-teal-500/40">
                        MA
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-white">Maryam Al Suwaidi</h4>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">Verified</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">Patient ID: <span className="font-mono text-teal-300">#HW-8492</span> • NextCare Gold Policy</p>
                      </div>
                    </div>
                    <div className="hidden sm:block text-right">
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Assigned Clinic</span>
                      <span className="text-xs font-bold text-white">Al Rolla, Sharjah</span>
                    </div>
                  </div>

                  {/* Interactive Lab Report Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-white">Complete Blood Count & Vitamin D Profile</h5>
                          <p className="text-[11px] text-teal-400 font-medium">Validated by Dr. Tariq Mansour • 100% Normal</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold rounded-lg uppercase">
                        Ready to View
                      </span>
                    </div>

                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[11px] text-slate-400">Specimen Date: Today, 10:15 AM</span>
                        <p className="text-white font-medium text-xs">Official PDF with MOHAP Barcode</p>
                      </div>
                      <button
                        onClick={handleSimulateDownload}
                        className="px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow-sm"
                      >
                        {downloadSuccess ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-slate-950" />
                            <span>Downloaded!</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5" />
                            <span>Download PDF</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Next Appointment Card */}
                  <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Next Scheduled Visit</span>
                        <h5 className="text-xs sm:text-sm font-bold text-white">Dental Whitening & Alignment Check</h5>
                        <p className="text-[11px] text-slate-400">Dr. Sarah Al Nuaimi • Today at 4:30 PM (Suite 302)</p>
                      </div>
                    </div>
                    <span className="text-xs text-teal-400 bg-teal-950/80 border border-teal-800 px-3 py-1.5 rounded-xl font-semibold self-start sm:self-center">
                      Auto SMS Confirmed
                    </span>
                  </div>

                  {/* WhatsApp Notification Bubble */}
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3 text-xs text-emerald-300">
                    <Bell className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp alert dispatched with Google Maps clinic pin and elevator instructions.</span>
                  </div>
                </div>
              ) : (
                /* Desktop EMR & Insurance Simulation */
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  {/* EMR System Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                      <span className="font-semibold text-white">Happy Way EMR Cloud • Clinician Workstation</span>
                    </div>
                    <span className="text-[10px] bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-800 font-mono">
                      MOHAP NABIDH v4.1 Connected
                    </span>
                  </div>

                  {/* Cashless Insurance Approval Bar */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-sm text-white">Direct Cashless Insurance Pre-Approval</h5>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-bold">Approved</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">Pre-auth completed in 42 seconds with Daman / NextCare / MetLife</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-teal-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                      Zero Out-Of-Pocket
                    </span>
                  </div>

                  {/* Clinical Tools Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-teal-400" />
                        <h6 className="font-bold text-xs text-white">3D Intraoral Dental Scanner</h6>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Precision digital impressions with 0.01mm accuracy. No uncomfortable silicone putty molds.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="flex items-center gap-2 mb-2">
                        <FileCheck2 className="w-4 h-4 text-cyan-400" />
                        <h6 className="font-bold text-xs text-white">Instant E-Prescriptions</h6>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Electronically routed to your preferred pharmacy with QR code pickup and refill tracking.
                      </p>
                    </div>
                  </div>

                  {/* Accepted Insurances Badges */}
                  <div className="pt-2">
                    <span className="text-[11px] text-slate-400 block mb-2 font-semibold uppercase tracking-wider">
                      Integrated UAE Cashless Networks:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-200">
                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Daman National</span>
                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">NextCare</span>
                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">MedNet</span>
                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">MetLife</span>
                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">AXA / GIG</span>
                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Sukoon (Oman)</span>
                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Al Buhaira</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Feature Pill */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Cloud Synchronized With Practo UAE Patient Directory</span>
                </div>
                <span className="text-[11px] text-teal-400 font-semibold">100% Paperless</span>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Features List */}
          <div className="lg:col-span-5 space-y-6">
            {activeFeature === 'mobile' ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="border-l-3 border-teal-500 pl-4">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                    Patient Convenience First
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                    Your Complete Medical File & Reports In Your Pocket
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-teal-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-teal-500/15 text-teal-400 mt-0.5 border border-teal-500/25 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                        <FileCheck2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">Automated Digital Lab Results</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          No waiting or traveling back for printed test slips. Blood profiles, dental X-rays, and ECG reports arrive instantly with verified clinician notes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-teal-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-teal-500/15 text-teal-400 mt-0.5 border border-teal-500/25 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                        <Bell className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">1-Click Slot Rescheduling & WhatsApp Alerts</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Book follow-up consultations, modify appointment dates, and receive automated WhatsApp notifications before every clinic visit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-teal-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-teal-500/15 text-teal-400 mt-0.5 border border-teal-500/25 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">UAE Health Data & NABIDH Compliant</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Enterprise 256-bit bank-grade encryption fully adhering to UAE Ministry of Health & Prevention (MOHAP) patient privacy regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20please%20send%20me%20the%20Patient%20Portal%20app%20download%20link."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-500/20 transition flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Get App Access Link</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="border-l-3 border-cyan-500 pl-4">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    Clinic Administration & EMR
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                    Paperless EMR & Instant UAE Insurance Clearances
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 mt-0.5 border border-cyan-500/25 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Direct Cashless Insurance Pre-Approvals</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Our desktop EMR connects directly with Daman, NextCare, MedNet, MetLife, AXA, Oman Insurance, and Al Buhaira for instant electronic claim clearance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 mt-0.5 border border-cyan-500/25 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                        <HeartHandshake className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Integrated Practo & Local Registry Sync</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Seamless bidirectional bridge keeping your Practo appointment history and local clinic electronic records perpetually updated.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 mt-0.5 border border-cyan-500/25 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Zero Paper Prescription Loss</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Doctors input prescriptions directly into the EMR; nearby pharmacies receive digital codes for instant dispensing.
                        </p>
                      </div>
                    </div>
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
