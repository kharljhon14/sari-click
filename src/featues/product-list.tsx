import { MoveRight } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import type { Product } from '@/types/product'
import ProductCard from '@/components/product-card'

interface Props {
  title?: string
  url: string
}

export default function ProductList({ title, url }: Props) {
  const { isPending, error, data } = useQuery<{ products: Array<Product> }>({
    queryKey: ['products', url],
    queryFn: () => fetch(url).then((res) => res.json()),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <div className="mb-8 mt-12 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link
          className="ml-auto flex gap-2 items-center hover:gap-4 transition-all duration-200 w-fit"
          to="/"
        >
          View more <MoveRight />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 grid-auto-flow-row gap-4">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
