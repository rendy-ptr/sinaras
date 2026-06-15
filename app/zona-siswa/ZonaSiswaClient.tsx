'use client';

import { motion } from 'motion/react';
import { Sparkles, Star, Smile, Sparkle } from 'lucide-react';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';
import NavbarSection from '@/components/NavbarSection';
import { PortableText, type PortableTextBlock } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
import type { SanityImageSource } from '@sanity/image-url';
import { BookOpen, Puzzle, Palette, Music } from 'lucide-react';

export interface ZonaSiswaActivity {
  title: string;
  description: string;
  iconName: string;
  colorTheme: string;
}

export interface ZonaSiswaData {
  _id: string;
  title: string;
  subTitle: string;
  body: PortableTextBlock[];
  image: SanityImageSource;
  badgeText?: string;
  alt?: string;
  activitiesTitle: string;
  activitiesSubtitle?: string;
  activities?: ZonaSiswaActivity[];
}

interface Props {
  data: ZonaSiswaData | null;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Puzzle,
  Palette,
  Music,
  Smile,
  Star,
  Sparkles,
};

const COLOR_MAP: Record<string, string> = {
  pink: 'bg-brand-pink/10 border-brand-pink text-brand-pink',
  blue: 'bg-brand-blue/10 border-brand-blue text-brand-blue',
  purple: 'bg-brand-purple/10 border-brand-purple text-brand-purple',
  yellow: 'bg-brand-yellow/20 border-brand-yellow/80 text-amber-600',
  mint: 'bg-brand-mint/15 border-brand-mint text-emerald-600',
};

export default function ZonaSiswaClient({ data }: Props) {
  if (!data) {
    return (
      <div className="font-sans antialiased text-slate-800 bg-brand-cream/20 selection:bg-brand-yellow selection:text-slate-900 min-h-screen relative flex flex-col justify-between">
        <div className="absolute inset-0 kids-grid-bg pointer-events-none z-0" />
        <NavbarSection />
        <main className="relative z-10 max-w-6xl mx-auto px-4 py-32 flex-grow flex items-center justify-center w-full">
          <div className="bg-white border-4 border-slate-800 rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#1e293b] text-center max-w-lg">
            <h1 className="text-2xl font-display font-bold text-slate-800 mb-2">
              Data &ldquo;Zona Siswa&rdquo; Kosong
            </h1>
            <p className="text-slate-500 font-sans text-sm leading-relaxed mb-6">
              Data belum ditemukan di Sanity CMS. Silakan masuk ke Sanity Studio dan buat serta
              publikasikan dokumen <strong>&ldquo;II. Zona Siswa&rdquo;</strong> agar konten muncul
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-display font-semibold text-xs md:text-sm mb-4 w-fit">
              <Sparkles className="w-4 h-4" /> Ruang Belajar & Bermain Siswa
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-none mb-4">
              II. {data.title}
            </h1>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-brand-pink mb-6">
              1. {data.subTitle}
            </h2>

            <div className="bg-white border-3 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#1e293b] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/5 rounded-bl-full pointer-events-none" />
              <div className="prose prose-slate max-w-none font-sans text-sm md:text-base leading-relaxed md:leading-loose text-slate-600">
                <PortableText value={data.body} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-center relative">
            <div className="absolute -top-6 -right-6 w-12 h-12 text-brand-yellow opacity-30 animate-float-slow">
              <Star className="w-full h-full text-brand-yellow fill-brand-yellow" />
            </div>
            {data.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ type: 'spring', damping: 12 }}
                className="w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-3xl border-4 border-slate-800 p-3.5 shadow-[8px_8px_0px_0px_#1e293b] relative z-10 wobble-hover cursor-pointer"
              >
                <Image
                  src={urlFor(data.image).width(600).auto('format').quality(80).url()}
                  alt={data.alt || 'Gambar Zona Siswa'}
                  width={500}
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover border-2 border-slate-100"
                  priority={true}
                  unoptimized
                />
                {data.badgeText && (
                  <span className="absolute -top-3.5 -left-3.5 bg-brand-mint border-3 border-slate-800 text-slate-800 font-display font-bold text-[10px] sm:text-xs px-3.5 py-1.5 rounded-2xl uppercase tracking-wider shadow-md">
                    {data.badgeText}
                  </span>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {data.activities && data.activities.length > 0 && (
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800 tracking-tight">
                2. {data.activitiesTitle}
              </h3>
              {data.activitiesSubtitle && (
                <p className="text-slate-500 font-sans text-xs md:text-sm mt-2">
                  {data.activitiesSubtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {data.activities.map((activity, idx) => {
                const Icon = ICON_MAP[activity.iconName] || Smile;
                const colorClass = COLOR_MAP[activity.colorTheme] || COLOR_MAP.pink;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-white border-3 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#1e293b] flex flex-col text-left justify-between"
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-slate-800 mb-6 ${colorClass}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-display font-bold text-slate-800 text-base md:text-lg mb-3">
                        {activity.title}
                      </h4>
                      <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed mb-6">
                        {activity.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-brand-purple font-display font-semibold">
                      <Sparkle className="w-3.5 h-3.5 fill-brand-purple" /> Aktivitas Siswa
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
}
