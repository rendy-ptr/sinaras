export interface DropdownItem {
  label: string;
  targetId?: string;
  disable?: boolean;
}

export interface NavbarItem {
  label: string;
  targetId?: string;
  dropdownItems?: DropdownItem[];
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  { label: 'Koleksi Buku', targetId: 'product-showcase' },
  { label: 'Manfaat Hebat', targetId: 'feature-grid' },
  { label: 'Ulasan', targetId: 'reviews' },
  { label: 'Berita', targetId: 'news' },
  { label: 'Dokumentasi', targetId: 'documentation' },
  {
    label: 'Content',
    dropdownItems: [
      { label: 'I. Halaman Utama', targetId: 'halaman-utama', disable: false },
      { label: 'II. Zona Siswa', targetId: 'zona-siswa', disable: true },
      { label: 'III. Zona Pendamping', targetId: 'zona-pendamping', disable: false },
      { label: 'IV. Zona Orang Tua', targetId: 'zona-orang-tua', disable: false },
      { label: 'V. Buku Sinaras', targetId: 'buku-sinaras', disable: false },
    ],
  },
];
