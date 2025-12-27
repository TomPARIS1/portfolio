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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://tomparis.dev/#website",
                  "url": "https://tomparis.dev",
                  "name": "Tom Paris Portfolio",
                  "description": "Portfolio de Tom Paris, Développeur Full-Stack Freelance",
                  "inLanguage": "fr-FR",
                  "author": {
                    "@id": "https://tomparis.dev/#person"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://tomparis.dev/#person",
                  "name": "Tom Paris",
                  "url": "https://tomparis.dev",
                  "image": "https://tomparis.dev/profile.webp",
                  "jobTitle": "Développeur Full-Stack Freelance",
                  "description": "Développeur Full-Stack spécialisé en Next.js, React, TypeScript et Back-end PHP/MySQL",
                  "knowsAbout": [
                    "Next.js",
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "PHP",
                    "MySQL",
                    "Développement Full-Stack",
                    "Développement Web",
                    "Développement Front-end",
                    "Développement Back-end"
                  ],
                  "sameAs": [
                    "https://www.linkedin.com/in/tom-paris-dev/",
                    "https://github.com/tomparis1",
                    "https://twitter.com/toomsahh"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "FR"
                  },
                  "makesOffer": {
                    "@id": "https://tomparis.dev/#service"
                  }
                },
                {
                  "@type": "Service",
                  "@id": "https://tomparis.dev/#service",
                  "name": "Développement Full-Stack Next.js & React",
                  "description": "Conception et déploiement d'applications web modernes sur mesure. Expertise Next.js, React, TypeScript et services Back-end PHP/MySQL.",
                  "serviceType": "Développement Logiciel",
                  "provider": {
                    "@id": "https://tomparis.dev/#person"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "International"
                  },
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://tomparis.dev"
                  }
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://tomparis.dev/#webpage",
                  "url": "https://tomparis.dev",
                  "name": "Tom Paris - Développeur Full-Stack",
                  "about": {
                    "@id": "https://tomparis.dev/#person"
                  },
                  "mainEntity": {
                    "@id": "https://tomparis.dev/#person"
                  }
                }
              ]
            }).replace(/</g, '\\u003c'),
          }}
        />

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
