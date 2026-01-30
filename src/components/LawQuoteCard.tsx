'use client';

import { useState, useRef } from 'react';
import { Law } from '@/types';

interface LawQuoteCardProps {
  law: Law;
  variant?: 'green' | 'mustard' | 'dark';
}

const variants = {
  green: {
    bg: 'bg-[#008751]',
    text: 'text-white',
    accent: '#D4A843',
    accentText: 'text-[#D4A843]',
  },
  mustard: {
    bg: 'bg-[#D4A843]',
    text: 'text-[#1A1A1A]',
    accent: '#008751',
    accentText: 'text-[#008751]',
  },
  dark: {
    bg: 'bg-[#1A1A1A]',
    text: 'text-white',
    accent: '#D4A843',
    accentText: 'text-[#D4A843]',
  },
};

export default function LawQuoteCard({ law, variant = 'green' }: LawQuoteCardProps) {
  const [showReadMore, setShowReadMore] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const style = variants[variant];

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 3,
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
    const shareText = `"${law.summary}"\n\n— ${law.section || law.source}\n\nKnow your rights! 🇳🇬\n#SimplyLegal #NigerianLaw #KnowYourRights`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: law.title,
          text: shareText,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    }
  };

  return (
    <div className="mb-10">
      {/* SQUARE Card - Nigerian themed */}
      <div
        ref={cardRef}
        className={`${style.bg} ${style.text} aspect-square w-full max-w-[500px] mx-auto p-8 md:p-10 relative`}
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {/* Top bar - Nigerian flag stripe */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="w-1/3 bg-[#008751]"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-[#008751]"></div>
        </div>

        {/* Content */}
        <div className="h-full flex flex-col justify-between pt-4">
          {/* Quote */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-2xl md:text-3xl font-bold leading-tight mb-6">
              &ldquo;{law.summary}&rdquo;
            </p>
          </div>

          {/* Bottom section */}
          <div>
            {/* Divider line */}
            <div className="w-16 h-1 mb-4" style={{ backgroundColor: style.accent }}></div>

            {/* Section reference */}
            <p className={`text-lg font-semibold mb-1 ${style.accentText}`}>
              {law.section || 'Nigerian Constitution'}
            </p>

            {/* Branding */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs uppercase tracking-[0.2em] opacity-60">
                SimplyLegal
              </span>
              <span className="text-lg">🇳🇬</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 mt-6 max-w-[500px] mx-auto">
        <button
          onClick={handleDownload}
          className="flex-1 inline-flex items-center justify-center px-5 py-3 bg-[#1A1A1A] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#008751] transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>

        <button
          onClick={handleShare}
          className="flex-1 inline-flex items-center justify-center px-5 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold text-sm uppercase tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>

      {/* Read More Toggle */}
      <div className="text-center mt-4 max-w-[500px] mx-auto">
        <button
          onClick={() => setShowReadMore(!showReadMore)}
          className="text-[#008751] hover:text-[#006B3F] font-semibold text-sm inline-flex items-center transition-colors uppercase tracking-wide"
        >
          {showReadMore ? 'Hide Details' : 'Read Original Text'}
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${showReadMore ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expanded Content */}
      {showReadMore && (
        <div className="mt-4 bg-[#F5F1E8] p-6 md:p-8 max-w-[500px] mx-auto">
          <h4
            className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {law.title}
          </h4>

          {/* Key Points */}
          {law.keyPoints && law.keyPoints.length > 0 && (
            <div className="mb-6">
              <p className="text-xs text-[#008751] uppercase tracking-widest font-bold mb-3">
                Key Points
              </p>
              <ul className="space-y-2">
                {law.keyPoints.map((point, idx) => (
                  <li key={idx} className="text-sm text-[#1A1A1A] flex items-start">
                    <span className="text-[#D4A843] mr-2 font-bold">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Original Text */}
          {law.originalText && (
            <div className="border-t border-[#E0E0E0] pt-6">
              <p className="text-xs text-[#008751] uppercase tracking-widest font-bold mb-3">
                Original Constitutional Text
              </p>
              <p
                className="text-sm text-[#6B6B6B] leading-relaxed italic"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                &ldquo;{law.originalText}&rdquo;
              </p>
              <p className="text-xs text-[#6B6B6B] mt-3 font-medium">
                — {law.source}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
