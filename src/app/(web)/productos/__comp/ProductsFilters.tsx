'use client';

import { useState } from 'react';

export interface FilterState {
  categories: string[];
  brands: string[];
  priceRange: {
    min: number;
    max: number;
  };
}

interface ProductsFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  availableCategories: string[];
  availableBrands: string[];
  priceRange: { min: number; max: number };
}

export function ProductsFilters({
  filters,
  onFiltersChange,
  availableCategories,
  availableBrands,
  priceRange
}: ProductsFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked 
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    onFiltersChange({
      ...filters,
      categories: newCategories
    });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked 
      ? [...filters.brands, brand]
      : filters.brands.filter(b => b !== brand);
    
    onFiltersChange({
      ...filters,
      brands: newBrands
    });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    onFiltersChange({
      ...filters,
      priceRange: { min, max }
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      categories: [],
      brands: [],
      priceRange: { min: priceRange.min, max: priceRange.max }
    });
  };

  const hasActiveFilters = filters.categories.length > 0 || 
                          filters.brands.length > 0 || 
                          filters.priceRange.min > priceRange.min || 
                          filters.priceRange.max < priceRange.max;

  return (
    <div className="w-full">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-outline w-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
          </svg>
          Filtros
          {hasActiveFilters && (
            <div className="badge badge-primary ml-2">
              {filters.categories.length + filters.brands.length}
            </div>
          )}
        </button>
      </div>

      {/* Filters Panel */}
      <div className={`${isOpen || 'lg:block'} ${!isOpen && 'hidden'} bg-base-100 p-4 rounded-lg border border-base-200`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Filtros</h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="btn btn-ghost btn-sm text-primary"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        <div className="space-y-6">
          {/* Categories Filter */}
          <div>
            <h4 className="font-medium mb-3">Categorías</h4>
            <div className="space-y-2">
              {availableCategories.map((category) => (
                <label key={category} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={filters.categories.includes(category)}
                    onChange={(e) => handleCategoryChange(category, e.target.checked)}
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brands Filter */}
          <div>
            <h4 className="font-medium mb-3">Marcas</h4>
            <div className="space-y-2">
              {availableBrands.map((brand) => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={filters.brands.includes(brand)}
                    onChange={(e) => handleBrandChange(brand, e.target.checked)}
                  />
                  <span className="text-sm">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h4 className="font-medium mb-3">Rango de Precio</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="label">
                    <span className="label-text text-xs">Mínimo</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered input-sm w-full"
                    value={filters.priceRange.min}
                    min={priceRange.min}
                    max={priceRange.max}
                    onChange={(e) => handlePriceRangeChange(
                      Number(e.target.value), 
                      filters.priceRange.max
                    )}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xs">Máximo</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered input-sm w-full"
                    value={filters.priceRange.max}
                    min={priceRange.min}
                    max={priceRange.max}
                    onChange={(e) => handlePriceRangeChange(
                      filters.priceRange.min, 
                      Number(e.target.value)
                    )}
                  />
                </div>
              </div>
              
              <div className="text-center text-sm text-base-content/60">
                S/ {filters.priceRange.min.toLocaleString()} - S/ {filters.priceRange.max.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Close button for mobile */}
        <div className="lg:hidden mt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-primary w-full"
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  );
} 