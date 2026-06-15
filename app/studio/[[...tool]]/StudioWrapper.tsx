'use client';

import nextDynamic from 'next/dynamic';

const Studio = nextDynamic(() => import('./Studio'), { ssr: false });

export default function StudioWrapper() {
  return <Studio />;
}
