import type { PropsWithChildren } from 'react'
import Header from '@/components/Header'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="space-y-8">{children}</main>
    </div>
  )
}
