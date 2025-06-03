import { Link } from '@tanstack/react-router'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function UserDeals() {
  return (
    <div className="bg-orange-50 p-8 rounded-md flex items-center justify-between gap-8">
      <div className="flex items-center gap-6 flex-1/4">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/kharljhon14.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-2xl">Hi Karl recommendation for you</p>
        </div>
      </div>

      <Link
        to="/"
        className="flex items-center gap-2 p-2 flex-1/4 border-b-2 hover:border-orange-300 border-transparent transition-colors duration-300"
      >
        <img
          src="/products/box.png"
          className=" object-contain w-36 h-36 select-none pointer-events-none"
        />
        <div>
          <p className="text-2xl">Your orders</p>
          <p className="font-light text-gray-500">View your orders</p>
        </div>
      </Link>

      <Link
        to="/"
        className="flex items-center gap-2 p-2 flex-1/4 border-b-2 hover:border-orange-300 border-transparent transition-colors duration-300"
      >
        <img
          src="/products/gaming-mouse.png"
          className=" object-contain w-36 h-36 select-none pointer-events-none"
        />
        <div>
          <p className="text-2xl">Our Favorites</p>
          <p className="font-light text-gray-500">Popular items</p>
        </div>
      </Link>

      <Link
        to="/"
        className="flex items-center gap-2 p-2 flex-1/4 border-b-2 hover:border-orange-300 border-transparent transition-colors duration-300"
      >
        <img
          src="/products/pc.png"
          className=" object-contain w-36 h-36 select-none pointer-events-none"
        />
        <div>
          <p className="text-2xl">New Release</p>
          <p className="font-light text-gray-500">Get 20% Off</p>
        </div>
      </Link>
    </div>
  )
}
