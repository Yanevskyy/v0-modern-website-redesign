"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-700 bg-slate-900/95 p-4 shadow-lg backdrop-blur-sm md:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-300">
              We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept", you
              consent to our use of cookies.{" "}
              <Link href="/cookie-policy" className="text-primary underline hover:text-primary/80">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 rounded-lg border border-slate-600 bg-transparent px-6 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-slate-800 md:flex-none"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 rounded-lg bg-[#923d8f] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#923d8f]/90 md:flex-none"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
