import type { Metadata } from 'next';

import { RobotoSans } from './fonts/fonts';
import './globals.css';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Brief of the week - Film',
  description: 'A Japanese animated film originally authored by "Otono Yomoji"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${RobotoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
