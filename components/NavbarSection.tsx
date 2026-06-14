'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, ArrowLeft, Menu, X } from 'lucide-react';
import { NAVBAR_ITEMS } from '@/constant/navbar.constant';
import { scrollToSection } from '@/utils/scrroll';

export default function NavbarSection() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);

  const handleLinkClick = (disable?: boolean) => {
    if (disable) return;
    setIsOpen(false);
  };

  const isSection = (targetId?: string) => {
    if (!targetId) return false;
    return ['product-showcase', 'feature-grid', 'reviews', 'hero'].includes(targetId);
  };

  return (
    <nav
      className={`relative z-50 w-full flex items-center justify-between py-4 md:py-6 ${isHome ? '' : 'max-w-7xl mx-auto px-4'}`}
    >
      {isHome ? (
        <button
          className="flex-1 flex items-center gap-2 cursor-pointer justify-start text-left bg-transparent border-0 p-0 z-50"
          onClick={() => {
            scrollToSection('hero');
            setIsOpen(false);
          }}
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
          className="flex-1 flex items-center gap-2 cursor-pointer justify-start z-50"
          onClick={() => setIsOpen(false)}
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

      <div className="hidden md:flex items-center justify-center gap-8 relative z-50">
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

          if (isHome && item.targetId && isSection(item.targetId)) {
            return (
              <button
                key={item.targetId || idx}
                onClick={() => scrollToSection(item.targetId!)}
                className="font-display font-semibold text-sm text-slate-600 hover:text-brand-purple transition-colors cursor-pointer py-2 bg-transparent border-0 p-0"
              >
                {item.label}
              </button>
            );
          }

          return (
            <Link
              key={item.targetId || idx}
              href={isSection(item.targetId) ? `/#${item.targetId}` : `/${item.targetId}`}
              className="font-display font-semibold text-sm text-slate-600 hover:text-brand-purple transition-colors py-2"
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="flex-1 flex justify-end items-center z-50">
        {!isHome && (
          <Link
            href="/"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-brand-purple hover:bg-brand-purple/90 text-white font-display font-bold text-xs rounded-xl border-2 border-slate-800 shadow-[3px_3px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Beranda
          </Link>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 border-2 border-slate-800 rounded-2xl bg-white text-slate-700 shadow-[3px_3px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer flex items-center justify-center"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mx-4 mt-2 bg-white border-3 border-slate-800 rounded-3xl p-6 shadow-[6px_6px_0px_0px_#1e293b] z-40 md:hidden flex flex-col gap-2">
          {NAVBAR_ITEMS.map((item, idx) => {
            if (item.dropdownItems) {
              return (
                <div
                  key={idx}
                  className="flex flex-col border-b border-slate-100 pb-2 last:border-0 last:pb-0"
                >
                  <button
                    type="button"
                    onClick={() => setIsMobileSubOpen(!isMobileSubOpen)}
                    className="flex items-center justify-between px-3 py-2.5 font-display font-bold text-base text-slate-700 hover:text-brand-purple hover:bg-slate-50 rounded-xl transition-colors text-left bg-transparent border-0 cursor-pointer w-full"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileSubOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isMobileSubOpen && (
                    <div className="flex flex-col gap-1 pl-4 mt-1">
                      {item.dropdownItems.map((subItem, sIdx) => {
                        if (subItem.targetId) {
                          return (
                            <Link
                              key={sIdx}
                              href={subItem.disable ? '#' : `/${subItem.targetId}`}
                              onClick={(e) => {
                                if (subItem.disable) {
                                  e.preventDefault();
                                } else {
                                  handleLinkClick();
                                }
                              }}
                              className={`px-3 py-2 rounded-xl font-display font-bold text-sm transition-colors ${
                                subItem.disable
                                  ? 'text-slate-400 cursor-not-allowed bg-slate-50'
                                  : 'text-slate-700 hover:text-brand-purple hover:bg-slate-50'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}
                </div>
              );
            }

            if (isHome && item.targetId && isSection(item.targetId)) {
              return (
                <button
                  key={item.targetId || idx}
                  onClick={() => {
                    scrollToSection(item.targetId!);
                    handleLinkClick();
                  }}
                  className="px-3 py-2.5 font-display font-bold text-base text-left text-slate-700 hover:text-brand-purple hover:bg-slate-50 rounded-xl transition-colors border-b border-slate-100 last:border-0 bg-transparent border-0 w-full cursor-pointer"
                >
                  {item.label}
                </button>
              );
            }

            return (
              <Link
                key={item.targetId || idx}
                href={isSection(item.targetId) ? `/#${item.targetId}` : `/${item.targetId}`}
                onClick={() => handleLinkClick()}
                className="px-3 py-2.5 font-display font-bold text-base text-slate-700 hover:text-brand-purple hover:bg-slate-50 rounded-xl transition-colors border-b border-slate-100 last:border-0"
              >
                {item.label}
              </Link>
            );
          })}

          {!isHome && (
            <Link
              href="/"
              onClick={() => handleLinkClick()}
              className="mt-2 flex items-center justify-center gap-1.5 px-4 py-3 bg-brand-purple hover:bg-brand-purple/90 text-white font-display font-bold text-sm rounded-xl border-2 border-slate-800 shadow-[3px_3px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
