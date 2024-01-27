import type { Metadata } from 'next';
import './globals.scss';
import { ThemeWrapper } from '@/components/wrapper/theme.wrapper';
import { SPACE_MONO } from './style/fonts';
import { Navbar } from '@/components/navbar/navbar.component';

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
    <html lang="en">
      <body className={`${SPACE_MONO.className}`}>
        <ThemeWrapper>
          <Navbar />
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
