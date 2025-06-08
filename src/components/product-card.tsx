import { AspectRatio } from './ui/aspect-ratio'
import { Card, CardContent } from './ui/card'
import type { Product } from '@/types/product'
import ProductStars from '@/featues/product-starts'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Card className="flex-1/4 flex justify-center flex-col h-96 hover:scale-105 transition-transform duration-150 cursor-pointer">
      <CardContent>
        <AspectRatio ratio={1 / 1}>
          <img
            className="w-full h-full object-contain select-none pointer-events-none"
            src={product.thumbnail}
            alt={product.title}
          />
        </AspectRatio>
        <div className="flex flex-col justify-between gap-2">
          <p className="text-gray-400 text-xs">{product.brand}</p>
          <p className="text-sm">{product.title}</p>
          <div className="flex gap-4">
            <ProductStars rating={product.rating} />
            <p className="text-xs text-gray-400">
              {product.reviews.length} reviews
            </p>
          </div>

          <p className="text-xl font-bold">${product.price}</p>
        </div>
      </CardContent>
    </Card>
  )
}
