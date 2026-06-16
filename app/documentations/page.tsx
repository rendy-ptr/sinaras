'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Calendar, X, Maximize2, Download } from 'lucide-react';
import NavbarSection from '@/components/NavbarSection';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import { formatDate } from '@/utils/date';
import { DOCUMENTATIONS_DATA, DocumentationItem } from '@/constant/documentations.constant';

export default function DocumentationsPage() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentationItem | null>(null);

  return (
    <div className="font-sans antialiased text-slate-800 bg-[#F5F5F0] selection:bg-brand-yellow selection:text-slate-900 min-h-screen relative flex flex-col justify-between">
      <div className="absolute inset-0 kids-grid-bg pointer-events-none z-0" />

      <NavbarSection />

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex-grow w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 relative">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-display font-semibold text-xs md:text-sm mb-4 w-fit">
            <Camera className="w-4 h-4" /> Galeri Dokumentasi Sinaras
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-none mb-4">
            Dokumentasi Kegiatan
          </h1>
          <p className="text-slate-500 font-sans text-sm md:text-base leading-relaxed">
            Kumpulan momen penting, evaluasi, dan peluncuran media adaptif untuk anak-anak hebat.
          </p>
        </div>

        {DOCUMENTATIONS_DATA.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {DOCUMENTATIONS_DATA.map((doc, idx) => (
              <motion.div
                key={doc._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedDoc(doc)}
                className="group flex flex-col bg-white border-3 border-slate-800 rounded-3xl overflow-hidden shadow-[5px_5px_0px_0px_#1e293b] cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#1e293b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-200"
              >
                <div className="aspect-video relative overflow-hidden bg-slate-100 border-b-3 border-slate-800">
                  {doc.image ? (
                    <Image
                      src={doc.image}
                      alt={doc.title}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Camera className="w-12 h-12 text-slate-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 bg-white border-2 border-slate-800 hover:bg-brand-purple hover:text-white rounded-2xl shadow-[3px_3px_0px_0px_#1e293b] flex items-center justify-center text-slate-800 transition-all">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="flex items-center gap-1 text-[10px] text-slate-400 font-sans">
                        <Calendar className="w-3.5 h-3.5" /> {formatDate(doc.publishedAt)}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-800 leading-tight mb-2 group-hover:text-brand-purple transition-colors">
                      {doc.title}
                    </h3>
                    {doc.body && (
                      <div className="text-slate-500 font-sans text-xs leading-relaxed line-clamp-2">
                        {Array.isArray(doc.body) ? doc.body.join(' ') : doc.body}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border-3 border-slate-800 rounded-3xl shadow-[5px_5px_0px_0px_#1e293b] max-w-lg mx-auto mb-20 px-6">
            <p className="text-slate-500 font-display font-bold text-lg mb-2">
              Dokumentasi Tidak Ditemukan
            </p>
            <p className="text-slate-400 font-sans text-sm">Coba cari dengan kata kunci lain.</p>
          </div>
        )}
      </main>

      <FooterSection />

      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoc(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white border-4 border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-[8px_8px_0px_0px_#1e293b] relative z-10 max-h-[85vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedDoc(null)}
                className="absolute top-4 right-4 z-20 p-2 border-2 border-slate-800 bg-slate-50 rounded-xl hover:bg-brand-purple hover:text-white shadow-[2px_2px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="aspect-video relative overflow-hidden bg-slate-100 border-b-3 border-slate-800">
                {selectedDoc.image ? (
                  <Image
                    src={selectedDoc.image}
                    alt={selectedDoc.title}
                    fill
                    className="object-cover"
                    unoptimized
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Camera className="w-16 h-16 text-slate-300" />
                  </div>
                )}
              </div>

              <div className="overflow-y-auto p-6 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-sans">
                    <Calendar className="w-3.5 h-3.5" /> {formatDate(selectedDoc.publishedAt)}
                  </span>
                </div>

                <h2 className="font-display font-bold text-xl md:text-2xl text-slate-800 leading-tight mb-3">
                  {selectedDoc.title}
                </h2>

                {selectedDoc.body && (
                  <div className="prose prose-slate max-w-none font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                    {Array.isArray(selectedDoc.body) ? (
                      selectedDoc.body.map((paragraph: string, idx: number) => (
                        <p
                          key={idx}
                          className={idx > 0 ? 'mt-4' : ''}
                        >
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p>{selectedDoc.body}</p>
                    )}
                  </div>
                )}
              </div>

              <div className="p-4 bg-slate-50 border-t-2 border-slate-200 flex justify-end items-center gap-2">
                {selectedDoc.image && (
                  <a
                    href={`${selectedDoc.image}?dl=sinaras-dokumentasi-${selectedDoc._id}.jpg`}
                    className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-brand-purple hover:text-white border-2 border-slate-800 shadow-[2px_2px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all font-display font-bold text-xs cursor-pointer flex items-center justify-center"
                  >
                    <Download className="w-4.5 h-4.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedDoc(null)}
                  className="px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 border-2 border-slate-800 shadow-[2px_2px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all font-display font-bold text-xs cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
