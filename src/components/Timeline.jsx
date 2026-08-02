import { GoldDivider, FloralRosette } from './Decorations';

const events = [
  { time: '7:00', event: 'تحرك \nالأتوبيسات', hasRosette: true },
  { time: '8:00', event: 'بدا الحفل', hasRosette: false },
];

/**
 * Timeline section with vertical line, diamond dots, and floral rosettes.
 * Matches the target site's elegant event chronology layout.
 */
export default function Timeline() {
  return (
    <section className="section-container" id="timeline-section">
      <div className="timeline-section reveal">
        <h2 className="section-title-script" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.8rem', fontWeight: 700 }}>برنامج الحفل</h2>
        <GoldDivider />

        <div className="timeline-container" style={{ marginTop: 16 }}>
          {/* Vertical line */}
          <div className="timeline-line" />

          {events.map((item) => (
            <div className="timeline-item" key={item.time}>
              <span className="timeline-time" style={{ paddingRight: 0, paddingLeft: '30px' }}>{item.time}</span>
              <span className={`timeline-dot ${item.hasRosette ? 'large' : ''}`}>
                {item.hasRosette ? (
                  <FloralRosette size={24} />
                ) : (
                  <span className="timeline-dot-inner" />
                )}
              </span>
              <span className="timeline-event" style={{ paddingLeft: 0, paddingRight: '30px', fontFamily: 'var(--font-arabic)' }}>
                {item.event.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < item.event.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
