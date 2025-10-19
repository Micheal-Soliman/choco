import Link from 'next/link';
import { Award, Sparkles, Microscope, Heart } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 text-gray-300">Our Journey</p>
          <h1 className="luxury-heading text-6xl md:text-7xl mb-8">Our Story</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="luxury-subheading text-2xl text-gray-200 max-w-3xl mx-auto">
            Born from a groundbreaking scientific invention and technical mastery
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="luxury-heading text-4xl md:text-5xl mb-6">
              World&apos;s First Seafood Chocolate Collection
            </h2>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              WikiWiki, born from a groundbreaking scientific invention and technical mastery — transforming real seafood into chocolate for the first time in history.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Behind every bar lies years of research and an unwavering commitment to create something truly unprecedented. Each collection is a world of its own — where the treasures of the sea meet the sweetness of the earth, and Hawaii&apos;s vibrant spirit shines through every detail.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Explore our collections and experience a new era of chocolate: bold, refined, and exclusively WikiWiki.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">What Drives Us</p>
            <h2 className="luxury-heading text-4xl md:text-5xl mb-6">Our Values</h2>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
                <Microscope className="text-gray-900" size={36} />
              </div>
              <h3 className="luxury-heading text-2xl mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneering scientific breakthroughs in chocolate making
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
                <Award className="text-gray-900" size={36} />
              </div>
              <h3 className="luxury-heading text-2xl mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Uncompromising quality in every single bar
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
                <Sparkles className="text-gray-900" size={36} />
              </div>
              <h3 className="luxury-heading text-2xl mb-4">Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                Meticulous attention to detail and artistry
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
                <Heart className="text-gray-900" size={36} />
              </div>
              <h3 className="luxury-heading text-2xl mb-4">Passion</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep love for Hawaii and chocolate excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] bg-gradient-to-br from-gray-200 to-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <Microscope className="mx-auto mb-6 text-gray-900" size={80} />
                  <p className="luxury-heading text-3xl text-gray-900">Scientific Innovation</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">The Science Behind</p>
              <h2 className="luxury-heading text-4xl md:text-5xl mb-6 leading-tight">
                Years of Research
              </h2>
              <div className="w-16 h-0.5 bg-gray-900 mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                WikiWiki represents the world&apos;s first successful transformation of premium seafood into exquisite chocolate. This groundbreaking achievement required years of dedicated research, countless experiments, and unwavering commitment.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of scientists and chocolatiers worked tirelessly to perfect the process, ensuring that each bar maintains the highest standards of quality, taste, and safety. The result is a revolutionary product that challenges everything you thought you knew about chocolate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hawaiian Spirit */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-400">Island Heritage</p>
          <h2 className="luxury-heading text-4xl md:text-5xl mb-6">
            The Spirit of Hawaii
          </h2>
          <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="luxury-subheading text-xl text-gray-300 mb-8 leading-relaxed">
            Every WikiWiki creation is infused with the bold, vibrant spirit of the Hawaiian islands. From the tropical fruits to the ocean&apos;s treasures, we celebrate the rich flavors and traditions of Hawaii in every bite.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our name, WikiWiki, means &quot;quick&quot; or &quot;fast&quot; in Hawaiian — reflecting our dynamic approach to innovation while honoring the islands that inspire us.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="luxury-heading text-4xl md:text-5xl mb-8">
            Experience the Revolution
          </h2>
          <p className="luxury-subheading text-xl text-gray-700 mb-12">
            Discover why WikiWiki is redefining the future of chocolate
          </p>
          <Link href="/shop" className="btn-primary">
            Explore Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
