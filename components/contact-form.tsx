"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name is required." }),
  licenseType: z.string().min(1, { message: "Please select a license type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const inputVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f4f4f6] to-[#e0e7ff] dark:from-[#0f172a] dark:to-[#1e293b]">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary drop-shadow-lg">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Ready to turn your unused software licenses into cash? Get in touch with our team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/80 dark:bg-[#0f172a]/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-border space-y-6"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-6">
                Your message has been received. Our team will get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
            </motion.div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {["name", "email", "company", "licenseType", "message"].map((field, i) => (
                  <motion.div
                    key={field}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    <FormField
                      control={form.control}
                      name={field as keyof z.infer<typeof formSchema>}
                      render={({ field: f }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium capitalize text-primary">{field}</FormLabel>
                          <FormControl>
                            {field === "licenseType" ? (
                              <Select onValueChange={f.onChange} defaultValue={f.value}>
                                <SelectTrigger className="focus:ring-2 focus:ring-primary/50 transition-all">
                                  <SelectValue placeholder="Select license type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="enterprise">Enterprise Software</SelectItem>
                                  <SelectItem value="cloud">Cloud Services</SelectItem>
                                  <SelectItem value="saas">SaaS Subscriptions</SelectItem>
                                  <SelectItem value="desktop">Desktop Applications</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            ) : field === "message" ? (
                              <Textarea
                                placeholder="Tell us about the software licenses you want to sell..."
                                className="min-h-[120px] transition-all border-primary/40 focus:ring-2 focus:ring-primary/40 focus:border-primary/60 hover:shadow-md"
                                {...f}
                              />
                            ) : (
                              <Input
                                placeholder={`Enter your ${field}`}
                                className="transition-all border-primary/40 focus:ring-2 focus:ring-primary/40 focus:border-primary/60 hover:shadow-md"
                                type={field === "email" ? "email" : "text"}
                                {...f}
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                ))}
                <motion.div
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  custom={5}
                >
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Submit
                  </Button>
                </motion.div>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
