import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Happy Way Medical Center | Multi-Specialty & Dental Clinic in Sharjah, UAE',
  description: 'Happy Way Medical Center at Rolla, Sharjah offers expert multi-specialty care and advanced dental solutions. 4.7★ rated with 405+ reviews. Book consultations, access digital lab reports, and experience exceptional healthcare.',
  keywords: [
    'Happy Way Medical Center',
    'Dental Clinic Sharjah',
    'Medical Center Rolla Sharjah',
    'Doctor Sharjah',
    'Dentist Sharjah',
    'The Residence 7 Sharjah',
    'Multi-specialty Clinic UAE'
  ],
  openGraph: {
    title: 'Happy Way Medical Center | Premier Healthcare in Sharjah',
    description: 'Advanced dental care, multi-specialty consultations, digital lab reports, and dedicated medical experts in Sharjah, UAE.',
    type: 'website',
    locale: 'en_AE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0d9488" />
      </head>
      <body className="antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
