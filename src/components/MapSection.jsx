import { GoldDivider } from './Decorations';

/**
 * Map section with embedded Google Maps and directions button.
 * Matches the target site's "Itinéraire Google Maps" section.
 */
export default function MapSection() {
  const mapsUrl = 'https://www.google.com/maps?q=Wady+Elamar,+Saft+Torab,+El+Mahalla+El+Kubra,+Gharbia+Governorate+6731011&ftid=0x14f7ba239a32d8f7:0x1dbfcc6831d017ab&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,100809208,94218641,94282134,100813464,94286869,100820247,100813014,100822504&g_ep=CAISEjI2LjMxLjUuOTU0MzA2MDQzMBgAINeCAypxLDk0Mjk3Njk5LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDEwMDgwOTIwOCw5NDIxODY0MSw5NDI4MjEzNCwxMDA4MTM0NjQsOTQyODY4NjksMTAwODIwMjQ3LDEwMDgxMzAxNCwxMDA4MjI1MDRCAkVH&skid=5d944920-e9b2-46d9-bc58-41e50dd63c47&g_st=ic';
  const embedUrl = 'https://maps.google.com/maps?q=Wady+Elamar,+Saft+Torab,+El+Mahalla+El+Kubra,+Gharbia+Governorate+6731011&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <section className="section-container" id="map-section">
      <div className="map-section reveal">
        <h2 className="section-title-script" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.8rem', fontWeight: 700 }}>الموقع على خرائط جوجل</h2>
        <GoldDivider />

        <div className="map-container">
          <iframe
            src={embedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wady Elamar - El Mahalla El Kubra"
          />
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="directions-button"
          id="directions-button"
          style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.1rem' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          الحصول على الاتجاهات
        </a>
      </div>
    </section>
  );
}
