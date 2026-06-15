import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('I. Halaman Utama')
        .id('halamanUtama')
        .child(
          S.document()
            .schemaType('halamanUtama')
            .documentId('halamanUtama')
        ),
      S.listItem()
        .title('II. Zona Siswa')
        .id('zonaSiswa')
        .child(
          S.document()
            .schemaType('zonaSiswa')
            .documentId('zonaSiswa')
        ),
      S.listItem()
        .title('III. Zona Pendamping')
        .id('zonaPendamping')
        .child(
          S.document()
            .schemaType('zonaPendamping')
            .documentId('zonaPendamping')
        ),
      S.listItem()
        .title('IV. Zona Orang Tua')
        .id('zonaOrangTua')
        .child(
          S.document()
            .schemaType('zonaOrangTua')
            .documentId('zonaOrangTua')
        ),
      S.listItem()
        .title('V. Buku Sinaras')
        .id('bukuSinaras')
        .child(
          S.document()
            .schemaType('bukuSinaras')
            .documentId('bukuSinaras')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['halamanUtama', 'zonaSiswa', 'zonaPendamping', 'zonaOrangTua', 'bukuSinaras'].includes(listItem.getId() || '')
      ),
    ]);
