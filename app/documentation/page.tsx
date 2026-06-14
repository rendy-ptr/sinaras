'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Calendar, X, Maximize2, Download } from 'lucide-react';
import NavbarSection from '@/components/NavbarSection';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';

interface DocPhoto {
  id: number;
  title: string;
  description: string;
  category: 'Aktivitas Belajar' | 'Terapi Taktil' | 'Kegiatan Sosial' | 'Workshop';
  date: string;
  imageUrl: string;
}

const DOCUMENTATION_DATA: DocPhoto[] = [
  {
    id: 1,
    title: 'Pelatihan Sensory Play Guru PAUD',
    description:
      'Guru-guru PAUD inklusif mengikuti simulasi teknik stimulasi taktil menggunakan media boardbook Sinaras.',
    category: 'Workshop',
    date: '18 Mei 2026',
    imageUrl:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Terapi Motorik Mandiri dengan Koper Kayu',
    description:
      'Anak istimewa melatih grasping skill dengan menggenggam gagang kayu koper eksklusif Sinaras.',
    category: 'Terapi Taktil',
    date: '10 Mei 2026',
    imageUrl:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Aktivitas Membaca Nyaring (Read Aloud)',
    description:
      'Orang tua mendampingi anak mengeksplorasi orientasi spasial atas-bawah melalui petualangan Si Manis.',
    category: 'Aktivitas Belajar',
    date: '28 April 2026',
    imageUrl:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Sosialisasi Media Inklusif di SLB Sleman',
    description:
      'Tim Sinaras berdiskusi bersama praktisi terapis mengenai perkembangan anak Down Syndrome.',
    category: 'Kegiatan Sosial',
    date: '15 April 2026',
    imageUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Latihan Fokus Koordinasi Mata & Tangan',
    description:
      'Anak belajar mencocokkan bentuk geometri dengan panduan visual warna kontras tinggi.',
    category: 'Terapi Taktil',
    date: '02 April 2026',
    imageUrl:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Kelas Kreasi & Gambar Kolaboratif',
    description: 'Anak-anak mengekspresikan imajinasinya secara bebas di atas media taktil tebal.',
    category: 'Aktivitas Belajar',
    date: '20 Maret 2026',
    imageUrl:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
  },
];

const categoryColors = {
  'Aktivitas Belajar': 'bg-brand-purple/10 border-brand-purple/30 text-brand-purple',
  'Terapi Taktil': 'bg-brand-pink/10 border-brand-pink/30 text-brand-pink',
  'Kegiatan Sosial': 'bg-brand-blue/10 border-brand-blue/30 text-brand-blue',
  Workshop: 'bg-brand-yellow/20 border-brand-yellow/40 text-slate-800',
};

export default function DocumentationPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    'Semua' | 'Aktivitas Belajar' | 'Terapi Taktil' | 'Kegiatan Sosial' | 'Workshop'
  >('Semua');
  const [activePhoto, setActivePhoto] = useState<DocPhoto | null>(null);

  const filteredPhotos = DOCUMENTATION_DATA.filter((photo) => {
    return selectedCategory === 'Semua' || photo.category === selectedCategory;
  });

  return (
    <div className="font-sans antialiased text-slate-800 bg-brand-cream/20 selection:bg-brand-yellow selection:text-slate-900 min-h-screen flex flex-col justify-between">
      <div className="absolute inset-0 kids-grid-bg pointer-events-none z-0" />

      <NavbarSection />

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex-grow w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink font-display font-semibold text-xs md:text-sm mb-4">
            <Camera className="w-4 h-4" /> Album Dokumentasi
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-none mb-4">
            Momen Inspiratif
          </h1>
          <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
            Melihat lebih dekat keceriaan, semangat belajar mandiri, serta kolaborasi hangat orang
            tua dan guru dalam mendampingi tumbuh kembang putra-putri tercinta bersama Sinaras.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 items-center justify-center mb-12">
          {(
            ['Semua', 'Aktivitas Belajar', 'Terapi Taktil', 'Kegiatan Sosial', 'Workshop'] as const
          ).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl font-display font-bold text-xs md:text-sm border-2 border-slate-800 shadow-[2.5px_2.5px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-yellow text-slate-800'
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-3 border-slate-800 rounded-3xl overflow-hidden shadow-[5px_5px_0px_0px_#1e293b] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#1e293b] transition-all flex flex-col h-full group cursor-pointer"
              onClick={() => setActivePhoto(photo)}
            >
              <div className="aspect-video relative overflow-hidden border-b-3 border-slate-800 bg-slate-100">
                <Image
                  src={photo.imageUrl}
                  alt={photo.title}
                  width={500}
                  height={281}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="p-3 bg-white border-2 border-slate-800 hover:bg-brand-purple hover:text-white rounded-2xl shadow-[3px_3px_0px_0px_#1e293b] flex items-center justify-center text-slate-800 cursor-pointer">
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[9px] font-display font-semibold uppercase tracking-wider ${categoryColors[photo.category]}`}
                    >
                      {photo.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400 font-sans">
                      <Calendar className="w-3.5 h-3.5" /> {photo.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-800 leading-tight mb-2 group-hover:text-brand-purple transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-slate-500 font-sans text-xs leading-relaxed line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <FooterSection />

      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhoto(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white border-4 border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-[8px_8px_0px_0px_#1e293b] relative z-10 max-h-[85vh] flex flex-col"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 border-2 border-slate-800 bg-slate-50 rounded-xl hover:bg-brand-purple hover:text-white shadow-[2px_2px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="aspect-video relative overflow-hidden bg-slate-100 border-b-3 border-slate-800">
                <Image
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="overflow-y-auto p-6 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-display font-semibold uppercase tracking-wider ${categoryColors[activePhoto.category]}`}
                  >
                    {activePhoto.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-sans">
                    <Calendar className="w-3.5 h-3.5" /> {activePhoto.date}
                  </span>
                </div>

                <h2 className="font-display font-bold text-xl md:text-2xl text-slate-800 leading-tight mb-3">
                  {activePhoto.title}
                </h2>

                <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                  {activePhoto.description}
                </p>
              </div>

              <div className="p-4 bg-slate-50 border-t-2 border-slate-200 flex justify-end items-center gap-2">
                <button className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-brand-purple hover:text-white border-2 border-slate-800 shadow-[2px_2px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all font-display font-bold text-xs cursor-pointer">
                  <Download className="w-4.5 h-4.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="px-5 py-2 rounded-xl bg-slate-50 hover:bg-brand-purple hover:text-white border-2 border-slate-800 shadow-[2px_2px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all font-display font-bold text-xs cursor-pointer"
                >
                  Tutup Dokumentasi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
