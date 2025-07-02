'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import styles from './embla.module.css';

interface HeroProduct {
	id: string;
	name: string;
	brand: string;
	image: string;
	originalPrice: number;
	salePrice: number;
	discount: number;
	availability: string;
	seller: string;
	badge?: string;
	badgeColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
}

const HERO_PRODUCTS: HeroProduct[] = [
	{
		id: 'kingston-micro-sd',
		name: 'Memoria Micro SD Kingston 64GB Clase 10 -100MB/s',
		brand: 'KINGSTON',
		image: 'https://picsum.photos/400/300?random=kingston',
		originalPrice: 100.00,
		salePrice: 45.80,
		discount: 54,
		availability: 'Online',
		seller: 'TechStore',
		badge: '-54%',
		badgeColor: 'error'
	},
	{
		id: 'logitech-mouse',
		name: 'Mouse Logitech Ergo M575 Wireless / Bt Trackball Negro',
		brand: 'Logitech',
		image: 'https://picsum.photos/400/300?random=logitech',
		originalPrice: 299.00,
		salePrice: 187.50,
		discount: 37,
		availability: 'Online',
		seller: 'Logitech Store',
		badge: '-37%',
		badgeColor: 'primary'
	},
	{
		id: 'laptop-gaming',
		name: 'Laptop Gaming ASUS ROG Strix G15 RTX 4060',
		brand: 'ASUS',
		image: 'https://picsum.photos/400/300?random=asus',
		originalPrice: 4999.00,
		salePrice: 3999.00,
		discount: 20,
		availability: 'Online',
		seller: 'Gaming Pro',
		badge: '-20%',
		badgeColor: 'success'
	},
	{
		id: 'samsung-tv',
		name: 'Smart TV Samsung 65" 4K UHD Neo QLED',
		brand: 'Samsung',
		image: 'https://picsum.photos/400/300?random=samsung',
		originalPrice: 3299.00,
		salePrice: 2599.00,
		discount: 21,
		availability: 'Online',
		seller: 'Samsung Store',
		badge: '-21%',
		badgeColor: 'warning'
	},
	{
		id: 'apple-airpods',
		name: 'Apple AirPods Pro (2nd Generation)',
		brand: 'Apple',
		image: 'https://picsum.photos/400/300?random=apple',
		originalPrice: 899.00,
		salePrice: 699.00,
		discount: 22,
		availability: 'Online',
		seller: 'Apple Store',
		badge: '-22%',
		badgeColor: 'accent'
	}
];

export function ProductsHeroCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
			skipSnaps: false,
			dragFree: false
		},
		[Autoplay({ delay: 4000, stopOnInteraction: true })]
	);

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const scrollTo = useCallback((index: number) => {
		if (emblaApi) emblaApi.scrollTo(index);
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

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('es-PE', {
			style: 'currency',
			currency: 'PEN',
			minimumFractionDigits: 2,
		}).format(price);
	};

	return (
		<div className="relative mb-6">
			<h2 className="text-xl font-medium mb-4">Más vendidos</h2>
			{/* Hero Carousel */}
			<div className={`${styles.embla} relative`} ref={emblaRef}>
				<div className={styles.embla__container}>
					{HERO_PRODUCTS.map((product) => (
						<div key={product.id} className={`${styles.embla__slide} min-w-0 flex-1`}>
							<div className="relative rounded-lg overflow-hidden border border-base-300 bg-base-100 flex flex-col h-full">
								<div className="grid grid-cols-2 gap-4 p-4 items-center flex-1">
									{/* Product Image */}
									<div className="relative">
										<div className="aspect-square relative rounded-xl overflow-hidden bg-white p-8">
											<Image
												src={product.image}
												alt={product.name}
												fill
												className="object-contain hover:scale-105 transition-transform duration-300"
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
										</div>

										{/* Floating badges */}
										<div className="absolute -top-2 -left-2">
											<div className="badge badge-success text-xs font-bold text-white px-3 py-2 rounded-full">
												OFERTA
											</div>
										</div>
									</div>
									{/* Product Info */}
									<div className="flex-1 flex flex-col justify-between h-full gap-2">
										{/* Prices */}
										<div className="space-y-1">
											{/* Brand */}
											<div className="text-xs font-medium text-primary uppercase tracking-wider">
												{product.brand}
											</div>

											{/* Product Name */}
											<h2 className="text-sm font-medium text-base-content leading-tight">
												{product.name}
											</h2>
											<div className="flex items-center gap-4">
												<span className="text-sm text-base-content/60 line-through">
													Regular: {formatPrice(product.originalPrice)}
												</span>
												{product.badge && (
													<div className={`badge badge-${product.badgeColor} font-bold text-white px-3 py-1`}>
														{product.badge}
													</div>
												)}
											</div>
											<div>
												<div className="text-lg font-bold text-success">
													{formatPrice(product.salePrice)}
												</div>
												<div className="text-sm text-success font-medium">
													Ahorras {formatPrice(product.originalPrice - product.salePrice)}
												</div>
											</div>
											</div>
											{/* Availability */}
											<div className="flex items-center gap-2 mt-auto">
												<div className="w-2 h-2 bg-success rounded-full"></div>
												<span className="text-sm text-base-content/70">{product.availability}</span>
											</div>
										</div>
									</div>

									{/* Background decoration */}
									<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
									<div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-12 -translate-x-12"></div>
								</div>
							</div>
					))}
						</div>
			</div>

				{/* Navigation Buttons */}
				<button
					className={`absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-primary z-10 shadow-lg ${!prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
						} transition-all duration-200`}
					onClick={scrollPrev}
					disabled={!prevBtnEnabled}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<button
					className={`absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-primary z-10 shadow-lg ${!nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
						} transition-all duration-200`}
					onClick={scrollNext}
					disabled={!nextBtnEnabled}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</button>

				{/* Dots Indicator */}
				<div className="flex justify-center space-x-2 mt-6">
					{HERO_PRODUCTS.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full transition-all duration-200 ${index === selectedIndex
								? 'bg-primary scale-110'
								: 'bg-base-content/20 hover:bg-base-content/40'
								}`}
							onClick={() => scrollTo(index)}
						/>
					))}
				</div>
			</div>
			);
} 