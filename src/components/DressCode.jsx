import { GoldDivider } from './Decorations';

const PALETTE_COLORS = [
  '#F5EFE6',
  '#C9A876',
  '#866739',
  '#3A2E1F',
  '#FFFFFF',
  '#D4B88A',
];

/**
 * Dress Code section with illustration, color palette, and Ladies/Gentlemen cards.
 * Matches the target site's dress code layout.
 */
export default function DressCode() {
  return (
    <section className="section-container" id="dresscode-section">
      <div className="dresscode-section reveal">
        <h2 className="section-title-script" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.8rem', fontWeight: 700 }}>قواعد اللباس</h2>
        <p style={{
          fontFamily: "var(--font-arabic)",
          fontSize: '1.1rem',
          color: '#7A6B57',
          marginBottom: 8,
          fontWeight: 700
        }}>
          ألوان الحفل
        </p>

        <GoldDivider />

        {/* Color palette swatches */}
        <div className="color-palette">
          {PALETTE_COLORS.map((color) => (
            <div
              key={color}
              className="color-swatch"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        <p className="dresscode-text" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.2rem' }}>
          ندعوكم للحضور بملابس أنيقة تعكس طابع هذا اليوم المميز.
        </p>

        {/* Dress code illustration */}
        <div className="dresscode-image">
          <img
            src="/images/dresscode.png"
            alt="Elegant dress code illustration - formal attire"
          />
        </div>

        {/* Cards */}
        <div className="dresscode-cards">
          <div className="dresscode-card">
            <h3 className="dresscode-card-title" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.4rem' }}>السيدات</h3>
            <p className="dresscode-card-text" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.1rem' }}>
              نرجو ارتداء فساتين سهرة أنيقة.
            </p>
          </div>

          <div className="dresscode-card">
            <h3 className="dresscode-card-title" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.4rem' }}>السادة</h3>
            <p className="dresscode-card-text" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.1rem' }}>
              نرجو ارتداء بدلات رسمية أنيقة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
