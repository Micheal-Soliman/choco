'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingBag className="mx-auto mb-6 text-gray-400" size={80} />
          <h1 className="luxury-heading text-4xl mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Start your WikiWiki adventure by adding some delicious chocolate to your cart
          </p>
          <Link href="/shop" className="btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="luxury-heading text-5xl mb-4">Shopping Cart</h1>
          <p className="text-gray-600">{cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-md">
              {cart.map((item) => (
                <div key={item.id} className="p-6 border-b border-gray-200 last:border-0">
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-50 flex-shrink-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="luxury-heading text-lg text-gray-900">{item.name}</p>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="luxury-heading text-xl mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.collection} Collection</p>
                          <p className="text-sm text-gray-500">{item.chocolateType} • {item.weight}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-gray-900 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="luxury-heading text-2xl">${(45 * item.quantity).toFixed(2)}</p>
                          <p className="text-sm text-gray-500">${45.00} each</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/shop" className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-md p-8 sticky top-24">
              <h2 className="luxury-heading text-2xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {cartTotal >= 100 ? 'FREE' : '$10.00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="luxury-heading text-xl">Total</span>
                  <span className="luxury-heading text-3xl">
                    ${(cartTotal + (cartTotal >= 100 ? 0 : 10) + (cartTotal * 0.08)).toFixed(2)}
                  </span>
                </div>
              </div>

              {cartTotal < 100 && (
                <div className="bg-gray-50 p-4 mb-6 text-sm text-gray-600">
                  Add ${(100 - cartTotal).toFixed(2)} more to get FREE shipping!
                </div>
              )}

              <Link href="/checkout" className="block w-full">
                <button className="w-full btn-primary mb-4">
                  Proceed to Checkout
                </button>
              </Link>

              <div className="text-center text-sm text-gray-500">
                <p>Secure checkout powered by Stripe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
