'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Megaphone,
  BookOpen,
  Sparkles,
  Search,
  Calendar,
  X,
  ArrowRight,
  Mail,
  Check,
} from 'lucide-react';
import { NEWS_DATA, NewsItem } from '@/constant/news.constant';
import NavbarSection from '@/components/NavbarSection';
import FooterSection from '@/components/FooterSection';

const iconMap = {
  megaphone: Megaphone,
  bookOpen: BookOpen,
  sparkles: Sparkles,
};

const categoryColors = {
  Pengumuman: 'bg-brand-purple/10 border-brand-purple/30 text-brand-purple',
  Edukasi: 'bg-brand-pink/10 border-brand-pink/30 text-brand-pink',
  Aktivitas: 'bg-brand-blue/10 border-brand-blue/30 text-brand-blue',
};

const cardBgColors = {
  Pengumuman: 'bg-brand-purple/5',
  Edukasi: 'bg-brand-pink/5',
  Aktivitas: 'bg-brand-blue/5',
};

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    'Semua' | 'Pengumuman' | 'Edukasi' | 'Aktivitas'
  >('Semua');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredNews = NEWS_DATA.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="font-sans antialiased text-slate-800 bg-brand-cream/20 selection:bg-brand-yellow selection:text-slate-900 min-h-screen flex flex-col justify-between">
      <div className="absolute inset-0 kids-grid-bg pointer-events-none z-0" />

      <NavbarSection />

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex-grow w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-display font-semibold text-xs md:text-sm mb-4">
            <Sparkles className="w-4 h-4" /> Informasi & Edukasi
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-none mb-4">
            Kabar Sinaras
          </h1>
          <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
            Ikuti informasi terbaru seputar tumbuh kembang, riset neurodiversitas, tips edukasi
            anak, dan aktivitas menyenangkan dari Sinaras.
          </p>
        </div>

        <div className="bg-white border-3 border-slate-800 rounded-3xl p-6 shadow-[5px_5px_0px_0px_#1e293b] mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:max-w-xs">
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border-2 border-slate-800 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-slate-800 shadow-[2px_2px_0px_0px_#1e293b] transition-all"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          </div>

          <div className="flex flex-wrap gap-2 items-center justify-center w-full md:w-auto">
            {(['Semua', 'Pengumuman', 'Edukasi', 'Aktivitas'] as const).map((cat) => (
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
        </div>

        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredNews.map((item) => {
              const IconComp = iconMap[item.iconName] || BookOpen;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border-3 border-slate-800 rounded-3xl overflow-hidden shadow-[5px_5px_0px_0px_#1e293b] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#1e293b] transition-all flex flex-col h-full cursor-pointer"
                  onClick={() => setSelectedNews(item)}
                >
                  <div
                    className={`py-12 flex items-center justify-center border-b-3 border-slate-800 relative overflow-hidden ${cardBgColors[item.category]}`}
                  >
                    <div className="absolute inset-0 opacity-5 kids-grid-bg" />
                    <IconComp className="w-16 h-16 text-slate-700 relative z-10" />
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow text-left">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-display font-semibold uppercase tracking-wider ${categoryColors[item.category]}`}
                        >
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-slate-400 font-sans">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-slate-800 leading-tight mb-2 hover:text-brand-purple transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 font-sans text-xs md:text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-brand-purple hover:text-white border-2 border-slate-800 shadow-[3px_3px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all font-display font-bold text-xs flex items-center justify-center gap-1 cursor-pointer text-slate-700"
                    >
                      Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border-3 border-slate-800 rounded-3xl shadow-[5px_5px_0px_0px_#1e293b] max-w-lg mx-auto mb-20 px-6">
            <p className="text-slate-500 font-display font-bold text-lg mb-2">
              Berita Tidak Ditemukan
            </p>
            <p className="text-slate-400 font-sans text-sm">
              Coba cari dengan kata kunci lain atau pilih kategori berbeda.
            </p>
          </div>
        )}
      </main>

      <FooterSection />

      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white border-4 border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-[8px_8px_0px_0px_#1e293b] relative z-10 max-h-[85vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 z-20 p-2 border-2 border-slate-800 rounded-xl hover:bg-brand-purple hover:text-white shadow-[2px_2px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="overflow-y-auto p-6 md:p-8 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-display font-semibold uppercase tracking-wider ${categoryColors[selectedNews.category]}`}
                  >
                    {selectedNews.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-sans">
                    <Calendar className="w-3.5 h-3.5" /> {selectedNews.date}
                  </span>
                </div>

                <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-800 leading-tight mb-4">
                  {selectedNews.title}
                </h2>

                <hr className="border-t-2 border-dashed border-slate-200 mb-6" />

                <div className="font-sans text-sm md:text-base text-slate-600 leading-relaxed md:leading-loose space-y-4">
                  <p className="font-bold text-slate-700">{selectedNews.description}</p>
                  <p>{selectedNews.body}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t-2 border-slate-200 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2 rounded-xl bg-slate-50 hover:bg-brand-purple hover:text-white border-2 border-slate-800 shadow-[2px_2px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all font-display font-bold text-xs cursor-pointer"
                >
                  Tutup Berita
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
