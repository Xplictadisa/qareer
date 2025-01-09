import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';

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
  openGraph: {
    title: 'Qareer | Job Tracker',
    description: 'A job tracker across multiple career paths.',
    url: 'https://qareer-q.vercel.app',
    siteName: 'Qareer',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Greybillions/qareer/refs/heads/master/public/heroImg1.png',
        width: 1200,
        height: 630,
        alt: 'Qareer - Job Tracker',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          strategy='afterInteractive'
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XK9D4511RZ`}
        />
        <Script id='gtag' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XK9D4511RZ');
            tag('config', 'G-XK9D4511RZ');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
