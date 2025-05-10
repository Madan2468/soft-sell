"use client"

import { motion } from "framer-motion"
import { BadgeDollarSign, ShieldCheck, Clock, Users } from "lucide-react"

const features = [
  {
    icon: <BadgeDollarSign className="h-6 w-6" />,
    title: "Best Market Rates",
    description: "We leverage our extensive network to ensure you get the highest possible value for your licenses.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Secure Transactions",
    description: "Our platform uses enterprise-grade security to protect your data and financial transactions.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Fast Processing",
    description: "Get valuations within 24 hours and payment within 3-5 business days after acceptance.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Support",
    description: "Our team of software licensing experts is available to guide you through the entire process.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SoftSell offers unmatched benefits for businesses looking to recover value from unused software licenses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 rounded-lg border bg-background/50 hover:bg-background transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
