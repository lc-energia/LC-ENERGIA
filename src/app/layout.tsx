import { Poppins, Open_Sans } from 'next/font/google';
import { metadata } from './metadata';
import './globals.css';
import '../styles/typography.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import LoadingScreenWrapper from '@/components/layout/LoadingScreenWrapper';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import SkipToContent from '@/components/accessibility/SkipToContent';

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
        <OrganizationSchema />
      </head>
      <body>
        <SkipToContent />
        <LoadingScreenWrapper>
          <SmoothScroll>
            <Navbar />
            <main id="main-content">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </LoadingScreenWrapper>
      </body>
    </html>
  );
}