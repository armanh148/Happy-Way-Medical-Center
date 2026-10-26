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
    <section id="app-features" className="py-14 sm:py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden dark-mesh">
      {/* Decorative radial ambient lights */}
      <div className="absolute top-0 right-1/4 w-[300px] sm:w-[650px] h-[300px] sm:h-[650px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3 sm:mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Next-Gen Connected Healthcare</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
            Our Digital Healthcare Ecosystem: <br />
            <span className="brand-gradient-text">Patient Mobile Hub & Desktop EMR</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-300 leading-relaxed px-1">
            Healthcare shouldn&apos;t end when you leave the clinic. Access instant diagnostic test reports, electronic prescriptions, and cashless UAE insurance processing in one unified digital platform.
          </p>

          {/* Fully Responsive Tab Switcher */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:inline-flex sm:flex-row p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md w-full sm:w-auto gap-1">
            <button
              onClick={() => setActiveFeature('mobile')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeFeature === 'mobile'
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-slate-950 shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-4 h-4 shrink-0" />
              <span>Mobile Patient App</span>
            </button>
            <button
              onClick={() => setActiveFeature('emr')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeFeature === 'emr'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Monitor className="w-4 h-4 shrink-0" />
              <span>Desktop EMR & Insurance</span>
            </button>
          </div>
        </div>

        {/* Feature Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Left Column: Visual Interactive Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/90 group backdrop-blur-xl p-4 sm:p-7">
              
              {activeFeature === 'mobile' ? (
                /* Mobile App Interactive Simulation */
                <div className="space-y-3 sm:space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  {/* Mock Phone Status Header */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-[11px] sm:text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="font-semibold text-white truncate max-w-[140px] sm:max-w-none">Happy Way Patient App</span>
                      <span className="text-[9px] sm:text-[10px] bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded-full border border-emerald-800">Live</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-blue-400">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>NABIDH Verified</span>
                    </div>
                  </div>

                  {/* Patient ID Profile Card */}
                  <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-blue-950/80 border border-emerald-500/30 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-sm sm:text-lg border border-emerald-500/40 shrink-0">
                        MA
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-xs sm:text-sm text-white truncate">Maryam Al Suwaidi</h4>
                          <span className="text-[9px] sm:text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full font-bold shrink-0">Verified</span>
                        </div>
                        <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate">
                          ID: <span className="font-mono text-emerald-300">#HW-8492</span> • NextCare Gold
                        </p>
                      </div>
                    </div>
                    <div className="hidden xs:block text-right shrink-0">
                      <span className="text-[9px] sm:text-[10px] text-slate-400 block uppercase tracking-wider">Clinic</span>
                      <span className="text-[11px] sm:text-xs font-bold text-white">Al Rolla, Sharjah</span>
                    </div>
                  </div>

                  {/* Interactive Lab Report Card */}
                  <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2.5 sm:space-y-3">
                    <div className="flex items-start sm:items-center justify-between gap-2">
                      <div className="flex items-start sm:items-center gap-2 sm:gap-2.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                          <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">Complete Blood Count & Lipid Profile</h5>
                          <p className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">Validated by Dr. Tariq Mansour • Verified Ready</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[9px] sm:text-[10px] font-bold rounded-lg uppercase shrink-0">
                        Ready
                      </span>
                    </div>

                    <div className="bg-slate-900/80 p-2.5 sm:p-3 rounded-xl border border-slate-800 text-xs flex flex-col xs:flex-row xs:items-center justify-between gap-2">
                      <div className="space-y-0.5">
                        <span className="text-[10px] sm:text-[11px] text-slate-400">Specimen Date: Today, 10:15 AM</span>
                        <p className="text-white font-medium text-[11px] sm:text-xs">Official PDF with MOHAP Barcode</p>
                      </div>
                      <button
                        onClick={handleSimulateDownload}
                        className="w-full xs:w-auto px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm active:scale-95"
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
                  <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] sm:text-[10px] text-blue-400 font-bold uppercase tracking-wider">Next Scheduled Visit</span>
                        <h5 className="text-xs sm:text-sm font-bold text-white">Dental Whitening & Alignment Check</h5>
                        <p className="text-[10px] sm:text-[11px] text-slate-400">Dr. Sarah Al Nuaimi • Today at 4:30 PM (Suite 302)</p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs text-blue-400 bg-blue-950/80 border border-blue-800 px-2.5 py-1 rounded-xl font-semibold self-start sm:self-center">
                      Auto Confirmed
                    </span>
                  </div>

                  {/* WhatsApp Notification Bubble */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2.5 text-[11px] sm:text-xs text-emerald-300">
                    <Bell className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp alert dispatched with Google Maps pin & elevator guide.</span>
                  </div>
                </div>
              ) : (
                /* Desktop EMR & Insurance Simulation */
                <div className="space-y-3 sm:space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  {/* EMR System Bar */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-[11px] sm:text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      <span className="font-semibold text-white truncate max-w-[150px] sm:max-w-none">Happy Way EMR Workstation</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] bg-blue-950 text-blue-400 px-2 py-0.5 rounded-full border border-blue-800 font-mono">
                      MOHAP Connected
                    </span>
                  </div>

                  {/* Cashless Insurance Approval Bar */}
                  <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold shrink-0">
                        <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-xs sm:text-sm text-white">Direct Cashless Insurance Pre-Approval</h5>
                          <span className="text-[9px] sm:text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-md font-bold">Approved</span>
                        </div>
                        <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Pre-auth cleared in 42s with Daman / NextCare / MetLife</p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800 self-start sm:self-center">
                      Cashless 100%
                    </span>
                  </div>

                  {/* Clinical Tools Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="p-3 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <h6 className="font-bold text-xs text-white">3D Intraoral Dental Scanner</h6>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Precision digital impressions with 0.01mm accuracy. No uncomfortable silicone putty molds.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <FileCheck2 className="w-4 h-4 text-blue-400" />
                        <h6 className="font-bold text-xs text-white">Instant E-Prescriptions</h6>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Electronically routed to your preferred pharmacy with QR code pickup and refill tracking.
                      </p>
                    </div>
                  </div>

                  {/* Accepted Insurances Badges */}
                  <div className="pt-1">
                    <span className="text-[10px] sm:text-[11px] text-slate-400 block mb-2 font-semibold uppercase tracking-wider">
                      Integrated UAE Cashless Networks:
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-slate-200">
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Daman</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">NextCare</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">MedNet</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">MetLife</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">AXA / GIG</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Sukoon</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Al Buhaira</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Feature Pill */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Synchronized With Practo UAE</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-emerald-400 font-semibold shrink-0">100% Paperless</span>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Features List */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {activeFeature === 'mobile' ? (
              <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
                <div className="border-l-3 border-emerald-500 pl-3.5 sm:pl-4">
                  <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    Patient Convenience First
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-white mt-1">
                    Your Complete Medical File & Reports In Your Pocket
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 mt-0.5 border border-emerald-500/25 shrink-0">
                        <FileCheck2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">Automated Digital Lab Results</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                          No waiting or traveling back for printed test slips. Blood profiles, dental X-rays, and ECG reports arrive instantly with verified clinician notes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 mt-0.5 border border-emerald-500/25 shrink-0">
                        <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">1-Click Slot Rescheduling & WhatsApp Alerts</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                          Book follow-up consultations, modify appointment dates, and receive automated WhatsApp notifications before every clinic visit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 mt-0.5 border border-emerald-500/25 shrink-0">
                        <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">UAE Health Data & NABIDH Compliant</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                          Enterprise 256-bit bank-grade encryption fully adhering to UAE Ministry of Health & Prevention (MOHAP) patient privacy regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20please%20send%20me%20the%20Patient%20Portal%20app%20download%20link."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Get App Access Link on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
                <div className="border-l-3 border-blue-500 pl-3.5 sm:pl-4">
                  <span className="text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Clinic Administration & EMR
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-white mt-1">
                    Paperless EMR & Instant UAE Insurance Clearances
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-blue-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-blue-500/15 text-blue-400 mt-0.5 border border-blue-500/25 shrink-0">
                        <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors">Direct Cashless Insurance Pre-Approvals</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                          Our desktop EMR connects directly with Daman, NextCare, MedNet, MetLife, AXA, Oman Insurance, and Al Buhaira for instant electronic claim clearance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-blue-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-blue-500/15 text-blue-400 mt-0.5 border border-blue-500/25 shrink-0">
                        <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors">Integrated Practo & Local Registry Sync</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                          Seamless bidirectional bridge keeping your Practo appointment history and local clinic electronic records perpetually updated.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-blue-500/40 transition-all duration-200 group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-blue-500/15 text-blue-400 mt-0.5 border border-blue-500/25 shrink-0">
                        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors">Zero Paper Prescription Loss</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
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
