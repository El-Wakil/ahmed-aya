import { GoldDivider, IslamicArch } from './Decorations';

/**
 * Arabic invitation text inside a bordered card with Islamic arch motif.
 * Matches the target site's parchment-style card with Bismillah calligraphy.
 */
export default function InvitationText() {
  return (
    <section className="section-container" id="invitation-text" style={{ padding: '40px 24px' }}>
      <div className="reveal">
        {/* Islamic arch at top */}
        <IslamicArch width={180} />

        {/* Invitation card */}
        <div className="invitation-card">
          {/* Bismillah calligraphy */}
          <img
            src="/images/bismillah.png"
            alt="بسم الله الرحمن الرحيم"
            className="bismillah-img"
          />

          <GoldDivider />

          {/* Arabic invitation text */}
          <div className="arabic-text" dir="rtl" style={{ marginTop: 16 }}>
            <p className="highlight">الدكتور أحمد الحديدي & الدكتورة ايه إبراهيم</p>
            <p style={{ marginTop: 16, fontSize: '1.4rem' }}>
              يسعدهما ويشرفهما أن يدعوا
              <br />
              حضرتكم الكريمة
              <br />
              لمشاركتهما فرحة حفل زفافهما
            </p>
            <p style={{ marginTop: 20, fontWeight: 700, fontSize: '1.4rem' }}>
              وذلك بمشيئة الله تعالى يوم
              <br />
              الاحد ٣٠ اغسطس ٢٠٢٦
              <br />
              على الساعة الثامنة مساءً
            </p>
            <p style={{ marginTop: 20, fontSize: '1.5rem', fontWeight: 700 }}>بقاعة</p>
            <p className="venue-latin" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.5rem', fontWeight: 700 }}>وادي القمر طريق المحلة طنطا</p>
          </div>

          <GoldDivider className="mt-4" />
        </div>

        {/* Card bottom point */}
        <div className="card-bottom-point" />
      </div>
    </section>
  );
}
