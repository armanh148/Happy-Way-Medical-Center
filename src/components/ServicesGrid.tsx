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
  UserCheck,
  CheckCircle2,
  Calendar,
  HeartPulse
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
      accentColor: 'from-emerald-500 to-green-500',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      description: 'Comprehensive restorative, cosmetic, and surgical dental treatments utilizing pain-free modern technology and 3D intraoral scans.',
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
      accentColor: 'from-blue-600 to-indigo-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200/80',
      iconBg: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      description: 'Expert diagnostic evaluation for acute and chronic conditions, preventive wellness protocols, and routine family medical exams.',
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
      id: 'gynecology',
      name: 'Gynecology & Obstetrics',
      badge: "Women's Health",
      icon: HeartPulse,
      accentColor: 'from-emerald-600 to-blue-600',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
      iconBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      description: 'Dedicated women’s wellness, prenatal checkups, hormonal health, ultrasound screenings, and compassionate gynecological care.',
      features: [
        'Routine antenatal care & pregnancy monitoring',
        'Pelvic ultrasound & women’s preventative exams',
        'PCOS, menstrual irregularities & hormone care',
        'Confidential, compassionate clinical environment'
      ],
      leadDoctor: 'Specialist Gynecologist (Female Doctor Available)',
      timing: 'Morning & evening clinics'
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics & Child Care',
      badge: 'Family Focus',
      icon: Baby,
      accentColor: 'from-amber-500 to-orange-500',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200/80',
      iconBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
      description: 'Gentle, child-friendly medical care from newborn screenings and developmental milestones to vaccinations and pediatric illnesses.',
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
      accentColor: 'from-rose-500 to-pink-500',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200/80',
      iconBg: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
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
      accentColor: 'from-blue-700 to-blue-900',
      badgeBg: 'bg-blue-50 text-blue-800 border-blue-200/80',
      iconBg: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
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
  ];

  const filteredDepts = activeTab === 'all' 
    ? departments 
    : departments.filter(d => d.id === activeTab);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Multi-Specialty Clinical Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
              Comprehensive Departments & <br className="hidden sm:block" />
              <span className="brand-gradient-text">Specialized Medical Care</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
              Equipped with modern diagnostic instruments, certified specialists, and patient-first protocols. All clinical departments support cashless insurance billing.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="btn-shine px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-emerald-900/20 transition-all inline-flex items-center gap-2.5 border border-emerald-500/30"
            >
              <Calendar className="w-4 h-4 text-emerald-200" />
              <span>Book An Appointment</span>
              <ArrowRight className="w-4 h-4 text-emerald-200" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
            }`}
          >
            All Specialties ({departments.length})
          </button>
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <button
                key={dept.id}
                onClick={() => setActiveTab(dept.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  activeTab === dept.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{dept.name}</span>
              </button>
            );
          })}
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDepts.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="group relative rounded-3xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-emerald-400/60 p-5 sm:p-7 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top glowing line on hover */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${dept.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${dept.iconBg} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border ${dept.badgeBg}`}>
                      {dept.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-emerald-700 transition">
                    {dept.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="my-5 border-t border-slate-200/60 pt-4 space-y-2.5">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Diagnostic & Treatment Procedures
                    </h4>
                    {dept.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200/60 pt-4 mt-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="font-semibold text-slate-800 truncate max-w-[170px]">
                        {dept.leadDoctor}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 bg-white px-2 py-0.5 rounded-lg border border-slate-200">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{dept.timing}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(dept.name)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group/cta shadow-md hover:shadow-emerald-600/25"
                  >
                    <span>Book {dept.name.split(' ')[0]} Visit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practo Integration Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800/90 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start sm:items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0 shadow-glow-green-sm">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-1">
                Practo Integrated Healthcare Partner
              </span>
              <h4 className="text-lg sm:text-2xl font-bold font-heading text-white">
                Existing Practo Patient? Your Profile & Health Records Sync Automatically
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Booked Happy Way Medical Center on Practo before? All your diagnostic prescriptions, past visit notes, and physician history instantly bridge into our clinic portal.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10 w-full md:w-auto">
            <button
              onClick={() => onOpenBooking()}
              className="btn-shine w-full md:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-bold text-xs tracking-wider uppercase transition shadow-lg shadow-emerald-500/25"
            >
              Sync & Book Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
