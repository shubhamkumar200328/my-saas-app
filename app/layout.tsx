import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import { Outfit } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

const outfitFont = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'skillmate-ai',
  description: 'Real-time Saas AI Teaching Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <body className={`${bricolage.variable} antialiased`}> */}
        <body className={`${outfitFont.className} antialiased`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
