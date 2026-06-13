import { BookOpen, Video, Gift, LucideIcon } from 'lucide-react';

interface ProductTab {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  badge: string;
  badgeColor: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  benefits: {
    title: string;
    description: string;
  }[];
}

export const PRODUCT_TAB: ProductTab[] = [
  {
    id: 'book-front',
    title: 'Buku Utama',
    subtitle: 'Cerita Si Manis',
    imageSrc: '/image1.jpg',
    badge: 'Best Seller',
    badgeColor: 'bg-brand-pink text-white border-brand-pink',
    icon: BookOpen,
    tagline: 'Melatih Orientasi Ruang & Kemandirian Lewat Visual Cerita',
    description:
      'Buku cerita bergambar taktil interaktif "Cerita Si Manis" dirancang cerdas dengan menyuguhkan perbandingan orientasi arah, ukuran, dan bentuk ruang. Kombinasi warna kontras tinggi membantu penderita Down syndrome menangkap fokus visual dan melatih koordinasi motorik halus saat membalik halaman tebal.',
    benefits: [
      {
        title: 'Orientasi Spasial Dinamis',
        description:
          'Membantu anak mengenali konsep atas-bawah, dalam-luar, kanan-kiri, dan besar-kecil secara natural lewat cerita visual.',
      },
      {
        title: 'Metode Taktil Inklusif',
        description:
          'Langkah kemandirian & komunikasi dirancang bertahap agar ramah bagi proses tumbuh kembang anak Down syndrome.',
      },
      {
        title: 'Bahan Boardbook Kokoh',
        description:
          'Halaman tebal, ujung rounded anti-tajam, memudahkan gerakan menggenggam & membalik kertas anak berkebutuhan khusus.',
      },
    ],
  },
  {
    id: 'book-features',
    title: 'Fitur Edukatif',
    subtitle: 'Panduan & Media',
    imageSrc: '/image2.jpg',
    badge: 'Metode Inovatif',
    badgeColor: 'bg-brand-purple text-white border-brand-purple',
    icon: Video,
    tagline: 'Interaktivitas Stimulasi Multi-Sensorik Terlengkap',
    description:
      'Edisi khusus ini kaya akan stimulus sensorik terpadu mulai dari video animasi instruksi motorik terpandu lewat pemindaian QR Code, kuis pencocokan pola bentuk, serta bagan penghargaan stiker bintang untuk memotivasi anak menyelesaikan tantangan harian secara gembira.',
    benefits: [
      {
        title: 'QR Animasi Spasial',
        description:
          'Scan kode untuk menonton panduan audio-visual yang melatih gerakan koordinasi fisik-spasial harian anak secara asyik.',
      },
      {
        title: 'Kognisi Bentuk & Pola',
        description:
          'Melatih kejelian otak lewat pencocokan gambar, teka-teki letak ruang, yang dirancang sesuai terapi Down syndrome.',
      },
      {
        title: 'Lembar Stiker Koordinasi',
        description:
          'Stiker khusus untuk melatih presisi motorik menempel tepat sasaran, merayakan setiap kemajuan kemandirian si kecil.',
      },
    ],
  },
  {
    id: 'box-gift',
    title: 'Koper Premium',
    subtitle: 'Kemas Belajar Ceria',
    imageSrc: '/image3.jpg',
    badge: 'Kemasan Eksklusif',
    badgeColor: 'bg-brand-blue text-white border-brand-blue',
    icon: Gift,
    tagline: 'Kemas Belajar & Latih Grasping Skill dengan Wadah Khusus',
    description:
      'Koper Jinjing Eksklusif Sinaras didesain bukan sekadar pelindung buku, melainkan media terapi mandiri. Dilengkapi gagang kayu ergonomis yang melatih kekuatan genggaman jari (grasping skill) anak penderita Down syndrome, sekaligus mengajarkan konsep spasial: menyimpan kembali, merapikan, dan menutup wadah.',
    benefits: [
      {
        title: 'Gagang Kayu Grasping Terapi',
        description:
          'Dibuat kokoh dari kayu halus bergelombang untuk stimulasi saraf motorik telapak tangan anak berkebutuhan khusus.',
      },
      {
        title: 'Latihan Tata Letak Ruang',
        description:
          'Mengajarkan konsep spasial penting sejak kecil seperti keluar/masuk, mengatur susunan buku, dan membereskan mainan.',
      },
      {
        title: 'Bantalan Aman & Rigid Box',
        description:
          'Karton premium rigid berlapis pelindung tahan bantingan, mudah dibuka-tutup secara mandiri oleh jemari anak.',
      },
    ],
  },
];
