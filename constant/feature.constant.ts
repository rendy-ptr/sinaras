import {
  Sparkles,
  Languages,
  QrCode,
  Gamepad,
  HeartPulse,
  ShieldCheck,
  LucideIcon,
} from 'lucide-react';

export interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  shadowColor: string;
  iconColor: string;
}

export const FEATURE_DATA: FeatureCard[] = [
  {
    id: 1,
    title: '7 Kebiasaan Spasial Mandiri',
    description:
      'Menanamkan rutinitas harian (merapikan kasur, mandi, makan, menyusun barang) secara bertahap menggunakan panduan visual spasial yang membimbing fokus anak.',
    icon: Sparkles,
    color: 'bg-amber-100',
    borderColor: 'border-amber-400',
    shadowColor: 'shadow-[6px_6px_0px_0px_rgba(251,191,36,1)]',
    iconColor: 'text-amber-900',
  },
  {
    id: 2,
    title: 'Desain Terapi Down Syndrome',
    description:
      'Seluruh layout, alur petualangan, dan aktivitas dirancang berdasarkan riset stimulasi neurodiversitas untuk membantu anak melatih rentang perhatian (focus span).',
    icon: Languages,
    color: 'bg-pink-100',
    borderColor: 'border-pink-400',
    shadowColor: 'shadow-[6px_6px_0px_0px_rgba(244,114,182,1)]',
    iconColor: 'text-pink-900',
  },
  {
    id: 3,
    title: 'Scan QR Code Animasi Motorik',
    description:
      'Dilengkapi barcode video tutorial interaktif gerak tubuh dan lagu spasial yang memudahkan anak menirukan aktivitas secara audio-visual menyenangkan.',
    icon: QrCode,
    color: 'bg-cyan-100',
    borderColor: 'border-cyan-400',
    shadowColor: 'shadow-[6px_6px_0px_0px_rgba(34,211,238,1)]',
    iconColor: 'text-cyan-900',
  },
  {
    id: 4,
    title: 'Latihan Otot Grasping & Taktil',
    description:
      'Struktur pegangan kayu koper eksklusif dirancang khusus melatih kekuatan genggaman jemari dan telapak tangan anak agar semakin luwes.',
    icon: Gamepad,
    color: 'bg-indigo-100',
    borderColor: 'border-indigo-400',
    shadowColor: 'shadow-[6px_6px_0px_0px_rgba(129,140,248,1)]',
    iconColor: 'text-indigo-900',
  },
  {
    id: 5,
    title: 'Ikatan Hangat Orang Tua (Read Aloud)',
    description:
      'Menjadi sarana interaksi terapeutik yang merekatkan kedekatan emosional antara orang tua dan anak lewat teknik membaca nyaring yang menyenangkan.',
    icon: HeartPulse,
    color: 'bg-red-50',
    borderColor: 'border-red-300',
    shadowColor: 'shadow-[6px_6px_0px_0px_rgba(239,68,68,1)]',
    iconColor: 'text-red-950',
  },
  {
    id: 6,
    title: 'Aman, Tebal & Tepi Tumpul',
    description:
      'Terbuat dari bahan boardbook premium super tebal yang tahan air, liur, maupun sobek, dengan setiap sudut tumpul (rounded) aman untuk dieksplorasi sendiri.',
    icon: ShieldCheck,
    color: 'bg-emerald-50',
    borderColor: 'border-emerald-300',
    shadowColor: 'shadow-[6px_6px_0px_0px_rgba(16,185,129,1)]',
    iconColor: 'text-emerald-950',
  },
];
