'use client';

import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function ReviewsTrust() {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      name: 'Maryam Al Suwaidi',
      location: 'Sharjah, Al Rolla',
      date: '2 weeks ago',
      rating: 5,
      category: 'dentistry',
      department: 'Dentistry & Cosmetic Veneers',
      comment: 'I completed my teeth whitening and cosmetic alignment at Happy Way Medical Center. The dental room is super modern and spotless! Dr. Sarah explained each step and there was absolutely zero pain. Highly recommend them in Sharjah!',
      verified: 'Practo Verified Patient',
      initials: 'MS',
      avatarBg: 'bg-emerald-500/15 text-emerald-700'
    },
    {
      name: 'Mohamed Tariq',
      location: 'Sharjah Resident',
      date: '1 month ago',
      rating: 5,
      category: 'general',
      department: 'General Medicine & Diagnostic Lab',
      comment: 'Great clinic location right in The Residence 7 building with convenient parking nearby. The doctor took time to listen to my symptoms, ran blood tests and my lab report was sent straight to my phone that same evening. Very smooth insurance handling.',
      verified: 'Verified Patient',
      initials: 'MT',
      avatarBg: 'bg-blue-500/15 text-blue-700'
    },
    {
      name: 'Anjali Sharma',
      location: 'Sharjah',
      date: '3 weeks ago',
      rating: 5,
      category: 'pediatrics',
      department: 'Pediatrics & Vaccination',
      comment: 'We brought our 3-year-old son for his vaccination and checkup. The pediatric clinic has such a warm vibe. Dr. Maya was gentle, distracting him with a smile so he did not cry at all. Best clinic for families in Rolla!',
      verified: 'Practo Verified Patient',
      initials: 'AS',
      avatarBg: 'bg-emerald-500/15 text-emerald-700'
    },
    {
      name: 'Khalid Al Qasimi',
      location: 'Sharjah',
      date: '1 month ago',
      rating: 5,
      category: 'dentistry',
      department: 'Dental Implant & Crown',
      comment: 'Replaced an old broken crown with a new zirconia one. The 3D digital intraoral scanner took less than 2 minutes without any messy paste. Perfect fit on the first try. Top dental equipment!',
      verified: 'Verified Patient',
      initials: 'KQ',
      avatarBg: 'bg-blue-500/15 text-blue-700'
    },
    {
      name: 'Fatima Zahra',
      location: 'Al Rolla, Sharjah',
      date: '3 weeks ago',
      rating: 5,
      category: 'general',
      department: 'Internal Medicine & ECG',
      comment: 'Booked on Practo and arrived 10 minutes early. Zero wait time! The front desk verified my NextCare insurance card instantly. Dr. Tariq was very thorough and attentive. Outstanding care.',
      verified: 'Practo Verified Patient',
      initials: 'FZ',
      avatarBg: 'bg-emerald-500/15 text-emerald-700'
    },
    {
      name: 'Rohan Mehta',
      location: 'Sharjah',
      date: '2 months ago',
      rating: 5,
      category: 'dentistry',
      department: 'Laser Teeth Whitening',
      comment: 'Got 4 shades whiter in a single 45-minute laser session before my brother’s wedding. No tooth sensitivity afterwards. Very polite staff and fair prices for Rolla.',
      verified: 'Verified Patient',
      initials: 'RM',
      avatarBg: 'bg-blue-500/15 text-blue-700'
    }
  ];

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === filter);

  return (
    <section id="reviews" className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Overview Banner */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-5 sm:p-8 lg:p-12 text-white shadow-2xl border border-slate-800/90 mb-12 sm:mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            
            <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-slate-800 pb-5 md:pb-0 md:pr-8 text-center md:text-left">
              <span className="text-emerald-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest block mb-1.5 sm:mb-2">
                Patient Trust & Clinical Satisfaction
              </span>
              <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-2.5 sm:mb-3">
                <span className="text-4xl sm:text-6xl font-black font-heading text-white">4.7</span>
                <div className="text-left">
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-300 font-semibold block">
                    Overall Satisfaction Score
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Aggregated from <strong className="text-white font-semibold">405+ verified patient reviews</strong> across Practo UAE and Google.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-emerald-500/40 transition">
                <span className="text-2xl sm:text-4xl font-black font-heading text-emerald-400 block">98%</span>
                <span className="text-[10px] sm:text-xs text-slate-300 mt-1 block font-medium">Recommendation</span>
              </div>
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-blue-500/40 transition">
                <span className="text-2xl sm:text-4xl font-black font-heading text-blue-400 block">&lt; 15 min</span>
                <span className="text-[10px] sm:text-xs text-slate-300 mt-1 block font-medium">Avg Wait Time</span>
              </div>
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-center col-span-2 sm:col-span-1 hover:border-emerald-500/40 transition">
                <span className="text-2xl sm:text-4xl font-black font-heading text-emerald-400 block">100%</span>
                <span className="text-[10px] sm:text-xs text-slate-300 mt-1 block font-medium">MOHAP Regulated</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            What Our Patients Say About Us
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-base px-1">
            Real stories and ratings from families and professionals who rely on Happy Way Medical Center for their health.
          </p>

          {/* Review Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Reviews ({reviews.length})
            </button>
            <button
              onClick={() => setFilter('dentistry')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                filter === 'dentistry'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Dental & Smile
            </button>
            <button
              onClick={() => setFilter('general')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                filter === 'general'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              General Clinic & Lab
            </button>
            <button
              onClick={() => setFilter('pediatrics')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                filter === 'pediatrics'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Pediatrics & Family
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredReviews.map((rev, index) => (
            <div
              key={index}
              className="rounded-3xl p-5 sm:p-7 bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-emerald-400/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400">
                    {rev.date}
                  </span>
                </div>

                <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600/25 mb-1.5 sm:mb-2 group-hover:text-emerald-600/40 transition-colors" />
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 sm:pt-5 mt-4 sm:mt-6 border-t border-slate-200/60">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${rev.avatarBg} font-bold text-xs flex items-center justify-center shrink-0`}>
                      {rev.initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-heading truncate">{rev.name}</h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">{rev.department}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
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
