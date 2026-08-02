import { useState } from 'react';

/**
 * Splash screen — envelope design with wax seal.
 * Matches the target site's envelope opening animation.
 */
export default function SplashScreen({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <div
      className={`splash-screen ${isOpening ? 'opening' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
      id="splash-screen"
    >
      <img
        src="/images/splash-envelope-arabic.png"
        alt="Wedding invitation envelope"
        className="splash-envelope"
      />
      <div className="splash-tap-area">
        {/* Invisible tap area — the entire envelope is clickable */}
      </div>
    </div>
  );
}
