'use client';

import { motion } from 'motion/react';
import { BookOpen, Heart, Star } from 'lucide-react';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';
import NavbarSection from '@/components/NavbarSection';
import { PortableText, type PortableTextBlock } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
import type { SanityImageSource } from '@sanity/image-url';

export interface BukuSinarasData {
  _id: string;
  title: string;
  subTitle: string;
  body: PortableTextBlock[];
  image: SanityImageSource;
  badgeText?: string;
  alt?: string;
}

interface Props {
  data: BukuSinarasData | null;
}

export default function BukuSinarasClient({ data }: Props) {
  if (!data) {
    return (
      <div className="font-sans antialiased text-slate-800 bg-brand-cream/20 selection:bg-brand-yellow selection:text-slate-900 min-h-screen relative flex flex-col justify-between">
        <div className="absolute inset-0 kids-grid-bg pointer-events-none z-0" />
        <NavbarSection />
        <main className="relative z-10 max-w-6xl mx-auto px-4 py-32 flex-grow flex items-center justify-center w-full">
          <div className="bg-white border-4 border-slate-800 rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#1e293b] text-center max-w-lg">
            <h1 className="text-2xl font-display font-bold text-slate-800 mb-2">
              Data Buku Sinaras Kosong
            </h1>
            <p className="text-slate-500 font-sans text-sm leading-relaxed mb-6">
              Data belum ditemukan di Sanity CMS. Silakan masuk ke Sanity Studio dan buat serta
              publikasikan dokumen <strong>&ldquo;V. Buku Sinaras&rdquo;</strong> agar konten muncul
              di sini.
            </p>
          </div>
        </main>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-slate-800 bg-brand-cream/20 selection:bg-brand-yellow selection:text-slate-900 min-h-screen relative flex flex-col justify-between">
      <div className="absolute inset-0 kids-grid-bg pointer-events-none z-0" />

      <NavbarSection />

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          <div className="lg:col-span-5 flex flex-col justify-center items-center relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 text-brand-pink opacity-30 animate-float-slow">
              <Heart className="w-full h-full fill-brand-pink" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-10 h-10 text-brand-yellow opacity-30 animate-float-medium">
              <Star className="w-full h-full fill-brand-yellow" />
            </div>

            {data.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 2 }}
                transition={{ type: 'spring', damping: 12 }}
                className="w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-3xl border-4 border-slate-800 p-3.5 shadow-[8px_8px_0px_0px_#1e293b] relative z-10 wobble-hover cursor-pointer"
              >
                <Image
                  src={urlFor(data.image).width(600).auto('format').quality(80).url()}
                  alt={data.alt || 'Buku Cerita Sinaras'}
                  width={500}
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover border-2 border-slate-100"
                  priority={true}
                  unoptimized
                />
                {data.badgeText && (
                  <span className="absolute -top-3.5 -right-3.5 bg-brand-purple border-3 border-slate-800 text-white font-display font-black text-[10px] sm:text-xs px-3 py-1.5 rounded-2xl uppercase tracking-widest shadow-md">
                    {data.badgeText}
                  </span>
                )}
              </motion.div>
            )}
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-display font-semibold text-xs md:text-sm mb-4 w-fit">
              <BookOpen className="w-4 h-4" /> Panduan Membaca Bersama
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-none mb-4">
              V. {data.title}
            </h1>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-brand-pink mb-6">
              1. {data.subTitle}
            </h2>

            <div className="bg-white border-3 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#1e293b] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full pointer-events-none" />
              <div className="prose prose-slate max-w-none font-sans text-sm md:text-base leading-relaxed md:leading-loose text-slate-600">
                <PortableText value={data.body} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
