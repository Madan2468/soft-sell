"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

const steps = [
  {
    icon: <Upload className="h-10 w-10" />,
    title: "Upload License",
    description: "Submit your software license details through our secure portal.",
  },
  {
    icon: <DollarSign className="h-10 w-10" />,
    title: "Get Valuation",
    description: "Receive a competitive market valuation within 24 hours.",
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Get Paid",
    description: "Accept our offer and get paid quickly via your preferred method.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28 overflow-hidden bg-muted/50">
      {/* Modern blurred background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-[150px] -z-10"
      />

      <div className="container">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes selling software licenses simple and profitable.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group bg-background rounded-xl p-8 shadow-xl border border-border transition-all duration-300 hover:shadow-2xl"
            >
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6 }}
                className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner mb-5 mx-auto"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
