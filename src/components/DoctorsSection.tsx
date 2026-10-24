'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Calendar, Award, Languages, CheckCircle, ArrowRight } from 'lucide-react';

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
      specialties: ['Invisalign certified', 'Cosmetic Veneers', 'Laser Gum Therapy'],
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
      specialties: ['Hypertension & Diabetes', 'Executive Health Check', 'Geriatric Care'],
      image: '/images/clinic-interior.jpg'
    },
    {
      name: 'Dr. Maya Joseph',
      role: 'Specialist Pediatrician',
      department: 'Pediatrics',
      experience: '10+ Years Experience',
      education: 'MBBS, DCH, MRCPCH (UK)',
      languages: 'English, Hindi, Malayalam',
      rating: 4.9,
      reviewsCount: 95,
      specialties: ['Newborn Assessments', 'Pediatric Asthma', 'Immunization Protocols'],
      image: '/images/dental-suite.jpg'
    }
  ];

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>Dedicated Medical Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Consult With Sharjah’s Leading Healthcare Clinicians
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Our doctors combine international medical qualifications with empathetic, patient-centered care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Visual Header with Photo */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Top rating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-sm text-xs font-bold text-slate-900">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{doctor.rating}</span>
                    <span className="text-slate-400 font-normal">({doctor.reviewsCount})</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider block">
                      {doctor.department}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white">
                      {doctor.name}
                    </h3>
                  </div>
                </div>

                {/* Doctor Details Body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-lg inline-block">
                    {doctor.role}
                  </p>

                  <div className="text-xs text-slate-600 space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{doctor.education} • {doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Speaks: {doctor.languages}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.specialties.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(doctor.department)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  <span>Book Appointment with {doctor.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
