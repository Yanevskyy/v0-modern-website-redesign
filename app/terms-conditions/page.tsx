import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms & Conditions | Kieran Kelly Dance",
  description: "Terms and Conditions for Kieran Kelly Dance - Rules, rights, and obligations for using our services",
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-white">Terms & Conditions</h1>
          <p className="mb-6 text-sm text-gray-400">Last updated: January 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Kieran Kelly Dance. These Terms and Conditions ("Terms") govern your use of our website and
                services. By accessing our website or registering for our dance classes, you agree to be bound by these
                Terms. If you do not agree with any part of these Terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">2. Services</h2>
              <p className="mb-4 leading-relaxed">
                Kieran Kelly Dance provides professional dance instruction in various styles including Ballroom, Latin,
                Salsa, Cha Cha Cha, Tango, Classical, Old Time, and Sequence dancing. Our services include:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Group dance classes at various locations across Ireland</li>
                <li>Classes for different skill levels (beginners to advanced)</li>
                <li>Dance events and workshops</li>
                <li>Information and resources through our website</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">3. Class Registration and Payment</h2>
              <h3 className="mb-2 text-lg font-medium text-white">Registration</h3>
              <p className="mb-4 leading-relaxed">
                To register for classes, you must provide accurate and complete information. You are responsible for
                maintaining the confidentiality of your registration details.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-white">Payment</h3>
              <p className="mb-4 leading-relaxed">
                Class fees must be paid as specified for each location and class level. Payment is typically made at the
                beginning of each class or term. We reserve the right to refuse entry to classes if payment has not been
                received.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-white">Cancellations and Refunds</h3>
              <p className="leading-relaxed">
                If you need to cancel your registration, please contact us as soon as possible. Refund policies may vary
                depending on the circumstances and timing of the cancellation. We reserve the right to cancel classes
                due to insufficient enrollment or unforeseen circumstances, in which case a full refund will be
                provided.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">4. Code of Conduct</h2>
              <p className="mb-4 leading-relaxed">All participants are expected to:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Treat instructors, staff, and other participants with respect</li>
                <li>Arrive on time for classes</li>
                <li>Wear appropriate dance attire and footwear</li>
                <li>Follow safety guidelines and instructions from instructors</li>
                <li>Refrain from disruptive or inappropriate behavior</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                We reserve the right to remove any participant who violates this code of conduct without refund.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">5. Health and Safety</h2>
              <p className="mb-4 leading-relaxed">
                Dance classes involve physical activity. By participating, you confirm that you are in good health and
                physically capable of participating in dance activities. You should:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Consult with a healthcare professional before starting if you have any health concerns</li>
                <li>Inform instructors of any medical conditions or injuries that may affect your participation</li>
                <li>Take responsibility for your own safety and well-being during classes</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Kieran Kelly Dance is not liable for any injuries sustained during classes, except where caused by our
                negligence.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">6. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos, images, and choreography, is the property
                of Kieran Kelly Dance and is protected by copyright and other intellectual property laws. You may not
                reproduce, distribute, or create derivative works from our content without express written permission.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">7. Photography and Video</h2>
              <p className="leading-relaxed">
                We may take photographs or videos during classes and events for promotional purposes. By participating,
                you consent to being photographed or filmed and to the use of such images in our marketing materials. If
                you do not wish to be photographed or filmed, please inform us in writing.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, Kieran Kelly Dance shall not be liable for any indirect,
                incidental, special, or consequential damages arising out of or in connection with your use of our
                services or website. Our total liability shall not exceed the amount paid by you for the specific class
                or service in question.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">9. Privacy</h2>
              <p className="leading-relaxed">
                Your use of our services is also governed by our{" "}
                <Link href="/privacy-policy" className="text-primary underline hover:text-primary/80">
                  Privacy Policy
                </Link>
                , which explains how we collect, use, and protect your personal information in compliance with GDPR.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">10. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                posting on this website. Your continued use of our services after changes are posted constitutes your
                acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">11. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of Ireland. Any disputes arising
                from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the Irish
                courts.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">12. Contact Information</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-inside space-y-2 pl-4">
                <li>
                  <strong>Email:</strong> kierankellydance@gmail.com
                </li>
                <li>
                  <strong>Phone:</strong> +353 87 741 4968
                </li>
                <li>
                  <strong>Address:</strong> Kieran Kelly Dance, Ireland
                </li>
              </ul>
            </section>

            <section className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
              <p className="text-sm leading-relaxed">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound
                by these Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
