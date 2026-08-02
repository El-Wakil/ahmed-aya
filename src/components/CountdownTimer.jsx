import { useState, useEffect } from 'react';
import { GoldDivider } from './Decorations';

/**
 * Live countdown timer to the wedding date.
 * Matches the target site's large bold number display with colon separators.
 */
export default function CountdownTimer() {
  const weddingDate = new Date('2026-08-30T20:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <section className="section-container" id="countdown-section">
      <div className="countdown-section reveal">
        <h2 className="countdown-title" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.8rem', fontWeight: 700 }}>تبدأ الاحتفالات</h2>

        <GoldDivider />

        <div className="countdown-grid" style={{ marginTop: 28, direction: 'ltr' }}>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label" style={{ fontFamily: 'var(--font-arabic)' }}>أيام</span>
          </div>
          <span className="countdown-colon">:</span>
          <div className="countdown-item">
            <span className="countdown-number">{pad(timeLeft.hours)}</span>
            <span className="countdown-label" style={{ fontFamily: 'var(--font-arabic)' }}>ساعات</span>
          </div>
          <span className="countdown-colon">:</span>
          <div className="countdown-item">
            <span className="countdown-number">{pad(timeLeft.minutes)}</span>
            <span className="countdown-label" style={{ fontFamily: 'var(--font-arabic)' }}>دقائق</span>
          </div>
          <span className="countdown-colon">:</span>
          <div className="countdown-item">
            <span className="countdown-number">{pad(timeLeft.seconds)}</span>
            <span className="countdown-label" style={{ fontFamily: 'var(--font-arabic)' }}>ثواني</span>
          </div>
        </div>
      </div>
    </section>
  );
}
