import { AspectRatio } from './ui/aspect-ratio'
import { Card, CardContent } from './ui/card'
import type { Product } from '@/types/product'
import ProductStars from '@/featues/product-starts'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Card className="hover:scale-105 transition-transform duration-200 cursor-pointer w-full">
      <CardContent className="p-4 flex flex-col justify-between gap-4 h-full">
        <AspectRatio ratio={4 / 3} className="w-full">
          <img
            className="w-full h-full object-contain select-none pointer-events-none"
            src={product.thumbnail}
            alt={product.title}
          />
        </AspectRatio>

        <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-xs">{product.brand}</p>
          <p className="text-sm line-clamp-2">{product.title}</p>

          <div className="flex gap-4 items-center">
            <ProductStars rating={product.rating} />
            <p className="text-xs text-gray-400 whitespace-nowrap">
              {product.reviews.length} reviews
            </p>
          </div>

          <p className="text-xl font-bold">${product.price}</p>
        </div>
      </CardContent>
    </Card>
  )
}
