import StarRating from './StarRating'
import QuantitySelector from './QuantitySelector'
import AddToCartButton from './AddToCartButton'
import PaymentButtons from './PaymentButtons'
import WhatsAppButton from './WhatsAppButton'

interface Product {
  id: string
  title: string
  shortDescription: string
  price: number
  originalPrice?: number
  discount?: number
  stock: number
  rating: number
  totalRatings: number
}

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-base-content mb-2">
          {product.title}
        </h1>
        <p className="text-base-content/70">
          {product.shortDescription}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <StarRating rating={product.rating} />
        <span className="text-sm text-base-content/70">
          ({product.totalRatings} valoraciones)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-base-content">
          ${product.price}
        </span>
        {product.originalPrice && product.originalPrice > product.price && (
          <>
            <span className="text-lg text-base-content/50 line-through">
              ${product.originalPrice}
            </span>
            {product.discount && (
              <span className="badge badge-error text-white">
                {product.discount}% menos
              </span>
            )}
          </>
        )}
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <QuantitySelector stock={product.stock} />
          <span className="text-sm text-base-content/70">
            Disponible({product.stock})
          </span>
        </div>

        <AddToCartButton
          productId={product.id}
          stock={product.stock}
          className="btn btn-primary btn-wide"
        />
      </div>

      {/* Stock Status */}
      <div className="p-4 bg-base-200 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="font-medium">Estado del stock:</span>
          <span className={`badge ${product.stock > 10
              ? 'badge-success'
              : product.stock > 0
                ? 'badge-warning'
                : 'badge-error'
            }`}>
            {product.stock > 10
              ? 'En stock'
              : product.stock > 0
                ? 'Pocas unidades'
                : 'Agotado'
            }
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <WhatsAppButton
          productId={product.id}
          productName={product.title}
          price={product.price}
        />
        <PaymentButtons
          productId={product.id}
          productName={product.title}
          price={product.price}
        />
      </div>
    </div>
  )
} 