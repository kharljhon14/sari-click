import Autoplay from 'embla-carousel-autoplay'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Star } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 60,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="flex items-center justify-evenly h-[36rem] p-10 rounded-md bg-gray-100">
            <div className="w-full flex flex-col gap-8 p-4">
              <h1 className="font-semibold text-8xl">Upgrade Your Tech Game</h1>
              <p className="text-lg font-montserrat text-gray-700">
                Explore a curated selection of cutting-edge computers and
                accessories. Whether you're working, creating, or gaming, find
                the perfect gear to power every move.
              </p>
              <div>
                <Button size="lg" variant="outline">
                  Shop the Collection
                </Button>
              </div>
            </div>

            <div className="w-full relative">
              <AspectRatio
                className="flex items-center justify-center "
                ratio={16 / 9}
              >
                <img
                  src="/products/headphones.png"
                  alt="Premium headphones"
                  className="object-contain z-10 ml-28 h-[32rem] select-none"
                />
              </AspectRatio>
              <div className="absolute bg-white rounded-md flex flex-col gap-2 p-8 w-xs top-32 shadow-lg text-sm text-gray-800">
                <h3 className="text-lg font-semibold">Sony Headphone X23</h3>
                <p className="text-sm text-gray-600">
                  Engineered for performance. Designed for style.
                </p>
                <div className="text-xl font-bold text-gray-900">$99.99</div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star fill="#e9b209" className="w-4 h-4" />
                  <Star fill="#e9b209" className="w-4 h-4" />
                  <Star fill="#e9b209" className="w-4 h-4" />
                  <Star fill="#e9b209" className="w-4 h-4" />
                  <Star fill="#e9b209" className="w-4 h-4" />
                </div>
                <div>
                  <Button>View more</Button>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="flex items-center justify-around h-[36rem] p-10 rounded-md bg-gray-50">
            <div className=" flex flex-col gap-6">
              <h1 className="font-semibold text-7xl leading-tight">
                Fresh Tech, <br /> Just In
              </h1>
              <p className="text-lg font-montserrat text-gray-700 max-w-xl">
                Discover our latest arrivals. Innovative, stylish, and built for
                the future — see what's new in store.
              </p>
              <div>
                <Button size="lg" variant="outline">
                  Explore New Arrivals
                </Button>
              </div>
            </div>

            <div className="h-full flex flex-col justify-between">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/products/laptop.png"
                  alt="Premium headphones"
                  className="object-contain w-full h-[28rem] select-none"
                />
              </AspectRatio>
              <div className="bg-white p-6 rounded-md shadow-md text-center text-sm text-gray-500">
                New drops weekly · Curated for creators · Fast shipping
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="flex items-center justify-evenly h-[36rem] p-10 rounded-md bg-gradient-to-r from-green-50 to-green-100">
            <div className="w-3/5 flex flex-col gap-6 pr-10">
              <h1 className="font-bold text-7xl leading-tight text-green-800">
                Big Tech Savings
              </h1>
              <p className="text-lg font-montserrat text-green-700 max-w-2xl">
                Don't miss out on unbeatable prices for a limited time only.
                Discover deep discounts on laptops, accessories, and more —
                while stocks last.
              </p>
              <div>
                <Button
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700"
                >
                  Grab the Deal
                </Button>
              </div>
            </div>
            <div className="flex self-center justify-center">
              <div className="bg-white px-8 py-6 rounded-xl shadow-xl text-center max-w-xs border border-green-200">
                <div className="text-5xl text-green-800 font-extrabold mb-2">
                  50% OFF
                </div>
                <div className="text-sm mb-4 text-green-600">
                  Limited stock on select tech items
                </div>
                <ul className="text-left text-green-700 text-sm mb-6 list-disc list-inside space-y-1">
                  <li>Fast & free shipping</li>
                  <li>Trusted by 10k+ customers</li>
                  <li>Secure checkout guaranteed</li>
                </ul>
                <a
                  href="#deals"
                  className="inline-block bg-green-600 text-white text-sm font-medium rounded-md px-4 py-2 hover:bg-green-700 transition"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="flex items-center justify-center h-[36rem] p-10 rounded-md bg-yellow-50">
            <div className="text-center max-w-2xl flex flex-col items-center gap-6">
              <h1 className="font-semibold text-8xl text-yellow-700">
                Member Exclusive
              </h1>
              <p className="text-lg font-montserrat text-yellow-900">
                Unlock early access to product drops, special pricing, and
                members-only events. Sign up and save more.
              </p>
              <Button size="lg" variant="outline">
                Join Now
              </Button>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
