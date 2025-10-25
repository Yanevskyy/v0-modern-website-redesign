"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Award, Users, Facebook, Instagram, X, MessageCircle, Phone, Mail } from "lucide-react"
import { Hero } from "@/components/hero"
import { DanceStyleCard } from "@/components/dance-style-card"
import { ContactForm } from "@/components/contact-form"
import { LocationCard } from "@/components/location-card"
import { FAQ } from "@/components/faq"
import { Button } from "@/components/ui/button"
import { CookieConsent } from "@/components/cookie-consent"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-background-dark text-gray-200">
      <CookieConsent />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4 text-white">
            <Image
              src="/logo.png"
              alt="Kieran Kelly Dance - Professional Ballroom and Latin Dance Classes in Ireland"
              width={38}
              height={38}
              className="h-[38px] w-[38px]"
            />
            <h2 className="text-lg font-bold leading-tight tracking-tight text-white">Kieran Kelly Dance</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a
                className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-primary"
                href="#about"
              >
                About
              </a>
              <a
                className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-primary"
                href="#classes"
              >
                Classes
              </a>
              <a
                className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-primary"
                href="#schedule"
              >
                Schedule
              </a>
              <a
                className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-primary"
                href="#faq"
              >
                FAQ
              </a>
              <a
                className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-primary"
                href="#contact"
              >
                Contact
              </a>
            </div>
            <Button
              onClick={scrollToClasses}
              className="h-10 bg-white px-4 text-sm font-bold text-slate-900 transition-colors hover:bg-gray-100"
            >
              Book a Class
            </Button>
          </div>
          <div className="md:hidden">
            <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-800 bg-slate-900 md:hidden">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col items-center space-y-3">
                <a
                  className="w-full rounded-lg bg-slate-800 px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-slate-700 hover:text-primary"
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  className="w-full rounded-lg bg-slate-800 px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-slate-700 hover:text-primary"
                  href="#classes"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Classes
                </a>
                <a
                  className="w-full rounded-lg bg-slate-800 px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-slate-700 hover:text-primary"
                  href="#schedule"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule
                </a>
                <a
                  className="w-full rounded-lg bg-slate-800 px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-slate-700 hover:text-primary"
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  className="w-full rounded-lg bg-slate-800 px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-slate-700 hover:text-primary"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button
                  onClick={() => {
                    scrollToClasses()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full rounded-lg bg-white px-6 py-3 text-base font-bold text-slate-900 transition-all hover:bg-gray-100"
                >
                  Book a Class
                </button>
                <a
                  href="https://wa.me/353877414968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-bold text-[#25D366] transition-all hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20 md:py-28" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
            <div className="w-full md:w-1/3">
              <Image
                src="/kieran-kelly.png"
                alt="Kieran Kelly - ADTA Fellow, Professional Dance Teacher and 3x All Ireland Champion"
                width={400}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white">About Kieran Kelly</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-300 font-semibold">
                Qualified Professional Dance Teacher Since 1994
              </p>
              <p className="mb-4 text-base leading-relaxed text-gray-300">
                Allied Dance Teachers Association Fellowships in Ballroom and Latin American Dancing. Membership in Old
                Time and Sequence
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-gray-300">
                <li>• 3 x former All Ireland Champion</li>
                <li>• Open Irish Ballroom Champion</li>
                <li>• Republic of Ireland Champion</li>
                <li>• Finalist in British Open Amateur Modern Sequence Championship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div
            className={`grid gap-6 md:grid-cols-4 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Card className="border-slate-700 bg-slate-800 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
              <Award className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="mb-1 font-semibold text-white">ADTA Fellow</h3>
              <p className="text-sm text-gray-400">Ballroom & Latin</p>
            </Card>
            <Card className="border-slate-700 bg-slate-800 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
              <Users className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="mb-1 font-semibold text-white">ADTA Member</h3>
              <p className="text-sm text-gray-400">Classical & Sequence</p>
            </Card>
            <Card className="border-slate-700 bg-slate-800 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
              <Award className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="mb-1 font-semibold text-white">Dance Promoter</h3>
              <p className="text-sm text-gray-400">Events & Competitions</p>
            </Card>
            <Card className="border-slate-700 bg-slate-800 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
              <Award className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="mb-1 font-semibold text-white">Championship Adjudicator</h3>
              <p className="text-sm text-gray-400">Qualified Judge</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Classes and Locations Section */}
      <section className="py-20" id="classes">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white">Classes and Locations</h2>
            <p className="text-base text-gray-300">Join our dance classes across the west and north west of Ireland</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <LocationCard
              name="Lecarrow"
              address="St. John's Community Centre"
              eircode="F42 CK11"
              startDate="Starts Tuesday 30th September 2025"
              classes={[
                {
                  time: "8:00 pm – 9:00 pm",
                  level: "New Beginners",
                  price: "15 pp",
                },
                {
                  time: "9:00 pm – 10:00 pm",
                  level: "Improvers & above",
                  price: "15 pp",
                },
              ]}
            />

            <LocationCard
              name="Athenry"
              address="Athenry Community Centre, Clarke St."
              eircode="H65 KT10"
              startDate="Starts Friday 3rd October"
              classes={[
                {
                  time: "7:00 pm – 8:00 pm",
                  level: "New Beginners",
                  price: "15 pp",
                },
                {
                  time: "8:00 pm – 10:00 pm",
                  level: "Improvers & above (Tea and snacks incl)",
                  price: "20 pp",
                },
              ]}
            />

            <LocationCard
              name="Sligo"
              address="Rathcormac Parish Hall"
              eircode="F91 NX21"
              startDate="Starts Thursday 2nd October"
              classes={[
                {
                  time: "7:00 pm – 8:00 pm",
                  level: "New Beginners",
                  price: "15 pp",
                },
                {
                  time: "8:00 pm – 10:00 pm",
                  level: "Improvers & above (Tea and snacks incl)",
                  price: "20 pp",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Dance Styles Section */}
      <section className="bg-slate-900 py-20" id="schedule">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white">Dance Styles</h2>
            <p className="text-base text-gray-300">Weekly classes for all skill levels</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <DanceStyleCard
              title="Salsa"
              description="Salsa is a dynamic and spirited dance, rich in Latin culture and rhythm. Its roots lie in the fusion of African and Cuban dance traditions, creating a style that's both passionate and playful."
              image="/salsa-dancing-couple-passionate-latin-dance.jpg"
            />

            <DanceStyleCard
              title="Cha Cha Cha"
              description="Cha Cha Cha is a lively and playful Latin dance that combines precise footwork with flirtatious movements. The upbeat tempo and sharp hip movements make it a dance full of energy and expression."
              image="/cha-cha-cha-dance-couple-energetic-cuban-dance.jpg"
            />

            <DanceStyleCard
              title="Tango"
              description="Tango is a dance of intense connection and elegance, originating from the streets of Argentina. The close embrace and sharp, staccato steps create an atmosphere of romance and intensity."
              image="/tango-dance-couple-dramatic-argentine-dance.jpg"
            />
          </div>
        </div>
      </section>

      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white">Make an Enquiry</h2>
              <p className="text-base text-gray-300">Get in touch to learn more about classes and events</p>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-4">
              <a
                href="tel:+353877414968"
                className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 transition-all hover:border-primary hover:bg-slate-700"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-sm font-medium text-white">+353 87 741 4968</p>
                </div>
              </a>

              <a
                href="mailto:kierankellydance@gmail.com"
                className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 transition-all hover:border-primary hover:bg-slate-700"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm font-medium text-white">kierankellydance@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100073133531445&sk=about_overview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 transition-all hover:border-primary hover:bg-slate-700"
              >
                <Facebook className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-400">Facebook</p>
                  <p className="text-sm font-medium text-white">Visit Page</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/kierankellydance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 transition-all hover:border-primary hover:bg-slate-700"
              >
                <Instagram className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-400">Instagram</p>
                  <p className="text-sm font-medium text-white">Follow Us</p>
                </div>
              </a>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="rounded-xl bg-primary/10 p-10 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold text-white">Ready to Find Your Rhythm?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">
              Join a community of passionate dancers and begin your journey today. We have classes for every skill level
              and aspiration.
            </p>
            <Button
              onClick={scrollToClasses}
              className="mx-auto h-12 bg-white px-5 text-base font-bold text-slate-900 transition-colors hover:bg-gray-100"
            >
              Book Your First Class
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0 md:text-left">
            <div className="flex items-center gap-4 text-white">
              <Image
                src="/logo.png"
                alt="Kieran Kelly Dance Logo - Professional Dance Classes Ireland"
                width={38}
                height={38}
                className="h-[38px] w-[38px]"
              />
              <h2 className="text-lg font-bold">Kieran Kelly Dance</h2>
            </div>
            <p className="text-sm text-gray-400">© 2025 Kieran Kelly Dance. All Rights Reserved.</p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 border-t border-slate-800 pt-6 text-center text-sm">
            <Link href="/privacy-policy" className="text-gray-400 transition-colors hover:text-primary hover:underline">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/cookie-policy" className="text-gray-400 transition-colors hover:text-primary hover:underline">
              Cookie Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/terms-conditions"
              className="text-gray-400 transition-colors hover:text-primary hover:underline"
            >
              Terms & Conditions
            </Link>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Professional{" "}
              <a
                href="https://clarityweb.ie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary hover:underline"
              >
                web design and SEO optimization in Ireland
              </a>{" "}
              by ClarityWeb.ie
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
