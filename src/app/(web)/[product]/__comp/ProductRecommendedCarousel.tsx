'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon, ShoppingCartIcon, EyeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import styles from './embla.module.css';
import Autoplay from 'embla-carousel-autoplay';

interface Product {
    id: string;
    name: string;
    brand: string;
    image: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    seller: string;
    features: string[];
    isNew?: boolean;
}

interface ProductRecommendedCarouselProps {
    products: Product[];
    currentProductId?: string;
}

// Componente de tarjeta compacta para productos relacionados
function CompactProductCard({ product }: { product: Product }) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN',
            minimumFractionDigits: 2,
        }).format(price);
    };

    const discountPercentage = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <div className="group relative bg-base-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-base-200 overflow-hidden flex flex-col h-full">
            {/* Imagen */}
            <div className="relative overflow-hidden">
                {/* Badges */}
                <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                    {product.isNew && (
                        <span className="badge badge-success badge-xs font-bold">NUEVO</span>
                    )}
                    {discountPercentage > 0 && (
                        <span className="badge badge-error badge-xs font-bold">-{discountPercentage}%</span>
                    )}
                </div>

                {/* Botón de vista rápida en hover */}
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                        href={`/${product.id}`}
                        className="btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 border-0 shadow-lg"
                    >
                        <EyeIcon className="size-4" />
                    </Link>
                </div>

                <Link href={`/${product.id}`}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={160}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </Link>
            </div>

            {/* Contenido */}
            <div className="p-3 flex flex-col flex-1">
                {/* Product Name */}
                <Link href={`/${product.id}`} className="flex-1">
                    <h4 className="font-medium text-sm leading-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors duration-200">
                        {product.name}
                    </h4>
                </Link>

                {/* Bottom Section - Price and Button */}
                <div className="mt-auto space-y-2">
                    {/* Price */}
                    <div>
                        <div className="flex items-center gap-1">
                            <span className="text-base font-bold text-primary">
                                {formatPrice(product.price)}
                            </span>
                            {product.originalPrice && (
                                <span className="text-xs text-base-content/50 line-through">
                                    {formatPrice(product.originalPrice)}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="btn btn-primary btn-xs w-full">
                        <ShoppingCartIcon className="size-3" />
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
}

export function ProductRecommendedCarousel({ products, currentProductId }: ProductRecommendedCarouselProps) {
    // Filtrar producto actual si se proporciona
    const filteredProducts = currentProductId
        ? products.filter(p => p.id !== currentProductId)
        : products;

    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        loop: true,
        align: 'start',
        containScroll: 'trimSnaps'
    }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-xl font-semibold text-base-content mb-1">
                        Productos Relacionados
                    </h3>
                    <p className="text-sm text-base-content/70">
                        Otros productos que te pueden interesar
                    </p>
                </div>

                {/* Navigation Controls */}
                <div className="flex gap-2">
                    <button
                        className={`btn btn-circle btn-sm btn-outline ${!prevBtnEnabled ? 'btn-disabled' : ''}`}
                        onClick={scrollPrev}
                        disabled={!prevBtnEnabled}
                    >
                        <ChevronLeftIcon className="size-4" />
                    </button>
                    <button
                        className={`btn btn-circle btn-sm btn-outline ${!nextBtnEnabled ? 'btn-disabled' : ''}`}
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                    >
                        <ChevronRightIcon className="size-4" />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {filteredProducts.map((product) => (
                        <div key={product.id} className={`${styles.embla__slide}`}>
                            <CompactProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Indicator */}
            {filteredProducts.length > 3 && (
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: Math.ceil(filteredProducts.length / 3) }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                Math.floor(selectedIndex / 3) === index
                                    ? 'bg-primary w-6'
                                    : 'bg-base-300 hover:bg-base-content/30'
                            }`}
                            onClick={() => emblaApi?.scrollTo(index * 3)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

// Datos de ejemplo específicos para página de producto
export const sampleRelatedProducts: Product[] = [
    {
        id: 'laptop-gaming-asus-2',
        name: 'Laptop Asus TUF Gaming A15',
        brand: 'ASUS',
        image: 'https://picsum.photos/200/160?random=laptop2',
        price: 2899.00,
        originalPrice: 3299.00,
        rating: 4.3,
        reviews: 89,
        seller: 'TechStore',
        features: ['AMD Ryzen 7', 'GTX 1650', '8GB RAM'],
    },
    {
        id: 'laptop-hp-pavilion',
        name: 'HP Pavilion Gaming 15.6"',
        brand: 'HP',
        image: 'https://picsum.photos/200/160?random=laptop3',
        price: 2199.00,
        rating: 4.1,
        reviews: 156,
        seller: 'HP Store',
        features: ['Intel i5', 'GTX 1650', '8GB RAM'],
    },
    {
        id: 'laptop-lenovo-legion',
        name: 'Lenovo Legion 5 Gaming',
        brand: 'Lenovo',
        image: 'https://picsum.photos/200/160?random=laptop4',
        price: 3299.00,
        originalPrice: 3799.00,
        rating: 4.6,
        reviews: 234,
        seller: 'Lenovo',
        features: ['AMD Ryzen 5', 'RTX 3060', '16GB RAM'],
        isNew: true
    },
    {
        id: 'laptop-acer-nitro',
        name: 'Acer Nitro 5 Gaming',
        brand: 'Acer',
        image: 'https://picsum.photos/200/160?random=laptop5',
        price: 2599.00,
        rating: 4.0,
        reviews: 178,
        seller: 'Acer Store',
        features: ['Intel i5', 'GTX 1650', '12GB RAM'],
    },
    {
        id: 'laptop-msi-gf63',
        name: 'MSI GF63 Thin Gaming',
        brand: 'MSI',
        image: 'https://picsum.photos/200/160?random=laptop6',
        price: 2799.00,
        originalPrice: 3199.00,
        rating: 4.2,
        reviews: 92,
        seller: 'MSI Gaming',
        features: ['Intel i7', 'GTX 1650', '8GB RAM'],
    },
    {
        id: 'laptop-dell-g15',
        name: 'Dell G15 5515 Gaming',
        brand: 'Dell',
        image: 'https://picsum.photos/200/160?random=laptop7',
        price: 3499.00,
        rating: 4.4,
        reviews: 145,
        seller: 'Dell Store',
        features: ['AMD Ryzen 7', 'RTX 3050', '16GB RAM'],
    }
];

export default ProductRecommendedCarousel; 