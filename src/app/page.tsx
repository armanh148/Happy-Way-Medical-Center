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
import { MessageSquare, Calendar } from 'lucide-react';

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
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-emerald-600 selection:text-white relative overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
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
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2.5 items-end">
        {/* WhatsApp Floating Button with subtle ping */}
        <a
          href="https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20doctor%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 sm:w-13 sm:h-13 p-3 sm:p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative border-2 border-white"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span className="absolute right-15 bg-slate-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-xl border border-slate-800 hidden sm:block">
            Chat on WhatsApp
          </span>
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        </a>

        {/* Quick Consultation Booking Pill in Brand Green & Blue */}
        <button
          onClick={() => handleOpenBooking()}
          className="btn-shine px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white text-xs font-extrabold uppercase tracking-wider shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all border border-emerald-400/30 shadow-emerald-900/25"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200" />
          <span className="hidden sm:inline">Book Consultation</span>
          <span className="sm:hidden">Book Now</span>
        </button>
      </div>
    </main>
  );
}
