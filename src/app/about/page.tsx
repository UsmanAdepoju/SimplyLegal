import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - SimplyLegal',
  description: 'Learn about SimplyLegal\'s mission to make Nigerian laws accessible to everyone.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About SimplyLegal</h1>
          <p className="text-xl text-green-100">
            Making Nigerian laws accessible to everyone
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              SimplyLegal was created with one simple goal: to help everyday Nigerians
              understand the laws that affect their daily lives. We believe that legal
              knowledge shouldn&apos;t be reserved for lawyers alone. When people understand
              their rights and responsibilities, they can make better decisions, protect
              themselves, and contribute to a more just society.
            </p>
          </div>

          {/* Why We Exist */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Exist</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Many Nigerians encounter situations where legal knowledge could make a
                difference—whether dealing with traffic officers, signing employment
                contracts, renting apartments, or starting businesses. Yet, finding
                clear, accurate, and understandable legal information can be challenging.
              </p>
              <p className="text-gray-700">
                SimplyLegal bridges this gap by providing bite-sized, easy-to-understand
                explanations of Nigerian laws. We cut through legal jargon to give you
                the information you need, when you need it.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Bite-Sized Content
                </h3>
                <p className="text-gray-600">
                  Complex laws broken down into digestible pieces that you can read
                  in minutes, not hours.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-semibold text-gray-900 mb-2">Key Takeaways</h3>
                <p className="text-gray-600">
                  Every article highlights the most important points you need to
                  remember.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">📖</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Verified Sources
                </h3>
                <p className="text-gray-600">
                  We cite official sources for all our content so you can verify
                  and learn more.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Search</h3>
                <p className="text-gray-600">
                  Find the legal information you need quickly with our intuitive
                  search and category system.
                </p>
              </div>
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Important Disclaimer
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6">
              <p className="text-yellow-800 mb-4">
                <strong>Please Note:</strong> SimplyLegal provides general legal
                information for educational purposes only. This information is not
                legal advice and should not be treated as such.
              </p>
              <p className="text-yellow-800 mb-4">
                Every legal situation is unique, and laws can change over time. While
                we strive to keep our content accurate and up-to-date, we cannot
                guarantee that the information on this website reflects the current
                state of the law.
              </p>
              <p className="text-yellow-800">
                For specific legal issues or questions about your particular situation,
                please consult a qualified legal practitioner in Nigeria.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-700 mb-4">
              Have suggestions for laws we should cover? Found an error in our content?
              We&apos;d love to hear from you.
            </p>
            <p className="text-gray-700">
              SimplyLegal is a community resource, and your feedback helps us serve
              Nigerians better.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/categories"
              className="inline-flex items-center px-6 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition-colors"
            >
              Start Exploring Laws
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
