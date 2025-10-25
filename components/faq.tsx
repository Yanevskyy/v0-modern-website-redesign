"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Are the classes suitable for complete beginners?",
    answer:
      "Yes, our classes are designed to accommodate all skill levels, including complete beginners. You don't need any prior dance experience to join and start learning.",
  },
  {
    question: "What dance styles can I learn in your classes?",
    answer:
      "We offer a wide variety of dance styles, including: Slow Waltz, Tango, Foxtrot, Quickstep, Viennese Waltz, Samba, Cha-Cha-Cha, Rumba, Paso Doble, Jive, Argentine Tango, Salsa, Bachata, and Merengue. Whether you're interested in elegant ballroom styles or lively Latin rhythms, you'll find a class that suits your preferences and skill level.",
  },
  {
    question: "How long are the classes and how often do they take place?",
    answer:
      "Each class lasts 90 minutes and is held once a week. This gives you plenty of time to practice and enjoy the dance without feeling rushed, while also fitting easily into your weekly schedule.",
  },
  {
    question: "Do I need a partner to join the classes?",
    answer:
      "No, you don't need a partner to join. Many participants come solo, and we pair you up during the class. Solo dancers are always welcome, and it's a great way to meet new people and learn in a fun, supportive environment.",
  },
  {
    question: "What should I bring to my first class?",
    answer:
      "For your first class, all you need is comfortable clothing and shoes that allow you to move easily. If you're attending a Latin or ballroom dance class, smooth-soled shoes are recommended. And most importantly, bring your enthusiasm and a positive attitude!",
  },
  {
    question: "Are there any age restrictions for attending the classes?",
    answer:
      "No, our classes are open to all age groups. Whether you're young or young at heart, everyone is welcome to join and enjoy dancing.",
  },
  {
    question: "How soon can I expect to learn the basic dance moves?",
    answer:
      "You will begin learning the basic steps in your very first class! With regular attendance and practice, most students feel comfortable with the basic movements after just a few lessons. The more you practice, the faster you'll gain confidence and progress in your dancing.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-slate-900 py-20" id="faq">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white">Questions and Answers</h2>
          <p className="text-base text-gray-300">Everything you need to know about our dance classes</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-slate-700 bg-slate-800 transition-all duration-300 hover:border-primary/50"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-750"
                >
                  <h3 className="pr-4 text-lg font-semibold text-white">{item.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-slate-700 p-6 pt-4">
                    <p className="leading-relaxed text-gray-300">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
