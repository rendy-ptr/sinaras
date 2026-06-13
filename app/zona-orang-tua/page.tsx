'use client';

import { motion } from 'motion/react';
import {
  Heart,
  Star,
  Clock,
  Smile,
  MessageCircle,
  Trophy,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';
import NavbarSection from '@/components/NavbarSection';

const TIPS_PARENTING = [
  {
    id: 1,
    title: 'Bangun Rutinitas yang Konsisten',
    desc: 'Rutinitas membantu anak memahami kegiatan sehari-hari dan meningkatkan rasa aman.',
    icon: Clock,
    color: 'bg-brand-pink/10 border-brand-pink text-brand-pink',
    checklistText: 'Menerapkan rutinitas harian yang teratur',
  },
  {
    id: 2,
    title: 'Berikan Kesempatan untuk Mandiri',
    desc: 'Libatkan anak dalam aktivitas sederhana seperti merapikan mainan, memakai pakaian, atau membantu pekerjaan rumah sesuai kemampuannya.',
    icon: Smile,
    color: 'bg-brand-blue/10 border-brand-blue text-brand-blue',
    checklistText: 'Melatih kemandirian sederhana (merapikan mainan/pakaian)',
  },
  {
    id: 3,
    title: 'Gunakan Bahasa yang Sederhana',
    desc: 'Sampaikan instruksi secara jelas, singkat, dan mudah dipahami oleh anak.',
    icon: MessageCircle,
    color: 'bg-brand-purple/10 border-brand-purple text-brand-purple',
    checklistText: 'Memberikan instruksi dengan bahasa yang sederhana',
  },
  {
    id: 4,
    title: 'Berikan Apresiasi',
    desc: 'Hargai setiap usaha dan pencapaian anak, sekecil apa pun hasilnya, untuk memicu rasa percaya dirinya.',
    icon: Trophy,
    color: 'bg-brand-yellow/20 border-brand-yellow/80 text-amber-600',
    checklistText: 'Apresiasi usaha anak (pujian/tos/stiker)',
  },
  {
    id: 5,
    title: 'Luangkan Waktu Bermain & Belajar',
    desc: 'Aktivitas bersama dapat memperkuat hubungan antara orang tua dan anak sekaligus menjadi kesempatan belajar yang menyenangkan.',
    icon: Sparkles,
    color: 'bg-brand-mint/15 border-brand-mint text-emerald-600',
    checklistText: 'Bermain & belajar bersama dengan menyenangkan',
  },
];

export default function ZonaOrangTuaPage() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-brand-cream/20 selection:bg-brand-yellow selection:text-slate-900 min-h-screen relative flex flex-col justify-between">
      <div className="absolute inset-0 kids-grid-bg pointer-events-none z-0" />

      <NavbarSection />

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink font-display font-semibold text-xs md:text-sm mb-4 w-fit">
              <Heart className="w-4 h-4 text-brand-pink fill-brand-pink" /> Pendamping Utama Si
              Kecil
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-none mb-4">
              IV. Zona Orang Tua
            </h1>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-brand-purple mb-6">
              Peran Orang Tua dalam Tumbuh Kembang Anak
            </h2>

            <div className="bg-white border-3 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#1e293b] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-bl-full pointer-events-none" />
              <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed md:leading-loose">
                Orang tua merupakan pendamping utama dalam proses tumbuh kembang anak dengan Down
                Syndrome. Dukungan yang konsisten dan lingkungan yang positif dapat membantu anak
                mengembangkan kemampuan secara optimal.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-center relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 text-brand-blue opacity-30 animate-float-slow">
              <Sparkles className="w-full h-full text-brand-blue fill-brand-blue" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ type: 'spring', damping: 12 }}
              className="w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-3xl border-4 border-slate-800 p-3.5 shadow-[8px_8px_0px_0px_#1e293b] relative z-10 wobble-hover cursor-pointer"
            >
              <Image
                src="/image2.jpg"
                alt="Down Syndrome Support"
                width={500}
                height={500}
                className="rounded-2xl w-full h-auto object-cover border-2 border-slate-100"
              />
              <span className="absolute -top-3.5 -right-3.5 bg-brand-yellow border-3 border-slate-800 text-slate-800 font-display font-bold text-[10px] sm:text-xs px-3.5 py-1.5 rounded-2xl uppercase tracking-wider shadow-md">
                Zona Pendukung
              </span>
            </motion.div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800 tracking-tight">
              Tips Mendampingi Anak di Rumah
            </h3>
            <p className="text-slate-500 font-sans text-xs md:text-sm mt-2">
              Lakukan pendekatan bertahap, konsisten, dan penuh kegembiraan di lingkungan rumah
              Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TIPS_PARENTING.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white border-3 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#1e293b] flex flex-col text-left justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-slate-800 mb-6 ${tip.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-slate-800 text-base md:text-lg mb-3">
                      {tip.id}. {tip.title}
                    </h4>
                    <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed mb-6">
                      {tip.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-sans">
                    <span>Tips Keluarga</span>
                    <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
