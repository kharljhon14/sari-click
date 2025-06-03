import { createFileRoute } from '@tanstack/react-router'

import Hero from '@/featues/hero'
import UserDeals from '@/featues/user-deals'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Hero />
      <UserDeals />
    </>
  )
}
