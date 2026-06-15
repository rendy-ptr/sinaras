import { defineField, defineType } from 'sanity';

export const zonaOrangTua = defineType({
  name: 'zonaOrangTua',
  title: 'Zona Orang Tua',
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
      name: 'tipsTitle',
      title: 'Judul Bagian Tips',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tipsSubtitle',
      title: 'Sub Judul Bagian Tips',
      type: 'string',
    }),
    defineField({
      name: 'tips',
      title: 'Daftar Tips Parenting',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tip',
          title: 'Tips Parenting',
          fields: [
            {
              name: 'title',
              title: 'Judul Tips',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Deskripsi Tips',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'iconName',
              title: 'Ikon',
              type: 'string',
              options: {
                list: [
                  { title: 'Jam / Waktu (Clock)', value: 'Clock' },
                  { title: 'Senyum (Smile)', value: 'Smile' },
                  { title: 'Pesan / Obrolan (MessageCircle)', value: 'MessageCircle' },
                  { title: 'Piala / Apresiasi (Trophy)', value: 'Trophy' },
                  { title: 'Percikan / Motivasi (Sparkles)', value: 'Sparkles' },
                  { title: 'Hati / Kasih Sayang (Heart)', value: 'Heart' },
                  { title: 'Bintang (Star)', value: 'Star' },
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
            {
              name: 'checklistText',
              title: 'Teks Checklist / Panduan Singkat',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
});
