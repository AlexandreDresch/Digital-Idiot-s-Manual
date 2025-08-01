"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ScrollingTextProps {
  text: string;
  className?: string;
}

export function ScrollingText({ text, className = "" }: ScrollingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const textElement = textRef.current;

    const textContent = `${text} `.repeat(20);
    textElement.textContent = textContent;

    const textWidth = textElement.scrollWidth;

    const tl = gsap.timeline({ repeat: -1 });

    tl.set(textElement, { x: 0 });
    tl.to(textElement, {
      x: -textWidth / 2,
      duration: 20,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <div ref={textRef} className="inline-block" />
    </div>
  );
}
