'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import DigitalEcosystem from '@/components/DigitalEcosystem';
import DoctorsSection from '@/components/DoctorsSection';
import ReviewsTrust from '@/components/ReviewsTrust';
import LocationContact from '@/components/LocationContact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState('Dentistry');

  const handleOpenBooking = (dept?: string) => {
    if (dept) {
      setSelectedDept(dept);
    }
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-teal-500 selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section with 3-Column Interactive Grid */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Services & Clinical Departments Grid */}
      <ServicesGrid onOpenBooking={handleOpenBooking} />

      {/* Digital Patient App & EMR Section */}
      <DigitalEcosystem />

      {/* Medical Specialists & Clinicians */}
      <DoctorsSection onOpenBooking={handleOpenBooking} />

      {/* Reviews & Patient Trust Section */}
      <ReviewsTrust />

      {/* Location, Operating Hours & Contact Inquiry */}
      <LocationContact />

      {/* Footer */}
      <Footer />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDepartment={selectedDept}
      />

      {/* Floating Action Buttons for Mobile / Quick Booking */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* WhatsApp Floating Button with subtle ping */}
        <a
          href="https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20doctor%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative border-2 border-white"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span className="absolute right-16 bg-slate-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-xl border border-slate-800">
            Chat on WhatsApp
          </span>
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>

        {/* Quick Consultation Booking Pill */}
        <button
          onClick={() => handleOpenBooking()}
          className="btn-shine px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold uppercase tracking-wider shadow-2xl flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all border border-slate-700/80 shadow-slate-950/20"
        >
          <Calendar className="w-4 h-4 text-teal-400" />
          <span className="hidden sm:inline">Book Consultation</span>
          <span className="sm:hidden">Book Now</span>
        </button>
      </div>
    </main>
  );
}
