'use client';

import Link from 'next/link';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="font-light tracking-wide">FREE SHIPPING ON ORDERS OVER $100</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            <Link href="/faqs" className="hover:text-gray-300 transition-colors">FAQs</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link href="/" className="luxury-heading text-4xl tracking-tighter">
              WikiWiki
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              <Link href="/shop" className="text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900 transition-colors">
                Shop
              </Link>
              <Link href="/collections/kai" className="text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900 transition-colors">
                KAI
              </Link>
              <Link href="/collections/moana" className="text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900 transition-colors">
                MOANA
              </Link>
              <Link href="/our-story" className="text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900 transition-colors">
                Our Story
              </Link>
              <Link href="/experience" className="text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900 transition-colors">
                Experience
              </Link>
            </div>

            {/* Icons */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-gray-700 hover:text-gray-900 transition-colors">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition-colors">
                <User size={20} />
              </button>
              <Link href="/cart" className="text-gray-700 hover:text-gray-900 transition-colors relative">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-6 pt-2 border-t border-gray-200 mt-4">
              <div className="flex flex-col space-y-4">
                <Link href="/shop" className="text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900">
                  Shop
                </Link>
                <Link href="/collections/kai" className="text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900">
                  KAI Collection
                </Link>
                <Link href="/collections/moana" className="text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900">
                  MOANA Collection
                </Link>
                <Link href="/our-story" className="text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900">
                  Our Story
                </Link>
                <Link href="/experience" className="text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-gray-900">
                  Experience
                </Link>
                <div className="flex gap-6 pt-4 border-t border-gray-200">
                  <button className="text-gray-700">
                    <Search size={20} />
                  </button>
                  <button className="text-gray-700">
                    <User size={20} />
                  </button>
                  <Link href="/cart" className="text-gray-700 relative">
                    <ShoppingCart size={20} />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
