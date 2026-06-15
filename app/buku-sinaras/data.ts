import { client } from '@/sanity/lib/client';
import { bukuSinarasQuery } from '@/sanity/lib/queries';
import type { BukuSinarasData } from './BukuSinarasClient';

export async function getBukuSinarasData() {
  try {
    const data = await client.fetch<BukuSinarasData | null>(bukuSinarasQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch buku sinaras data from Sanity:', error);
    return null;
  }
}
