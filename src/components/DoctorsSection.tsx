'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Calendar, Award, Languages, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface DoctorsSectionProps {
  onOpenBooking: (dept?: string) => void;
}

export default function DoctorsSection({ onOpenBooking }: DoctorsSectionProps) {
  const doctors = [
    {
      name: 'Dr. Sarah Al Nuaimi',
      role: 'Specialist Orthodontist & Cosmetic Dentist',
      department: 'Dentistry',
      experience: '12+ Years Experience',
      education: 'BDS, MSc Orthodontics (UK)',
      languages: 'English, Arabic',
      rating: 4.9,
      reviewsCount: 142,
      availability: 'Available Today • 4 Slots',
      specialties: ['Invisalign Certified', 'Cosmetic Veneers', 'Laser Gum Therapy', 'Painless Implants'],
      image: '/images/doctor-sarah.jpg'
    },
    {
      name: 'Dr. Tariq Mansour',
      role: 'Specialist Internal & Family Medicine',
      department: 'General Medicine',
      experience: '15+ Years Experience',
      education: 'MBBS, MD Internal Medicine',
      languages: 'English, Arabic, French',
      rating: 4.8,
      reviewsCount: 118,
      availability: 'Available Today • Walk-ins',
      specialties: ['Hypertension & Diabetes', 'Executive Health Check', 'Cardiovascular Risk', 'Geriatric Care'],
      image: '/images/doctor-tariq.jpg'
    },
    {
      name: 'Dr. Maya Joseph',
      role: 'Specialist Pediatrician',
      department: 'Pediatrics',
      experience: '10+ Years Experience',
      education: 'MBBS, DCH, MRCPCH (UK)',
      languages: 'English, Hindi, Malayalam, Urdu',
      rating: 4.9,
      reviewsCount: 95,
      availability: 'Evening Clinic • 5:00 PM',
      specialties: ['Newborn Assessments', 'Pediatric Asthma', 'Immunization Protocols', 'Growth Milestones'],
      image: '/images/doctor-consulting.jpg'
    }
  ];

  return (
    <section id="doctors" className="py-16 sm:py-20 lg:py-28 bg-[#f8fafc] border-y border-slate-200/80 relative overflow-hidden">
      {/* Medical Architectural Grid Overlay */}
      <div className="absolute inset-0 medical-dot-grid opacity-35 pointer-events-none" />

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-sm border border-emerald-200/80">
            <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Board-Certified Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
            Consult With Sharjah&apos;s Trusted <br className="hidden sm:block" />
            <span className="brand-gradient-text">Medical &amp; Dental Specialists</span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed px-1">
            Our physicians blend international post-graduate credentials with compassionate, patient-first clinical care. Fast-track same-day appointments available.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="luxury-card-light rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-emerald-500/40 hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div>
                {/* Doctor Visual Header with Photo */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                  
                  {/* Top rating badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-md text-[11px] sm:text-xs font-bold text-slate-900 border border-slate-200 shrink-0 z-10">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                    <span>{doctor.rating}</span>
                    <span className="text-slate-400 font-medium">({doctor.reviewsCount})</span>
                  </div>

                  {/* Availability Pill */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-emerald-400 border border-slate-700 shadow-md z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                    <span>{doctor.availability}</span>
                  </div>

                  {/* MOHAP Verification Pill */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-md px-2 py-0.5 rounded-lg border border-slate-700 text-[10px] text-emerald-300 font-semibold flex items-center gap-1 z-10">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>MOHAP Certified</span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-28">
                    <span className="text-[10px] sm:text-[11px] font-bold text-emerald-300 uppercase tracking-widest block mb-0.5">
                      {doctor.department}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                      {doctor.name}
                    </h3>
                  </div>
                </div>

                {/* Doctor Details Body */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="inline-block bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-xl">
                    <p className="text-[11px] sm:text-xs font-bold text-emerald-800">
                      {doctor.role}
                    </p>
                  </div>

                  <div className="text-xs text-slate-600 space-y-2 pt-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold text-slate-800 text-[11px] sm:text-xs">{doctor.education} • {doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200/60">
                        <Languages className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-slate-600 text-[11px] sm:text-xs">Languages: <strong className="text-slate-800">{doctor.languages}</strong></span>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Clinical Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.specialties.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-[11px] font-semibold bg-slate-50 text-slate-700 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-slate-200/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(doctor.department)}
                  className="btn-shine w-full min-h-[44px] py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg shadow-emerald-700/20 active:scale-[0.99]"
                >
                  <Calendar className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Book Consultation With {doctor.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
