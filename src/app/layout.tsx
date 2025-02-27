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
      <ThemeProvider
        value={{
          input: {
            styles: {
              base: {
                container: {
                  minWidth: '',
                },
              },
            },
          },
        }}
      >
        <RecoilRoot>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <div className='w-screen max-w-xl mx-auto bg-gray-50 h-svh relative'>
              <Nav />
              <div>{children}</div>
            </div>
          </body>
        </RecoilRoot>
      </ThemeProvider>
    </html>
  );
}
