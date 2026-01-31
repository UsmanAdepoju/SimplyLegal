import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - SimplyLegal',
  description: 'Learn about SimplyLegal\'s mission to make Nigerian laws accessible to everyone.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 md:py-20 bg-[#008751] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            About SimplyLegal
          </h1>
          <p className="text-xl opacity-90">
            Making Nigerian laws accessible to everyone 🇳🇬
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Our Mission
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              SimplyLegal was created with one simple goal: to help everyday Nigerians
              understand the laws that affect their daily lives. We believe that legal
              knowledge shouldn&apos;t be reserved for lawyers alone. When people understand
              their rights and responsibilities, they can make better decisions, protect
              themselves, and contribute to a more just society.
            </p>
          </div>

          {/* Why We Exist */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Why We Exist
            </h2>
            <div className="bg-[#F5F1E8] p-6">
              <p className="text-[#6B6B6B] mb-4">
                Many Nigerians encounter situations where legal knowledge could make a
                difference—whether dealing with traffic officers, signing employment
                contracts, renting apartments, or starting businesses. Yet, finding
                clear, accurate, and understandable legal information can be challenging.
              </p>
              <p className="text-[#6B6B6B]">
                SimplyLegal bridges this gap by providing bite-sized, easy-to-understand
                explanations of Nigerian laws. We cut through legal jargon to give you
                the information you need, when you need it.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold text-[#1A1A1A] mb-6 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#008751] text-white p-6">
                <div className="text-3xl mb-3">📚</div>
                <h3
                  className="font-bold text-lg mb-2 uppercase"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Bite-Sized Content
                </h3>
                <p className="opacity-80 text-sm">
                  Complex laws broken down into digestible pieces that you can read in minutes, not hours.
                </p>
              </div>
              <div className="bg-[#D4A843] text-[#1A1A1A] p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3
                  className="font-bold text-lg mb-2 uppercase"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Key Takeaways
                </h3>
                <p className="opacity-80 text-sm">
                  Every article highlights the most important points you need to remember.
                </p>
              </div>
              <div className="bg-[#1A1A1A] text-white p-6">
                <div className="text-3xl mb-3">📖</div>
                <h3
                  className="font-bold text-lg mb-2 uppercase"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Verified Sources
                </h3>
                <p className="opacity-80 text-sm">
                  We cite official sources for all our content so you can verify and learn more.
                </p>
              </div>
              <div className="bg-[#6B6B6B] text-white p-6">
                <div className="text-3xl mb-3">📱</div>
                <h3
                  className="font-bold text-lg mb-2 uppercase"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Shareable Cards
                </h3>
                <p className="opacity-80 text-sm">
                  Download beautiful quote cards and share on WhatsApp, Instagram, and Twitter.
                </p>
              </div>
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Important Disclaimer
            </h2>
            <div className="bg-[#D4A843] p-6">
              <p className="text-[#1A1A1A] mb-4">
                <strong>Please Note:</strong> SimplyLegal provides general legal
                information for educational purposes only. This information is not
                legal advice and should not be treated as such.
              </p>
              <p className="text-[#1A1A1A] mb-4">
                Every legal situation is unique, and laws can change over time. While
                we strive to keep our content accurate and up-to-date, we cannot
                guarantee that the information on this website reflects the current
                state of the law.
              </p>
              <p className="text-[#1A1A1A]">
                For specific legal issues or questions about your particular situation,
                please consult a qualified legal practitioner in Nigeria.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Get In Touch
            </h2>
            <p className="text-[#6B6B6B] mb-4">
              Have suggestions for laws we should cover? Found an error in our content?
              We&apos;d love to hear from you.
            </p>
            <p className="text-[#6B6B6B]">
              SimplyLegal is a community resource, and your feedback helps us serve
              Nigerians better.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/categories"
              className="inline-flex items-center px-6 py-3 bg-[#1A1A1A] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#008751] transition-colors"
            >
              Start Exploring Laws
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
