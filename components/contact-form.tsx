"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your enquiry! We will get back to you soon.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-slate-700 bg-slate-800 p-8 shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-200">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={isSubmitting}
            className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-200">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={isSubmitting}
            className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-200">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+353 87 741 4968"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            disabled={isSubmitting}
            className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-200">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your interest in dance classes or events..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            disabled={isSubmitting}
            rows={5}
            className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary"
          />
        </div>

        {submitStatus.type && (
          <div
            className={`rounded-lg p-4 ${
              submitStatus.type === "success"
                ? "bg-green-900/50 text-green-200 border border-green-700"
                : "bg-red-900/50 text-red-200 border border-red-700"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white py-6 text-lg font-bold text-slate-900 transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </Button>
      </form>
    </Card>
  )
}
