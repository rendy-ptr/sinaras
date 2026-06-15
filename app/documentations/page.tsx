import DocumentationsClient from './DocumentationsClient';
import { getDocumentationsPageData } from './data';

export const revalidate = 60;

interface Props {
  searchParams: Promise<{ search?: string }>;
}

export default async function DocumentationPage({ searchParams }: Props) {
  const { search = '' } = await searchParams;
  const { documentations } = await getDocumentationsPageData(search);

  return (
    <DocumentationsClient
      documentations={documentations}
      initialSearch={search}
    />
  );
}
