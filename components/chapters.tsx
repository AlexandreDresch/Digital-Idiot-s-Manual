import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "./ui/button";
import { useLanguage } from "@/app/contexts/language-context";
import { Card, CardContent } from "./ui/card";

export default function Chapters() {
  const { t } = useLanguage();

  const chaptersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chaptersRef.current) {
      gsap.from(".chapter-card", {
        scrollTrigger: {
          trigger: chaptersRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      id="works"
      ref={chaptersRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-bg absolute top-0 right-0 w-96 h-96 border border-white/04 rounded-full blur-2xl backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute top-20 left-10 w-4 h-4 border border-gray-400/15 rounded-full backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute bottom-40 right-20 w-6 h-6 border border-white/10 rotate-45 backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute top-60 left-1/2 w-3 h-3 border border-gray-300/12 rounded-full backdrop-filter backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto relative z-50">
        <div className="flex justify-between items-center mb-12">
          <motion.h3
            className="text-sm text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {t.chapters.title}
          </motion.h3>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button variant="ghost" size="sm">
              {t.chapters.viewAll} →
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="chapter-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-20 bg-white/20 rounded backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2 text-slate-50">
                  {t.chapters.chapters.chapter_1.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  {t.chapters.chapters.chapter_1.description}
                </p>
                <motion.div whileHover={{ x: 5 }}>
                  <Button variant="ghost" size="sm" className="text-slate-50">
                    {t.chapters.view} →
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="chapter-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-500 relative flex items-center justify-center">
                <motion.div
                  className="w-24 h-32 bg-white rounded-lg shadow-lg"
                  whileHover={{ rotateY: 15 }}
                />
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2 text-slate-50">
                  {t.chapters.chapters.chapter_2.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  {t.chapters.chapters.chapter_2.description}
                </p>
                <motion.div whileHover={{ x: 5 }}>
                  <Button variant="ghost" size="sm" className="text-slate-50">
                    {t.chapters.view} →
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="chapter-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-28 h-16 bg-white/20 rounded backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2 text-slate-50">
                  {t.chapters.chapters.chapter_3.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  {t.chapters.chapters.chapter_3.description}
                </p>
                <motion.div whileHover={{ x: 5 }}>
                  <Button variant="ghost" size="sm" className="text-slate-50">
                    {t.chapters.view} →
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="chapter-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 relative flex items-center justify-center">
                <motion.div
                  className="w-32 h-20 bg-white/20 rounded backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2 text-slate-50">
                  {t.chapters.chapters.chapter_4.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  {t.chapters.chapters.chapter_4.description}
                </p>
                <motion.div whileHover={{ x: 5 }}>
                  <Button variant="ghost" size="sm" className="text-slate-50">
                    {t.chapters.view} →
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="text-slate-950">{t.chapters.seeMore}</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
