'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Maximize2 } from 'lucide-react';
import { PRODUCT_TAB } from '@/constant/product.constant';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<string>('book-front');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const currentTab = PRODUCT_TAB.find((t) => t.id === activeTab) || PRODUCT_TAB[0];

  return (
    <section
      id="product-showcase"
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple font-display font-medium text-sm inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-4 h-4 animate-spin-slow" /> Media Terapetik Inklusif
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-800 tracking-tight leading-tight mb-4">
            Eksplorasi Seri <span className="text-brand-pink">Cerita Si Manis</span>
          </h2>
          <p className="text-slate-600 font-sans text-base md:text-lg">
            Satu paket media stimulasi teringtegrasi untuk melatih keterampilan spasial, sensorik
            motorik, dan kemandirian harian bagi putra-putri tercinta.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {PRODUCT_TAB.map((tab) => {
            const isSelected = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsZoomed(false);
                }}
                className={`flex items-center gap-2.5 px-5 py-3 md:px-7 md:py-4 rounded-2xl border-2 font-display font-bold text-sm md:text-base transition-all ${
                  isSelected
                    ? 'bg-slate-800 text-white border-slate-800 shadow-[4px_4px_0px_0px_rgba(254,215,102,1)]'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span
                  className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-slate-200/50'} flex items-center justify-center`}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <div className="text-left">
                  <span className="block text-[10px] leading-none opacity-60 uppercase font-medium">
                    {tab.subtitle}
                  </span>
                  <span className="block leading-tight font-bold">{tab.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center bg-brand-cream/40 border-3 border-dashed border-slate-300 rounded-3xl p-6 md:p-10"
          >
            <div className="lg:col-span-5 flex flex-col justify-center items-center relative">
              <span
                className={`absolute top-4 left-4 z-20 px-3.5 py-1 rounded-full border-2 text-xs font-display font-semibold shadow-md ${currentTab.badgeColor}`}
              >
                {currentTab.badge}
              </span>

              <div
                className="relative group cursor-pointer bg-white rounded-3xl border-3 border-slate-700 shadow-[6px_6px_0px_0px_#1e293b] p-4 overflow-hidden max-w-sm w-full"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <div className="absolute inset-0 bg-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <motion.img
                  src={currentTab.imageSrc}
                  alt={currentTab.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-102 transition-transform duration-300"
                  animate={{ scale: isZoomed ? 1.25 : 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                />

                <div className="absolute right-4 bottom-4 w-9 h-9 bg-slate-800/80 text-white flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-0">
              <span className="text-brand-pink font-display font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-brand-pink" /> Solusi Hebat Anak Mandiri
              </span>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800 mb-4 leading-tight">
                {currentTab.tagline}
              </h3>

              <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed mb-6">
                {currentTab.description}
              </p>

              <div className="space-y-4">
                {currentTab.benefits.map((benefit, bIdx) => (
                  <motion.div
                    key={bIdx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: bIdx * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-brand-yellow/60 hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-brand-purple">0{bIdx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-800 text-sm md:text-base mb-0.5">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-500 font-sans text-xs md:text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
