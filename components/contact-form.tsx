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
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        console.error("Error:", data.error)
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
            rows={5}
            className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary"
          />
        </div>

        {submitStatus === "success" && (
          <div className="rounded-lg bg-green-900/50 border border-green-700 p-4 text-green-200">
            Thank you for your enquiry! We will get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="rounded-lg bg-red-900/50 border border-red-700 p-4 text-red-200">
            Failed to send message. Please try again or contact us directly.
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white py-6 text-lg font-bold text-slate-900 transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "Send Enquiry"}
        </Button>
      </form>
    </Card>
  )
}
