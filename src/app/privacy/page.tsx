export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="luxury-heading text-6xl md:text-7xl mb-8">Privacy Policy</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="text-gray-300">Last updated: October 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="luxury-heading text-3xl mb-6">Introduction</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              WikiWiki Chocolate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our products.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Name and contact information (email, phone, address)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment processor)</li>
              <li>Order history and preferences</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you visit our website, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="luxury-heading text-3xl mb-6">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and our products</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and customer service</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="luxury-heading text-3xl mb-6">Information Sharing</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Service providers who assist with order fulfillment, payment processing, and shipping</li>
              <li>Marketing partners (only with your explicit consent)</li>
              <li>Law enforcement or regulatory authorities when required by law</li>
            </ul>

            <h2 className="luxury-heading text-3xl mb-6">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Data Security</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Your Rights</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>

            <h2 className="luxury-heading text-3xl mb-6">Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Changes to This Policy</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="luxury-heading text-3xl mb-6">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
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
