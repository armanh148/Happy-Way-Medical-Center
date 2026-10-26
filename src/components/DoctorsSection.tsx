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
      availability: 'Available Today • 4 Slots Left',
      specialties: ['Invisalign Certified', 'Cosmetic Veneers', 'Laser Gum Therapy', 'Painless Implants'],
      image: '/images/doctor-consulting.jpg'
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
      availability: 'Available Today • Walk-ins Welcomed',
      specialties: ['Hypertension & Diabetes', 'Executive Health Check', 'Cardiovascular Risk', 'Geriatric Care'],
      image: '/images/clinic-interior.jpg'
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
      availability: 'Evening Clinic • 5:00 PM – 9:30 PM',
      specialties: ['Newborn Assessments', 'Pediatric Asthma', 'Immunization Protocols', 'Growth Milestones'],
      image: '/images/dental-suite.jpg'
    }
  ];

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/90 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm border border-teal-200/80">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>Dedicated Medical Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
            Consult With Sharjah&apos;s Leading <br className="hidden sm:block" />
            <span className="teal-gradient-text">Healthcare Clinicians</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our physicians blend international post-graduate qualifications with compassionate, patient-centered communication.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-teal-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Visual Header with Photo */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Top rating badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md text-xs font-bold text-slate-900 border border-slate-200">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{doctor.rating}</span>
                    <span className="text-slate-400 font-medium">({doctor.reviewsCount})</span>
                  </div>

                  {/* Availability Pill */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 border border-slate-700 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{doctor.availability}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-bold text-teal-300 uppercase tracking-widest block mb-1">
                      {doctor.department}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {doctor.name}
                    </h3>
                  </div>
                </div>

                {/* Doctor Details Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="inline-block bg-teal-50 border border-teal-200/80 px-3 py-1 rounded-xl">
                    <p className="text-xs font-bold text-teal-800">
                      {doctor.role}
                    </p>
                  </div>

                  <div className="text-xs text-slate-600 space-y-2.5 pt-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-slate-700">{doctor.education} • {doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                        <Languages className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-slate-700">Languages: {doctor.languages}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                      Clinical Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.specialties.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onOpenBooking(doctor.department)}
                  className="btn-shine w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-teal-600 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-teal-600/25"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
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
