import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for scroll-reveal animations.
 * Uses a callback ref to ensure the IntersectionObserver is set up
 * after the DOM element is actually mounted (handles conditional rendering).
 */
export function useScrollReveal() {
  const observerRef = useRef(null);

  const callbackRef = useCallback((node) => {
    // Cleanup previous observer if any
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (!node) return;

    // Small delay to ensure child components have rendered
    requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px',
        }
      );

      const elements = node.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
      observerRef.current = observer;
    });
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return callbackRef;
}
