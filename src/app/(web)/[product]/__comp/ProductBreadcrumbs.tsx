import Link from 'next/link'

interface ProductBreadcrumbsProps {
  productTitle: string
}

export default function ProductBreadcrumbs({ productTitle }: ProductBreadcrumbsProps) {
  return (
    <div className="breadcrumbs text-sm mb-4">
      <ul>
        <li>
          <Link href="/" className="text-base-content/70 hover:text-base-content">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4" />
            </svg>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/products" className="text-base-content/70 hover:text-base-content">
            Productos
          </Link>
        </li>
        <li>
          <span className="text-base-content font-medium">
            {productTitle}
          </span>
        </li>
      </ul>
    </div>
  )
} 