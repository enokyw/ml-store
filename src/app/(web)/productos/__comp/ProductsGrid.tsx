'use client';

import { ProductCard } from '../../__comp/ProductCard';

export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  hasDiscount?: boolean;
  installments?: {
    count: number;
    amount: number;
  };
  coupon?: string;
  seller: string;
  isNew?: boolean;
  features?: string[];
  category?: string;
}

interface ProductsGridProps {
  products: Product[];
  loading?: boolean;
}

export function ProductsGrid({ products, loading = false }: ProductsGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="card bg-base-100 shadow-lg border border-base-200">
            <figure className="skeleton h-48 w-full"></figure>
            <div className="card-body p-4">
              <div className="skeleton h-4 w-20 mb-2"></div>
              <div className="skeleton h-6 w-full mb-2"></div>
              <div className="skeleton h-4 w-3/4 mb-4"></div>
              <div className="skeleton h-8 w-24 mb-2"></div>
              <div className="skeleton h-4 w-32 mb-4"></div>
              <div className="flex gap-2">
                <div className="skeleton h-8 flex-1"></div>
                <div className="skeleton h-8 flex-1"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4 opacity-20">🔍</div>
        <h3 className="text-2xl font-bold mb-2">No se encontraron productos</h3>
        <p className="text-base-content/70 mb-4">
          Intenta ajustar los filtros o términos de búsqueda
        </p>
        <button 
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Limpiar Filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
} 