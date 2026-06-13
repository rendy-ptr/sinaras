'use client';

import { motion } from 'motion/react';
import { BookOpen, Heart, Star } from 'lucide-react';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';
import NavbarSection from '@/components/NavbarSection';
export default function BukuSinarasPage() {
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

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ type: 'spring', damping: 12 }}
              className="w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-3xl border-4 border-slate-800 p-3.5 shadow-[8px_8px_0px_0px_#1e293b] relative z-10 wobble-hover cursor-pointer"
            >
              <Image
                src="/image1.jpg"
                alt="Buku Cerita Sinaras"
                width={500}
                height={500}
                className="rounded-2xl w-full h-auto object-cover border-2 border-slate-100"
              />
              <span className="absolute -top-3.5 -right-3.5 bg-brand-purple border-3 border-slate-800 text-white font-display font-black text-[10px] sm:text-xs px-3 py-1.5 rounded-2xl uppercase tracking-widest shadow-md">
                Metode Inovatif
              </span>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-display font-semibold text-xs md:text-sm mb-4 w-fit">
              <BookOpen className="w-4 h-4" /> Panduan Membaca Bersama
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-none mb-4">
              V. Buku SINARAS
            </h1>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-brand-pink mb-6">
              Memanfaatkan Buku Cerita Sinaras di Rumah
            </h2>

            <div className="bg-white border-3 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#1e293b] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full pointer-events-none" />
              <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed md:leading-loose">
                Orang tua dapat menggunakan Buku Cerita Sinaras sebagai kegiatan membaca bersama.
                Ajak anak mengamati gambar, menjawab pertanyaan sederhana, dan menghubungkan cerita
                dengan pengalaman sehari-hari.
              </p>
              <br />
              <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed md:leading-loose">
                Melalui kegiatan ini, anak dapat mengembangkan kemampuan komunikasi, pemahaman
                cerita, keterampilan sosial, serta keterampilan hidup sehari-hari dalam suasana yang
                hangat dan menyenangkan.
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
