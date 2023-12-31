import type { Metadata } from 'next'
import { Inter, Ubuntu_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ubuntuMono = Ubuntu_Mono({ subsets: ['latin'], weight: '400', variable: '--font-ubuntu' })

export const metadata: Metadata = {
  title: 'Ask SQL',
  description: 'Generated sqls to AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ubuntuMono.variable}`}>
      <body className="bg-blueberry">
        {children}
      </body>
    </html>
  )
}
