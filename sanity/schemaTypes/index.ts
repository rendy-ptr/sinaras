import { documentation } from './documentation';
import { halamanUtama } from './halamanUtama';
import { zonaSiswa } from './zonaSiswa';
import { zonaPendamping } from './zonaPendamping';
import { zonaOrangTua } from './zonaOrangTua';
import { bukuSinaras } from './bukuSinaras';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [documentation, halamanUtama, zonaSiswa, zonaPendamping, zonaOrangTua, bukuSinaras],
};
