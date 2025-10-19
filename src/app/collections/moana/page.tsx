import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function MoanaCollectionPage() {
  const moanaProducts = products.filter(p => p.collection === 'MOANA');

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">MOANA Collection</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Savor the ocean&apos;s bounty, where tropical fruits and nut creams unite in chocolate perfection.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moanaProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
