'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { NAVBAR_ITEMS } from '@/constant/navbar.constant';
import { scrollToSection } from '@/utils/scrroll';

export default function NavbarSection() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav
      className={`relative z-20 w-full flex items-center justify-between py-6 ${isHome ? '' : 'max-w-7xl mx-auto px-4'}`}
    >
      {isHome ? (
        <button
          className="flex-1 flex items-center gap-2 cursor-pointer justify-start text-left bg-transparent border-0 p-0"
          onClick={() => scrollToSection('hero')}
        >
          <span className="w-10 h-10 bg-brand-purple rounded-2xl flex items-center justify-center border-2 border-slate-800 shadow-[2px_2px_0px_0px_#1e293b] flex-shrink-0">
            <span className="text-white font-display font-black text-xl">S</span>
          </span>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-lg md:text-xl text-slate-800 tracking-tight leading-none">
              SINARAS
            </span>
            <span className="font-sans text-[10px] text-slate-400 font-bold tracking-widest leading-none">
              BOOK & EDUCATION
            </span>
          </div>
        </button>
      ) : (
        <Link
          href="/"
          className="flex-1 flex items-center gap-2 cursor-pointer justify-start"
        >
          <span className="w-10 h-10 bg-brand-purple rounded-2xl flex items-center justify-center border-2 border-slate-800 shadow-[2px_2px_0px_0px_#1e293b] flex-shrink-0">
            <span className="text-white font-display font-black text-xl">S</span>
          </span>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-lg md:text-xl text-slate-800 tracking-tight leading-none">
              SINARAS
            </span>
            <span className="font-sans text-[10px] text-slate-400 font-bold tracking-widest leading-none">
              BOOK & EDUCATION
            </span>
          </div>
        </Link>
      )}

      <div className="hidden md:flex items-center justify-center gap-8">
        {NAVBAR_ITEMS.map((item, idx) => {
          if (item.dropdownItems) {
            return (
              <div
                key={idx}
                className="relative group"
              >
                <button className="font-display font-semibold text-sm text-slate-600 hover:text-brand-purple transition-colors cursor-pointer flex items-center gap-1 py-2 bg-transparent border-0">
                  {item.label}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <div className="w-48 bg-white border-2 border-slate-800 rounded-2xl shadow-[4px_4px_0px_0px_#1e293b] py-2">
                    {item.dropdownItems.map((subItem, sIdx) => {
                      if (subItem.targetId) {
                        return (
                          <Link
                            key={sIdx}
                            href={subItem.disable ? '#' : `/${subItem.targetId}`}
                            onClick={(e) => {
                              if (subItem.disable) {
                                e.preventDefault();
                              }
                            }}
                            className={`block px-4 py-2 font-display font-semibold text-xs first:rounded-t-xl last:rounded-b-xl transition-colors ${
                              subItem.disable
                                ? 'text-slate-400 cursor-not-allowed'
                                : 'text-slate-600 hover:text-brand-purple hover:bg-slate-50'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            );
          }

          if (isHome) {
            return (
              <button
                key={item.targetId || idx}
                onClick={() => item.targetId && scrollToSection(item.targetId)}
                className="font-display font-semibold text-sm text-slate-600 hover:text-brand-purple transition-colors cursor-pointer py-2 bg-transparent border-0 p-0"
              >
                {item.label}
              </button>
            );
          }

          return (
            <Link
              key={item.targetId || idx}
              href={`/#${item.targetId}`}
              className="font-display font-semibold text-sm text-slate-600 hover:text-brand-purple transition-colors py-2"
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {isHome ? (
        <div className="flex-1 hidden md:flex justify-end"></div>
      ) : (
        <div className="flex-1 flex justify-end">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-4 py-2 bg-brand-purple hover:bg-brand-purple/90 text-white font-display font-bold text-xs rounded-xl border-2 border-slate-800 shadow-[3px_3px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Beranda
          </Link>
        </div>
      )}
    </nav>
  );
}
