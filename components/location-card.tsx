"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Calendar, Euro, ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { LocationRegistrationForm } from "@/components/location-registration-form"

interface LocationCardProps {
  name: string
  address: string
  eircode: string
  startDate: string
  classes: {
    time: string
    level: string
    price: string
  }[]
}

export function LocationCard({ name, address, eircode, startDate, classes }: LocationCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eircode)}`
    window.open(mapsUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Card className="overflow-hidden border-slate-700 bg-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
      <div
        className="bg-slate-700 p-6 text-white cursor-pointer transition-colors hover:bg-slate-600"
        onClick={openGoogleMaps}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            openGoogleMaps()
          }
        }}
      >
        <h3 className="mb-2 text-2xl font-bold">{name}</h3>
        <div className="flex items-start gap-2 text-white/90">
          <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm">{address}</p>
            <p className="text-sm flex items-center gap-1">
              Eircode: {eircode}
              <ExternalLink className="h-3 w-3 inline" />
            </p>
          </div>
        </div>
        <p className="mt-2 text-xs text-white/70">Click to open in Google Maps</p>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center gap-2 text-gray-300">
          <Calendar className="h-5 w-5 text-primary" />
          <span className="font-semibold">{startDate}</span>
        </div>

        <div className="space-y-3">
          {classes.map((classInfo, index) => (
            <div key={index} className="flex items-start gap-3 rounded-lg bg-slate-700/50 p-3">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <div className="flex-1">
                <p className="font-medium text-white">{classInfo.time}</p>
                <p className="text-sm text-gray-400">{classInfo.level}</p>
              </div>
              <div className="flex items-center gap-1 font-semibold text-primary">
                <Euro className="h-4 w-4" />
                <span>{classInfo.price}</span>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-white py-6 text-lg font-bold text-slate-900 transition-colors hover:bg-gray-100">
              Register for {name}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-md overflow-y-auto border-slate-700 bg-slate-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl">Register for {name}</DialogTitle>
              <p className="text-gray-400">{address}</p>
            </DialogHeader>
            <LocationRegistrationForm location={name} onSuccess={() => setIsOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  )
}
