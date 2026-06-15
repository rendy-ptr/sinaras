'use client';

import { motion } from 'motion/react';
import { Sparkles, Star, Award } from 'lucide-react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import FooterSection from '@/components/FooterSection';
import NavbarSection from '@/components/NavbarSection';
import type { PortableTextBlock } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
import type { SanityImageSource } from '@sanity/image-url';

export interface HalamanUtamaData {
  _id: string;
  title: string;
  subTitle1: string;
  body1: PortableTextBlock[];
  image1: SanityImageSource;
  badgeText1?: string;
  alt1?: string;
  subTitle2: string;
  body2: PortableTextBlock[];
  image2: SanityImageSource;
  badgeText2?: string;
  alt2?: string;
}

interface Props {
  data: HalamanUtamaData | null;
}

export default function HalamanUtamaClient({ data }: Props) {
  if (!data) {
    return (
      <div className="font-sans antialiased text-slate-800 bg-brand-cream/20 selection:bg-brand-yellow selection:text-slate-900 min-h-screen relative flex flex-col justify-between">
        <div className="absolute inset-0 kids-grid-bg pointer-events-none z-0" />
        <NavbarSection />
        <main className="relative z-10 max-w-6xl mx-auto px-4 py-32 flex-grow flex items-center justify-center w-full">
          <div className="bg-white border-4 border-slate-800 rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#1e293b] text-center max-w-lg">
            <h1 className="text-2xl font-display font-bold text-slate-800 mb-2">
              Data &ldquo;Halaman Utama&rdquo; Kosong
            </h1>
            <p className="text-slate-500 font-sans text-sm leading-relaxed mb-6">
              Data belum ditemukan di Sanity CMS. Silakan masuk ke Sanity Studio dan buat serta
              publikasikan dokumen <strong>&ldquo;I. Halaman Utama&rdquo;</strong> agar konten
              muncul di sini.
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24">
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink font-display font-semibold text-xs md:text-sm mb-4 w-fit">
              <Award className="w-4 h-4" /> Edukasi Dasar
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-none mb-4">
              I. {data.title}
            </h1>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-brand-purple mb-6">
              1. {data.subTitle1}
            </h2>

            <div className="bg-white border-3 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#1e293b] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-bl-full pointer-events-none" />
              {data.body1 && (
                <div className="prose prose-slate max-w-none font-sans text-sm md:text-base text-slate-600 leading-relaxed md:leading-loose">
                  <PortableText value={data.body1} />
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-center relative">
            <div className="absolute -top-6 -right-6 w-12 h-12 text-brand-yellow opacity-30 animate-float-slow">
              <Star className="w-full h-full text-brand-yellow fill-brand-yellow" />
            </div>
            {data.image1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ type: 'spring', damping: 12 }}
                className="w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-3xl border-4 border-slate-800 p-3.5 shadow-[8px_8px_0px_0px_#1e293b] relative z-10 wobble-hover cursor-pointer"
              >
                <Image
                  src={urlFor(data.image1).width(600).auto('format').quality(80).url()}
                  alt={data.alt1 || 'Gambar 1'}
                  width={500}
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover border-2 border-slate-100"
                  unoptimized
                  priority={true}
                />
                {data.badgeText1 && (
                  <span className="absolute -top-3.5 -left-3.5 bg-brand-yellow border-3 border-slate-800 text-slate-800 font-display font-bold text-[10px] sm:text-xs px-3.5 py-1.5 rounded-2xl uppercase tracking-wider shadow-md">
                    {data.badgeText1}
                  </span>
                )}
              </motion.div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24">
          <div className="lg:col-span-5 flex flex-col justify-center items-center relative order-2 lg:order-1">
            <div className="absolute -bottom-6 -left-6 w-12 h-12 text-brand-pink opacity-25 animate-float-medium">
              <Sparkles className="w-full h-full text-brand-pink fill-brand-pink" />
            </div>
            {data.image2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', damping: 12 }}
                className="w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-3xl border-4 border-slate-800 p-3.5 shadow-[8px_8px_0px_0px_#1e293b] relative z-10 wobble-hover cursor-pointer"
              >
                <Image
                  src={urlFor(data.image2).width(600).auto('format').quality(80).url()}
                  alt={data.alt2 || 'Gambar 2'}
                  width={500}
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover border-2 border-slate-100"
                  unoptimized
                />
                {data.badgeText2 && (
                  <span className="absolute -top-3.5 -right-3.5 bg-brand-pink border-3 border-slate-800 text-slate-800 font-display font-bold text-[10px] sm:text-xs px-3.5 py-1.5 rounded-2xl uppercase tracking-wider shadow-md">
                    {data.badgeText2}
                  </span>
                )}
              </motion.div>
            )}
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-display font-semibold text-xs md:text-sm mb-4 w-fit">
              <Sparkles className="w-4 h-4" /> Media Edukatif
            </span>

            <h2 className="text-xl sm:text-2xl font-display font-semibold text-brand-pink mb-6">
              2. {data.subTitle2}
            </h2>

            <div className="bg-white border-3 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#1e293b] relative overflow-hidden mb-6">
              {data.body2 && (
                <div className="prose prose-slate max-w-none font-sans text-sm md:text-base text-slate-600 leading-relaxed md:leading-loose">
                  <PortableText value={data.body2} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
