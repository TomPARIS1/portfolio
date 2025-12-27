import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/provider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tomparis.dev'), 
  
  title: {
    default: "Tom Paris – Développeur Full-Stack | Next.js & React",
    template: "%s | Tom Paris Portfolio", 
  },
  
  description: "Développeur Full-Stack Freelance. Spécialisé Next.js, React, TypeScript et Tailwind CSS. Expertise Back-end PHP/MySQL pour applications web modernes.",
  
  keywords: [
    'développeur full-stack', 
    'développeur nextjs', 
    'développeur react', 
    'typescript', 
    'tailwindcss', 
    'php mysql', 
    'tom paris portfolio',
    'freelance développement web', 
    'applications web modernes',
  ],

  authors: [{ name: 'Tom Paris', url: 'https://tomparis.dev' }],
  creator: 'Tom Paris',
  publisher: 'Tom Paris',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  alternates: {
    canonical: 'https://tomparis.dev',
  },
  
  openGraph: {
    title: 'Tom Paris - Développeur Full-Stack | Next.js, React & TypeScript',
    description: "Découvrez mon portfolio. Développement Full-Stack (Next.js, React, TypeScript) et Back-end (PHP, MySQL) pour des applications web modernes et performantes.",
    url: 'https://tomparis.dev', 
    siteName: 'Tom Paris - Portfolio Full-Stack',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aperçu du portfolio de Tom Paris - Développeur Full-Stack',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Tom Paris | Développeur Full-Stack Next.js & React',
    description: "Portfolio de Tom Paris. Full-Stack Next.js, React, TypeScript et expertise Back-end PHP/MySQL. Visitez le site !",
    creator: '@toomsahh', 
    images: ['/og-image.png'], 
  },

  verification: {
    google: 'HzvP5qHb_S8d02e3Di5_Mz3NrjtGGmQF9lsyUUIual4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
