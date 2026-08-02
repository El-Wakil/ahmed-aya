/**
 * Decorative SVG elements matching the Blossom & Oud design.
 * Gold ornamental dividers, Islamic arch shapes, floral rosettes, and icons.
 */

/**
 * Gold ornamental divider with central knot — matches the target site's dividers
 */
export function GoldDivider({ className = '' }) {
  return (
    <div className={`gold-divider ${className}`}>
      <span className="gold-divider-line" />
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="gold-divider-ornament">
        {/* Central diamond shape with scrolls */}
        <path d="M15 5 L20 15 L15 25 L10 15 Z" stroke="#C9A876" strokeWidth="0.6" fill="none" />
        <path d="M15 8 L18 15 L15 22 L12 15 Z" stroke="#C9A876" strokeWidth="0.4" fill="none" />
        <circle cx="15" cy="15" r="1.5" fill="#C9A876" opacity="0.6" />
        {/* Small scrolls */}
        <path d="M8 15 Q10 12, 12 15" stroke="#C9A876" strokeWidth="0.4" fill="none" />
        <path d="M22 15 Q20 12, 18 15" stroke="#C9A876" strokeWidth="0.4" fill="none" />
        <path d="M8 15 Q10 18, 12 15" stroke="#C9A876" strokeWidth="0.4" fill="none" />
        <path d="M22 15 Q20 18, 18 15" stroke="#C9A876" strokeWidth="0.4" fill="none" />
      </svg>
      <span className="gold-divider-line" />
    </div>
  );
}

/**
 * Islamic arch shape for the Arabic invitation card top
 */
export function IslamicArch({ width = 200 }) {
  return (
    <svg width={width} height={width * 0.4} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
      <path d="M10 80 L10 35 Q10 5, 100 5 Q190 5, 190 35 L190 80" stroke="#C9A876" strokeWidth="1" fill="none" />
      <path d="M20 80 L20 40 Q20 15, 100 15 Q180 15, 180 40 L180 80" stroke="#C9A876" strokeWidth="0.5" fill="none" opacity="0.5" />
    </svg>
  );
}

/**
 * Floral rosette for timeline — matches the ornate gold flower between timeline items
 */
export function FloralRosette({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 8-petal flower */}
      <circle cx="12" cy="12" r="3" stroke="#C9A876" strokeWidth="0.6" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="#C9A876" opacity="0.5" />
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 12 + Math.cos(rad) * 7;
        const cy = 12 + Math.sin(rad) * 7;
        return (
          <ellipse
            key={angle}
            cx={cx}
            cy={cy}
            rx="2.5"
            ry="1.5"
            transform={`rotate(${angle}, ${cx}, ${cy})`}
            stroke="#C9A876"
            strokeWidth="0.5"
            fill="none"
            opacity="0.7"
          />
        );
      })}
    </svg>
  );
}

/**
 * Location pin with heart — matches the olive/gold heart-pin in the venue section
 */
export function HeartPin({ size = 32, color = '#866739' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4C11.6 4 8 7.6 8 12c0 7 8 16 8 16s8-9 8-16c0-4.4-3.6-8-8-8z" fill={color} opacity="0.85" />
      {/* Heart inside */}
      <path d="M16 10.5c-0.5-1.5-2-2.5-3.5-2.5C10.5 8 9 9.5 9 11.5c0 3.5 7 7 7 7s7-3.5 7-7c0-2-1.5-3.5-3.5-3.5-1.5 0-3 1-3.5 2.5z" fill="white" opacity="0.9" />
    </svg>
  );
}

/**
 * Scroll down chevron for hero section
 */
export function ScrollChevron() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 8 L12 16 L20 8" stroke="#C9A876" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Music/Audio icon
 */
export function AudioIcon({ isPlaying }) {
  if (isPlaying) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <rect x="6" y="6" width="4" height="12" rx="1" />
        <rect x="14" y="6" width="4" height="12" rx="1" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
