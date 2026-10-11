import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_Arabic } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })
const arabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'Ahmed Elkhateeb | Computer & Software Engineer', template: '%s | Ahmed Elkhateeb' },
  description: 'Turning ideas into real solutions. Ahmed Elkhateeb — software development, web design, AI education, computer teaching, and IT solutions in Saudi Arabia. أحمد الخطيب — مهندس حاسب وبرمجيات.',
  authors: [{ name: 'Ahmed Elkhateeb', url: 'https://github.com/a7mdel5taeeb-eng' }],
  creator: 'Ahmed Elkhateeb',
  keywords: ['Ahmed Elkhateeb', 'أحمد الخطيب', 'Software Engineer', 'Web Development', 'AI Education', 'IT Solutions', 'Saudi Arabia'],
  openGraph: { type: 'website', locale: 'en_US', alternateLocale: ['ar_SA'], title: 'Ahmed Elkhateeb — Turning Ideas Into Real Solutions', description: 'Software engineering, digital experiences, and practical technology education.', siteName: 'Ahmed Elkhateeb' },
  twitter: { card: 'summary', title: 'Ahmed Elkhateeb | Computer & Software Engineer', description: 'Turning Ideas Into Real Solutions' },
  icons: { icon: '/portfolio-icon.svg' },
  robots: { index: true, follow: true },
}
export const viewport: Viewport = { themeColor: '#06111F', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr" className={`${geist.variable} ${mono.variable} ${arabic.variable}`} suppressHydrationWarning><body className="antialiased"><ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange><LanguageProvider>{children}</LanguageProvider></ThemeProvider><Analytics/></body></html>
}
