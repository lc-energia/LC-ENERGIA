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
  variable: '--font-heading',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-body',
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${poppins.variable} ${openSans.variable} font-body`}>
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