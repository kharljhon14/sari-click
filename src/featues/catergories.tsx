import { Link } from '@tanstack/react-router'
import { MoveRight } from 'lucide-react'

export default function Categories() {
  return (
    <div>
      <div className="flex justify-between mb-8 mt-12 mx-4 lg:mx-0">
        <h2 className="text-lg lg:text-xl font-semibold">Shop by Categories</h2>
        <Link
          className="flex items-center gap-2 text-sm lg:text-base hover:gap-4 transition-all duration-200"
          to="/"
        >
          <span>View All Categories</span>
          <MoveRight className="hidden lg:block" />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 h-[56rem] lg:h-[34rem]">
        <Link
          to="/"
          className="hover:scale-105 transition-all duration-200 shadow-md bg-white flex flex-col relative justify-end overflow-hidden rounded-md p-8 flex-1/4"
        >
          <img
            src="/products/monitor.png"
            className="object-contain absolute w-60 h-60 lg:w-96 lg:h-96 top-0 bottom-0 self-center -right-28 select-none pointer-events-none"
          />
          <p className="text-xl font-medium">Monitors</p>
        </Link>
        <Link
          to="/"
          className="hover:scale-105 transition-all duration-200 shadow-md bg-white flex flex-col relative justify-end overflow-hidden rounded-md p-8 flex-1/4"
        >
          <img
            src="/products/high-end-pc.png"
            className="object-contain absolute w-60 h-60 lg:w-96 lg:h-96 top-0 bottom-0 self-center -right-12 select-none pointer-events-none"
          />
          <p className="text-xl font-medium">Desktop PCs</p>
        </Link>
        <Link
          to="/"
          className="hover:scale-105 transition-all duration-200 shadow-md bg-white flex flex-col relative justify-end overflow-hidden rounded-md p-8 flex-1/4"
        >
          <img
            src="/products/gaming-laptop.png"
            className="object-contain absolute w-60 h-60 lg:w-96 lg:h-96 top-0 bottom-0 self-center -right-28 select-none pointer-events-none"
          />
          <p className="text-xl font-medium">Laptops</p>
        </Link>
        <Link
          to="/"
          className="hover:scale-105 transition-all duration-200 shadow-md bg-white flex flex-col relative justify-end overflow-hidden rounded-md p-8 flex-1/4"
        >
          <img
            src="/products/headphones.png"
            className="object-contain absolute w-60 h-60 lg:w-96 lg:h-96 top-0 bottom-0 self-center -right-12 select-none pointer-events-none"
          />
          <p className="text-xl font-medium">Headphones</p>
        </Link>
      </div>
    </div>
  )
}
