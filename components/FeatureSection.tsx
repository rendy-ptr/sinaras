'use client';
import { motion } from 'motion/react';
import { FEATURE_DATA } from '@/constant/feature.constant';
import { Star, Circle } from 'lucide-react';

export default function FeatureSection() {
  return (
    <section
      id="feature-grid"
      className="relative py-24 bg-slate-50 overflow-hidden"
    >
      <div className="absolute top-10 left-12 w-10 h-10  text-brand-purple opacity-30 animate-float-medium">
        <Circle className="w-full h-full fill-brand-purple" />
      </div>

      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3.5 py-1.5 rounded-full bg-brand-yellow/10 text-amber-700 font-display font-medium text-xs md:text-sm inline-flex items-center gap-1.5 mb-4 border border-brand-yellow/30">
            <Star className="w-4 h-4 text-amber-500" />
            Mengapa Sinaras Sangat Istimewa?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-tight mb-4">
            Didesain Khusus untuk Melatih <br />
            <span className="text-brand-purple">Keterampilan Spasial</span> & Motorik Anak Hebat
          </h2>
          <p className="text-slate-600 font-sans text-base md:text-lg">
            Menggabungkan kesenangan bermain, stimulasi visual ceria, dan latihan motorik taktil
            fungsional untuk mendukung kemandirian anak dengan Down syndrome secara optimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURE_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`p-6 md:p-8 bg-white border-3 border-slate-700 rounded-3xl ${item.shadowColor} transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-slate-700 mb-6 ${item.color}`}
                >
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>

                <h3 className="text-lg md:text-xl font-display font-bold text-slate-800 mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 bg-white border-3 border-dashed border-slate-300 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🇮🇩</span>
            <div className="text-left">
              <h4 className="font-display font-bold text-slate-800 text-sm md:text-base">
                Mendukung Pendidikan Inklusif Lokal
              </h4>
              <p className="text-slate-500 font-sans text-xs md:text-sm">
                Buku & Box ini 100% diproduksi lokal untuk mendukung kemandirian anak berkebutuhan
                khusus Indonesia.
              </p>
            </div>
          </div>
          <div className="flex -space-x-3 flex-shrink-0">
            <span className="text-xs font-display font-extrabold text-white bg-brand-pink border-2 border-slate-800 rounded-xl px-3.5 py-1.5 rotate-[-2deg] shadow-sm">
              Character
            </span>
            <span className="text-xs font-display font-extrabold text-white bg-brand-purple border-2 border-slate-800 rounded-xl px-3.5 py-1.5 rotate-[4deg] shadow-sm">
              Culture
            </span>
            <span className="text-xs font-display font-extrabold text-white bg-brand-blue border-2 border-slate-800 rounded-xl px-3.5 py-1.5 rotate-[-1deg] shadow-sm">
              Creativity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
