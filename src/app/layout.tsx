import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    <html lang="en">
      <body className="antialiased bg-gray-50 font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
