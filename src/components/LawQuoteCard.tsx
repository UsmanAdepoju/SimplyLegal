'use client';

import { useState, useRef } from 'react';
import { Law } from '@/types';

interface LawQuoteCardProps {
  law: Law;
  colorScheme?: 'green' | 'gold' | 'terracotta' | 'charcoal';
}

const colorSchemes = {
  green: {
    bg: 'bg-[#1B4332]',
    accent: '#C4A35A',
    text: 'text-white',
  },
  gold: {
    bg: 'bg-[#C4A35A]',
    accent: '#1B4332',
    text: 'text-[#2D2A26]',
  },
  terracotta: {
    bg: 'bg-[#C17B5D]',
    accent: '#FDF8F3',
    text: 'text-white',
  },
  charcoal: {
    bg: 'bg-[#2D2A26]',
    accent: '#C4A35A',
    text: 'text-white',
  },
};

export default function LawQuoteCard({ law, colorScheme = 'green' }: LawQuoteCardProps) {
  const [showReadMore, setShowReadMore] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const scheme = colorSchemes[colorScheme];

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 3, // Higher quality
        width: 600,
        height: 600,
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
    const shareText = `"${law.summary}"\n\n— ${law.section || law.source}\n\nKnow your rights! 🇳🇬\n#SimplyLegal #KnowYourRights #NigerianLaw`;

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
    <div className="mb-8">
      {/* SQUARE Visual Quote Card - This is what gets downloaded */}
      <div
        ref={cardRef}
        className={`${scheme.bg} aspect-square w-full max-w-[600px] mx-auto rounded-3xl p-8 md:p-10 ${scheme.text} shadow-2xl relative overflow-hidden`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {/* Decorative Elements - Top Left */}
        <div className="absolute top-6 left-6 text-2xl opacity-60" style={{ color: scheme.accent }}>
          ✦
        </div>
        <div className="absolute top-12 left-14 text-lg opacity-40" style={{ color: scheme.accent }}>
          ✦
        </div>

        {/* Decorative Elements - Top Right */}
        <div className="absolute top-6 right-6 text-2xl opacity-60" style={{ color: scheme.accent }}>
          ✦
        </div>
        <div className="absolute top-14 right-12 text-sm opacity-40" style={{ color: scheme.accent }}>
          ✦
        </div>

        {/* Decorative Elements - Bottom */}
        <div className="absolute bottom-20 left-8 text-lg opacity-30" style={{ color: scheme.accent }}>
          ✦
        </div>
        <div className="absolute bottom-12 right-10 text-xl opacity-40" style={{ color: scheme.accent }}>
          ✦
        </div>

        {/* Main Content - Centered */}
        <div className="h-full flex flex-col justify-center items-center text-center px-4">
          {/* Opening Quote Mark */}
          <div
            className="text-6xl md:text-7xl font-serif leading-none mb-2 opacity-40"
            style={{ color: scheme.accent }}
          >
            &ldquo;
          </div>

          {/* The Law Summary - BOLD and LARGE */}
          <p
            className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: '-0.01em',
            }}
          >
            {law.summary}
          </p>

          {/* Closing Quote Mark */}
          <div
            className="text-6xl md:text-7xl font-serif leading-none mb-4 opacity-40"
            style={{ color: scheme.accent }}
          >
            &rdquo;
          </div>

          {/* Decorative Line */}
          <div
            className="w-20 h-1 rounded-full mb-4"
            style={{ backgroundColor: scheme.accent }}
          />

          {/* Section Reference */}
          <p
            className="text-base md:text-lg font-medium opacity-90 tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {law.section || 'Nigerian Constitution'}
          </p>

          {/* Branding */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <p
              className="text-xs md:text-sm font-medium tracking-widest uppercase opacity-60"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              SimplyLegal 🇳🇬
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons - Below the card */}
      <div className="flex items-center justify-center gap-4 mt-6 max-w-[600px] mx-auto">
        <button
          onClick={handleDownload}
          className="inline-flex items-center px-6 py-3 bg-[#2D2A26] text-white rounded-full hover:bg-[#1B4332] transition-all text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Image
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center px-6 py-3 bg-[#C4A35A] text-[#2D2A26] rounded-full hover:bg-[#d4b36a] transition-all text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>

      {/* Read More Button */}
      <div className="text-center mt-5 max-w-[600px] mx-auto">
        <button
          onClick={() => setShowReadMore(!showReadMore)}
          className="text-[#1B4332] hover:text-[#2D5A3D] font-semibold text-sm inline-flex items-center transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {showReadMore ? 'Show Less' : 'Read the Original Constitution Text'}
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

      {/* Expanded Constitutional Text */}
      {showReadMore && (
        <div
          className="mt-5 bg-white rounded-2xl p-6 md:p-8 border border-[#E8DFD5] shadow-lg max-w-[600px] mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <h4
            className="text-xl font-bold text-[#2D2A26] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {law.title}
          </h4>

          {/* Key Points */}
          {law.keyPoints && law.keyPoints.length > 0 && (
            <div className="mb-5">
              <p className="text-xs text-[#C4A35A] uppercase tracking-widest font-semibold mb-3">
                Key Points
              </p>
              <ul className="space-y-2">
                {law.keyPoints.map((point, idx) => (
                  <li key={idx} className="text-sm text-[#2D2A26] flex items-start">
                    <span className="text-[#C4A35A] mr-3 text-lg">✦</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Original Constitutional Text */}
          {law.originalText && (
            <div className="border-t border-[#E8DFD5] pt-5 mt-5">
              <p className="text-xs text-[#C4A35A] uppercase tracking-widest font-semibold mb-3">
                Original Constitutional Text
              </p>
              <p
                className="text-sm text-[#4a4743] leading-relaxed italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                &ldquo;{law.originalText}&rdquo;
              </p>
              <p className="text-xs text-[#888] mt-3 font-medium">
                — {law.source}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
