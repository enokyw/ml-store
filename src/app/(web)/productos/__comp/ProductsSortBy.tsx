'use client';

export type SortOption = 
  | 'featured'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc'
  | 'name-desc'
  | 'discount-desc'
  | 'newest';

interface ProductsSortByProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const SORT_OPTIONS = [
  { value: 'featured' as const, label: 'Destacados' },
  { value: 'price-asc' as const, label: 'Precio: Menor a Mayor' },
  { value: 'price-desc' as const, label: 'Precio: Mayor a Menor' },
  { value: 'name-asc' as const, label: 'Nombre: A-Z' },
  { value: 'name-desc' as const, label: 'Nombre: Z-A' },
  { value: 'discount-desc' as const, label: 'Mayor Descuento' },
  { value: 'newest' as const, label: 'Más Recientes' },
];

export function ProductsSortBy({ sortBy, onSortChange }: ProductsSortByProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-base-content/70 whitespace-nowrap">
        Ordenar por:
      </span>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="select select-bordered select-sm w-full max-w-xs"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
} 