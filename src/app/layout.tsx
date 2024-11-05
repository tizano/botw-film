import type { Metadata } from 'next';

import { ReenieBeanieSans, RobotoSans, serif } from './fonts/fonts';
import './globals.css';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${serif.className} ${ReenieBeanieSans.className} ${RobotoSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
