export default function ProductLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs Skeleton */}
      <div className="mb-6">
        <div className="flex items-center space-x-2">
          <div className="skeleton h-4 w-12"></div>
          <span className="text-base-content/40">/</span>
          <div className="skeleton h-4 w-16"></div>
          <span className="text-base-content/40">/</span>
          <div className="skeleton h-4 w-32"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Gallery Skeleton */}
        <div className="space-y-4">
          <div className="skeleton aspect-square w-full rounded-lg"></div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="skeleton aspect-square rounded-lg"></div>
            ))}
          </div>
        </div>

        {/* Product Info Skeleton */}
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <div className="skeleton h-8 w-3/4"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-2/3"></div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="skeleton h-5 w-32"></div>
            <div className="skeleton h-4 w-24"></div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <div className="skeleton h-8 w-20"></div>
            <div className="skeleton h-6 w-16"></div>
            <div className="skeleton h-6 w-16"></div>
          </div>

          {/* Quantity and Button */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="skeleton h-10 w-32"></div>
              <div className="skeleton h-4 w-20"></div>
            </div>
            <div className="skeleton h-12 w-48"></div>
          </div>

          {/* Stock Status */}
          <div className="skeleton h-16 w-full rounded-lg"></div>
        </div>
      </div>

      {/* Description and Specs Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Features and Description */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="skeleton h-6 w-20"></div>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="skeleton h-4 w-full"></div>
            ))}
          </div>
          
          <div className="space-y-4">
            <div className="skeleton h-6 w-24"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-3/4"></div>
          </div>
        </div>

        {/* Specifications */}
        <div className="space-y-4">
          <div className="skeleton h-6 w-32"></div>
          <div className="space-y-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton h-10 w-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 