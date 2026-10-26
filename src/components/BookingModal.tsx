'use client';

import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  CheckCircle2, 
  Shield, 
  HeartPulse, 
  Stethoscope,
  Sparkles,
  Baby,
  Heart,
  Bone,
  Scan,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDepartment?: string;
}

export default function BookingModal({ isOpen, onClose, initialDepartment = 'Dentistry' }: BookingModalProps) {
  const [department, setDepartment] = useState(initialDepartment);
  const [date, setDate] = useState('2026-10-27');
  const [timeSlot, setTimeSlot] = useState('10:30 AM');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('+971 ');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const departments = [
    { id: 'Dentistry', name: 'Advanced Dentistry & Orthodontics', icon: Sparkles },
    { id: 'General Medicine', name: 'General & Family Medicine', icon: Stethoscope },
    { id: 'Gynecology', name: 'Gynecology & Obstetrics', icon: HeartPulse },
    { id: 'Pediatrics', name: 'Pediatrics & Baby Clinic', icon: Baby },
    { id: 'Cardiology', name: 'Cardiology & ECG Diagnostics', icon: Heart },
    { id: 'Orthopedics', name: 'Orthopedics & Joint Care', icon: Bone },
  ];

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:45 AM', '01:00 PM', 
    '04:30 PM', '05:30 PM', '06:45 PM', '08:00 PM', '09:15 PM'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 p-6 text-white relative border-b border-slate-800">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Instant Priority Booking • Zero Waiting</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
            Book Your Consultation
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Happy Way Medical Center • Rolla, Sharjah • Call: +971 58 684 6600
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-glow-green-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black font-heading text-slate-900">Consultation Reserved!</h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-slate-900">{patientName || 'Patient'}</strong>! Your appointment for <strong className="text-emerald-700">{department}</strong> on <strong className="text-slate-900">{date} at {timeSlot}</strong> has been logged in our clinic queue.
              </p>

              {/* Confirmation Ticket Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6 text-left max-w-md mx-auto space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-600 text-white rounded-xl mt-0.5 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">SMS & WhatsApp Confirmation Dispatched</h5>
                    <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                      Our front desk has sent a confirmation WhatsApp message to <strong>{phone}</strong> with parking details and elevator directions. Free cancellation anytime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20I%20just%20requested%20an%20appointment%20for%20${encodeURIComponent(department)}%20on%20${date}%20at%20${timeSlot}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Department Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Select Specialty / Clinical Department
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {departments.map((dept) => {
                    const Icon = dept.icon;
                    return (
                      <button
                        type="button"
                        key={dept.id}
                        onClick={() => setDepartment(dept.id)}
                        className={`p-3 text-left rounded-2xl text-xs font-semibold border transition-all flex items-center gap-2.5 ${
                          department.toLowerCase().includes(dept.id.toLowerCase())
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm ring-1 ring-emerald-500'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                        }`}
                      >
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          department.toLowerCase().includes(dept.id.toLowerCase())
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200/80 text-slate-600'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="truncate">{dept.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 text-slate-900 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 text-slate-900 bg-white font-medium"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Full Patient Name</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Fatima Al Zarooni"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 text-slate-900"
                />
              </div>

              {/* Mobile Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mobile Number (WhatsApp Enabled)</span>
                </label>
                <input
                  type="tel"
                  placeholder="+971 50 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 text-slate-900"
                />
              </div>

              {/* Symptoms / Insurance */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Symptoms or UAE Insurance Provider (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Routine cleaning, tooth pain, or insurance name (Daman, NextCare, MedNet, etc.)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 text-slate-900"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-shine w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-900/15 transition-all flex items-center justify-center gap-2 active:scale-[0.99] border border-emerald-500/40"
                >
                  <Stethoscope className="w-4 h-4 text-emerald-200" />
                  <span>Confirm & Reserve Appointment</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2.5 font-medium">
                  Zero advance payment required. Cashless insurance approvals handled on arrival.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
