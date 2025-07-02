export interface Product {
  id: string
  slug: string
  title: string
  shortDescription: string
  price: number
  originalPrice?: number
  discount?: number
  stock: number
  rating: number
  totalRatings: number
  images: string[]
  features: string[]
  description: string
  specifications: Specification[]
}

export interface Specification {
  label: string
  value: string
}

export interface ProductGalleryProps {
  images: string[]
  title: string
}

export interface ProductInfoProps {
  product: Pick<Product, 'id' | 'title' | 'shortDescription' | 'price' | 'originalPrice' | 'discount' | 'stock' | 'rating' | 'totalRatings'>
}

export interface StarRatingProps {
  rating: number
  maxStars?: number
}

export interface QuantitySelectorProps {
  stock: number
  initialQuantity?: number
  onQuantityChange?: (quantity: number) => void
}

export interface AddToCartButtonProps {
  productId: string
  stock: number
  className?: string
}

export interface ProductDescriptionProps {
  description: string
  features: string[]
}

export interface ProductSpecificationsProps {
  specifications: Specification[]
}

export interface ProductBreadcrumbsProps {
  productTitle: string
} 