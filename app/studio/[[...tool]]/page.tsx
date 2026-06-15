import type { Metadata, Viewport } from 'next';
import StudioWrapper from './StudioWrapper';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  referrer: 'same-origin',
  robots: 'noindex, nofollow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function StudioPage() {
  return <StudioWrapper />;
}

