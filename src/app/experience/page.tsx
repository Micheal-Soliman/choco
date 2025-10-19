import Link from 'next/link';
import { Wine, Thermometer, Eye, Utensils, Wind } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 text-gray-300">The Art of Tasting</p>
          <h1 className="luxury-heading text-6xl md:text-7xl mb-8">Experience</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="luxury-subheading text-2xl text-gray-200 max-w-3xl mx-auto">
            HOW TO PAIR WIKIWIKI CHOCOLATE
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="luxury-heading text-4xl md:text-5xl mb-6">
            A Journey for the Senses
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
          <p className="luxury-subheading text-xl text-gray-700 leading-relaxed mb-8">
            An inventive chocolate bar that requires our Tasting and Pairing Guide to fully enjoy the experience — from the first aroma to the final note.
          </p>
          <p className="text-gray-600 leading-relaxed">
            WikiWiki chocolate is not just a treat; it&apos;s an experience. Each bar is carefully crafted to engage all your senses, creating a multi-dimensional tasting journey that celebrates the fusion of land and sea.
          </p>
        </div>
      </section>

      {/* Tasting Steps */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">The Five Steps</p>
            <h2 className="luxury-heading text-4xl md:text-5xl mb-6">How to Taste</h2>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {/* Step 1 - Observe */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full">
                    <Eye size={28} />
                  </div>
                  <div>
                    <p className="text-sm tracking-wide uppercase text-gray-500">Step 1</p>
                    <h3 className="luxury-heading text-3xl">Observe</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Begin by examining the chocolate. Notice its color, sheen, and texture. WikiWiki bars feature unique patterns and colors that hint at the treasures within.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Look for the delicate marbling of ingredients, the smooth finish of the chocolate, and any visible elements that tell the story of this bar.
                </p>
              </div>
              <div className="order-1 lg:order-2 h-80 bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg"></div>
            </div>

            {/* Step 2 - Smell */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg"></div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full">
                    <Wind size={28} />
                  </div>
                  <div>
                    <p className="text-sm tracking-wide uppercase text-gray-500">Step 2</p>
                    <h3 className="luxury-heading text-3xl">Smell</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Bring the chocolate close to your nose and inhale deeply. Let the aromas transport you to tropical shores and ocean depths.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Notice the layers of scent — from the rich cocoa to the subtle hints of seafood, tropical fruits, and nuts. Each aroma tells part of the story.
                </p>
              </div>
            </div>

            {/* Step 3 - Break */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full">
                    <Utensils size={28} />
                  </div>
                  <div>
                    <p className="text-sm tracking-wide uppercase text-gray-500">Step 3</p>
                    <h3 className="luxury-heading text-3xl">Break</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Snap the chocolate in half. Listen to the clean break — a sign of perfectly tempered chocolate. This releases even more aromatic compounds.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A quality chocolate should snap crisply, revealing the interior and releasing a fresh wave of scent.
                </p>
              </div>
              <div className="order-1 lg:order-2 h-80 bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg"></div>
            </div>

            {/* Step 4 - Taste */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg"></div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full">
                    <Wine size={28} />
                  </div>
                  <div>
                    <p className="text-sm tracking-wide uppercase text-gray-500">Step 4</p>
                    <h3 className="luxury-heading text-3xl">Taste</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Place a piece on your tongue and let it melt slowly. Don&apos;t chew immediately — allow the flavors to unfold naturally.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Notice how the chocolate melts, releasing layers of flavor. The seafood, fruits, and nuts reveal themselves in waves, creating a complex taste experience.
                </p>
              </div>
            </div>

            {/* Step 5 - Savor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full">
                    <Thermometer size={28} />
                  </div>
                  <div>
                    <p className="text-sm tracking-wide uppercase text-gray-500">Step 5</p>
                    <h3 className="luxury-heading text-3xl">Savor</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  After swallowing, pay attention to the finish. The flavors that linger on your palate are the final notes of your tasting journey.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A great chocolate leaves a pleasant, lasting impression. Notice how the flavors evolve and what memories or emotions they evoke.
                </p>
              </div>
              <div className="order-1 lg:order-2 h-80 bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pairing Suggestions */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">Perfect Combinations</p>
            <h2 className="luxury-heading text-4xl md:text-5xl mb-6">Pairing Guide</h2>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
            <p className="luxury-subheading text-xl text-gray-700 max-w-3xl mx-auto">
              Enhance your WikiWiki experience with these carefully selected pairings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="luxury-heading text-2xl mb-4">KAI Collection</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Wine Pairing</p>
                  <p className="text-gray-600">Crisp white wines, Champagne, or light rosé</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Beverage</p>
                  <p className="text-gray-600">Green tea, sparkling water with lemon</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Accompaniments</p>
                  <p className="text-gray-600">Fresh berries, citrus fruits, light crackers</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="luxury-heading text-2xl mb-4">MOANA Collection</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Wine Pairing</p>
                  <p className="text-gray-600">Fruity rosé, Moscato, or tropical cocktails</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Beverage</p>
                  <p className="text-gray-600">Tropical fruit juices, coconut water, herbal tea</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Accompaniments</p>
                  <p className="text-gray-600">Tropical fruits, macadamia nuts, coconut</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="luxury-heading text-4xl md:text-5xl mb-8">
            Start Your Tasting Journey
          </h2>
          <p className="luxury-subheading text-xl text-gray-300 mb-12">
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
