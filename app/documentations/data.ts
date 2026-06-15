import { client } from '@/sanity/lib/client';
import { documentationQuery } from '@/sanity/lib/queries';
import type { PortableTextBlock } from 'next-sanity';
import type { SanityImageSource } from '@sanity/image-url';

export interface DocumentationsItem {
  _id: string;
  image: SanityImageSource;
  title: string;
  publishedAt: string;
  body: PortableTextBlock[];
}

export async function getDocumentationsPageData(search = '') {
  const [documentations] = await Promise.all([
    client.fetch(documentationQuery, {
      search,
    }),
  ]);

  return { documentations };
}
