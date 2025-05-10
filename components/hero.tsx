"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 container text-center">

      {/* Optional animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 blur-3xl opacity-30 -z-10"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            Turn Unused Software Licenses Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Cash
            </span>
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          SoftSell helps businesses recover value from unused software licenses. Get the best market rates with our
          transparent, efficient platform.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex justify-center flex-col sm:flex-row gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="gap-2 shadow-lg">
              Sell My Licenses <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="shadow-lg">
              Get a Quote
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
