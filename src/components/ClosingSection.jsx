import { GoldDivider } from './Decorations';

/**
 * Closing section with farewell message.
 * Matches the target site's "Au plaisir de vous accueillir" closing.
 */
export default function ClosingSection() {
  return (
    <section className="section-container" id="closing-section">
      <div className="closing-section reveal">
        <GoldDivider />

        <p className="closing-text" style={{ marginTop: 20, fontFamily: 'var(--font-arabic)', fontSize: '1.8rem', fontWeight: 700 }}>
          نتطلع بشوق لرؤيتكم
        </p>

        <GoldDivider className="mt-4" />

        <p className="closing-names" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-script)', color: 'var(--color-gold-dark)' }}>
          Ahmed &amp; Aya
        </p>
      </div>
    </section>
  );
}
