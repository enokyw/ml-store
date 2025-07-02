'use client';

import { useState, useMemo, useCallback } from 'react';
import { Product } from './ProductsGrid';
import { FilterState } from './ProductsFilters';
import { SortOption } from './ProductsSortBy';

// Mock data para los productos
const MOCK_PRODUCTS: Product[] = [
  {
    id: 'laptop-gaming-pro',
    name: 'Laptop Gaming Pro - Intel Core i7 16GB RAM',
    brand: 'TechPro',
    image: 'https://picsum.photos/300/250?random=laptop',
    originalPrice: 500.00,
    salePrice: 400.00,
    discount: 20,
    hasDiscount: true,
    installments: { count: 6, amount: 66.67 },
    coupon: 'GAMING20',
    seller: 'ML Store',
    features: ['Intel i7', '16GB RAM', 'RTX 4060'],
    category: 'Tecnología',
    isNew: true
  },
  {
    id: '1',
    name: 'Freidora de Aire OSTER 4L QG31AR09 Touch Negro',
    brand: 'Oster',
    image: 'https://picsum.photos/300/250?random=1',
    originalPrice: 399.00,
    salePrice: 299.00,
    discount: 25,
    hasDiscount: true,
    installments: { count: 3, amount: 99.67 },
    coupon: 'ELECTRO',
    seller: 'Plaza Vea',
    features: ['Touch', '4L', 'Antiadherente'],
    category: 'Electrodomésticos'
  },
  {
    id: '2',
    name: 'Aspiradora vertical con cable Power Speed (STN13)',
    brand: 'Electrolux',
    image: 'https://picsum.photos/300/250?random=2',
    originalPrice: 349.00,
    salePrice: 86.33,
    discount: 75,
    hasDiscount: true,
    coupon: 'ELECTRO',
    seller: 'Electrolux',
    features: ['Vertical', 'Cable', 'Potente'],
    category: 'Electrodomésticos'
  },
  {
    id: '3',
    name: 'Lavaseca Samsung AI Control WD12T504DBW/PE 12.5KG',
    brand: 'Samsung',
    image: 'https://picsum.photos/300/250?random=3',
    originalPrice: 2899.00,
    salePrice: 2049.04,
    discount: 29,
    hasDiscount: true,
    coupon: 'AMEX2025',
    seller: 'Oechsle',
    features: ['AI Control', '12.5KG', 'Inverter'],
    category: 'Electrodomésticos'
  },
  {
    id: '4',
    name: 'Cocina Mabe 4 Hornillas CMP6044P-0 GAS',
    brand: 'Mabe',
    image: 'https://picsum.photos/300/250?random=4',
    originalPrice: 1099.00,
    salePrice: 769.04,
    discount: 30,
    hasDiscount: true,
    coupon: 'AMEX2025',
    seller: 'Oechsle',
    features: ['4 Hornillas', 'Gas', 'Horno'],
    category: 'Electrodomésticos'
  },
  {
    id: '5',
    name: 'Refrigerador Frost Bott Freezer 166L',
    brand: 'LG',
    image: 'https://picsum.photos/300/250?random=5',
    originalPrice: 1299.00,
    salePrice: 1106.55,
    discount: 15,
    hasDiscount: true,
    installments: { count: 6, amount: 184.43 },
    seller: 'Plaza Vea',
    features: ['166L', 'Frost', 'Eficiente'],
    category: 'Electrodomésticos'
  },
  {
    id: '6',
    name: 'Aspiradora de Tanque BLACKLINE 1.5L 17K Azul',
    brand: 'Blackline',
    image: 'https://picsum.photos/300/250?random=6',
    originalPrice: 299.00,
    salePrice: 96.03,
    discount: 68,
    hasDiscount: true,
    seller: 'Plaza Vea',
    features: ['1.5L', '17K', 'Compacta'],
    category: 'Electrodomésticos'
  },
  {
    id: '7',
    name: 'Licuadora Oster Beehive 4 Velocidades Clásica',
    brand: 'Oster',
    image: 'https://picsum.photos/300/250?random=7',
    originalPrice: 159.00,
    salePrice: 129.00,
    discount: 19,
    hasDiscount: true,
    coupon: 'ELECTRO',
    seller: 'Sodimac',
    features: ['4 Velocidades', 'Clásica', 'Duradera'],
    category: 'Electrodomésticos'
  },
  {
    id: '8',
    name: 'Microondas Panasonic 25L Digital Plateado',
    brand: 'Panasonic',
    image: 'https://picsum.photos/300/250?random=8',
    originalPrice: 449.00,
    salePrice: 359.00,
    discount: 20,
    hasDiscount: true,
    installments: { count: 3, amount: 119.67 },
    coupon: 'ELECTRO',
    seller: 'Falabella',
    features: ['25L', 'Digital', 'Plateado'],
    category: 'Electrodomésticos'
  },
  {
    id: '9',
    name: 'iPhone 15 Pro Max 256GB',
    brand: 'Apple',
    image: 'https://picsum.photos/300/250?random=9',
    originalPrice: 4999.00,
    salePrice: 4499.00,
    discount: 10,
    hasDiscount: true,
    installments: { count: 12, amount: 374.92 },
    seller: 'iStore',
    features: ['256GB', 'Pro Max', 'Titanium'],
    category: 'Tecnología',
    isNew: true
  },
  {
    id: '10',
    name: 'Televisor Samsung 55" 4K Smart TV',
    brand: 'Samsung',
    image: 'https://picsum.photos/300/250?random=10',
    originalPrice: 2299.00,
    salePrice: 1899.00,
    discount: 17,
    hasDiscount: true,
    installments: { count: 6, amount: 316.50 },
    seller: 'Ripley',
    features: ['55"', '4K', 'Smart TV'],
    category: 'Tecnología'
  },
  {
    id: '11',
    name: 'Silla Gaming RGB con Luces LED',
    brand: 'GameMax',
    image: 'https://picsum.photos/300/250?random=11',
    originalPrice: 899.00,
    salePrice: 699.00,
    discount: 22,
    hasDiscount: true,
    seller: 'Gaming Store',
    features: ['RGB', 'LED', 'Ergonómica'],
    category: 'Muebles'
  },
  {
    id: '12',
    name: 'Mesa de Trabajo Ajustable en Altura',
    brand: 'OfficeMax',
    image: 'https://picsum.photos/300/250?random=12',
    originalPrice: 1299.00,
    salePrice: 999.00,
    discount: 23,
    hasDiscount: true,
    seller: 'Office Store',
    features: ['Ajustable', 'Eléctrica', 'Ergonómica'],
    category: 'Muebles'
  }
];

