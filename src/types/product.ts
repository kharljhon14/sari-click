export interface Review {
  rating: 3
  comment: string
  reviewerName: string
  reviewerEmail: string
}

export interface Product {
  id: number
  title: string
  price: number
  rating: number
  thumbnail: string
  reviews: Array<Review>
  brand: string
}
