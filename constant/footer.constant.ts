export interface FooterLink {
  label: string;
  targetId: string;
}

export const FOOTER_ITEMS: FooterLink[] = [
  { label: 'Koleksi Produk Sinaras', targetId: 'product-showcase' },
  { label: 'Manfaat Edukasi Karakter', targetId: 'feature-grid' },
  // { label: 'Game Sehari-hari Anak Hebat', targetId: 'interactive-tracker' },
  { label: 'Ulasan Orang Tua', targetId: 'reviews' },
];
