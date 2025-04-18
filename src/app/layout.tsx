import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '../config/material-tailwind-theme-provider';
import { RecoilRoot } from '../config/recoilProvider';
import Nav from '@/components/Nav';
import { ToastContainer } from 'react-toastify';

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
  description:'오프라인 행사에서 굿즈의 계산과 관리를 더욱 쉽게 할 수 있도록 돕는 사이트입니다.',
  other: {
    'google-site-verification': 'DZD0wvknLXCuyQjeRvXtsMe2iKpBCpNjto3tucdP190',
  },
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
                  minWidth: 'min-w-0',
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
            <div className='w-screen max-w-5xl mx-auto bg-gray-50 h-svh relative'>
              <Nav />
              <div>{children}</div>
            </div>
            <ToastContainer style={{ zIndex: 99999 }} />
          </body>
        </RecoilRoot>
      </ThemeProvider>
    </html>
  );
}
