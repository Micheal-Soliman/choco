'use client';

import { products } from '@/data/products';
import { notFound, useParams } from 'next/navigation';
import { Star, Package, Truck, Shield } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-chocolate-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-chocolate-600">Shop</Link>
          <span className="mx-2">/</span>
          <Link href={`/collections/${product.collection.toLowerCase()}`} className="hover:text-chocolate-600">
            {product.collection}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-cream-100 to-chocolate-100 rounded-lg p-12 flex items-center justify-center min-h-[500px]">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-chocolate-800 mb-4">{product.name}</h2>
              <p className="text-2xl text-gray-600">{product.collection}</p>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              {/* Collection Badge */}
              <span className="inline-block bg-chocolate-100 text-chocolate-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {product.collection} Collection
              </span>

              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              {/* Reviews */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Product Info */}
              <div className="mb-6 pb-6 border-b">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Chocolate Type</p>
                    <p className="font-semibold">{product.chocolateType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Weight</p>
                    <p className="font-semibold">{product.weight}</p>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Story</h3>
                <p className="text-gray-700 leading-relaxed">{product.story}</p>
              </div>

              {/* Product Information */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Product Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Brand</p>
                    <p className="text-gray-600">WikiWiki</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Collection</p>
                    <p className="text-gray-600">{product.collection}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Chocolate Type</p>
                    <p className="text-gray-600">{product.chocolateType}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Weight</p>
                    <p className="text-gray-600">{product.weight}</p>
                  </div>
                </div>
              </div>

              {/* Dietary Information */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Dietary Information & Allergens</h3>
                <p className="text-gray-700 mb-2">{product.ingredients}</p>
                <p className="text-gray-700">{product.allergens}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Produced in a facility that follows strict hygiene and quality standards.
                </p>
              </div>

              {/* Shipping */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Shipping and Insurance</h3>
                <p className="text-gray-700">
                  From our hands to yours, each chocolate bar is shipped promptly and with exceptional care, 
                  ensuring it arrives in pristine condition—fresh, intact, and ready to be enjoyed.
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 text-center font-semibold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={handleAddToCart}
                className="w-full bg-chocolate-800 text-cream-50 py-4 font-bold text-lg hover:bg-chocolate-900 transition-colors mb-4"
              >
                {added ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <Package className="mx-auto text-chocolate-600 mb-2" size={24} />
                  <p className="text-xs text-gray-600">Premium Quality</p>
                </div>
                <div className="text-center">
                  <Truck className="mx-auto text-chocolate-600 mb-2" size={24} />
                  <p className="text-xs text-gray-600">Fast Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="mx-auto text-chocolate-600 mb-2" size={24} />
                  <p className="text-xs text-gray-600">Insured Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="luxury-heading text-3xl mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products
              .filter(p => p.collection === product.collection && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id}>
                  <Link href={`/product/${relatedProduct.id}`}>
                    <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center p-6">
                        <div className="text-center">
                          <p className="luxury-heading text-2xl text-gray-900">{relatedProduct.name}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">{relatedProduct.collection}</p>
                        <p className="luxury-heading text-xl mb-2">${45.00}</p>
                        <button className="w-full bg-gray-900 text-white py-2 text-sm font-medium tracking-wide uppercase hover:bg-gray-800 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 bg-white p-12 shadow-md">
          <h2 className="luxury-heading text-3xl mb-8">Reviews</h2>
          <div className="flex items-center mb-8">
            <div className="text-center mr-12">
              <div className="text-5xl font-bold text-gray-900 mb-2">5.0</div>
              <div className="flex text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-600">Based on {product.reviews} reviews</p>
            </div>
          </div>

          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-500 mr-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">Amazing Experience</span>
                </div>
                <p className="text-gray-600 mb-2">
                  This chocolate is unlike anything I&apos;ve ever tasted. The combination of seafood and chocolate sounds unusual, but it works perfectly. Truly a unique and sophisticated treat!
                </p>
                <p className="text-sm text-gray-500">Verified Purchase</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16 bg-white p-12 shadow-md text-center">
          <h2 className="luxury-heading text-3xl mb-4">Experience</h2>
          <p className="luxury-subheading text-xl text-gray-600 mb-4">HOW TO PAIR WIKIWIKI CHOCOLATE</p>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            An inventive chocolate bar that requires our Tasting and pairing Guide to fully enjoy the 
            experience—from the first aroma to the final note.
          </p>
          <Link href="/experience" className="btn-primary">
            View Tasting Guide
          </Link>
        </div>

        {/* Start Adventure CTA */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 text-center">
          <h2 className="luxury-heading text-3xl mb-4">Start your WikiWiki adventure</h2>
          <p className="luxury-subheading text-lg mb-6 text-gray-300">
            Every bar is a bold adventure — a powerhouse of flavor crafted to ignite your senses with the raw energy of the sea
          </p>
          <Link href="/shop" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
            Shop All
          </Link>
        </div>
      </div>
    </div>
  );
}
