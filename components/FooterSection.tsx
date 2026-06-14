'use client';

import { usePathname } from 'next/navigation';
import { Mail, Globe, ArrowUp } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { FOOTER_ITEMS } from '@/constant/footer.constant';
import { scrollToSection } from '@/utils/scrroll';
import Link from 'next/link';

export default function FooterSection() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-slate-300 py-16 border-t-4 border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 bg-brand-purple rounded-xl flex items-center justify-center border-2 border-white">
                <span className="text-white font-display font-black text-lg">S</span>
              </span>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-none">
                  SINARAS
                </span>
                <span className="font-sans text-[9px] text-slate-400 font-bold tracking-widest leading-none">
                  BOOK & EDUCATION
                </span>
              </div>
            </div>
            <p className="text-slate-400 font-sans text-xs md:text-sm leading-relaxed mb-6 max-w-sm">
              Sinaras berkomitmen menyuguhkan solusi edukasi inovatif bernilai luhur untuk membantu
              tumbuh kembang emosional, kemandirian, dan karakter mulia anak Nusantara usia dini.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/sinaras_bookeducation"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-700 hover:bg-brand-pink hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                title="Instagram @sinaras_bookeducation"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:halo@sinaras.id"
                className="w-10 h-10 rounded-xl bg-slate-700 hover:bg-brand-purple hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                title="Email Sinaras"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://sinaras.id"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-700 hover:bg-brand-blue hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                title="Web Utama"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 text-left">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Peta Petualangan
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              {FOOTER_ITEMS.map((link) => (
                <li key={link.targetId}>
                  {isHome ? (
                    <button
                      onClick={() => scrollToSection(link.targetId)}
                      className="hover:text-brand-yellow transition-colors font-sans cursor-pointer text-left bg-transparent border-0 p-0 text-slate-300 text-xs md:text-sm block w-full"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={`/#${link.targetId}`}
                      className="hover:text-brand-yellow transition-colors font-sans cursor-pointer text-left"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 text-left">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Rumah Sinaras
            </h4>
            <p className="text-slate-400 font-sans text-xs md:text-sm leading-relaxed mb-4">
              <strong>CV Sinaras Edukasi Nusantara</strong>
              <br />
              Yogyakarta, Daerah Istimewa Yogyakarta, Indonesia
            </p>
            <div className="text-xs text-slate-500 font-sans leading-relaxed">
              <span className="block">
                Instagram: <strong>@sinaras_bookeducation</strong>
              </span>
              <span className="block">Status Kemitraan: Buka (Reseller & Agent)</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/60 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p className="flex items-center gap-1.5 justify-center sm:justify-start">
            Made by Sinaras. &copy; {new Date().getFullYear()} CV Sinaras Nusantara. All Rights
            Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-slate-300 transition-all text-xs font-display font-bold border border-slate-650 cursor-pointer"
          >
            Kembali ke Atas <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
