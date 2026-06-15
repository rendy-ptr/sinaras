import ZonaOrangTuaClient from './ZonaOrangTuaClient';
import { getZonaOrangTuaData } from './data';

export const revalidate = 60;

export default async function ZonaOrangTuaPage() {
  const data = await getZonaOrangTuaData();

  return <ZonaOrangTuaClient data={data} />;
}
