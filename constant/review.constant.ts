interface Review {
  id: number;
  name: string;
  role: string;
  location: string;
  avatarText: string;
  avatarBg: string;
  rating: number;
  comment: string;
  date: string;
}

export const REVIEW_DATA: Review[] = [
  {
    id: 1,
    name: 'Bunda Riana',
    role: 'Wali Murid Anak Hebat (4 Tahun)',
    location: 'Sleman, Yogyakarta',
    avatarText: 'BR',
    avatarBg: 'bg-brand-pink text-white',
    rating: 5,
    comment:
      'Luar biasa! Sejak mengajak anak saya belajar membalik buku boardbook "Cerita Si Manis" ini, ia mulai peka terhadap orientasi visual. Yang paling membanggakan, dia sekarang sangat antusias belajar merapikan letak bantal kasurnya sendiri demi mendapatkan stiker untuk kopernya.',
    date: '1 Minggu Lalu',
  },
  {
    id: 2,
    name: 'Ibu Lestari, S.Pd.',
    role: 'Guru Sekolah Luar Biasa & Praktisi Terapis',
    location: 'Surakarta, Jawa Tengah',
    avatarText: 'IL',
    avatarBg: 'bg-brand-purple text-white',
    rating: 5,
    comment:
      'Metode spasial di buku Sinaras ini sangat sinkron dengan standar terapi Down syndrome. Mengajarkan konsep tata ruang (atas-bawah, dalam-luar) melalui visual cerita yang ramah serta boardbook mudah dicengkeram adalah terobosan edukasi inklusif lokal yang patut diacungi jempol.',
    date: '2 Minggu Lalu',
  },
  {
    id: 3,
    name: 'Bunda Cynthia',
    role: 'Wali Murid Anak Istimewa (5 Tahun)',
    location: 'Surabaya, Jawa Timur',
    avatarText: 'BC',
    avatarBg: 'bg-brand-blue text-white',
    rating: 5,
    comment:
      'Gagang kayu di kopernya sangat membantu anak saya melatih grasping skill (fokus motorik menggenggam). Sambil diajak gerak pagi, dia suka menenteng koper jinjing Sinaras ini kemana-mana. Pemindaian animasi videonya pun memperkuat fokus audionya.',
    date: '1 Bulan Lalu',
  },
  {
    id: 4,
    name: 'Ayah Adrian',
    role: 'Wali Murid Anak Down Syndrome (6 Tahun)',
    location: 'Jakarta Selatan',
    avatarText: 'AD',
    avatarBg: 'bg-brand-yellow text-slate-800',
    rating: 5,
    comment:
      'Anak saya gembira luar biasa setiap kali menyelesaikan checklist harian di website Sinaras ini. Keseimbangan motorik halusnya naik pesat semenjak konsisten berlatih merapikan buku kembali ke tempatnya sendiri. Sertifikat tercetak kebanggaannya sekarang kami tempel di pintu kamar!',
    date: '3 Hari Lalu',
  },
];
