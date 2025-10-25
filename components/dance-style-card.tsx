"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { useIsMobile } from "@/hooks/use-mobile"
import Image from "next/image"
import { X } from "lucide-react"

interface DanceStyleCardProps {
  title: string
  description: string
  image: string
}

export function DanceStyleCard({ title, description, image }: DanceStyleCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  const getDetailedInfo = () => {
    switch (title) {
      case "Salsa":
        return {
          fullDescription:
            "Salsa is a dynamic and spirited dance, rich in Latin culture and rhythm. Its roots lie in the fusion of African and Cuban dance traditions, creating a style that's both passionate and playful. The dance is characterized by quick footwork, hip movements, and partner connection that creates an exciting and energetic atmosphere on the dance floor.",
          benefits: [
            "Improves cardiovascular fitness and coordination",
            "Builds confidence and social connections",
            "Develops rhythm and musicality",
            "Great for stress relief and fun",
          ],
          levels: "Suitable for all levels from complete beginners to advanced dancers",
        }
      case "Cha Cha Cha":
        return {
          fullDescription:
            "Cha Cha Cha is a lively and playful Latin dance that combines precise footwork with flirtatious movements. The upbeat tempo and sharp hip movements make it a dance full of energy and expression. Originating in Cuba in the 1950s, it's characterized by its distinctive rhythm and cheeky, fun personality.",
          benefits: [
            "Enhances balance and posture",
            "Develops quick footwork and agility",
            "Improves timing and musical interpretation",
            "Fun and energetic workout",
          ],
          levels: "Perfect for beginners and intermediate dancers",
        }
      case "Tango":
        return {
          fullDescription:
            "Tango is a dance of intense connection and elegance, originating from the streets of Argentina. The close embrace and sharp, staccato steps create an atmosphere of romance and intensity. This passionate dance emphasizes the connection between partners and tells a story through dramatic movements and emotional expression.",
          benefits: [
            "Develops strong partner connection and communication",
            "Improves posture and core strength",
            "Enhances emotional expression through movement",
            "Builds confidence and presence",
          ],
          levels: "Recommended for improvers and above",
        }
      default:
        return {
          fullDescription: description,
          benefits: [],
          levels: "All levels welcome",
        }
    }
  }

  const detailedInfo = getDetailedInfo()

  const ContentBody = () => (
    <div className="space-y-4 overflow-y-auto max-h-[70vh] px-4 pb-4">
      <div className="relative h-64 w-full overflow-hidden rounded-lg">
        <Image src={image || "/placeholder.svg?height=400&width=600"} alt={title} fill className="object-cover" />
      </div>
      <div>
        <h4 className="mb-2 text-lg font-semibold text-primary">About {title}</h4>
        <p className="text-gray-300 leading-relaxed">{detailedInfo.fullDescription}</p>
      </div>
      {detailedInfo.benefits.length > 0 && (
        <div>
          <h4 className="mb-2 text-lg font-semibold text-primary">Benefits</h4>
          <ul className="space-y-1 text-gray-300">
            {detailedInfo.benefits.map((benefit, index) => (
              <li key={index}>• {benefit}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h4 className="mb-2 text-lg font-semibold text-primary">Class Levels</h4>
        <p className="text-gray-300">{detailedInfo.levels}</p>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <Card
        className="overflow-hidden border-slate-700 bg-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=300&width=400"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-300">{description}</p>
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <button className="font-bold text-primary hover:underline">Learn More</button>
            </DrawerTrigger>
            <DrawerContent className="border-slate-700 bg-slate-800 text-white">
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-bold text-white">{title}</DrawerTitle>
              </DrawerHeader>
              <ContentBody />
            </DrawerContent>
          </Drawer>
        </div>
      </Card>
    )
  }

  return (
    <Card
      className="overflow-hidden border-slate-700 bg-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=300&width=400"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-300">{description}</p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="font-bold text-primary hover:underline">Learn More</button>
          </DialogTrigger>
          <DialogContent className="border-slate-700 bg-slate-800 text-white max-w-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-6 w-6 text-white" />
              <span className="sr-only">Close</span>
            </button>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white">{title}</DialogTitle>
            </DialogHeader>
            <ContentBody />
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  )
}
