export interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: 'Pengumuman' | 'Edukasi' | 'Aktivitas';
  date: string;
  body: string;
  iconName: 'megaphone' | 'bookOpen' | 'sparkles';
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: 'Peluncuran Paket Koper Edukasi Sinaras Terbaru',
    description: 'Sinaras resmi meluncurkan paket koper belajar taktil inovatif untuk anak Down Syndrome.',
    category: 'Pengumuman',
    date: '14 Juni 2026',
    iconName: 'megaphone',
    body: 'Kami dengan bangga meluncurkan Paket Koper Edukasi Sinaras terbaru! Dirancang secara khusus untuk melatih motorik halus dan keterampilan spasial anak-anak berkebutuhan khusus dengan cara yang sangat interaktif dan menyenangkan. Paket ini sudah dilengkapi dengan boardbook tebal, kartu permainan taktil, checklist rutinitas harian, serta panduan lengkap bagi guru dan orang tua untuk mendampingi tumbuh kembang anak secara mandiri.'
  },
  {
    id: 2,
    title: 'Memahami Rentang Fokus Anak dengan Down Syndrome',
    description: 'Kenali kiat-kiat ilmiah meningkatkan rentang konsentrasi anak melalui visual terarah.',
    category: 'Edukasi',
    date: '10 Juni 2026',
    iconName: 'bookOpen',
    body: 'Setiap anak memiliki keunikan tersendiri dalam menyerap pelajaran. Melalui artikel ini, kami membahas berbagai strategi berbasis riset stimulasi neurodiversitas untuk membantu memperpanjang rentang fokus anak Down Syndrome secara berkala. Salah satunya melalui metode membaca nyaring (Read Aloud) menggunakan Buku Cerita Sinaras yang memiliki paduan warna kontras tinggi untuk melatih fokus visual.'
  },
  {
    id: 3,
    title: 'Tips Memilih Media Belajar & Motorik yang Aman',
    description: 'Panduan lengkap bagi orang tua untuk memilih mainan edukasi yang menunjang grasping skill.',
    category: 'Aktivitas',
    date: '05 Juni 2026',
    iconName: 'sparkles',
    body: 'Memilih media stimulasi tidak boleh sembarangan. Pastikan mainan yang Anda berikan aman, memiliki ujung tumpul (rounded corners), berbahan tebal agar awet, serta menantang kekuatan motorik fungsional anak (grasping skill) secara bertahap. Buku dan koper jinjing Sinaras dirancang khusus memenuhi seluruh aspek keamanan dan terapi perkembangan anak ini.'
  }
];
