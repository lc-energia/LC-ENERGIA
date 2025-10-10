import { Poppins, Open_Sans } from 'next/font/google';
import { metadata } from './metadata';
import './globals.css';
import '../styles/typography.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingScreenWrapper from '@/components/LoadingScreenWrapper';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-open-sans',
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
      </head>
      <body>
        <LoadingScreenWrapper>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </LoadingScreenWrapper>
      </body>
    </html>
  );
}