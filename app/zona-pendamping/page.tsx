import ZonaPendampingClient from './ZonaPendampingClient';
import { getZonaPendampingData } from './data';

export const revalidate = 60;

export default async function ZonaPendampingPage() {
  const data = await getZonaPendampingData();

  return <ZonaPendampingClient data={data} />;
}
