import ZonaSiswaClient from './ZonaSiswaClient';
import { getZonaSiswaData } from './data';

export const revalidate = 60;

export default async function ZonaSiswaPage() {
  const data = await getZonaSiswaData();

  return <ZonaSiswaClient data={data} />;
}
