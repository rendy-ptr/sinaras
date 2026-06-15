import { client } from '@/sanity/lib/client';
import { zonaOrangTuaQuery } from '@/sanity/lib/queries';
import type { ZonaOrangTuaData } from './ZonaOrangTuaClient';

export async function getZonaOrangTuaData() {
  try {
    const data = await client.fetch<ZonaOrangTuaData | null>(zonaOrangTuaQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch zona orang tua data from Sanity:', error);
    return null;
  }
}
