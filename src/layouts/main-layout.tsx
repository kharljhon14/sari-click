import type { PropsWithChildren } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/footer'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="my-8 space-y-8 mx-4 lg:mx-0">{children}</main>
      <Footer />
    </div>
  )
}
