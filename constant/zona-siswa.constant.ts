import { BookOpen, Palette, Activity, Heart, Smile, LucideIcon } from 'lucide-react';

export interface ActivityItem {
  title: string;
  description: string;
  icon: LucideIcon;
  colorTheme: string;
}

export interface ZonaSiswaData {
  title: string;
  subTitle: string;
  body: string[];
  image: string;
  alt: string;
  badgeText: string;
  activitiesTitle: string;
  activitiesSubtitle: string;
  activities: ActivityItem[];
}

export const ZONA_SISWA_DATA: ZonaSiswaData = {
  title: 'Zona Siswa',
  subTitle: 'Petualangan Seru Belajar Bersama Sinaras',
  body: [
    'Halo anak pintar! Selamat datang di Zona Siswa Sinaras. Di sini, kamu bisa belajar banyak hal menarik dengan cara yang sangat seru dan menyenangkan.',
    'Buku Cerita Sinaras dirancang khusus untuk menemanimu belajar mengenal diri sendiri, keluarga, lingkungan sekitar, serta berbagai keterampilan hebat lainnya lewat cerita-cerita yang asyik!'
  ],
  image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
  alt: 'Anak-anak belajar dan membaca buku dengan ceria',
  badgeText: 'Ayo Belajar!',
  activitiesTitle: 'Aktivitas Belajar yang Seru',
  activitiesSubtitle: 'Pilih dan lakukan berbagai aktivitas seru di bawah ini untuk mengasah kemampuan hebatmu!',
  activities: [
    {
      title: 'Membaca Cerita Menarik',
      description: 'Ajak Ayah, Ibu, atau Gurumu untuk membaca bersama buku cerita Sinaras yang penuh dengan petualangan seru.',
      icon: BookOpen,
      colorTheme: 'pink'
    },
    {
      title: 'Mewarnai & Berkreasi',
      description: 'Ekspresikan kreativitasmu dengan mewarnai gambar-gambar lucu dan menarik di dalam buku cerita.',
      icon: Palette,
      colorTheme: 'blue'
    },
    {
      title: 'Bermain Peran & Simulasi',
      description: 'Perankan tokoh-tokoh hebat di dalam cerita bersama teman-temanmu untuk melatih kepercayaan diri.',
      icon: Smile,
      colorTheme: 'purple'
    },
    {
      title: 'Meniru Kebiasaan Baik',
      description: 'Praktikkan langsung kebiasaan baik dari cerita, seperti merapikan mainan atau menyapa teman.',
      icon: Heart,
      colorTheme: 'yellow'
    },
    {
      title: 'Aktivitas Motorik & Fisik',
      description: 'Lakukan permainan interaktif yang melatih kelincahan tangan, jari, dan tubuhmu dengan gembira.',
      icon: Activity,
      colorTheme: 'mint'
    }
  ]
};
