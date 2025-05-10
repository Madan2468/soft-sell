"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Message = {
  role: "user" | "assistant"
  content: string
}

const exampleQuestions = [
  "How do I sell my license?",
  "What types of software do you buy?",
  "How long does the process take?",
  "How is the valuation determined?",
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi there! How can I help you with selling your software licenses today?" },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Mock response generation instead of using OpenAI API
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

      // Simple response mapping for common questions
      let response = ""
      const lowerInput = input.toLowerCase()

      if (lowerInput.includes("how do i sell")) {
        response =
          "To sell your software licenses, simply fill out our contact form with details about your licenses. Our team will review and provide a valuation within 24 hours."
      } else if (lowerInput.includes("what type") || lowerInput.includes("which software")) {
        response =
          "We buy a wide range of software licenses including enterprise software, cloud services, SaaS subscriptions, and desktop applications from major vendors like Microsoft, Adobe, Oracle, and many more."
      } else if (
        lowerInput.includes("how long") ||
        lowerInput.includes("time") ||
        lowerInput.includes("process take")
      ) {
        response =
          "Our process typically takes 3-5 business days from submission to payment. Valuations are provided within 24 hours, and once you accept, payment is processed within 2-3 business days."
      } else if (lowerInput.includes("valuation") || lowerInput.includes("worth") || lowerInput.includes("price")) {
        response =
          "Our valuations are based on current market demand, remaining license duration, and software type. We analyze recent sales data to ensure you get the best possible price for your unused licenses."
      } else {
        response =
          "Thank you for your question. Our team specializes in helping businesses recover value from unused software licenses. Could you provide more details about your specific needs so we can better assist you?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm having trouble right now. Please try again later or contact our support team.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleExampleQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg"
          size="icon"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-background border rounded-lg shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  SS
                </div>
                <h3 className="font-semibold">SoftSell Support</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close chat">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">SS</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">SS</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg p-3 bg-muted">
                      <div className="flex space-x-2">
                        <div
                          className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Example Questions (only show if no user messages yet) */}
            {messages.length === 1 && (
              <div className="p-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => handleExampleQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
