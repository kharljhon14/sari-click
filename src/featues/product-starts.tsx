import { Star } from 'lucide-react'

interface Props {
  rating: number
}

export default function ProductStars({ rating }: Props) {
  const stars = new Array(Math.ceil(rating)).fill(null)

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {stars.map((_, index) => (
        <Star key={index} fill="#e9b209" className="w-4 h-4" />
      ))}
    </div>
  )
}
