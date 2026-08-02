import { GoldDivider } from './Decorations';

/**
 * Childhood picture section showing a beautiful memory.
 */
export default function ChildhoodSection() {
  return (
    <section className="section-container" id="childhood-section">
      <div className="reveal" style={{ textAlign: 'center', padding: '50px 0' }}>
        <div style={{
          marginTop: '24px',
          padding: '8px',
          background: 'rgba(255, 255, 255, 0.4)',
          border: '1px solid rgba(201, 168, 118, 0.3)',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          display: 'inline-block'
        }}>
          <img
            src="./images/IMG_4328.jpg"
            alt="صورة العريس والعروسة"
            style={{
              width: '100%',
              maxWidth: '350px',
              height: 'auto',
              borderRadius: '8px',
              display: 'block'
            }}
          />
        </div>
        
        <p style={{
          marginTop: '20px',
          fontFamily: 'var(--font-arabic)',
          fontSize: '1.2rem',
          color: 'var(--color-text-light)',
          fontStyle: 'italic'
        }}>
          معاً للأبد...
        </p>
      </div>
    </section>
  );
}
