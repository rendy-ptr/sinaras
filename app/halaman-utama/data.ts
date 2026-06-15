import { client } from '@/sanity/lib/client';
import { halamanUtamaQuery } from '@/sanity/lib/queries';
import type { HalamanUtamaData } from './HalamanUtamaClient';

export async function getHalamanUtamaData() {
  try {
    const data = await client.fetch<HalamanUtamaData | null>(halamanUtamaQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch halaman utama data from Sanity:', error);
    return null;
  }
}
