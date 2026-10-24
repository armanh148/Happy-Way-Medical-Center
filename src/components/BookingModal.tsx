'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, Shield, HeartPulse, Stethoscope } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDepartment?: string;
}

export default function BookingModal({ isOpen, onClose, initialDepartment = 'Dentistry' }: BookingModalProps) {
  const [department, setDepartment] = useState(initialDepartment);
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('2026-10-25');
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
    { id: 'Dentistry', name: 'Advanced Dental & Orthodontics' },
    { id: 'General Medicine', name: 'General & Family Medicine' },
    { id: 'Pediatrics', name: 'Pediatrics & Child Care' },
    { id: 'Cardiology', name: 'Cardiology & Heart Health' },
    { id: 'Orthopedics', name: 'Orthopedics & Joint Care' },
    { id: 'Dermatology', name: 'Dermatology & Cosmetology' },
  ];

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:45 AM', '01:00 PM', 
    '04:30 PM', '05:30 PM', '06:45 PM', '08:00 PM', '09:15 PM'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-brand-darkTeal to-slate-900 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <HeartPulse className="w-4 h-4 text-brand-400" />
            <span>Instant Priority Booking</span>
          </div>
          <h3 className="text-2xl font-bold font-heading text-white">Book Your Consultation</h3>
          <p className="text-slate-300 text-sm mt-1">
            Happy Way Medical Center • Rolla, Sharjah • Call: +971 58 684 6600
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-teal-200 shadow-glow-teal animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-heading">Consultation Reserved!</h4>
              <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                Thank you <span className="font-semibold text-slate-800">{patientName || 'Patient'}</span>! Your appointment for <strong className="text-teal-700">{department}</strong> on <strong className="text-slate-800">{date} at {timeSlot}</strong> has been logged.
              </p>

              <div className="bg-teal-50/70 border border-teal-200/60 rounded-2xl p-4 my-6 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-600 text-white rounded-lg mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-teal-950 text-sm">Confirmation & Reminders</h5>
                    <p className="text-teal-800/80 text-xs mt-0.5">
                      Our front desk will send a confirmation SMS and WhatsApp message to <strong>{phone}</strong>. Free cancellation up to 2 hours before the visit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <a
                  href={`https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20I%20just%20requested%20an%20appointment%20for%20${encodeURIComponent(department)}%20on%20${date}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl shadow-sm transition inline-flex items-center gap-2"
                >
                  Confirm on WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-xl transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Select Specialty / Department
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {departments.map((dept) => (
                    <button
                      type="button"
                      key={dept.id}
                      onClick={() => setDepartment(dept.id)}
                      className={`p-3 text-left rounded-xl text-xs font-medium border transition-all ${
                        department === dept.id
                          ? 'border-brand-600 bg-brand-50/80 text-brand-900 shadow-sm font-semibold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50/50'
                      }`}
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-600" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-600" />
                    Preferred Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800 bg-white"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-brand-600" />
                  Full Patient Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Fatima Al Zarooni"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  Mobile Number (WhatsApp Enabled)
                </label>
                <input
                  type="tel"
                  placeholder="+971 50 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Symptoms or Insurance Details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Toothache, routine checkup, or insurance provider name (Daman, NextCare, etc.)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-600 via-teal-600 to-cyan-600 hover:from-brand-700 hover:to-cyan-700 text-white font-semibold text-sm shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Stethoscope className="w-4 h-4" />
                  Confirm & Reserve Appointment
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  No advance payment needed. Practo partner & MOHAP licensed clinic.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
