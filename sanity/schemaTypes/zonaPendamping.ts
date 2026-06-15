import { defineField, defineType } from 'sanity';

export const zonaPendamping = defineType({
  name: 'zonaPendamping',
  title: 'Zona Pendamping',
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
      name: 'strategiesTitle',
      title: 'Judul Bagian Strategi',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'strategiesSubtitle',
      title: 'Sub Judul Bagian Strategi',
      type: 'string',
    }),
    defineField({
      name: 'strategies',
      title: 'Daftar Strategi Pembelajaran',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'strategy',
          title: 'Strategi Pembelajaran',
          fields: [
            {
              name: 'title',
              title: 'Judul Strategi',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Deskripsi Strategi',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'iconName',
              title: 'Ikon',
              type: 'string',
              options: {
                list: [
                  { title: 'Mata / Visual (Eye)', value: 'Eye' },
                  { title: 'Tanya / Bantuan (HelpCircle)', value: 'HelpCircle' },
                  { title: 'Putar balik / Ulangi (RotateCcw)', value: 'RotateCcw' },
                  { title: 'Jempol / Apresiasi (ThumbsUp)', value: 'ThumbsUp' },
                  { title: 'Kompas / Penerapan (Compass)', value: 'Compass' },
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
    defineField({
      name: 'useCasesTitle',
      title: 'Judul Bagian Pemanfaatan Buku',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'useCasesSubtitle',
      title: 'Sub Judul Bagian Pemanfaatan Buku',
      type: 'string',
    }),
    defineField({
      name: 'useCasesNote',
      title: 'Catatan / Catatan Kaki Pemanfaatan',
      type: 'text',
    }),
    defineField({
      name: 'useCases',
      title: 'Daftar Pemanfaatan Buku',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'useCase',
          title: 'Pemanfaatan Buku',
          fields: [
            {
              name: 'title',
              title: 'Judul Pemanfaatan',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Deskripsi Pemanfaatan',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
});
