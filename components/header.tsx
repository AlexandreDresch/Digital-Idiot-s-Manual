import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../app/contexts/language-context";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-[999] bg-black/80 backdrop-blur-sm border-b border-gray-800"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-xl font-bold cursor-pointer"
        >
          DIM
        </motion.div>
        <div className="hidden md:flex space-x-8 text-sm">
          {Object.entries(t.nav)
            .slice(0, 4)
            .map(([key, value]) => (
              <motion.div key={key} whileHover={{ y: -2 }}>
                <Link
                  href={`#${key}`}
                  className="hover:text-gray-300 transition-colors"
                >
                  {value}
                </Link>
              </motion.div>
            ))}
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="text-xs bg-transparent"
            >
              {t.nav.letsConnect} →
            </Button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
