'use client';
import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';
import { REVIEW_DATA } from '@/constant/review.constant';

export default function ReviewSection() {
  return (
    <section
      id="reviews"
      className="relative py-20 bg-white overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute top-10 right-10 w-10 h-10 text-brand-pink/20 animate-float-slow opacity-30">
        <Heart className="w-full h-full fill-brand-pink" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink font-display font-medium text-xs md:text-sm inline-flex items-center gap-1.5 mb-4">
            <Heart className="w-5 h-5 text-brand-pink" /> Kisah Hangat Para Orang Tua & Terapis
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-800 tracking-tight mb-4">
            Ulasan Tulus <span className="text-brand-pink">Keluarga Hebat</span>
          </h2>
          <p className="text-slate-600 font-sans text-base">
            Simak ulasan haru dan pengalaman nyata proses perkembangan kemandirian serta koordinasi
            spasial buah hati tercinta setelah didampingi terapis dan media Sinaras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEW_DATA.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 border-3 border-slate-700 rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_0px_#334155] relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-5 h-5 fill-current"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-300 transform rotate-180" />
                </div>

                <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed italic mb-8">
                  &ldquo;{r.comment}&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-base border-2 border-slate-700 ${r.avatarBg}`}
                  >
                    {r.avatarText}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm md:text-base leading-none">
                      {r.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      {r.role} &bull;{' '}
                      <strong className="text-slate-500 font-semibold">{r.location}</strong>
                    </p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-display font-bold px-2 py-1 rounded-md bg-slate-200/50 text-slate-500 tracking-wider">
                  {r.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
