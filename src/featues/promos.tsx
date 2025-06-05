import { Link } from '@tanstack/react-router'
import { MoveRight } from 'lucide-react'

export default function Promos() {
  return (
    <div className="flex gap-6">
      <div className="bg-orange-50 shadow-md flex items-center justify-between p-6 flex-1/2 rounded-md relative overflow-hidden">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl">Tech Essentials</h2>
          <p className="w-md">
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
        <div className="absolute w-72 h-full -right-28 top-0 bottom-0">
          <img
            src="/products/controller.png"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="bg-orange-50 shadow-md flex items-center justify-between p-6 flex-1/2 rounded-md relative overflow-hidden">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl">Deals & Promotions</h2>
          <p className="w-md">
            Save big on the latest tech! Exclusive discounts on popular gadgets,
            limited-time bundles, and more.
          </p>
          <Link
            className="flex gap-2 mt-6 items-center hover:gap-4 transition-all duration-200 w-fit"
            to="/"
          >
            See more <MoveRight />
          </Link>
        </div>
        <div className="absolute w-72 h-full -right-28 top-0 bottom-0">
          <img
            src="/products/clock.png"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
