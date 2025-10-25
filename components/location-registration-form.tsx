"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface LocationRegistrationFormProps {
  location: string
  onSuccess: () => void
}

export function LocationRegistrationForm({ location, onSuccess }: LocationRegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(`Registration for ${location}:`, formData)
    alert(`Thank you for registering for classes at ${location}! We will contact you soon.`)
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" value={location} />

      <div className="mb-4 rounded-lg border border-primary/30 bg-primary/10 p-3">
        <p className="text-sm font-semibold text-gray-200">
          Registration for: <span className="text-primary">{location}</span>
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-200">
          Full Name
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
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+353 87 741 4968"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="level" className="text-gray-200">
          Experience Level
        </Label>
        <Input
          id="level"
          placeholder="e.g., New Beginner, Improver, Advanced"
          value={formData.level}
          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
          required
          className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-200">
          Additional Information (Optional)
        </Label>
        <Textarea
          id="message"
          placeholder="Any questions or special requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={3}
          className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary"
        />
      </div>

      <Button type="submit" className="w-full bg-primary py-6 text-lg text-white transition-colors hover:bg-primary/90">
        Submit Registration
      </Button>
    </form>
  )
}
