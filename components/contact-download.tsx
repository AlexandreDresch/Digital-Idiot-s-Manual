import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useLanguage } from "@/app/contexts/language-context";

export default function ContactDownload() {
  const { t } = useLanguage();

  const contactDownloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contactDownloadRef.current) {
      gsap.from(".contact-download-item", {
        scrollTrigger: {
          trigger: contactDownloadRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      id="contact-download"
      ref={contactDownloadRef}
      className="py-20 px-6 bg-gray-900/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-bg absolute -bottom-20 -left-20 w-80 h-80 border border-white/05 rounded-full blur-2xl backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute top-10 right-1/4 w-5 h-5 border border-gray-400/12 rounded-full backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute bottom-10 left-1/4 w-7 h-7 border border-white/08 rounded-full backdrop-filter backdrop-blur-sm"></div>
        <div className="parallax-float absolute top-1/2 right-10 w-4 h-4 border border-gray-300/10 rotate-45 backdrop-filter backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto relative z-50">
        <motion.h3
          className="text-sm text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {t.contact_download.title}
        </motion.h3>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            className="contact-download-item"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-4xl font-bold mb-8">
              {t.contact_download.contact}
            </h4>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className={`aspect-square rounded-lg ${
                    index === 0
                      ? "bg-gradient-to-br from-pink-500 to-purple-600"
                      : index === 1
                      ? "bg-gradient-to-br from-blue-500 to-green-500"
                      : index === 2
                      ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                      : "bg-gradient-to-br from-purple-500 to-pink-500"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-download-item"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-4xl font-bold mb-8">
              {t.contact_download.download}
            </h4>
            <div className="space-y-4 mb-6">
              <motion.div
                className="h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl font-bold">Português</span>
              </motion.div>
              <motion.div
                className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl font-bold">English</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="contact-download-item" whileHover={{ scale: 1.02 }}>
              <div className="space-y-4 mb-6 h-full">
                <motion.div
                  className="h-full bg-gray-800 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div className="w-4/5 h-4/5 bg-white rounded shadow-lg" whileHover={{ rotateY: 15 }} />
                </motion.div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
