"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToClasses = () => {
    const classesSection = document.getElementById("classes")
    if (classesSection) {
      classesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-70"
          poster="/dance-studio-elegant.jpg"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-uHhUsJdWDzCdShvCfV7jDoAfeV9suh.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center gap-6 p-4 text-center md:min-h-[80vh]">
        <div
          className={`flex flex-col gap-4 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Kieran Kelly Dance
          </h1>
          <h2 className="mx-auto max-w-2xl text-base font-normal leading-normal text-gray-200 md:text-lg">
            Dance classes in the west and north west of Ireland
          </h2>
          <div className="mx-auto mt-4 max-w-xl space-y-2 text-sm text-gray-300 md:text-base">
            <p>Allied Dance Teachers Association. (Fellow) Ballroom Latin</p>
            <p>Classical Old Time and Sequence (Mem)</p>
            <p>Dance Promoter</p>
            <p>Championship Adjudicator</p>
          </div>
        </div>
        <Button
          onClick={scrollToClasses}
          className="h-12 bg-white px-5 text-base font-bold text-slate-900 transition-colors hover:bg-gray-100"
        >
          Explore Classes
        </Button>
      </div>
    </section>
  )
}
