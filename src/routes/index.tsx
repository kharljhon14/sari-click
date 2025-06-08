import { createFileRoute } from '@tanstack/react-router'

import Hero from '@/featues/hero'
import UserDeals from '@/featues/user-deals'
import Categories from '@/featues/catergories'
import Promos from '@/featues/promos'

import ProductList from '@/featues/product-list'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Hero />
      <UserDeals />
      <Categories />
      <Promos />
      <ProductList title="Last viewed" />
    </>
  )
}
