export interface DocumentationItem {
  _id: string;
  image: string;
  title: string;
  publishedAt: string;
  body: string[];
}

export const DOCUMENTATIONS_DATA: DocumentationItem[] = [
  {
    _id: 'doc1',
    title: 'Peluncuran Buku Cerita Sinaras di Sekolah Khusus',
    publishedAt: '2026-05-10T08:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    body: [
      'Peluncuran perdana Buku Cerita Sinaras telah dilaksanakan dengan sukses di Sekolah Khusus (SKh) Negeri. Buku ini dirancang khusus untuk merangsang minat baca anak-anak berkebutuhan khusus khususnya Down Syndrome dengan pendekatan visual yang kuat.'
    ]
  },
  {
    _id: 'doc2',
    title: 'Workshop Pendampingan Orang Tua: Membaca Menyenangkan',
    publishedAt: '2026-05-24T10:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    body: [
      'Kami mengadakan workshop khusus untuk membekali orang tua dalam menggunakan Buku Sinaras sebagai media belajar di rumah. Kegiatan ini menekankan pentingnya komunikasi dua arah dan penguatan positif.'
    ]
  },
  {
    _id: 'doc3',
    title: 'Evaluasi Pembelajaran Adaptif bagi Siswa Down Syndrome',
    publishedAt: '2026-06-05T14:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    body: [
      'Hasil evaluasi menunjukkan peningkatan signifikan dalam fokus belajar dan interaksi verbal siswa setelah menggunakan metode visual Buku Sinaras secara rutin selama satu bulan.'
    ]
  }
];
