import { defineField, defineType } from 'sanity';

export const zonaSiswa = defineType({
  name: 'zonaSiswa',
  title: 'Zona Siswa',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Utama',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Judul',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Isi Deskripsi / Pengantar',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Gambar Utama',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'badgeText',
          title: 'Teks Badge Gambar',
          type: 'string',
        }),
        defineField({
          name: 'alt',
          title: 'Alt Deskripsi Gambar',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'activitiesTitle',
      title: 'Judul Bagian Aktivitas',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'activitiesSubtitle',
      title: 'Sub Judul Bagian Aktivitas',
      type: 'string',
    }),
    defineField({
      name: 'activities',
      title: 'Aktivitas Belajar',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'activity',
          title: 'Aktivitas Belajar',
          fields: [
            {
              name: 'title',
              title: 'Nama Aktivitas',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Deskripsi Aktivitas',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'iconName',
              title: 'Ikon',
              type: 'string',
              options: {
                list: [
                  { title: 'Buku / Membaca (BookOpen)', value: 'BookOpen' },
                  { title: 'Teka-teki (Puzzle)', value: 'Puzzle' },
                  { title: 'Menggambar / Seni (Palette)', value: 'Palette' },
                  { title: 'Musik (Music)', value: 'Music' },
                  { title: 'Senyum (Smile)', value: 'Smile' },
                  { title: 'Bintang (Star)', value: 'Star' },
                  { title: 'Percikan (Sparkles)', value: 'Sparkles' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'colorTheme',
              title: 'Tema Warna',
              type: 'string',
              options: {
                list: [
                  { title: 'Merah Muda (Pink)', value: 'pink' },
                  { title: 'Biru (Blue)', value: 'blue' },
                  { title: 'Ungu (Purple)', value: 'purple' },
                  { title: 'Kuning (Yellow)', value: 'yellow' },
                  { title: 'Hijau Mint (Mint)', value: 'mint' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
});
