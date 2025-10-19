export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="luxury-heading text-6xl md:text-7xl mb-8">Terms of Service</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="text-gray-300">Last updated: October 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="luxury-heading text-3xl mb-6">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              By accessing and using the WikiWiki Chocolate website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">2. Use License</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Permission is granted to temporarily access the materials on WikiWiki Chocolate&apos;s website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
            </ul>

            <h2 className="luxury-heading text-3xl mb-6">3. Product Information</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">4. Orders and Payment</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Product availability</li>
              <li>Errors in product or pricing information</li>
              <li>Suspected fraudulent or unauthorized transactions</li>
            </ul>

            <h2 className="luxury-heading text-3xl mb-6">5. Shipping and Delivery</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Shipping times are estimates and not guaranteed. WikiWiki Chocolate is not responsible for delays caused by shipping carriers or circumstances beyond our control. Risk of loss and title for items purchased pass to you upon delivery to the carrier.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">6. Returns and Refunds</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We want you to be completely satisfied with your purchase. If you are not satisfied, please contact us within 30 days of receipt for a refund or replacement. Products must be in their original, unopened packaging. Shipping costs are non-refundable.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">7. Allergen Information</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our products contain seafood, dairy, nuts, and soy. They are produced in a facility that processes multiple allergens. By purchasing our products, you acknowledge that you have read and understood the allergen information and accept all risks associated with consumption.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              WikiWiki Chocolate shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or products, even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">9. Governing Law</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the State of Hawaii, United States, without regard to its conflict of law provisions.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">10. Changes to Terms</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              <a href="mailto:Info@wikiwikichocolate.com" className="text-gray-900 font-semibold hover:underline">
                Info@wikiwikichocolate.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
