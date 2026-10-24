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
import { Phone, MessageSquare, Calendar } from 'lucide-react';

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
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/971586846600?text=Hi%20Happy%20Way%20Medical%20Center,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20doctor%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
        >
          <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-md">
            Chat on WhatsApp
          </span>
          <MessageSquare className="w-6 h-6" />
        </a>

        {/* Quick Consultation Booking Pill */}
        <button
          onClick={() => handleOpenBooking()}
          className="px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all border border-slate-700"
        >
          <Calendar className="w-4 h-4 text-teal-400" />
          <span className="hidden sm:inline">Book Consultation</span>
          <span className="sm:hidden">Book</span>
        </button>
      </div>
    </main>
  );
}
