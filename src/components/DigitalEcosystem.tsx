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
  HeartHandshake
} from 'lucide-react';

export default function DigitalEcosystem() {
  const [activeFeature, setActiveFeature] = useState<'mobile' | 'emr'>('mobile');

  return (
    <section id="app-features" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">
            <Zap className="w-3.5 h-3.5 text-teal-400" />
            <span>Next-Gen Healthcare Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
            Our Digital Ecosystem: <br />
            <span className="teal-gradient-text">Patient Mobile App & Desktop EMR</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Healthcare shouldn&apos;t end when you leave the clinic. Access instant diagnostic lab test reports, electronic prescriptions, and hassle-free UAE insurance billing in one unified platform.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveFeature('mobile')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeFeature === 'mobile'
                  ? 'bg-teal-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile Patient App</span>
            </button>
            <button
              onClick={() => setActiveFeature('emr')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeFeature === 'emr'
                  ? 'bg-teal-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Desktop EMR & Insurance Billing</span>
            </button>
          </div>
        </div>

        {/* Feature Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/80 group">
              <div className="relative h-[320px] sm:h-[420px] w-full">
                <Image
                  src="/images/patient-app-mockup.jpg"
                  alt="Happy Way Medical Center Mobile App and EMR"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Real-Time Status Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Latest CBC & Lipid Blood Profile</h5>
                    <p className="text-[11px] text-teal-400 font-medium">Verified by Lab Director • Ready for PDF Download</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold rounded-lg">
                  Instant Sync
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Features List */}
          <div className="lg:col-span-5 space-y-6">
            {activeFeature === 'mobile' ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="border-l-2 border-teal-500 pl-4">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                    Patient Convenience First
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1">
                    Your Complete Health Record In Your Pocket
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 mt-1">
                        <FileCheck2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Automated Digital Lab Results</h4>
                        <p className="text-xs text-slate-400 mt-1">
                          No need to return to the clinic for test slips. Blood tests, dental X-rays, and ECG reports arrive instantly with trend analytics.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 mt-1">
                        <Bell className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">1-Click Slot Rescheduling & WhatsApp Alerts</h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Book follow-up consultations, modify appointment dates, and receive automated WhatsApp alerts before each visit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 mt-1">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">UAE Health Data & NABIDH Compliant</h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Enterprise 256-bit data encryption adhering to UAE MOHAP patient privacy regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20please%20send%20me%20the%20Patient%20Portal%20app%20download%20link."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-500/20 transition flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Get App Access Link</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="border-l-2 border-teal-500 pl-4">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                    Clinic Administration & EMR
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1">
                    Paperless EMR & Instant UAE Insurance Billing
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 mt-1">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Direct Cashless Insurance Pre-Approvals</h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Our desktop EMR links directly with Daman, NextCare, MedNet, MetLife, AXA, Oman Insurance, and Al Buhaira for instant electronic claim clearance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 mt-1">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Integrated Practo & Local Registry Sync</h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Seamless bidirectional bridge keeping your Practo appointment history and local clinic electronic records perpetually updated.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 mt-1">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Zero Paper Prescription Loss</h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Doctors input prescriptions directly into the EMR; nearby pharmacies receive digital codes for instant dispensing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-slate-400 block mb-2 font-medium">
                    Accepted Insurance Partners:
                  </span>
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-300">
                    <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">Daman National</span>
                    <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">NextCare</span>
                    <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">MedNet</span>
                    <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">AXA / GIG</span>
                    <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">Sukoon (Oman)</span>
                    <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">MetLife</span>
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
