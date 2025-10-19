'use client';

import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useState } from 'react';

export default function ShopPage() {
  const [filter, setFilter] = useState<'ALL' | 'KAI' | 'MOANA'>('ALL');
  const [sortBy, setSortBy] = useState<'name' | 'collection'>('name');

  const filteredProducts = products
    .filter(p => filter === 'ALL' || p.collection === filter)
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.collection.localeCompare(b.collection);
    });

  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="luxury-heading text-5xl md:text-6xl mb-6">Shop All</h1>
          <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="luxury-subheading text-xl text-white max-w-2xl mx-auto">
            Explore our complete collection of seafood chocolate creations
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                filter === 'ALL'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All ({products.length})
            </button>
            <button
              onClick={() => setFilter('KAI')}
              className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                filter === 'KAI'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              KAI ({products.filter(p => p.collection === 'KAI').length})
            </button>
            <button
              onClick={() => setFilter('MOANA')}
              className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                filter === 'MOANA'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              MOANA ({products.filter(p => p.collection === 'MOANA').length})
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'collection')}
              className="px-4 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option value="name">Name</option>
              <option value="collection">Collection</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
