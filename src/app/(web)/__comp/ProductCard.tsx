import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
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
}

export function ProductCard({
    id,
    name,
    brand,
    image,
    originalPrice,
    salePrice,
    discount,
    hasDiscount = false,
    installments,
    coupon,
    seller,
    isNew = false,
    features = []
}: ProductCardProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN',
            minimumFractionDigits: 2,
        }).format(price);
    };

    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-base-200 h-full">
            <figure className="relative overflow-hidden">
                {/* Badges */}
                <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                    {hasDiscount && (
                        <div className="badge badge-info text-white font-bold px-2 py-1">
                            -{discount}%
                        </div>
                    )}
                    {isNew && (
                        <div className="badge badge-success text-white font-bold px-2 py-1">
                            NUEVO
                        </div>
                    )}
                </div>

                {/* Price Badge */}
                <div className="absolute top-2 right-2 z-10">
                    <div className="bg-success text-success-content px-3 py-1 rounded-lg font-bold shadow-md">
                        {formatPrice(salePrice)}
                    </div>
                </div>

                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </figure>

            <div className="card-body p-4">
                {/* Brand */}
                <div className="text-sm text-primary font-semibold uppercase tracking-wider">
                    {brand}
                </div>

                {/* Product Name */}
                <h3 className="card-title text-base leading-tight line-clamp-2 mb-2">
                    {name}
                </h3>

                {/* Features */}
                {features.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                        {features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="badge badge-outline badge-xs">
                                {feature}
                            </span>
                        ))}
                    </div>
                )}

                {/* Coupon */}
                {coupon && (
                    <div className="mb-2">
                        <div className="badge badge-primary text-white font-medium px-2 py-1">
                            Cupón: {coupon}
                        </div>
                    </div>
                )}

                {/* Pricing */}
                <div className="mb-3">
                    {hasDiscount && (
                        <div className="text-sm text-base-content/60 line-through mb-1">
                            Regular: {formatPrice(originalPrice)}
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">
                            {formatPrice(salePrice)}
                        </span>
                        {hasDiscount && (
                            <span className="text-xs text-success font-medium">
                                Ahorras {formatPrice(originalPrice - salePrice)}
                            </span>
                        )}
                    </div>
                </div>

                {/* Installments */}
                {installments && (
                    <div className="mb-3">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="flex items-center gap-1">
                                <span className="text-info font-medium">{installments.count} CUOTAS SIN INTERESES</span>
                            </div>
                        </div>
                        <div className="text-info font-semibold">
                            S/ {installments.amount.toFixed(2)}
                        </div>
                    </div>
                )}

                {/* Seller */}
                <div className="text-xs text-base-content/60 mt-auto">
                    Vendido por {seller}
                </div>

                {/* Action Buttons */}
                <div className="card-actions justify-between mt-3">
                    <Link href={`/${id}`} className="btn btn-outline btn-sm flex-1">
                        Ver Detalles
                    </Link>
                    <button className="btn btn-primary btn-sm flex-1">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
} 