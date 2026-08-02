import { useState, useMemo, useRef, useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { AudioIcon } from './components/Decorations';

import SplashScreen from './components/SplashScreen';
import HeroSection from './components/HeroSection';
import InvitationText from './components/InvitationText';
import ChildhoodSection from './components/ChildhoodSection';
import CountdownTimer from './components/CountdownTimer';
import Timeline from './components/Timeline';
import VenueSection from './components/VenueSection';
import MapSection from './components/MapSection';
import ClosingSection from './components/ClosingSection';

/**
 * Generates random sparkle particles for the background overlay.
 */
function generateSparkles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${2 + Math.random() * 4}s`,
    size: `${2 + Math.random() * 2}px`,
  }));
}

/**
 * Main App component — orchestrates splash screen, audio, sparkles, and all sections.
 */
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useScrollReveal();
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/ادخلي عمري.mp3');
    audioRef.current.loop = false;
    audioRef.current.volume = 0.5;

    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const sparkles = useMemo(() => generateSparkles(40), []);

  const handleOpen = () => {
    setIsOpen(true);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Splash Screen */}
      {!isOpen && <SplashScreen onOpen={handleOpen} />}

      {/* Main Content */}
      {isOpen && (
        <div className="page-bg">
          {/* Sparkle overlay */}
          <div className="sparkle-overlay">
            {sparkles.map((s) => (
              <div
                key={s.id}
                className="sparkle"
                style={{
                  left: s.left,
                  top: s.top,
                  animationDelay: s.delay,
                  animationDuration: s.duration,
                  width: s.size,
                  height: s.size,
                }}
              />
            ))}
          </div>

          <main ref={containerRef} style={{ overflowX: 'hidden', position: 'relative', zIndex: 2 }}>
            <HeroSection />
            <InvitationText />
            <ChildhoodSection />
            <CountdownTimer />
            <Timeline />
            <VenueSection />
            <MapSection />
            <ClosingSection />
          </main>

          {/* Audio toggle button */}
          <button
            className="audio-toggle"
            onClick={toggleAudio}
            type="button"
            id="audio-toggle"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            <AudioIcon isPlaying={isPlaying} />
          </button>
        </div>
      )}
    </>
  );
}
