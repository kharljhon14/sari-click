import { Link } from '@tanstack/react-router'
import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import { AspectRatio } from './ui/aspect-ratio'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="px-6 py-4 gap-2 bg-white text-black justify-between">
      <div className="flex items-center gap-8">
        <Link className="w-24 flex items-center justify-center" to="/">
          <AspectRatio className="w-24" ratio={2 / 1}>
            <img
              src="sariClick.png"
              alt="Sari Click Logo"
              className="object-contain w-full h-full"
            />
          </AspectRatio>
        </Link>

        <nav className="flex gap-4">
          <Link to="/">All</Link>
          <Link to="/">Today's Deals</Link>
          <Link to="/">Gift Cards</Link>
          <Link to="/">Registry & Gifting</Link>
        </nav>
        <div className="ml-auto flex gap-5">
          <Button variant="outline" className="flex items-center gap-2">
            <Search />
            <span>Search</span>
          </Button>
          <Button variant="outline" size="icon">
            <User />
          </Button>
          <Button variant="outline" size="icon">
            <Heart />
          </Button>
          <Button size="icon">
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </header>
  )
}
