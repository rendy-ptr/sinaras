'use client';

import { motion } from 'motion/react';
import {
  Eye,
  HelpCircle,
  RotateCcw,
  ThumbsUp,
  Compass,
  CheckCircle2,
  Sparkles,
  Star,
  Sparkle,
} from 'lucide-react';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';
import NavbarSection from '@/components/NavbarSection';

const STRATEGIES = [
  {
    title: 'Gunakan Media Visual',
    desc: 'Gambar, kartu bergambar, ilustrasi, dan buku cerita dapat membantu anak memahami materi dengan lebih mudah.',
    icon: Eye,
    color: 'bg-brand-pink/10 border-brand-pink text-brand-pink',
  },
  {
    title: 'Berikan Instruksi Sederhana',
    desc: 'Gunakan kalimat pendek dan jelas. Berikan satu instruksi dalam satu waktu agar anak tidak bingung.',
    icon: HelpCircle,
    color: 'bg-brand-blue/10 border-brand-blue text-brand-blue',
  },
  {
    title: 'Lakukan Pengulangan',
    desc: 'Pengulangan membantu anak mengingat informasi dan membangun pemahaman yang lebih kuat.',
    icon: RotateCcw,
    color: 'bg-brand-purple/10 border-brand-purple text-brand-purple',
  },
  {
    title: 'Berikan Penguatan Positif',
    desc: 'Pujian dan apresiasi dapat meningkatkan motivasi belajar serta kepercayaan diri anak.',
    icon: ThumbsUp,
    color: 'bg-brand-yellow/20 border-brand-yellow/80 text-amber-600',
  },
  {
    title: 'Hubungkan dengan Kehidupan Sehari-hari',
    desc: 'Materi yang dekat dengan pengalaman anak akan lebih mudah dipahami dan diingat.',
    icon: Compass,
    color: 'bg-brand-mint/15 border-brand-mint text-emerald-600',
  },
];

const USE_CASES = [
  {
    title: 'Media Pembelajaran ADL',
    desc: 'Media pembelajaran keterampilan hidup sehari-hari (Activities of Daily Living).',
  },
  {
    title: 'Sarana Komunikasi & Interaksi Sosial',
    desc: 'Melatih kemampuan berkomunikasi secara efektif dan interaksi sosial dengan lingkungan.',
  },
  {
    title: 'Media Membaca Sederhana',
    desc: 'Sebagai alat bantu membaca tingkat awal yang ramah dan adaptif untuk anak.',
  },
  {
    title: 'Bahan Diskusi & Refleksi',
    desc: 'Bahan pemantik obrolan dan refleksi nilai budi pekerti bersama anak.',
  },
  {
    title: 'Aktivitas Belajar Interaktif',
    desc: 'Menciptakan ruang belajar aktif yang menyenangkan dan dinamis.',
  },
];

export default function ZonaPendampingPage() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-brand-cream/20 selection:bg-brand-yellow selection:text-slate-900 min-h-screen relative flex flex-col justify-between">
      <div className="absolute inset-0 kids-grid-bg pointer-events-none z-0" />

      <NavbarSection />

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-display font-semibold text-xs md:text-sm mb-4 w-fit">
              <Sparkles className="w-4 h-4" /> Zona Pendidik & Pendamping
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-none mb-4">
              III. Zona Pendamping
            </h1>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-brand-pink mb-6">
              1. Memahami Cara Belajar Anak dengan Down Syndrome
            </h2>

            <div className="bg-white border-3 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#1e293b] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/5 rounded-bl-full pointer-events-none" />
              <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed md:leading-loose">
                Anak dengan Down Syndrome memiliki gaya belajar yang unik. Mereka umumnya lebih
                mudah memahami informasi yang disajikan secara <strong>visual dan konkret</strong>{' '}
                dibandingkan penjelasan yang abstrak.
                <br />
                <br />
                Guru dan pendamping perlu memberikan instruksi yang jelas, singkat, dan dilakukan
                secara bertahap agar anak dapat mengikuti pembelajaran dengan baik.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-center relative">
            <div className="absolute -top-6 -right-6 w-12 h-12 text-brand-yellow opacity-30 animate-float-slow">
              <Star className="w-full h-full text-brand-yellow fill-brand-yellow" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ type: 'spring', damping: 12 }}
              className="w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-3xl border-4 border-slate-800 p-3.5 shadow-[8px_8px_0px_0px_#1e293b] relative z-10 wobble-hover cursor-pointer"
            >
              <Image
                src="/image3.jpg"
                alt="Guru mendampingi anak Down Syndrome"
                width={500}
                height={500}
                className="rounded-2xl w-full h-auto object-cover border-2 border-slate-100"
              />
              <span className="absolute -top-3.5 -left-3.5 bg-brand-mint border-3 border-slate-800 text-slate-800 font-display font-bold text-[10px] sm:text-xs px-3.5 py-1.5 rounded-2xl uppercase tracking-wider shadow-md">
                Zona Pendamping
              </span>
            </motion.div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800 tracking-tight">
              2. Strategi Pembelajaran yang Disarankan
            </h3>
            <p className="text-slate-500 font-sans text-xs md:text-sm mt-2">
              Terapkan metode taktis berikut dalam mendesain materi ajar di kelas atau sesi
              bimbingan khusus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {STRATEGIES.map((strategy, idx) => {
              const Icon = strategy.icon;
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
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-slate-800 mb-6 ${strategy.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-slate-800 text-base md:text-lg mb-3">
                      {strategy.title}
                    </h4>
                    <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed mb-6">
                      {strategy.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-brand-purple font-display font-semibold">
                    <Sparkle className="w-3.5 h-3.5 fill-brand-purple" /> Rekomendasi Pendidik
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="text-[10px] uppercase font-display font-bold px-3 py-1 rounded-full bg-brand-pink/15 text-brand-pink tracking-wider w-fit mb-4">
              Penerapan di Kelas & Rumah
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800 tracking-tight">
              3. Pemanfaatan Buku Cerita Sinaras
            </h3>
            <p className="text-slate-500 font-sans text-xs md:text-sm mt-3 leading-relaxed">
              Guru dan pendamping dapat menggunakan Buku Cerita Sinaras sebagai media pembelajaran
              keterampilan hidup sehari-hari, sarana komunikasi, media membaca sederhana, bahan
              diskusi, serta aktivitas belajar yang interaktif.
            </p>
            <div className="mt-6 p-4 bg-brand-yellow/10 border-2 border-dashed border-brand-yellow/60 rounded-2xl text-xs text-slate-600 font-sans leading-relaxed">
              Dengan pendampingan yang tepat, Buku Cerita Sinaras dapat menjadi alat bantu yang
              mendukung proses pembelajaran secara efektif.
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border-3 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_0px_#1e293b] flex flex-col justify-center text-left">
            <div className="space-y-4">
              {USE_CASES.map((useCase, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start p-3 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-mint flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm md:text-base">
                      {useCase.title}
                    </h4>
                    <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed mt-0.5">
                      {useCase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
