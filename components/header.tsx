"use client"

import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next';
import '../i18n';
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { X, Menu, Download, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedButton from "@/components/ui/animated-button"

const navLinks = [
  { href: "#main", labelKey: "header.navLinks.main" },
  { href: "#about", labelKey: "header.navLinks.about" },
  { href: "#problem", labelKey: "header.navLinks.problem" },
  { href: "#our_solve", labelKey: "header.navLinks.solution" },
  { href: "#how_work", labelKey: "header.navLinks.features" },
  { href: "#our_pluses", labelKey: "header.navLinks.advantages" },
  { href: "#zachem", labelKey: "header.navLinks.market" },
  { href: "#inovation", labelKey: "header.navLinks.innovation" },
]

const locales: Record<string, { title: string }> = {
  en: { title: 'English' },
  ru: { title: 'Русский' },
};

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Disable scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-30 w-full backdrop-blur-md transition-all duration-300",
        scrolled ? "bg-white/95 border-b border-gray-100 shadow-premium" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo.svg"
              alt={t('header.logoAlt')}
              width={70}
              height={56}
              className="relative z-40 h-auto w-[60px] md:w-[70px]"
            />
            <div className="hidden md:block">{/* Логотип без текста */}</div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-6"
            >
              {navLinks.slice(0, 6).map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a
                    href={link.href}
                    className="relative text-sm font-medium transition-colors hover:text-cyclone md:text-base"
                  >
                    {t(link.labelKey)}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyclone to-cyclone-light"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

<select
  value={i18n.resolvedLanguage}
  onChange={handleLanguageChange}
  className="px-2 py-1 border-none md:border rounded bg-white text-premium-800 text-sm font-medium hover:border-cyclone"
>
  {Object.entries(locales).map(([lng, { title }]) => (
    <option key={lng} value={lng}>
      {title}
    </option>
  ))}
</select>

            <a href="https://github.com/Ibraimov23/cyclone.io/raw/master/public/downloads/cyclone.apk" download>
              <AnimatedButton variant="cyclone" className="px-4 py-2 text-sm flex items-center gap-2">
                <Download className="h-5 w-5" />
                <span>{t('header.downloadApp')}</span>
              </AnimatedButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-50 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-white shadow-premium lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={t('header.toggleMenu')}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-cyclone"
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-cyclone"
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center lg:hidden"
              >
                {/* Background Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-premium-900/80 backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Content */}
                <motion.div
                  initial={{ scale: 0.9, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.9, y: 20, opacity: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  className="relative mx-4 max-h-[80vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-premium-xl"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gradient">{t('header.mobileMenuTitle')}</h3>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-full bg-premium-50 p-2 text-premium-500 transition-colors hover:bg-premium-100 hover:text-cyclone"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid gap-3">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center rounded-lg border border-premium-100 bg-white p-3 text-premium-800 shadow-sm transition-all hover:border-cyclone/20 hover:bg-cyclone/5 hover:text-cyclone hover:shadow-md"
                      >
                        <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-premium-50 text-premium-600">
                          {index + 1}
                        </span>
                        <span className="font-medium">{t(link.labelKey)}</span>
                        <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                      </motion.a>
                    ))}
                    {/* Language Selector in Mobile Menu */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * navLinks.length }}
                      className="flex items-center rounded-lg border border-premium-100 bg-white p-3 shadow-sm"
                    >
                      <select
                        value={i18n.resolvedLanguage}
                        onChange={handleLanguageChange}
                        className="w-full bg-transparent text-premium-800 font-medium focus:outline-none"
                      >
                        {Object.entries(locales).map(([lng, { title }]) => (
                          <option key={lng} value={lng}>
                            {title}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 flex justify-center"
                  >
                    <a href="https://github.com/Ibraimov23/cyclone.io/raw/master/public/downloads/cyclone.apk" download="">
                      <AnimatedButton variant="cyclone" className="px-6 py-3 text-base flex items-center gap-2">
                        <Download className="h-6 w-6" />
                        <span>{t('header.downloadApp')}</span>
                      </AnimatedButton>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}