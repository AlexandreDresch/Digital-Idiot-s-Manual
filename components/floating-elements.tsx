"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".floating-element");

    elements.forEach((element, index) => {
      gsap.to(element, {
        y: `random(-30, 30)`,
        x: `random(-20, 20)`,
        rotation: `random(-15, 15)`,
        duration: `random(3, 6)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      });

      const handleMouseEnter = () => {
        gsap.to(element, {
          scale: 1.2,
          borderColor: "rgba(255, 255, 255, 0.3)",
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          scale: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      <div className="floating-element absolute top-20 left-10 w-8 h-8 border border-white/10 rotate-45 pointer-events-auto cursor-pointer backdrop-filter backdrop-blur-sm"></div>
      <div className="floating-element absolute top-40 right-20 w-6 h-6 border border-gray-400/15 rounded-full pointer-events-auto cursor-pointer backdrop-filter backdrop-blur-sm"></div>
      <div className="floating-element absolute bottom-40 left-20 w-10 h-10 border border-white/08 rounded-full pointer-events-auto cursor-pointer backdrop-filter backdrop-blur-sm"></div>
      <div className="floating-element absolute bottom-20 right-10 w-12 h-12 border border-gray-300/12 pointer-events-auto cursor-pointer backdrop-filter backdrop-blur-sm"></div>
      <div className="floating-element absolute top-1/2 left-1/4 w-4 h-4 border border-white/15 rounded-full pointer-events-auto cursor-pointer backdrop-filter backdrop-blur-sm"></div>
      <div className="floating-element absolute top-1/3 right-1/3 w-6 h-6 border border-gray-400/10 rotate-45 pointer-events-auto cursor-pointer backdrop-filter backdrop-blur-sm"></div>

      <div className="floating-element absolute top-60 left-1/2 w-3 h-3 border border-white/12 rounded-full pointer-events-auto cursor-pointer backdrop-filter backdrop-blur-sm"></div>
      <div className="floating-element absolute bottom-60 right-1/4 w-5 h-5 border border-gray-300/08 pointer-events-auto cursor-pointer backdrop-filter backdrop-blur-sm"></div>

      <div className="floating-element absolute top-32 right-1/2 w-7 h-7 border border-white/06 rotate-12 pointer-events-auto cursor-pointer backdrop-filter backdrop-blur-sm"></div>
      <div className="floating-element absolute bottom-32 left-1/3 w-9 h-9 border border-gray-400/12 rounded-full pointer-events-auto cursor-pointer backdrop-filter backdrop-blur-sm"></div>
    </div>
  );
}
