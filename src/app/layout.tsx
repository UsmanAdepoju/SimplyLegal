import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SimplyLegal - Nigerian Laws Made Simple',
  description:
    'Learn about everyday laws in Nigeria in simple, easy-to-understand language. Know your rights and responsibilities.',
  keywords: [
    'Nigerian law',
    'Nigeria laws',
    'legal rights Nigeria',
    'consumer rights Nigeria',
    'traffic laws Nigeria',
    'tenancy laws Nigeria',
    'employment law Nigeria',
  ],
  openGraph: {
    title: 'SimplyLegal - Nigerian Laws Made Simple',
    description:
      'Learn about everyday laws in Nigeria in simple, easy-to-understand language.',
    type: 'website',
    locale: 'en_NG',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#FDF8F3] font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
