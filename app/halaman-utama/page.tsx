import HalamanUtamaClient from './HalamanUtamaClient';
import { getHalamanUtamaData } from './data';

export const revalidate = 60;

export default async function HalamanUtamaPage() {
  const data = await getHalamanUtamaData();

  return <HalamanUtamaClient data={data} />;
}
