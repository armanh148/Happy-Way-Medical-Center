'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  HeartPulse,
  ChevronDown,
  Filter,
  LayoutGrid,
  X
} from 'lucide-react';

interface ServicesGridProps {
  onOpenBooking: (dept?: string) => void;
}

export default function ServicesGrid({ onOpenBooking }: ServicesGridProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const activeDeptObj = departments.find(d => d.id === activeTab);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#f8fafc] via-white to-slate-50 relative overflow-hidden">
      {/* Medical Architectural Grid Overlay */}
      <div className="absolute inset-0 medical-dot-grid opacity-40 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Multi-Specialty Clinical Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
              Comprehensive Departments &amp; <br className="hidden sm:block" />
              <span className="brand-gradient-text">Specialized Medical Care</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
              Equipped with modern diagnostic instruments, certified specialists, and patient-first protocols. All clinical departments support cashless insurance billing.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="btn-shine px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-emerald-900/20 transition-all inline-flex items-center gap-2.5 border border-emerald-500/30 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-emerald-200" />
              <span>Book Priority Consultation</span>
              <ArrowRight className="w-4 h-4 text-emerald-200" />
            </button>
          </div>
        </div>

        {/* Dropdown Filter Bar */}
        <div className="relative mb-4 z-20" ref={dropdownRef}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm">
            
            {/* Left: Department Status Indicator */}
            <div className="flex items-center gap-2 px-1 text-xs">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Filter className="w-4 h-4 text-emerald-700" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-medium hidden sm:inline">Active Filter:</span>
                <span className="font-extrabold text-slate-900 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 text-xs">
                  {activeTab === 'all' ? (
                    <>
                      <LayoutGrid className="w-3.5 h-3.5 text-emerald-600" />
                      <span>All Specialties ({departments.length})</span>
                    </>
                  ) : (
                    <>
                      {activeDeptObj && <activeDeptObj.icon className="w-3.5 h-3.5 text-emerald-600" />}
                      <span>{activeDeptObj?.name}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTab('all');
                        }}
                        className="ml-1 text-slate-400 hover:text-slate-800 p-0.5 rounded-full hover:bg-slate-200 transition"
                        title="Reset to All Specialties"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Right: The Interactive Dropdown Trigger Button & List */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-between sm:justify-start gap-3 shadow-md active:scale-95 border border-slate-800"
                aria-expanded={dropdownOpen}
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Choose Specialty Dropdown</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-300 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* The Dropdown Menu List */}
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-full sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span>Clinical Specialties</span>
                    <span className="text-emerald-700 font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">6 Departments</span>
                  </div>

                  <div className="py-1 space-y-1 max-h-72 overflow-y-auto">
                    {/* All Specialties Option */}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('all');
                        setDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-all ${
                        activeTab === 'all'
                          ? 'bg-emerald-50 text-emerald-900 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${activeTab === 'all' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <LayoutGrid className="w-3.5 h-3.5" />
                        </div>
                        <span>All Specialties ({departments.length})</span>
                      </div>
                      {activeTab === 'all' && <Check className="w-4 h-4 text-emerald-600" />}
                    </button>

                    {/* Department Items */}
                    {departments.map((dept) => {
                      const Icon = dept.icon;
                      const isSelected = activeTab === dept.id;
                      return (
                        <button
                          type="button"
                          key={dept.id}
                          onClick={() => {
                            setActiveTab(dept.id);
                            setDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-all ${
                            isSelected
                              ? 'bg-emerald-50 text-emerald-900 font-bold'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="truncate">{dept.name}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${dept.badgeBg}`}>
                              {dept.badge}
                            </span>
                            {isSelected && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Quick Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2.5 mb-8 no-scrollbar scroll-smooth">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'all'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>All Specialties ({departments.length})</span>
          </button>
          {departments.map((d) => {
            const Icon = d.icon;
            const isSel = activeTab === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  isSel
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{d.name.split(' & ')[0]}</span>
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
                className="group relative rounded-3xl luxury-card-light p-5 sm:p-7 flex flex-col justify-between overflow-hidden hover:border-emerald-500/40 hover:shadow-2xl transition-all duration-300 bg-white"
              >
                {/* Top glowing line on hover */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${dept.accentColor} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${dept.iconBg} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider border ${dept.badgeBg}`}>
                        {dept.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-emerald-700 transition">
                    {dept.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="my-5 border-t border-slate-200/60 pt-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Key Procedures &amp; Diagnostics
                      </h4>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        Cashless Insurance
                      </span>
                    </div>
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
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                      <span className="font-semibold text-slate-800 text-[11px] sm:text-xs truncate max-w-[170px]">
                        {dept.leadDoctor}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-200 shrink-0">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{dept.timing}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(dept.name)}
                    className="btn-shine w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-blue-700 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-between group/cta shadow-md hover:shadow-lg active:scale-[0.99]"
                  >
                    <span>Book {dept.name.split(' ')[0]} Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-300 group-hover/cta:translate-x-1 group-hover/cta:text-white transition-all" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practo Integration Banner - High-Tech Connected Health Bridge */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-[#081226] text-white p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-800/90 relative overflow-hidden group">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 medical-dot-grid opacity-15 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            
            {/* Left Column: Practo Logo & Live Sync Badge */}
            <div className="max-w-3xl space-y-4">
              
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>Practo Prime Network Partner</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Bidirectional Live Sync</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white tracking-tight leading-tight">
                  Already on Practo? <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">Your Medical History Bridges Automatically</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Skip repeated registration desks. Previous prescriptions, doctor consultation notes, and insurance profiles booked on Practo connect seamlessly to your Happy Way Medical Center chart.
                </p>
              </div>

              {/* 3 Interactive Benefit Micro-Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-2.5 hover:border-cyan-500/40 transition">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">0-Form Fast Check-in</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">Auto-fills your digital intake</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-2.5 hover:border-emerald-500/40 transition">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Prescription Sync</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">Doctor sees past visits</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-2.5 hover:border-blue-500/40 transition">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">UAE Insurance Linked</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">Instant cashless pre-auth</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Action Box */}
            <div className="shrink-0 w-full lg:w-72 flex flex-col gap-3">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2.5">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Practo Connector
                  </span>
                  <span className="text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-800 font-mono">
                    256-Bit SSL
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking()}
                  className="btn-shine w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Sync &amp; Book Appointment</span>
                </button>

                <p className="text-[10px] text-slate-400 text-center">
                  MOHAP &amp; UAE Patient Privacy Protected
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
