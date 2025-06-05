import { createFileRoute } from '@tanstack/react-router'

import Hero from '@/featues/hero'
import UserDeals from '@/featues/user-deals'
import Categories from '@/featues/catergories'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Hero />
      <UserDeals />
      <Categories />
    </>
  )
}
