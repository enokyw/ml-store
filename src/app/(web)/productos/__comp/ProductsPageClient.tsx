'use client';

import {
	ProductsSearchBar,
	ProductsFilters,
	ProductsSortBy,
	ProductsGrid,
	ProductsPagination,
	ProductsHeroCarousel
} from './index';
import { useProductsLogic } from './useProductsLogic';

export function ProductsPageClient() {
	const {
		searchQuery,
		sortBy,
		currentPage,
		filters,
		loading,
		currentProducts,
		totalProducts,
		totalPages,
		availableOptions,
		handleSearch,
		handleFiltersChange,
		handleSortChange,
		handlePageChange,
		resetFilters
	} = useProductsLogic();

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex flex-col lg:flex-row">
				{/* Sidebar - Filters */}
				<aside className="lg:w-64 flex-shrink-0">
					<div className="sticky top-20 max-h-[calc(100vh-2rem)] overflow-y-auto">
						<ProductsFilters
							filters={filters}
							onFiltersChange={handleFiltersChange}
							availableCategories={availableOptions.categories}
							availableBrands={availableOptions.brands}
							priceRange={availableOptions.priceRange}
						/>
					</div>
				</aside>

				{/* Main Content */}
				<main className="flex-1">
					{/* Controls Bar */}
					<div className="flex flex-col justify-between items-start gap-4 mb-6">
						{/* Search Bar */}
						<div className="flex justify-center mb-2 w-full sticky top-20 z-10">
							<ProductsSearchBar
								onSearch={handleSearch}
								initialValue={searchQuery}
							/>
						</div>
						{/* Product carousel */}
						<ProductsHeroCarousel />
						<div className="flex gap-4 justify-between w-full">
							<div className="flex items-center gap-4">
								<span className="text-sm text-base-content/70">
									{totalProducts} producto{totalProducts !== 1 ? 's' : ''} encontrado{totalProducts !== 1 ? 's' : ''}
								</span>
								{(filters.categories.length > 0 || filters.brands.length > 0 || searchQuery) && (
									<button
										onClick={resetFilters}
										className="btn btn-ghost btn-sm text-primary"
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
										Limpiar todo
									</button>
								)}
							</div>
							{/* Sort by */}
							<ProductsSortBy
								sortBy={sortBy}
								onSortChange={handleSortChange}
							/>
						</div>
					</div>

					{/* Active Filters */}
					{(filters.categories.length > 0 || filters.brands.length > 0) && (
						<div className="flex flex-wrap gap-2 mb-6">
							{filters.categories.map((category) => (
								<div key={category} className="badge badge-primary gap-2">
									{category}
									<button
										onClick={() => handleFiltersChange({
											...filters,
											categories: filters.categories.filter(c => c !== category)
										})}
										className="hover:bg-primary-content/20 rounded-full p-0.5"
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								</div>
							))}
							{filters.brands.map((brand) => (
								<div key={brand} className="badge badge-secondary gap-2">
									{brand}
									<button
										onClick={() => handleFiltersChange({
											...filters,
											brands: filters.brands.filter(b => b !== brand)
										})}
										className="hover:bg-secondary-content/20 rounded-full p-0.5"
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								</div>
							))}
						</div>
					)}

					{/* Products Grid */}
					<ProductsGrid
						products={currentProducts}
						loading={loading}
					/>

					{/* Pagination */}
					<ProductsPagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</main>
			</div>
		</div>
	);
} 