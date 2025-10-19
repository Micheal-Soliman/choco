import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 text-gray-300">Get in Touch</p>
          <h1 className="luxury-heading text-6xl md:text-7xl mb-8">Contact Us</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="luxury-subheading text-xl text-gray-200">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="luxury-heading text-4xl mb-8">Let&apos;s Connect</h2>
              <p className="text-gray-600 mb-12 leading-relaxed">
                Have questions about our products, shipping, or wholesale opportunities? Our team is here to help you discover the perfect WikiWiki experience.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full flex-shrink-0">
                    <Mail className="text-gray-900" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:Info@wikiwikichocolate.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Info@wikiwikichocolate.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full flex-shrink-0">
                    <Phone className="text-gray-900" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full flex-shrink-0">
                    <MapPin className="text-gray-900" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Location</p>
                    <p className="text-gray-600">
                      Hawaii, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full flex-shrink-0">
                    <Clock className="text-gray-900" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Business Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM HST<br />
                      Saturday: 10:00 AM - 4:00 PM HST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="luxury-heading text-3xl mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="luxury-heading text-3xl mb-6">
            Looking for Quick Answers?
          </h2>
          <p className="text-gray-600 mb-8">
            Check out our frequently asked questions for immediate assistance
          </p>
          <a href="/faqs" className="btn-secondary">
            Visit FAQs
          </a>
        </div>
      </section>
    </div>
  );
}
