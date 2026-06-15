import { defineField, defineType } from 'sanity';

export const bukuSinaras = defineType({
  name: 'bukuSinaras',
  title: 'Buku Sinaras',
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
      title: 'Isi Deskripsi',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Gambar Utama Buku',
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
  ],
});
