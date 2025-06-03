import type { PropsWithChildren } from 'react'
import Header from '@/components/Header'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="container mx-auto">
      <Header />
      <main>{children}</main>
    </div>
  )
}
