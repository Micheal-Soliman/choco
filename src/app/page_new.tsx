import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Award, Sparkles, Shield, Truck, Gift, ChevronRight } from 'lucide-react';

export default function Home() {
  const kaiProducts = products.filter(p => p.collection === 'KAI').slice(0, 3);
  const moanaProducts = products.filter(p => p.collection === 'MOANA').slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section - Luxury Full Screen */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 text-gray-300">Est. 2024</p>
          <h1 className="luxury-heading text-6xl md:text-8xl mb-8 leading-tight">
            WikiWiki<br/>Chocolate
          </h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="luxury-subheading text-2xl md:text-3xl mb-6 text-gray-200">
            World's First Seafood Chocolate Collection
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            A groundbreaking fusion where the treasures of the sea meet the finest chocolate craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/shop" className="btn-primary">
              Explore Collection
            </Link>
            <Link href="/our-story" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
              Our Story
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-white opacity-50" size={24} />
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center gap-3">
              <Truck className="text-gray-900" size={24} />
              <div>
                <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                <p className="text-xs text-gray-500">Orders over $100</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="text-gray-900" size={24} />
              <div>
                <p className="text-sm font-medium text-gray-900">Secure Payment</p>
                <p className="text-xs text-gray-500">100% Protected</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Gift className="text-gray-900" size={24} />
              <div>
                <p className="text-sm font-medium text-gray-900">Gift Packaging</p>
                <p className="text-xs text-gray-500">Complimentary</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="text-gray-900" size={24} />
              <div>
                <p className="text-sm font-medium text-gray-900">World's First</p>
                <p className="text-xs text-gray-500">Seafood Chocolate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">Innovation Meets Tradition</p>
              <h2 className="luxury-heading text-5xl md:text-6xl mb-6 leading-tight">
                A Scientific Masterpiece
              </h2>
              <div className="w-16 h-0.5 bg-gray-900 mb-8"></div>
              <p className="luxury-subheading text-xl text-gray-700 mb-6 leading-relaxed">
                Born from years of groundbreaking research and unwavering commitment to create something truly unprecedented.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                WikiWiki represents the world's first successful transformation of premium seafood into exquisite chocolate. Each bar is a testament to scientific innovation, culinary artistry, and the bold spirit of Hawaii.
              </p>
              <Link href="/our-story" className="inline-flex items-center text-sm font-medium tracking-wide uppercase text-gray-900 hover:text-gray-600 transition-colors">
                Discover Our Story
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="relative h-[600px] bg-gradient-to-br from-gray-200 to-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <Sparkles className="mx-auto mb-6 text-gray-900" size={64} />
                  <p className="luxury-heading text-3xl text-gray-900">Premium Craftsmanship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">Two Distinct Worlds</p>
          <h2 className="luxury-heading text-5xl md:text-6xl mb-6">
            Our Collections
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
          <p className="luxury-subheading text-xl text-gray-700 leading-relaxed">
            Each collection is a world of its own — where the treasures of the sea meet the sweetness of the earth, and Hawaii's vibrant spirit shines through every detail.
          </p>
        </div>
      </section>

      {/* KAI Collection */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-400">The Essence of the Ocean</p>
            <h2 className="luxury-heading text-6xl md:text-7xl mb-6">KAI</h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
            <p className="luxury-subheading text-2xl text-gray-300 max-w-3xl mx-auto">
              Indulge in the sea's treasures, transformed into an exquisite chocolate experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {kaiProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/collections/kai" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
              View Full KAI Collection
            </Link>
          </div>
        </div>
      </section>

      {/* MOANA Collection */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">Tropical Paradise</p>
            <h2 className="luxury-heading text-6xl md:text-7xl mb-6 text-gray-900">MOANA</h2>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
            <p className="luxury-subheading text-2xl text-gray-700 max-w-3xl mx-auto">
              Savor the ocean's bounty, where tropical fruits and nut creams unite in chocolate perfection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {moanaProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/collections/moana" className="btn-primary">
              View Full MOANA Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">The Art of Tasting</p>
          <h2 className="luxury-heading text-5xl md:text-6xl mb-6">
            Experience
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
          <p className="luxury-subheading text-xl text-gray-700 mb-6">
            HOW TO PAIR WIKIWIKI CHOCOLATE
          </p>
          <p className="text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            An inventive chocolate bar that requires our Tasting and Pairing Guide to fully enjoy the experience — from the first aroma to the final note.
          </p>
          <Link href="/experience" className="btn-primary">
            Explore Tasting Guide
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="luxury-heading text-5xl md:text-6xl mb-8">
            Start Your WikiWiki Adventure
          </h2>
          <p className="luxury-subheading text-2xl mb-12 text-gray-300">
            Every bar is a bold adventure — a powerhouse of flavor crafted to ignite your senses with the raw energy of the sea
          </p>
          <Link href="/shop" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
            Shop All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
