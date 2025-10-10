import { Open_Sans, Roboto } from 'next/font/google';
import { metadata } from './metadata';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${openSans.variable} ${roboto.variable}`}>
      <head>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}