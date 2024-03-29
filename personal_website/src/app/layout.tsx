import type { Metadata } from 'next';
import './globals.scss';
import { ThemeWrapper } from '@/components/wrapper/theme.wrapper';
import { Navbar } from '@/components/navbar/navbar.component';
import { MODULES } from '@/modules/app.factory';
import { Social } from '@/components/social/social.component';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Samuel Ricardo',
  description: 'Samuel Ricardo Portfolio & Personal Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MODULES.FONTS.MONO.SPACE_MONO().className}`}>
        <ThemeWrapper>
          <Navbar />
          <Social />
          {children}
          <Toaster />
        </ThemeWrapper>
      </body>
    </html>
  );
}
