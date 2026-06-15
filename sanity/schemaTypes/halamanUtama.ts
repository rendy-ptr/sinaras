import { defineField, defineType } from 'sanity';

export const halamanUtama = defineType({
  name: 'halamanUtama',
  title: 'Halaman Utama',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Utama',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subTitle1',
      title: 'Sub Judul 1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body1',
      title: 'Isi Konten 1',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image1',
      title: 'Gambar 1',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'badgeText',
          title: 'Teks Badge Gambar 1',
          type: 'string',
        }),
        defineField({
          name: 'alt',
          title: 'Alt Deskripsi Gambar 1',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subTitle2',
      title: 'Sub Judul 2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body2',
      title: 'Isi Konten 2',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image2',
      title: 'Gambar 2',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'badgeText',
          title: 'Teks Badge Gambar 2',
          type: 'string',
        }),
        defineField({
          name: 'alt',
          title: 'Alt Deskripsi Gambar 2',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
