import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Initialize Be Vietnam Pro font

import { Be_Vietnam_Pro, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Dance Classes Ireland | Ballroom, Latin & Salsa | Kieran Kelly Dance",
  description:
    "Professional ballroom, Latin & salsa dance classes in Galway, Sligo & Roscommon. ADTA Fellow with 30+ years experience. Beginners welcome! Book your class today.",
  keywords: [
    "dance classes Ireland",
    "ballroom dancing Ireland",
    "Latin dance classes",
    "salsa classes Galway",
    "dance lessons Sligo",
    "dance classes Roscommon",
    "ballroom dance teacher",
    "ADTA dance instructor",
    "beginner dance classes",
    "Irish dance schools",
    "Lecarrow dance classes",
    "Athenry dance classes",
    "Sligo dance classes",
    "cha cha cha lessons",
    "tango classes Ireland",
    "dance teacher Galway",
    "professional dance instruction",
  ],
  generator: "v0.app",
  authors: [{ name: "Kieran Kelly" }],
  creator: "Kieran Kelly Dance",
  publisher: "Kieran Kelly Dance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dance Classes Ireland | Ballroom, Latin & Salsa | Kieran Kelly Dance",
    description:
      "Professional ballroom, Latin & salsa dance classes in Galway, Sligo & Roscommon. ADTA Fellow with 30+ years experience. Beginners welcome!",
    url: "https://kierankellydance.com",
    siteName: "Kieran Kelly Dance",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kieran Kelly Dance - Professional Dance Classes in Ireland",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dance Classes Ireland | Ballroom, Latin & Salsa",
    description:
      "Professional ballroom, Latin & salsa dance classes in Galway, Sligo & Roscommon. ADTA Fellow with 30+ years experience. Book today!",
    images: ["/og-image.png"],
    creator: "@kierankellydance",
  },
  alternates: {
    canonical: "https://kierankellydance.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${beVietnamPro.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
