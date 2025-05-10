"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was seamless and their valuation was higher than competitors.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechGrowth Inc.",
    initials: "SJ",
  },
  {
    quote:
      "As a growing startup, we needed to optimize our software expenses. SoftSell not only helped us sell unused licenses but also connected us with discounted options for tools we needed.",
    name: "Michael Chen",
    role: "Operations Director",
    company: "Innovate Solutions",
    initials: "MC",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-black"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Hear from businesses that have successfully recovered value with SoftSell.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all transform hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="mb-6 italic text-muted-foreground">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-black">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
