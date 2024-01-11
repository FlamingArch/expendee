import Scaffold from '@/views/Scaffold'
import type { Metadata } from 'next'
import './globals.scss'
import Sidebar from '@/views/Sidebar'

export const metadata: Metadata = {
  title: 'Expendee',
  description: 'A beautiful Expense Tracker that stores data in cloud and syncs it across devices.',
}

type LayoutRootProps = {
  children: React.ReactNode
}

export default function LayoutRoot(props: LayoutRootProps) {
  return <Scaffold>
    {props.children}
  </Scaffold>
}
