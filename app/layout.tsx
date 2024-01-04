import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const globalFont = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Expendee',
  description: 'A beautiful Expense Tracker that stores data in cloud and syncs it across devices.',
}

type RooyLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RooyLayoutProps) {
  return <html lang="en">
    <body className={globalFont.className}>{children}</body>
  </html>
}
