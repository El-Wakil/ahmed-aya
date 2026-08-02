import { ScrollChevron } from './Decorations';

/**
 * Hero section — full-screen background image with names overlay.
 * Matches the target site's Moroccan palace + curtains + chandelier scene.
 */
export default function HeroSection() {
  return (
    <section className="hero-section" id="hero-section">
      {/* Background image */}
      <img
        src="./images/hero-bg.png"
        alt="Luxurious Moroccan palace with golden curtains and chandelier"
        className="hero-bg-image"
      />

      {/* Gradient overlay for text readability */}
      <div className="hero-overlay" />

      {/* Names and date */}
      <div className="hero-content">
        <h1 className="hero-name" style={{ animation: 'fadeInUp 1s ease-out 0.3s both' }}>
          Dr. Ahmed
        </h1>
        <p className="hero-ampersand" style={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}>
          &amp;
        </p>
        <h1 className="hero-name" style={{ animation: 'fadeInUp 1s ease-out 0.7s both' }}>
          Dr. Aya
        </h1>
        <p className="hero-date" style={{ animation: 'fadeInUp 1s ease-out 0.9s both' }}>
          ٣٠ أغسطس ٢٠٢٦
        </p>
        <p className="hero-time" style={{ animation: 'fadeInUp 1s ease-out 1.1s both' }}>
          ابتداءً من الساعة الثامنة مساءً
        </p>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" style={{ animation: 'fadeIn 1s ease-out 2s both' }}>
        <ScrollChevron />
      </div>
    </section>
  );
}
