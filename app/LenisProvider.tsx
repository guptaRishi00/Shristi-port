"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// Export lenis instance globally
export let lenisInstance: Lenis | null = null;

export default function LenisProvider() {
  useEffect(() => {
    lenisInstance = new Lenis({
      
      lerp: 0.1, // adjust scroll smoothness (lower = smoother)
    });

    function raf(time: number) {
      lenisInstance?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
