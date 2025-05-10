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

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-muted/50 relative">
      {/* Background blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-[120px] -z-10"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SoftSell offers unmatched benefits for businesses looking to recover value from unused software licenses.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6 p-6 rounded-xl border bg-background/70 hover:bg-background hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 5], // Fixed to two keyframes
                  color: "#F2D200", // Change icon color on hover
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.4,
                  },
                }}
                className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 transition-all duration-300 ease-in-out"
              >
                {feature.icon}
              </motion.div>

              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-xl font-semibold mb-2 hover:text-primary transition-all duration-300 ease-in-out"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.6 }}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
