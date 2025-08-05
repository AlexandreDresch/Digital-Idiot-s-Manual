import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ScrollingText } from "./scrolling-text";
import { useLanguage } from "@/app/contexts/language-context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const { t } = useLanguage();

  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-description", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".about-devices", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-bg absolute -top-20 -left-20 w-40 h-40 border border-white/06 rounded-full blur-sm backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute top-10 right-10 w-6 h-6 border border-gray-400/12 rounded-full backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute bottom-20 left-5 w-8 h-8 border border-white/08 rotate-45 backdrop-filter backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full ">
            <div className="text-sm text-gray-400 mb-4 overflow-hidden">
              <ScrollingText
                text={`${t.about.scrollingText} `}
                className="text-sm text-gray-400"
              />
            </div>
            <h2 className="about-title text-3xl md:text-4xl font-bold mb-6">
              {t.about.title}
            </h2>
            <p className="about-description text-gray-300 text-lg leading-relaxed">
              {t.about.description}
            </p>
          </div>
          <motion.div
            className="about-devices flex justify-center space-x-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-24 h-32 bg-gray-800 rounded-lg flex items-center justify-center"
              whileHover={{ rotateY: 10 }}
            >
              <div className="w-16 h-20 bg-gray-700 rounded"></div>
            </motion.div>
            <motion.div
              className="w-32 h-24 bg-gray-800 rounded-lg flex items-center justify-center"
              whileHover={{ rotateY: -10 }}
            >
              <div className="w-20 h-16 bg-gray-700 rounded"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
