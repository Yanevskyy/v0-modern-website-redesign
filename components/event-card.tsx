"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Music, Euro } from "lucide-react"
import Image from "next/image"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  price: string
  image: string
  categories: string[]
  music: string
  isPackage?: boolean
}

export function EventCard({
  title,
  date,
  time,
  location,
  price,
  image,
  categories,
  music,
  isPackage = false,
}: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-white/90">
            <Euro className="w-4 h-4" />
            <span className="text-lg font-semibold">{price}</span>
            {isPackage && <span className="text-sm">per person sharing</span>}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-900">{date}</p>
              <p className="text-sm text-slate-600">{time}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <p className="text-slate-700">{location}</p>
          </div>

          <div className="flex items-start gap-3">
            <Music className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
            <p className="text-slate-700">Music by {music}</p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-4 mb-4">
          <h4 className="font-semibold text-slate-900 mb-2">{isPackage ? "Package Includes:" : "Categories:"}</h4>
          <ul className="space-y-1">
            {categories.map((category, index) => (
              <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-rose-600 mt-1">•</span>
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Request Ticket
        </Button>
      </div>
    </Card>
  )
}
