import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '../config/material-tailwind-theme-provider';
import { RecoilRoot } from '../config/recoilProvider';
import Nav from '@/components/Nav';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '굿즈 계산기',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <ThemeProvider>
        <RecoilRoot>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <div className='w-2/3 mx-auto flex flex-col items-center py-10 gap-2'>
              <div className='w-screen'>{children}</div>
              <Nav />
            </div>
          </body>
        </RecoilRoot>
      </ThemeProvider>
    </html>
  );
}
