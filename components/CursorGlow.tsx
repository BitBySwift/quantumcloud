"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const glow = glowRef.current;
      if (!glow) return;
      const x = event.clientX - 180;
      const y = event.clientY - 180;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(88,230,255,0.35),rgba(5,6,10,0)_70%)] opacity-70 blur-2xl transition-transform duration-75 md:block"
      aria-hidden="true"
    />
  );
}
