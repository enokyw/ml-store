import ProductRecommendedCarousel, { sampleRelatedProducts } from "./ProductRecommendedCarousel"

interface ProductDescriptionProps {
  description: string
  features: string[]
}

export default function ProductDescription({ description, features }: ProductDescriptionProps) {
  return (
    <div className="space-y-6">
      {/* Features */}
      <div>
        <h3 className="text-xl font-semibold text-base-content mb-4">
          Features
        </h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-success mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base-content/80">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Recommended Products */}
      <div className="bg-base-50 -mx-4 px-4 py-6 rounded-xl">
            <ProductRecommendedCarousel 
                products={sampleRelatedProducts}
            />
        </div>
      {/* Description */}
      <div>
        <h3 className="text-xl font-semibold text-base-content mb-4">
          Description
        </h3>
        <div className="prose prose-sm max-w-none">
          <p className="text-base-content/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
} 