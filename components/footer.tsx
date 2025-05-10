"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-10 w-10 rounded-lg bg-primary shadow-xl shadow-blue-400/30 text-primary-foreground flex items-center justify-center font-bold text-lg">
                SS
              </div>
              <span className="text-2xl font-bold tracking-wide">SoftSell</span>
            </motion.div>
            <p className="text-muted-foreground text-sm mb-5 max-w-md">
              Empowering businesses to reclaim value from unused software licenses — transparently and efficiently.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{Icon.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "How It Works", href: "#how-it-works" },
                { name: "Why Choose Us", href: "#why-choose-us" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map(({ name, href }, i) => (
                <motion.li key={i} whileHover={{ x: 6 }}>
                  <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text, i) => (
                <motion.li key={i} whileHover={{ x: 6 }}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="border-t border-white/10 mt-14 pt-6 text-center text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          &copy; {currentYear} SoftSell. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}
