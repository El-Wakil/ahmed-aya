import { useState } from 'react';
import { GoldDivider } from './Decorations';

/**
 * RSVP Form — "Confirmez Votre Présence"
 * Controlled form with validation, matching the target site's form design.
 */
export default function RSVPForm() {
  const [formData, setFormData] = useState({
    nom: '',
    nombrePersonnes: '',
    presence: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nom.trim()) {
      newErrors.nom = 'الرجاء إدخال الاسم';
    }
    if (!formData.nombrePersonnes.trim()) {
      newErrors.nombrePersonnes = 'الرجاء تحديد عدد الأشخاص';
    } else if (isNaN(Number(formData.nombrePersonnes)) || Number(formData.nombrePersonnes) < 1) {
      newErrors.nombrePersonnes = 'الرجاء إدخال رقم صحيح';
    }
    if (!formData.presence) {
      newErrors.presence = 'الرجاء تحديد خيار';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // TODO(security): Connect to a real API endpoint for RSVP submission.
    // When connecting, ensure HTTPS is used for API communication.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (isSubmitted) {
    return (
      <section className="section-container" id="rsvp-section">
        <div className="rsvp-section">
          <div className="success-message">
            <div style={{ fontSize: '2.5rem', marginBottom: 15 }}>✨</div>
            <h3 style={{
              fontFamily: "var(--font-arabic)",
              fontSize: '1.8rem',
              color: '#866739',
              marginBottom: 8,
              fontWeight: 700,
            }}>شكراً لردكم!</h3>
            <p style={{
              fontFamily: "var(--font-arabic)",
              fontSize: '1.2rem',
              color: '#7A6B57',
              fontWeight: 400,
            }}>
              لقد تلقينا تأكيدكم. نتطلع لرؤيتكم!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-container" id="rsvp-section">
      <div className="rsvp-section reveal">
        <h2 className="section-title-script" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.8rem', fontWeight: 700 }}>تأكيد الحضور</h2>
        <GoldDivider />

        <form className="rsvp-form" onSubmit={handleSubmit} style={{ textAlign: 'right' }}>
          {/* Nom */}
          <div className="form-group">
            <label htmlFor="rsvp-nom" className="form-label" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.1rem' }}>الاسم</label>
            <input
              id="rsvp-nom"
              type="text"
              className="form-input"
              placeholder="الاسم الكامل"
              value={formData.nom}
              onChange={(e) => handleChange('nom', e.target.value)}
              autoComplete="name"
            />
            {errors.nom && <p className="form-error" style={{ fontFamily: 'var(--font-arabic)' }}>{errors.nom}</p>}
          </div>

          {/* Nombre de personnes */}
          <div className="form-group">
            <label htmlFor="rsvp-nombre" className="form-label" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.1rem' }}>عدد الأشخاص</label>
            <input
              id="rsvp-nombre"
              type="number"
              min="1"
              className="form-input"
              placeholder="1"
              value={formData.nombrePersonnes}
              onChange={(e) => handleChange('nombrePersonnes', e.target.value)}
            />
            {errors.nombrePersonnes && <p className="form-error" style={{ fontFamily: 'var(--font-arabic)' }}>{errors.nombrePersonnes}</p>}
          </div>

          {/* Presence radio */}
          <div className="form-group">
            <p className="form-label" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.1rem' }}>هل ستحضرون؟</p>
            <div className="radio-group">
              <label className="radio-label" htmlFor="rsvp-oui" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.1rem' }}>
                <input
                  type="radio"
                  id="rsvp-oui"
                  name="presence"
                  value="oui"
                  checked={formData.presence === 'oui'}
                  onChange={(e) => handleChange('presence', e.target.value)}
                  style={{ marginLeft: 12, marginRight: 0 }}
                />
                نعم، سأحضر
              </label>
              <label className="radio-label" htmlFor="rsvp-non" style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.1rem' }}>
                <input
                  type="radio"
                  id="rsvp-non"
                  name="presence"
                  value="non"
                  checked={formData.presence === 'non'}
                  onChange={(e) => handleChange('presence', e.target.value)}
                  style={{ marginLeft: 12, marginRight: 0 }}
                />
                أعتذر، لن أتمكن من الحضور
              </label>
            </div>
            {errors.presence && <p className="form-error" style={{ fontFamily: 'var(--font-arabic)' }}>{errors.presence}</p>}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            id="rsvp-submit-button"
            style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.3rem' }}
          >
            {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
          </button>
        </form>
      </div>
    </section>
  );
}
