import { Truck, Package, Shield, Clock } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="luxury-heading text-6xl md:text-7xl mb-8">Shipping Policy</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="luxury-subheading text-xl text-gray-200">
            From our hands to yours, with exceptional care
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
                <Truck className="text-gray-900" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $100</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
                <Clock className="text-gray-900" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">3-5 business days</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
                <Package className="text-gray-900" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Secure Packaging</h3>
              <p className="text-sm text-gray-600">Temperature controlled</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
                <Shield className="text-gray-900" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Insured</h3>
              <p className="text-sm text-gray-600">Every shipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="luxury-heading text-3xl mb-6">Shipping Information</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              From our hands to yours, each chocolate bar is shipped promptly and with exceptional care, ensuring it arrives in pristine condition—fresh, intact, and ready to be enjoyed.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Shipping Rates</h2>
            <div className="bg-gray-50 p-6 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-semibold">Standard Shipping</p>
                    <p className="text-sm text-gray-600">3-5 business days</p>
                  </div>
                  <p className="font-semibold">$10.00</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-semibold">Express Shipping</p>
                    <p className="text-sm text-gray-600">1-2 business days</p>
                  </div>
                  <p className="font-semibold">$25.00</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Free Shipping</p>
                    <p className="text-sm text-gray-600">Orders over $100</p>
                  </div>
                  <p className="font-semibold text-green-600">FREE</p>
                </div>
              </div>
            </div>

            <h2 className="luxury-heading text-3xl mb-6">Delivery Areas</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We currently ship within the continental United States. We are working on expanding our shipping to Alaska, Hawaii, and international destinations. Sign up for our newsletter to be notified when shipping becomes available in your area.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Processing Time</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed on the next business day. You will receive a shipping confirmation email with tracking information once your order ships.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Temperature-Controlled Packaging</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our chocolate is shipped in insulated packaging with ice packs to maintain optimal temperature during transit. We monitor weather conditions and may delay shipments during extreme heat to ensure your chocolate arrives in perfect condition.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Tracking Your Order</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Once your order ships, you will receive a tracking number via email. You can track your package through the carrier&apos;s website. If you have any questions about your shipment, please contact us at Info@wikiwikichocolate.com.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Delivery Issues</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If your chocolate arrives melted or damaged, please contact us immediately with photos. We will send a replacement at no charge. We are not responsible for delays caused by the shipping carrier or incorrect addresses provided by the customer.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">International Shipping</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              International shipping is not currently available. We are working to expand our shipping capabilities. Please check back or subscribe to our newsletter for updates.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Questions?</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about shipping, please contact us at:
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
