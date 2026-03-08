'use client';

import { useState, useRef } from 'react';
import { Law } from '@/types';

interface LawQuoteCardProps {
  law: Law;
  variant?: 'green' | 'mustard' | 'dark';
}

// Three high-contrast, bold card palettes
const variants = {
  green: {
    bg: '#00512E',        // Deep forest green — rich, confident
    text: '#FFFFFF',
    accent: '#F0C040',    // Warm gold for accents
    stripe: ['#00512E', '#FFFFFF', '#00512E'],
  },
  mustard: {
    bg: '#7B2D00',        // Deep terracotta — warm, African earth
    text: '#FEF3C7',      // Warm cream
    accent: '#F0C040',
    stripe: ['#00512E', '#FFFFFF', '#00512E'],
  },
  dark: {
    bg: '#111111',        // Near-black — bold editorial
    text: '#F5F5F5',
    accent: '#00C874',    // Vivid Nigerian green as accent
    stripe: ['#00512E', '#FFFFFF', '#00512E'],
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
      {/* SQUARE Card */}
      <div
        ref={cardRef}
        className="aspect-square w-full max-w-[500px] mx-auto relative overflow-hidden"
        style={{ backgroundColor: style.bg, color: style.text }}
      >
        {/* Nigerian flag stripe — top */}
        <div className="absolute top-0 left-0 right-0 h-[5px] flex">
          <div className="flex-1" style={{ backgroundColor: style.stripe[0] }}></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1" style={{ backgroundColor: style.stripe[2] }}></div>
        </div>

        {/* Accent bar — left edge */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[5px]"
          style={{ backgroundColor: style.accent }}
        ></div>

        {/* Content */}
        <div className="h-full flex flex-col justify-between p-8 md:p-10 pl-10 md:pl-12 pt-8">
          {/* Top label */}
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: style.accent, fontFamily: "var(--font-space), system-ui, sans-serif" }}
            >
              SimplyLegal · Know Your Rights 🇳🇬
            </p>
          </div>

          {/* Quote — centre of card */}
          <div className="flex-1 flex items-center">
            <p
              className="text-[clamp(1.1rem,3.5vw,1.6rem)] font-bold leading-snug"
              style={{ fontFamily: "var(--font-space), system-ui, sans-serif", color: style.text }}
            >
              {law.summary}
            </p>
          </div>

          {/* Bottom — source */}
          <div>
            <div className="w-10 h-[2px] mb-3" style={{ backgroundColor: style.accent }}></div>
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: style.accent, fontFamily: "var(--font-space), system-ui, sans-serif" }}
            >
              {law.section || law.source}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 mt-5 max-w-[500px] mx-auto">
        <button
          onClick={handleDownload}
          className="flex-1 inline-flex items-center justify-center px-5 py-3 bg-[#111111] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#00512E] transition-colors"
          style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>

        <button
          onClick={handleShare}
          className="flex-1 inline-flex items-center justify-center px-5 py-3 border-2 border-[#111111] text-[#111111] font-bold text-sm uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
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
          className="text-[#00512E] hover:text-[#00341E] font-bold text-sm inline-flex items-center transition-colors uppercase tracking-widest"
          style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
        >
          {showReadMore ? 'Hide Details' : 'Read More'}
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
        <div className="mt-4 bg-white border border-[#E0E0E0] p-6 md:p-8 max-w-[500px] mx-auto">
          <h4
            className="text-lg font-bold text-[#111111] mb-5 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
          >
            {law.title}
          </h4>

          {/* Key Points */}
          {law.keyPoints && law.keyPoints.length > 0 && (
            <div className="mb-6">
              <p
                className="text-[10px] text-[#00512E] uppercase tracking-[0.2em] font-bold mb-3"
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
              >
                Key Points
              </p>
              <ul className="space-y-2">
                {law.keyPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-[#333] flex items-start"
                    style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
                  >
                    <span className="text-[#F0C040] mr-2 font-bold flex-shrink-0">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Original Text */}
          {law.originalText && (
            <div className="border-t border-[#E0E0E0] pt-5">
              <p
                className="text-[10px] text-[#00512E] uppercase tracking-[0.2em] font-bold mb-3"
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
              >
                Original Constitutional Text
              </p>
              <p
                className="text-sm text-[#555] leading-relaxed italic"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                &ldquo;{law.originalText}&rdquo;
              </p>
              <p
                className="text-xs text-[#888] mt-3 font-medium"
                style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
              >
                — {law.source}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
