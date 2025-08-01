"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "../app/contexts/language-context";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const { t } = useLanguage();

  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const tl = gsap.timeline();

      tl.from(".hero-greeting", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-name",
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
        .from(
          ".hero-year",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-float absolute top-20 left-10 w-20 h-20 border border-white/08 rotate-45 backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute top-40 right-20 w-16 h-16 border border-gray-400/12 rounded-full backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute bottom-40 left-20 w-12 h-12 border border-white/10 rounded-full backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute bottom-20 right-10 w-24 h-24 border border-gray-300/08 backdrop-filter backdrop-blur-sm"></div>

        <div className="parallax-bg absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-r border-white/05 h-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="parallax-mouse absolute inset-0 flex items-center justify-center opacity-10">
        <div className="text-6xl md:text-8xl lg:text-9xl font-bold whitespace-nowrap">
          AI • MACHINE LEARNING • AI • MACHINE LEARNING
        </div>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          className="hero-greeting border-2 border-white p-8 mb-8 inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-4xl md:text-6xl font-light">{t.hero.greeting}</h1>
        </motion.div>
        <div
          ref={textRef}
          className="hero-name text-8xl md:text-9xl lg:text-[12rem] font-bold pixelated-font leading-none"
        >
          {t.hero.name}
        </div>
        <div className="hero-year text-sm text-gray-400 mt-4">({t.hero.subtitle})</div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
