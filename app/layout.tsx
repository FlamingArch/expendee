import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const globalFont = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Expendee',
  description: 'A beautiful Expense Tracker that stores data in cloud and syncs it across devices.',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <html lang="en">
    <body className={globalFont.className + " text-black dark:text-white bg-black flex h-screen w-screen items-stretch font-medium"}>{children}</body>
  </html>
}
