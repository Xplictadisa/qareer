import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Qareer | Job Tracker',
  description: 'A job tracker across multiple career paths.',
  authors: { name: 'Graham Boyle', url: 'https://grahamboyle-dev.vercel.app' },
  keywords: [
    'Qareer',
    'job tracker',
    'career',
    'job search',
    'job applications',
    'job',
  ],
  twitter: {
    creator: '@dev__grey',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
