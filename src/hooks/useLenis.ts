import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Enhanced Lenis configuration for ultra-smooth scrolling
    const lenis = new Lenis({
      duration: 1.5, // Longer duration for smoother feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1, // Control scroll speed
      touchMultiplier: 2, // Touch scroll multiplier
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger for perfect integration
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker for smooth 60fps updates
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable lag smoothing for consistent frame rate
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after Lenis initializes
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return lenisRef;
};
