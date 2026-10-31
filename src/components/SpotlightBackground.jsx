"use client";

import { useEffect, useState } from "react";

export default function SpotlightBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only activate on devices with mouse/pointer (not touchscreens)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Base Dark Engineering Grid Pattern (Very faint) */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.35) 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* 2. Interactive Spotlight Grid Reveal (Only shines around the cursor) */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.12), rgba(56, 189, 248, 0.08), transparent 70%)`,
        }}
      />

      {/* 3. Highlighted Bright Dots revealed by Cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          maskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 80%)`,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(52, 211, 153, 0.75) 1.5px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

