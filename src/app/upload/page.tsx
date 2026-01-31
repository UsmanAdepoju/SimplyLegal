import PDFUploader from '@/components/PDFUploader';

export const metadata = {
  title: 'Upload PDF - SimplyLegal',
  description: 'Upload and extract text from legal PDF documents',
};

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 md:py-16 bg-[#008751] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            PDF Document Reader
          </h1>
          <p className="text-lg opacity-90">
            Upload your legal documents to extract and read the text content
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 md:p-8">
            <PDFUploader maxSizeMB={50} />
          </div>

          {/* Info Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#008751] text-white p-5">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3
                  className="font-bold uppercase tracking-wide text-sm"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Secure
                </h3>
              </div>
              <p className="text-sm opacity-80">
                Your documents are processed locally and never stored on our servers.
              </p>
            </div>

            <div className="bg-[#D4A843] text-[#1A1A1A] p-5">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-black/10 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3
                  className="font-bold uppercase tracking-wide text-sm"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Fast
                </h3>
              </div>
              <p className="text-sm opacity-80">
                Quickly extract text from any PDF document up to 50MB in size.
              </p>
            </div>

            <div className="bg-[#1A1A1A] text-white p-5">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3
                  className="font-bold uppercase tracking-wide text-sm"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Full Access
                </h3>
              </div>
              <p className="text-sm opacity-80">
                Get the complete text content from your legal documents for easy reading.
              </p>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 bg-[#008751] text-white p-5">
            <h3
              className="font-bold mb-3 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Tips for Best Results
            </h3>
            <ul className="text-sm space-y-2 opacity-90">
              <li className="flex items-start">
                <span className="text-[#D4A843] mr-2">→</span>
                Make sure your PDF contains selectable text (not scanned images)
              </li>
              <li className="flex items-start">
                <span className="text-[#D4A843] mr-2">→</span>
                For large documents, extraction may take a few seconds
              </li>
              <li className="flex items-start">
                <span className="text-[#D4A843] mr-2">→</span>
                Password-protected PDFs cannot be processed
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
