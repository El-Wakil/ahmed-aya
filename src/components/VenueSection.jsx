import { GoldDivider, HeartPin } from './Decorations';

/**
 * Venue section with heart-shaped pin, venue name, and illustration.
 * Matches the target site's "Lieu" section with the warm venue illustration.
 */
export default function VenueSection() {
  return (
    <section className="section-container" id="venue-section">
      <div className="venue-section reveal">
        <h2 className="section-title-script" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.8rem', fontWeight: 700 }}>المكان</h2>
        <GoldDivider />

        <div style={{ marginTop: 12 }}>
          <div className="venue-pin">
            <HeartPin size={32} />
          </div>
          <p className="venue-name" style={{ fontFamily: 'var(--font-arabic)', fontWeight: 700, fontSize: '1.5rem' }}>وادي القمر</p>
          <p className="venue-location" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.2rem' }}>طريق المحلة طنطا</p>
        </div>

        {/* Venue illustration */}
        <div className="venue-image">
          <img
            src="./images/venue.jpg"
            alt="Beldi Country Club - Marrakech evening scene with lanterns and dining"
          />
        </div>
      </div>
    </section>
  );
}
