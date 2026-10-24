'use client';

import React, { useState } from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  Baby, 
  Heart, 
  Bone, 
  Scan, 
  ArrowRight, 
  Check, 
  Clock, 
  Shield, 
  UserCheck 
} from 'lucide-react';

interface ServicesGridProps {
  onOpenBooking: (dept?: string) => void;
}

export default function ServicesGrid({ onOpenBooking }: ServicesGridProps) {
  const [activeTab, setActiveTab] = useState('all');

  const departments = [
    {
      id: 'dentistry',
      name: 'Advanced Dentistry',
      badge: 'Specialty Center',
      icon: Sparkles,
      color: 'teal',
      description: 'Comprehensive restorative, surgical, and cosmetic dental treatments utilizing pain-free modern technology.',
      features: [
        'Cosmetic veneers & Hollywood smile design',
        'Painless root canal therapy & dental implants',
        'Laser teeth whitening & orthodontic braces',
        'Pediatric dental care & preventative cleanings'
      ],
      leadDoctor: 'Dr. Sarah Al Nuaimi (Specialist Orthodontist)',
      timing: 'Daily slots available'
    },
    {
      id: 'general-medicine',
      name: 'General & Internal Medicine',
      badge: 'Primary Care',
      icon: Stethoscope,
      color: 'cyan',
      description: 'Expert diagnostic evaluation for acute and chronic conditions, preventive wellness, and routine family medical exams.',
      features: [
        'Comprehensive health checkups & blood profiles',
        'Diabetes, hypertension & cholesterol management',
        'Acute fever, infectious illness & respiratory care',
        'Executive wellness assessments & fitness certificates'
      ],
      leadDoctor: 'Dr. Tariq Mansour (Internal Medicine Specialist)',
      timing: 'Same-day walk-ins welcomed'
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics & Child Care',
      badge: 'Family Focus',
      icon: Baby,
      color: 'amber',
      description: 'Gentle, child-centric medical care from newborn screenings and developmental milestones to vaccinations and childhood illness.',
      features: [
        'Routine childhood vaccinations & immunizations',
        'Growth, nutrition & developmental milestone monitoring',
        'Pediatric allergy, asthma & infection treatment',
        'Compassionate, stress-free clinic environment'
      ],
      leadDoctor: 'Dr. Maya Joseph (Specialist Pediatrician)',
      timing: 'Dedicated morning & evening clinic'
    },
    {
      id: 'cardiology',
      name: 'Cardiology & Heart Health',
      badge: 'Diagnostic Lab',
      icon: Heart,
      color: 'rose',
      description: 'Advanced cardiovascular risk assessment, diagnostic testing, and preventative management for lasting heart health.',
      features: [
        '12-Lead ECG & digital Holter monitoring',
        'Cardiovascular risk profiling & lipid analysis',
        'Hypertension protocol & coronary prevention',
        'Lifestyle & heart health coaching'
      ],
      leadDoctor: 'Dr. Farooq Khan (Consultant Cardiologist)',
      timing: 'By appointment'
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics & Joint Care',
      badge: 'Surgical & Rehab',
      icon: Bone,
      color: 'indigo',
      description: 'Specialized care for joint pain, musculoskeletal injuries, spine alignment, and sports medicine rehabilitation.',
      features: [
        'Arthritis, knee, hip & shoulder pain therapies',
        'Spine care, sciatica & back pain management',
        'Fracture diagnosis, casting & joint injections',
        'Post-injury rehabilitation & physical therapy guidance'
      ],
      leadDoctor: 'Dr. Robert Mathews (Specialist Orthopedic Surgeon)',
      timing: 'Mon – Sat'
    },
    {
      id: 'dermatology',
      name: 'Dermatology & Cosmetology',
      badge: 'Aesthetics',
      icon: Scan,
      color: 'purple',
      description: 'Clinical dermatology for chronic skin conditions combined with cutting-edge medical aesthetic and rejuvenation treatments.',
      features: [
        'Acne, eczema, psoriasis & pigment correction',
        'Hydrafacial, medical chemical peels & glow therapy',
        'Mole mapping, skin cancer screening & biopsy',
        'Laser skin resurfacing & anti-aging consultations'
      ],
      leadDoctor: 'Dr. Laila Al Hosani (Consultant Dermatologist)',
      timing: 'Evening slots available'
    },
  ];

  const filteredDepts = activeTab === 'all' 
    ? departments 
    : departments.filter(d => d.id === activeTab);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold uppercase tracking-wider text-brand-800 mb-3">
              <Shield className="w-3.5 h-3.5 text-brand-600" />
              <span>Multi-Specialty Healthcare</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Comprehensive Departments & Clinical Excellence
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Modern facilities equipped with state-of-the-art diagnostic instruments, experienced specialists, and patient-first medical protocols.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition inline-flex items-center gap-2"
            >
              <span>Instant Appointment</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            All Departments (6)
          </button>
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === dept.id
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <dept.icon className="w-3.5 h-3.5" />
              <span>{dept.name}</span>
            </button>
          ))}
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDepts.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="group rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-brand-500/50 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-inner">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700 uppercase tracking-wider">
                      {dept.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-brand-700 transition">
                    {dept.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="my-5 border-t border-slate-200/60 pt-4 space-y-2">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Treatments & Diagnostics
                    </h4>
                    {dept.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200/60 pt-4 mt-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-brand-600" />
                      <span className="font-medium text-slate-700 truncate max-w-[170px]">
                        {dept.leadDoctor}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{dept.timing}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(dept.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 group/cta"
                  >
                    <span>Book For {dept.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practo Integration Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 text-teal-400 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-teal-400 font-bold text-xs uppercase tracking-widest">
                Practo Integrated Healthcare
              </span>
              <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
                Existing Practo Patient? Your Profile & Records Sync Seamlessly
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Previously booked Happy Way on Practo? All previous prescriptions, appointment history, and doctor notes automatically synchronize with our new digital health hub.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition shadow-md"
            >
              Sync & Book Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
