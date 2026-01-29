'use client';

import { useState, useRef } from 'react';
import { Law } from '@/types';

interface LawQuoteCardProps {
  law: Law;
  color?: string;
}

export default function LawQuoteCard({ law, color = 'bg-green-700' }: LawQuoteCardProps) {
  const [showReadMore, setShowReadMore] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      // Dynamic import of html2canvas
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
      });

      const link = document.createElement('a');
      link.download = `${law.title.replace(/\s+/g, '-').toLowerCase()}-simplylegal.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Failed to download image:', error);
      alert('Failed to download. Please try again.');
    }
  };

  const handleShare = async () => {
    const shareText = `${law.summary}\n\n— ${law.section || law.source}\n\n#SimplyLegal #KnowYourRights`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: law.title,
          text: shareText,
        });
      } catch (error) {
        // User cancelled or share failed
        console.log('Share cancelled');
      }
    } else {
      // Fallback to WhatsApp
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    }
  };

  return (
    <div className="mb-6">
      {/* The Visual Quote Card - This is what gets downloaded */}
      <div
        ref={cardRef}
        className={`${color} rounded-2xl p-6 md:p-8 text-white shadow-lg`}
      >
        <div className="text-center">
          {/* Simple English Law */}
          <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
            {law.summary}
          </p>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-white/40 mx-auto mb-4"></div>

          {/* Section Reference (like Bible verse reference) */}
          <p className="text-sm md:text-base opacity-90 font-light">
            {law.section || 'Nigerian Constitution'}
          </p>

          {/* Branding */}
          <p className="text-xs opacity-60 mt-4">
            #SimplyLegal
          </p>
        </div>
      </div>

      {/* Action Buttons - Below the card */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={handleDownload}
          className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-sm font-medium shadow-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>

      {/* Read More Button */}
      <div className="text-center mt-4">
        <button
          onClick={() => setShowReadMore(!showReadMore)}
          className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center"
        >
          {showReadMore ? 'Show Less' : 'Read More in Constitution'}
          <svg
            className={`w-4 h-4 ml-1 transition-transform ${showReadMore ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expanded Constitutional Text */}
      {showReadMore && (
        <div className="mt-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">{law.title}</h4>

          {/* Key Points */}
          {law.keyPoints && law.keyPoints.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Key Points:</p>
              <ul className="space-y-1">
                {law.keyPoints.map((point, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Original Constitutional Text */}
          {law.originalText && (
            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                Original Text from Constitution:
              </p>
              <p className="text-sm text-gray-600 italic leading-relaxed">
                &quot;{law.originalText}&quot;
              </p>
              <p className="text-xs text-gray-500 mt-2">
                — {law.source}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
