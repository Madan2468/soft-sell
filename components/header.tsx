"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useMobile } from "@/hooks/use-mobile"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  // Close menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false)
  }, [isMobile])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-lg font-bold shadow-md transition-transform hover:scale-105">
            SS
          </div>
          <span className="font-semibold text-xl hidden sm:inline-block">SoftSell</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {["how-it-works", "why-choose-us", "testimonials", "contact"].map((link) => (
            <motion.div
              key={link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={`#${link}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
          <Button size="sm" className="transition-transform hover:scale-105">Get Started</Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="transition-transform hover:scale-105"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="container py-4 md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {["how-it-works", "why-choose-us", "testimonials", "contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
              ))}
              <Button size="sm" className="w-full transition-transform hover:scale-105">
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
