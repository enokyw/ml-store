import { Navbar } from '@/shared/components/custom/Navbar';
import {
    ProductsPageClient
} from './__comp';

export default function ProductsPage() {
    return <div className="min-h-screen">
        <Navbar />
        <ProductsPageClient />
    </div>;
} 