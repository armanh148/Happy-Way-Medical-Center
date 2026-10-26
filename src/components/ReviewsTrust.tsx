'use client';

import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Sparkles, Pause, Play, ExternalLink } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  date: string;
  rating: number;
  category: 'dentistry' | 'general' | 'pediatrics' | 'specialized';
  department: string;
  comment: string;
  verified: string;
  initials: string;
  avatarBg: string;
}

export default function ReviewsTrust() {
  const [filter, setFilter] = useState<'all' | 'dentistry' | 'general' | 'pediatrics'>('all');
  const [isPaused, setIsPaused] = useState(false);

  const reviewsList: Review[] = [
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
    },
    {
      name: 'Sarah Al Nuaimi',
      location: 'Sharjah',
      date: '1 month ago',
      rating: 5,
      category: 'general',
      department: 'Gynecology & Obstetrics',
      comment: 'Extremely polite female specialist, welcoming atmosphere, and clear explanations. Felt respected and comfortable throughout the scan and consultation.',
      verified: 'Verified Patient',
      initials: 'SN',
      avatarBg: 'bg-emerald-500/15 text-emerald-700'
    },
    {
      name: 'Ibrahim Khalil',
      location: 'Sharjah, Rolla Square',
      date: '2 weeks ago',
      rating: 5,
      category: 'specialized',
      department: 'Orthopedics & Joint Clinic',
      comment: 'Was suffering from persistent knee pain. Doctor diagnosed the issue with on-site digital imaging and gave practical exercise guidance. Pain reduced significantly in just a week.',
      verified: 'Practo Verified Patient',
      initials: 'IK',
      avatarBg: 'bg-blue-500/15 text-blue-700'
    }
  ];

  const filteredReviews = filter === 'all' 
    ? reviewsList 
    : reviewsList.filter(r => r.category === filter);

  // Divide into two alternating tracks for 2-row multi-speed infinite loop
  const rowOne = filteredReviews.slice(0, Math.ceil(filteredReviews.length / 2));
  const rowTwo = filteredReviews.slice(Math.ceil(filteredReviews.length / 2));

  // If a single filter has few items, duplicate to maintain continuous flow
  const loopRowOne = [...rowOne, ...rowOne, ...rowOne, ...rowOne];
  const loopRowTwo = rowTwo.length > 0 
    ? [...rowTwo, ...rowTwo, ...rowTwo, ...rowTwo] 
    : loopRowOne;

  const renderReviewCard = (rev: Review, idx: number) => (
    <div
      key={idx}
      className="w-[275px] xs:w-[325px] sm:w-[385px] shrink-0 rounded-3xl p-4 sm:p-6 bg-white hover:bg-slate-50/70 border border-slate-200/90 hover:border-emerald-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group select-none"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
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
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic line-clamp-4">
          &ldquo;{rev.comment}&rdquo;
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${rev.avatarBg} font-bold text-xs flex items-center justify-center shrink-0`}>
              {rev.initials}
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-heading truncate">{rev.name}</h4>
              <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">{rev.department}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full shrink-0">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            {rev.verified.includes('Practo') ? 'Practo' : 'Verified'}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="py-14 sm:py-20 lg:py-28 bg-[#fafafa] relative overflow-hidden">
      
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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

        {/* Section Heading & Controls */}
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

          {/* Interactive Controls & Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5 sm:mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              All Reviews ({reviewsList.length})
            </button>
            <button
              onClick={() => setFilter('dentistry')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                filter === 'dentistry'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Dental & Smile
            </button>
            <button
              onClick={() => setFilter('general')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                filter === 'general'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              General Clinic & Lab
            </button>
            <button
              onClick={() => setFilter('pediatrics')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                filter === 'pediatrics'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Pediatrics & Family
            </button>

            {/* Play / Pause Toggle Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 transition"
              title={isPaused ? "Play Auto-Scroll" : "Pause Auto-Scroll"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  <span>Play Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-500" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Infinite Auto-Sliding Loop Carousel Container */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left & Right Soft Edge Fading Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-44 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-44 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/80 to-transparent z-10" />

        <div className="space-y-4 sm:space-y-6">
          
          {/* Row 1: Smooth Infinite Scrolling Left */}
          <div 
            className="flex overflow-hidden"
            style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
          >
            <div 
              className="marquee-track flex gap-4 sm:gap-6 py-2 px-3"
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {loopRowOne.map((rev, idx) => renderReviewCard(rev, idx))}
            </div>
          </div>

          {/* Row 2: Smooth Infinite Scrolling Right (Reverse Loop) */}
          <div 
            className="flex overflow-hidden"
            style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
          >
            <div 
              className="marquee-track-reverse flex gap-4 sm:gap-6 py-2 px-3"
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {loopRowTwo.map((rev, idx) => renderReviewCard(rev, idx + 100))}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Hint and External Reviews Link */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
        <p className="flex items-center gap-1.5 text-slate-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Cards pause automatically when hovered or touched</span>
        </p>
        
        <a 
          href="https://maps.google.com/?cid=12044810795415777821" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-800 hover:underline transition"
        >
          <span>View all 405+ Reviews on Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </section>
  );
}
