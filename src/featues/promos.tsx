import { Link } from '@tanstack/react-router'
import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Promos() {
  return (
    <div className="flex-col flex gap-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-orange-50 shadow-md flex items-center justify-between p-6 flex-1/2 rounded-md relative overflow-hidden">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl lg:text-2xl">Tech Essentials</h2>
            <p className="lg:w-md text-sm lg:text-base">
              Gear up with must-have gadgets and accessories — from cables to
              controllers, all at great prices.
            </p>
            <Link
              className="flex gap-2 mt-6 items-center hover:gap-4 transition-all duration-200 w-fit"
              to="/"
            >
              See more <MoveRight />
            </Link>
          </div>
          <div className="absolute hidden lg:block w-72 h-full -right-28 top-0 bottom-0">
            <img
              src="/products/controller.png"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="bg-orange-50 shadow-md flex items-center justify-between p-6 flex-1/2 rounded-md relative overflow-hidden">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-lg lg:text-2xl">Deals & Promotions</h2>
            <p className="lg:w-md text-sm lg:text-base">
              Save big on the latest tech! Exclusive discounts on popular
              gadgets, limited-time bundles, and more.
            </p>
            <Link
              className="flex gap-2 mt-6 items-center hover:gap-4 transition-all duration-200 w-fit"
              to="/"
            >
              See more <MoveRight />
            </Link>
          </div>
          <div className="absolute hidden lg:block w-72 h-full -right-28 top-0 bottom-0">
            <img
              src="/products/clock.png"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md flex justify-center lg:justify-end items-center p-8 lg:p-18 rounded-md relative overflow-hidden">
        <div className=" flex flex-col gap-y-2 z-10 lg:bg-gray-100/50 bg-gray-100/80 p-6 shadow rounded-md">
          <h2 className="text-3xl lg:text-7xl">Fast Delivery</h2>
          <p className="lg:w-md">
            Get your tech gear delivered fast and hassle-free. We ship
            nationwide with real-time tracking and secure packaging.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link className="flex gap-2 mt-6 self-end items-center" to="/">
              View more <MoveRight />
            </Link>
          </Button>
        </div>
        <div className="absolute h-full w-full flex items-start justify-start">
          <img
            src="/products/dog.png"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
