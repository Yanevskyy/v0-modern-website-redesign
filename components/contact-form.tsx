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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your enquiry! We will get back to you soon.")
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
            rows={5}
            className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-white py-6 text-lg font-bold text-slate-900 transition-colors hover:bg-gray-100"
        >
          Send Enquiry
        </Button>
      </form>
    </Card>
  )
}
