import { Link } from '@tanstack/react-router'
import { Heart, MenuIcon, Search, ShoppingCart, User } from 'lucide-react'
import { AspectRatio } from './ui/aspect-ratio'
import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export default function Header() {
  return (
    <header className="flex lg:block justify-between items-center px-6 py-4 gap-2 bg-white text-black shadow-md rounded-md lg:my-8">
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

        <nav className="hidden lg:flex gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/">All</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/">Today's Deals</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/">Gift Cards</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/">Registry & Gifting</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden lg:flex ml-auto gap-5">
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

      {/* Mobile nav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Link className="w-24 flex items-center justify-center" to="/">
                <AspectRatio className="w-36" ratio={2 / 1}>
                  <img
                    src="sariClick.png"
                    alt="Sari Click Logo"
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
              </Link>
            </SheetTitle>
            <SheetDescription>
              Order tech essentials from your local store, fast and hassle-free.
            </SheetDescription>
          </SheetHeader>
          <div className="p-4">
            <nav className="flex flex-col gap-4 text-xl">
              <Link className="hover:underline" to="/">
                All
              </Link>
              <Link className="hover:underline" to="/">
                Today's Deals
              </Link>
              <Link className="hover:underline" to="/">
                Gift Cards
              </Link>
              <Link className="hover:underline" to="/">
                Registry & Gifting
              </Link>
            </nav>
            <div className="flex gap-5 mt-8">
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
        </SheetContent>
      </Sheet>
    </header>
  )
}
