'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: 'Products',
    question: 'What makes WikiWiki chocolate unique?',
    answer: 'WikiWiki is the world\'s first seafood chocolate collection, combining premium seafood with fine chocolate through groundbreaking scientific innovation. Each bar represents years of research and development, creating a completely unprecedented taste experience.'
  },
  {
    category: 'Products',
    question: 'Is the seafood really in the chocolate?',
    answer: 'Yes! We use real, premium seafood including shrimp, lobster, crab, salmon, and tuna. Our proprietary process transforms these ingredients into a harmonious blend with chocolate, creating unique and sophisticated flavors.'
  },
  {
    category: 'Products',
    question: 'What is the difference between KAI and MOANA collections?',
    answer: 'KAI collection focuses on pure seafood and macadamia cream combinations, offering a refined, ocean-forward experience. MOANA collection adds tropical fruits and various nut creams, creating more complex, vibrant flavor profiles inspired by Hawaiian paradise.'
  },
  {
    category: 'Ordering',
    question: 'How do I place an order?',
    answer: 'Simply browse our collection, add items to your cart, and proceed to checkout. We accept all major credit cards and offer secure payment processing.'
  },
  {
    category: 'Ordering',
    question: 'Can I customize my order?',
    answer: 'Currently, we offer our bars in standard 100g sizes. For bulk or corporate orders, please contact us at Info@wikiwikichocolate.com for customization options.'
  },
  {
    category: 'Shipping',
    question: 'Do you offer free shipping?',
    answer: 'Yes! We offer free shipping on all orders over $100. Orders under $100 have a flat shipping rate of $10.'
  },
  {
    category: 'Shipping',
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days within the continental US. Express shipping (1-2 days) is available at checkout for an additional fee.'
  },
  {
    category: 'Shipping',
    question: 'Do you ship internationally?',
    answer: 'Currently, we ship within the United States only. We\'re working on expanding our international shipping options. Sign up for our newsletter to be notified when international shipping becomes available.'
  },
  {
    category: 'Shipping',
    question: 'How is the chocolate packaged for shipping?',
    answer: 'Each bar is shipped with exceptional care in insulated packaging with ice packs to ensure it arrives in pristine condition. We monitor weather conditions and may delay shipments during extreme heat.'
  },
  {
    category: 'Storage',
    question: 'How should I store WikiWiki chocolate?',
    answer: 'Store in a cool, dry place away from direct sunlight at 60-70°F (15-21°C). Do not refrigerate as this can cause condensation and affect texture. Consume within 6 months of purchase for optimal freshness.'
  },
  {
    category: 'Storage',
    question: 'What is the shelf life?',
    answer: 'Our chocolate has a shelf life of 12 months when stored properly. Each bar is marked with a best-by date.'
  },
  {
    category: 'Allergens',
    question: 'What allergens are in WikiWiki chocolate?',
    answer: 'All our bars contain milk and soy. Depending on the variety, they may also contain tree nuts (macadamia, almond, pistachio, peanut) and shellfish (shrimp, lobster, crab) or fish (salmon, tuna). All products may contain traces of other nuts as they are produced in a facility that processes multiple allergens.'
  },
  {
    category: 'Allergens',
    question: 'Are your products safe for people with seafood allergies?',
    answer: 'No. Our products contain real seafood and are not suitable for anyone with seafood allergies. Please read all ingredient labels carefully.'
  },
  {
    category: 'Returns',
    question: 'What is your return policy?',
    answer: 'We want you to be completely satisfied. If you\'re not happy with your purchase, contact us within 30 days for a full refund or replacement. The chocolate must be in its original, unopened packaging.'
  },
  {
    category: 'Returns',
    question: 'What if my chocolate arrives melted or damaged?',
    answer: 'We take great care in packaging, but if your chocolate arrives melted or damaged, please contact us immediately with photos. We\'ll send a replacement at no charge.'
  }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 text-gray-300">Help Center</p>
          <h1 className="luxury-heading text-6xl md:text-7xl mb-8">FAQs</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="luxury-subheading text-xl text-gray-200">
            Frequently Asked Questions
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="luxury-heading text-3xl mb-8 pb-4 border-b-2 border-gray-200">
                {category}
              </h2>
              <div className="space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq) => {
                    const globalIndex = faqs.indexOf(faq);
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={globalIndex} className="border border-gray-200">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-8">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`flex-shrink-0 text-gray-600 transition-transform duration-200 ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                            size={20}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="luxury-heading text-3xl mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help. Reach out and we&apos;ll get back to you as soon as possible.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
