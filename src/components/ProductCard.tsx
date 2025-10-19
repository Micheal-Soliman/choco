'use client';

import Link from 'next/link';
import { Product } from '@/data/products';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="product-card-luxury group overflow-hidden">
        {/* Image */}
        <div className="relative h-96 bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
              <p className="luxury-heading text-5xl mb-3 text-gray-900">{product.name}</p>
              <p className="luxury-subheading text-lg text-gray-600">{product.collection} Collection</p>
              <div className="mt-6 w-16 h-0.5 bg-gray-900 mx-auto"></div>
            </div>
          </div>
          
          {/* Quick Add Button - Shows on Hover */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={handleQuickAdd}
              className="bg-white text-gray-900 px-6 py-3 text-sm font-medium tracking-wide uppercase flex items-center gap-2 shadow-lg hover:bg-gray-900 hover:text-white transition-colors"
            >
              <ShoppingBag size={16} />
              Quick Add
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
              {product.collection}
            </span>
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" className="mr-0.5" />
              ))}
              <span className="ml-2 text-xs text-gray-500">({product.reviews})</span>
            </div>
          </div>

          <h3 className="luxury-heading text-2xl mb-2 group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-gray-500 mb-4 tracking-wide uppercase">
            {product.chocolateType} • {product.weight}
          </p>

          <p className="luxury-subheading text-sm text-gray-600 line-clamp-2 leading-relaxed mb-6">
            {product.story}
          </p>

          <div className="flex items-center justify-between">
            <span className="luxury-heading text-2xl text-gray-900">$45.00</span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