const PRODUCTS_PER_PAGE = 12;

export function useProductsLogic() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: { min: 0, max: 5000 }
  });

  // Calcular opciones disponibles
  const availableOptions = useMemo(() => {
    const categories = [...new Set(MOCK_PRODUCTS.map(p => p.category).filter(Boolean))] as string[];
    const brands = [...new Set(MOCK_PRODUCTS.map(p => p.brand))];
    const prices = MOCK_PRODUCTS.map(p => p.salePrice);
    const priceRange = {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices))
    };

    return { categories, brands, priceRange };
  }, []);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    let products = [...MOCK_PRODUCTS];

    // Filtro por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.features?.some(feature => feature.toLowerCase().includes(query)) ||
        product.category?.toLowerCase().includes(query)
      );
    }

    // Filtro por categorías
    if (filters.categories.length > 0) {
      products = products.filter(product =>
        product.category && filters.categories.includes(product.category)
      );
    }

    // Filtro por marcas
    if (filters.brands.length > 0) {
      products = products.filter(product =>
        filters.brands.includes(product.brand)
      );
    }

    // Filtro por rango de precios
    products = products.filter(product =>
      product.salePrice >= filters.priceRange.min &&
      product.salePrice <= filters.priceRange.max
    );

    return products;
  }, [searchQuery, filters]);

  // Ordenar productos
  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];

    switch (sortBy) {
      case 'price-asc':
        return products.sort((a, b) => a.salePrice - b.salePrice);
      case 'price-desc':
        return products.sort((a, b) => b.salePrice - a.salePrice);
      case 'name-asc':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case 'discount-desc':
        return products.sort((a, b) => b.discount - a.discount);
      case 'newest':
        return products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      case 'featured':
      default:
        return products.sort((a, b) => {
          // Priorizar productos nuevos y con descuento
          const aScore = (a.isNew ? 2 : 0) + (a.hasDiscount ? 1 : 0);
          const bScore = (b.isNew ? 2 : 0) + (b.hasDiscount ? 1 : 0);
          return bScore - aScore;
        });
    }
  }, [filteredProducts, sortBy]);

  // Paginación
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage]);

  // Handlers
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handleFiltersChange = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback((sort: SortOption) => {
    setSortBy(sort);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: availableOptions.priceRange
    });
    setSearchQuery('');
    setSortBy('featured');
    setCurrentPage(1);
  }, [availableOptions.priceRange]);

  return {
    // State
    searchQuery,
    sortBy,
    currentPage,
    filters,
    loading,
    
    // Computed
    currentProducts,
    totalProducts: sortedProducts.length,
    totalPages,
    availableOptions,
    
    // Handlers
    handleSearch,
    handleFiltersChange,
    handleSortChange,
    handlePageChange,
    resetFilters
  };
} 