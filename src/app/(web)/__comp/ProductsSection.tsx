'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ProductCard } from './ProductCard';
import styles from './embla.module.css';
import Autoplay from 'embla-carousel-autoplay';

// Datos de ejemplo para los productos
const mockProducts = [
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
    features: ['Intel i7', '16GB RAM', 'RTX 4060']
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
    features: ['Touch', '4L', 'Antiadherente']
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
    features: ['Vertical', 'Cable', 'Potente']
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
    features: ['AI Control', '12.5KG', 'Inverter']
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
    features: ['4 Hornillas', 'Gas', 'Horno']
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
    features: ['166L', 'Frost', 'Eficiente']
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
    features: ['1.5L', '17K', 'Compacta']
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
    features: ['4 Velocidades', 'Clásica', 'Duradera']
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
    features: ['25L', 'Digital', 'Plateado']
  }
];

export function ProductsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      dragFree: true,
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps'
    }, 
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
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
    <section className="py-16 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Electrohogar
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Electros que transforman tu hogar
          </p>
        </div>

        {/* Banner destacado */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl mb-8 text-base-100">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Aspiradora vertical</div>
              <div className="text-sm opacity-90">con cable Power Speed (STN13)</div>
              <div className="badge badge-success mt-2">
                <span className="font-bold">S/ 3,344</span>
              </div>
              <div className="text-xs mt-1 opacity-75">KOENJI BOLIVIA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Lavadora Carga Superior</div>
              <div className="text-sm opacity-90">Efficient Silent Inverter | 16L</div>
              <div className="badge badge-success mt-2">
                <span className="font-bold">S/ 103.22</span>
              </div>
              <div className="text-xs mt-1 opacity-75">5 cuotas sin intereses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Refrigerador</div>
              <div className="text-sm opacity-90">Frost Bottom Freezer | 166L</div>
              <div className="badge badge-success mt-2">
                <span className="font-bold">S/ 106.55</span>
              </div>
              <div className="text-xs mt-1 opacity-75">6 cuotas sin intereses</div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Productos destacados</h3>
          <div className="flex gap-2">
            <button
              className={`btn btn-circle btn-outline ${!prevBtnEnabled ? 'btn-disabled opacity-50' : 'hover:btn-primary'}`}
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className={`btn btn-circle btn-outline ${!nextBtnEnabled ? 'btn-disabled opacity-50' : 'hover:btn-primary'}`}
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Embla Carousel */}
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {mockProducts.map((product) => (
              <div key={product.id} className={styles.embla__slide}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="btn btn-primary btn-lg">
            Descubre el poder de la innovación con Electrolux
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 