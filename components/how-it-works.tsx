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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes selling software licenses simple and profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 shadow-sm border relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="h-4 w-4 border-t-2 border-r-2 border-primary transform rotate-45"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
