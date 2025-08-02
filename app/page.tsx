"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FloatingElements } from "@/components/floating-elements";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Chapters from "@/components/chapters";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (clientX - centerX) * 0.01;
      const moveY = (clientY - centerY) * 0.01;

      gsap.to(".parallax-mouse", {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    gsap.utils.toArray<HTMLElement>(".parallax-bg").forEach((element) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.utils
      .toArray<HTMLElement>(".parallax-float")
      .forEach((element, index) => {
        gsap.to(element, {
          y: -100 * (index + 1),
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: 0, ease: "power3.out" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingElements />

      <Header />

      <Hero />

      <About />

      <Chapters />

      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            size="icon"
            className="rounded-full bg-white text-black hover:bg-gray-200"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
