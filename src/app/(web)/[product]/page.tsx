import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductGallery from './__comp/ProductGallery'
import ProductInfo from './__comp/ProductInfo'
import ProductDescription from './__comp/ProductDescription'
import ProductSpecifications from './__comp/ProductSpecifications'
import ProductBreadcrumbs from './__comp/ProductBreadcrumbs'
import { Navbar } from '@/shared/components/custom/Navbar'

// Mock data - In production, this would come from a database or API
const getProduct = async (slug: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100))

    // Mock product data
    const products = {
        'laptop-gaming-pro': {
            id: '1',
            slug: 'laptop-gaming-pro',
            title: 'Laptop Gaming Pro',
            shortDescription: 'High-performance gaming laptop with cutting-edge graphics and processing power',
            price: 400,
            originalPrice: 500,
            discount: 20,
            stock: 20,
            rating: 4.5,
            totalRatings: 128,
            images: [
                'https://picsum.photos/600/400?random=1',
                'https://picsum.photos/600/400?random=2',
                'https://picsum.photos/600/400?random=3',
                'https://picsum.photos/600/400?random=4',
                'https://picsum.photos/600/400?random=5',
                'https://picsum.photos/600/400?random=6',
                'https://picsum.photos/600/400?random=7',
                'https://picsum.photos/600/400?random=8'
            ],
            features: [
                'Intel Core i7 processor',
                'NVIDIA RTX 4060 graphics',
                '16GB DDR5 RAM',
                '1TB NVMe SSD storage',
                '15.6" Full HD display',
                'RGB backlit keyboard'
            ],
            description: `Experience ultimate gaming performance with our flagship Gaming Pro laptop. 
      Engineered for gamers and content creators who demand the best, this laptop delivers 
      exceptional performance with its powerful processor and dedicated graphics card. 
      The high-refresh display ensures smooth gameplay, while the advanced cooling system 
      keeps temperatures optimal during intense gaming sessions.`,
            specifications: [
                { label: 'Processor', value: 'Intel Core i7-12700H' },
                { label: 'Graphics', value: 'NVIDIA GeForce RTX 4060' },
                { label: 'Memory', value: '16GB DDR5-4800' },
                { label: 'Storage', value: '1TB NVMe PCIe SSD' },
                { label: 'Display', value: '15.6" FHD 144Hz IPS' },
                { label: 'Weight', value: '2.1 kg' },
                { label: 'Battery', value: '80Wh Li-ion' },
                { label: 'Warranty', value: '2 years international' }
            ]
        }
    }

    return products[slug as keyof typeof products] || null
}

interface ProductPageProps {
    params: Promise<{ product: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { product: productSlug } = await params;
    const product = await getProduct(productSlug);

    if (!product) {
        return {
            title: 'Product Not Found',
            description: 'The requested product could not be found.'
        }
    }

    return {
        title: `${product.title} - ML Store`,
        description: product.shortDescription,
        keywords: ['laptop', 'gaming', 'computer', 'technology', ...product.features],
        openGraph: {
            title: product.title,
            description: product.shortDescription,
            images: [
                {
                    url: product.images[0],
                    width: 600,
                    height: 400,
                    alt: product.title
                }
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: product.title,
            description: product.shortDescription,
            images: [product.images[0]]
        }
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { product: productSlug } = await params;
    const product = await getProduct(productSlug);

    if (!product) {
        notFound()
    }

    // Generate JSON-LD structured data for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.shortDescription,
        image: product.images,
        sku: product.id,
        brand: {
            '@type': 'Brand',
            name: 'ML Store'
        },
        offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'USD',
            availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            seller: {
                '@type': 'Organization',
                name: 'ML Store'
            }
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            reviewCount: product.totalRatings
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen">
                <Navbar />
                <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px]">
                    <div className="flex flex-col bg-base-300 p-4 h-[500px] md:h-[calc(100vh-66px)]">
                        {/* Breadcrumbs */}
                        <div className="mb-4">
                            <ProductBreadcrumbs productTitle={product.title} />
                        </div>
                        {/* Product Gallery - Client Component */}
                        <div className="flex-1 min-h-0">
                            <ProductGallery images={product.images} title={product.title} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 p-4 md:h-[calc(100vh-66px)] overflow-y-auto scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-transparent hover:scrollbar-thumb-base-content/20">
                        {/* Product Info - Mixed Server/Client */}
                        <ProductInfo product={product} />

                        {/* Product Details - Server Components */}
                        <ProductDescription
                            description={product.description}
                            features={product.features}
                        />

                        <ProductSpecifications specifications={product.specifications} />
                    </div>
                </div>
            </div>
        </>
    )
} 