import { client } from '@/sanity/lib/client';
import { zonaSiswaQuery } from '@/sanity/lib/queries';
import type { ZonaSiswaData } from './ZonaSiswaClient';

export async function getZonaSiswaData() {
  try {
    const data = await client.fetch<ZonaSiswaData | null>(zonaSiswaQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch zona siswa data from Sanity:', error);
    return null;
  }
}
