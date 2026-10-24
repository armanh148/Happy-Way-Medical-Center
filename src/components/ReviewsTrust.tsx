'use client';

import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp, ShieldCheck } from 'lucide-react';

export default function ReviewsTrust() {
  const reviews = [
    {
      name: 'Maryam Al Suwaidi',
      location: 'Sharjah, Al Rolla',
      date: '2 weeks ago',
      rating: 5,
      department: 'Dentistry & Veneers',
      comment: 'I completed my teeth whitening and cosmetic alignment at Happy Way Medical Center. The dental room is super modern and spotless! The doctor explained each step and there was absolutely zero pain. Highly recommend them in Sharjah!',
      verified: 'Practo Verified Patient'
    },
    {
      name: 'Mohamed Tariq',
      location: 'Sharjah Resident',
      date: '1 month ago',
      rating: 5,
      department: 'General Medicine & Lab',
      comment: 'Great clinic location right in The Residence 7 building with convenient parking nearby. The doctor took time to listen to my symptoms, ran blood tests and my lab report was sent straight to my phone that same evening. Very smooth insurance handling.',
      verified: 'Verified Patient'
    },
    {
      name: 'Anjali Sharma',
      location: 'Sharjah',
      date: '3 weeks ago',
      rating: 5,
      department: 'Pediatrics',
      comment: 'We brought our 3-year-old son for his vaccination and checkup. The pediatric clinic has such a warm vibe. The doctor was gentle, distracting him with a smile so he did not cry at all. Best clinic for families in Rolla!',
      verified: 'Practo Verified Patient'
    }
  ];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Overview Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-slate-800 mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8 text-center md:text-left">
              <span className="text-teal-400 font-bold text-xs uppercase tracking-widest block mb-2">
                Patient Trust & Satisfaction
              </span>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                <span className="text-5xl sm:text-6xl font-black font-heading text-white">4.7</span>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-300 font-medium">
                    Overall Satisfaction Score
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm">
                Aggregated from <strong className="text-white">405+ patient reviews</strong> across Practo and verified clinic consultations.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-300 block">98%</span>
                <span className="text-xs text-slate-300 mt-1 block">Patient Recommendation</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-300 block">&lt; 15 min</span>
                <span className="text-xs text-slate-300 mt-1 block">Average Wait Time</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center col-span-2 sm:col-span-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-300 block">100%</span>
                <span className="text-xs text-slate-300 mt-1 block">MOHAP Regulated</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            What Our Patients Say About Us
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Real stories and experiences from families and professionals who trust Happy Way Medical Center for their health.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="rounded-3xl p-6 sm:p-7 bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {rev.date}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-teal-600/30 mb-2" />
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-200/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">{rev.name}</h4>
                    <p className="text-[11px] text-slate-500">{rev.department} • {rev.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-700 bg-teal-100/70 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-teal-600" />
                    {rev.verified.includes('Practo') ? 'Practo' : 'Verified'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
