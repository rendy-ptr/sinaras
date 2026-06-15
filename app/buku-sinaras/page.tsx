import BukuSinarasClient from './BukuSinarasClient';
import { getBukuSinarasData } from './data';

export const revalidate = 60;

export default async function BukuSinarasPage() {
  const data = await getBukuSinarasData();

  return <BukuSinarasClient data={data} />;
}
