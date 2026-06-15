'use client';

import { motion } from 'motion/react';
import { Sparkles, Trophy, Star, Cloud } from 'lucide-react';
import Image from 'next/image';
import NavbarSection from '@/components/NavbarSection';
import { scrollToSection } from '@/utils/scrroll';

export default function HeroSection() {
  return (
    <header className="relative bg-brand-cream overflow-hidden">
      <div className="absolute inset-0 kids-grid-bg pointer-events-none" />

      <div
        className="absolute top-1/4 left-5 w-8 h-8 text-brand-pink opacity-40 animate-float-slow"
        style={{ animationDelay: '1s' }}
      >
        <Star className="w-full h-full fill-brand-pink" />
      </div>
      <div className="absolute top-1/3 right-10 w-12 h-12 text-brand-blue opacity-30 animate-float-medium">
        <Cloud className="w-full h-full fill-brand-blue" />
      </div>
      <div
        className="absolute bottom-10 left-12 w-10 h-10 text-brand-yellow opacity-40 animate-float-medium"
        style={{ animationDelay: '2s' }}
      >
        <Sparkles className="w-full h-full text-brand-yellow fill-brand-yellow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <NavbarSection />

        <div
          id="hero"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 pb-16 lg:py-20"
        >
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-display font-medium text-xs md:text-sm mb-6 w-fit"
            >
              <Trophy className="w-4 h-4 text-brand-yellow fill-brand-yellow animate-bounce" />{' '}
              Media Pembelajaran Spasial & Kemandirian Inklusif
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-slate-800 tracking-tight leading-none mb-6"
            >
              Kembangkan Keterampilan <br className="hidden sm:inline" />
              Spasial <br className="hidden sm:inline" />
              <span className="text-brand-pink relative inline-block">
                Anak Hebat!
                <span className="absolute left-0 bottom-[-4px] w-full h-[6px] bg-brand-yellow/60 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 font-sans text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Sinaras menghadirkan media pengembangan diri inovatif yang dirancang khusus untuk
              melatih{' '}
              <strong>
                keterampilan spasial, stimulasi kognitif motorik, serta kemandirian harian
              </strong>{' '}
              bagi anak istimewa penderita <strong>Down syndrome</strong> secara menyenangkan
              melalui paket koper edukatif interaktif.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 flex-wrap"
            >
              <button
                onClick={() => scrollToSection('order-cta')}
                className="px-8 py-4 bg-brand-yellow hover:bg-brand-yellow/90 text-slate-800 font-display font-extrabold text-lg rounded-2xl border-3 border-slate-800 shadow-[6px_6px_0px_0px_#1e293b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <a
                  href="https://wa.me/6285777005969?text=Halo%20Sinaras%20saya%20mau%20order%20Buku%20Cerita%20Si%20Manis"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pre-order Sekarang!
                </a>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-slate-200"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[
                    { text: 'BR', bg: 'bg-brand-pink text-white' },
                    { text: 'IL', bg: 'bg-brand-purple text-white' },
                    { text: 'BC', bg: 'bg-brand-blue text-white' },
                    { text: 'AD', bg: 'bg-brand-yellow text-slate-800' },
                  ].map((av, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-white ${av.bg} flex items-center justify-center text-[10px] font-display font-bold`}
                    >
                      {av.text}
                    </div>
                  ))}
                </div>
                <div className="ml-3">
                  <p className="text-xs text-slate-500 font-semibold">Direkomendasikan oleh</p>
                  <p className="text-sm font-display font-bold text-slate-800">
                    12,000+ Wali Murid & PAUD
                  </p>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-slate-200" />
              <div>
                <p className="text-xs text-slate-500 font-semibold">Tingkat Kepuasan</p>
                <div className="flex items-center gap-1 text-brand-yellow font-display font-bold text-sm">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-brand-yellow fill-brand-yellow"
                    />
                  ))}
                  <span className="text-slate-800 text-xs ml-1">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center mt-10 lg:mt-0">
            <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] bg-brand-blue/10 rounded-full blur-2xl pointer-events-none z-0" />
            <div className="absolute w-[240px] h-[240px] bg-brand-pink/15 rounded-full blur-2xl pointer-events-none z-0" />

            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] md:max-w-lg flex flex-col items-center py-6 md:py-10">
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: -15 }}
                transition={{ type: 'spring', damping: 20, delay: 0.2 }}
                className="absolute right-2 md:right-0 bottom-4 md:bottom-10 w-3/5 md:w-2/3 max-w-[160px] md:max-w-[280px] bg-white rounded-2xl border-3 border-slate-800 p-2 shadow-lg z-0 hover:z-30 transition-all duration-200 wobble-hover cursor-pointer"
              >
                <Image
                  src="/image3.jpg"
                  alt="Sinaras Carry Box"
                  referrerPolicy="no-referrer"
                  width={500}
                  height={300}
                  className="rounded-xl w-full h-auto object-cover"
                  loading="eager"
                />
                <span className="absolute -top-3 -right-3 bg-brand-blue border-2 border-slate-800 text-white font-display font-bold text-xs px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Koper Jinjing
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 6 }}
                transition={{ type: 'spring', damping: 15 }}
                className="w-3/5 md:w-4/5 max-w-[200px] md:max-w-[340px] bg-white rounded-3xl border-3 md:border-4 border-slate-800 p-2 md:p-3 shadow-2xl relative z-10 hover:z-30 transition-all duration-200 wobble-hover cursor-pointer"
              >
                <Image
                  src="/image1.jpg"
                  alt="Buku Cerita Si Manis"
                  referrerPolicy="no-referrer"
                  width={500}
                  height={300}
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="eager"
                />

                <span className="absolute -top-3 left-4 bg-brand-pink border-3 border-slate-800 text-white font-display font-black text-xs md:text-sm px-3.5 py-1.5 rounded-2xl uppercase tracking-widest shadow-md">
                  SERI UTAMA
                </span>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center border-3 border-slate-800 shadow-md">
                  <Star className="w-6 h-6 text-slate-800 fill-slate-800" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: -10, rotate: -2 }}
                animate={{ opacity: 1, x: -35, y: -25, rotate: -8 }}
                transition={{ type: 'spring', damping: 18, delay: 0.15 }}
                className="absolute left-2 md:left-[-20px] top-2 md:top-6 w-2/5 md:w-1/2 max-w-[125px] md:max-w-[220px] bg-white rounded-2xl border-3 border-slate-800 p-2 shadow-lg z-0 hover:z-30 transition-all duration-200 wobble-hover cursor-pointer"
              >
                <Image
                  src="/image2.jpg"
                  alt="Fitur Buku"
                  referrerPolicy="no-referrer"
                  width={500}
                  height={300}
                  className="rounded-xl w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
