import { client } from '@/sanity/lib/client';
import { zonaPendampingQuery } from '@/sanity/lib/queries';
import type { ZonaPendampingData } from './ZonaPendampingClient';

export async function getZonaPendampingData() {
  try {
    const data = await client.fetch<ZonaPendampingData | null>(zonaPendampingQuery);
    return data;
  } catch (error) {
    console.error('Failed to fetch zona pendamping data from Sanity:', error);
    return null;
  }
}
