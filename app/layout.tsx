import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buku Cerita Si Manis',
  description: `Landing page interaktif dan ceria untuk memperkenalkan buku anak mandiri 'Cerita Si Manis' dari Sinaras.`,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
