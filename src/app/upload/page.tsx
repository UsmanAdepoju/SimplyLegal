import PDFUploader from '@/components/PDFUploader';

export const metadata = {
  title: 'Upload PDF - SimplyLegal',
  description: 'Upload and extract text from legal PDF documents',
};

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            PDF Document Reader
          </h1>
          <p className="text-lg text-green-100">
            Upload your legal documents to extract and read the text content
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <PDFUploader maxSizeMB={50} />
          </div>

          {/* Info Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Secure Processing</h3>
              </div>
              <p className="text-sm text-gray-600">
                Your documents are processed locally and never stored on our servers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Fast Extraction</h3>
              </div>
              <p className="text-sm text-gray-600">
                Quickly extract text from any PDF document up to 50MB in size.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Full Text Access</h3>
              </div>
              <p className="text-sm text-gray-600">
                Get the complete text content from your legal documents for easy reading.
              </p>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2">Tips for best results:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Make sure your PDF contains selectable text (not scanned images)</li>
              <li>• For large documents, extraction may take a few seconds</li>
              <li>• Password-protected PDFs cannot be processed</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
