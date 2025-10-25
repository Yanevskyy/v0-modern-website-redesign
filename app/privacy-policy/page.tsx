import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Kieran Kelly Dance",
  description:
    "Privacy Policy for Kieran Kelly Dance - How we collect, use, and protect your personal data in compliance with GDPR",
}

export default function PrivacyPolicy() {
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
          <h1 className="mb-8 text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mb-6 text-sm text-gray-400">Last updated: January 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">1. Introduction</h2>
              <p className="leading-relaxed">
                Kieran Kelly Dance ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or use
                our services, in compliance with the General Data Protection Regulation (GDPR) and Irish data protection
                laws.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">2. Information We Collect</h2>
              <h3 className="mb-2 text-lg font-medium text-white">Personal Information</h3>
              <p className="mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
                <li>Register for dance classes</li>
                <li>Fill out contact forms or enquiry forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us via email or phone</li>
              </ul>
              <p className="mb-4 leading-relaxed">This information may include:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Name and contact details (email address, phone number)</li>
                <li>Age or date of birth (for class suitability)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="mb-2 mt-6 text-lg font-medium text-white">Automatically Collected Information</h3>
              <p className="leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device,
                including information about your web browser, IP address, time zone, and some of the cookies installed
                on your device. We may also collect information about your browsing behavior through analytics tools.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">3. How We Use Your Information</h2>
              <p className="mb-4 leading-relaxed">We use the information we collect to:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Provide, operate, and maintain our dance classes and services</li>
                <li>Process class registrations and payments</li>
                <li>Communicate with you about classes, schedules, and events</li>
                <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
                <li>Respond to your enquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">4. Legal Basis for Processing</h2>
              <p className="mb-4 leading-relaxed">Under GDPR, we process your personal data based on:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  <strong>Consent:</strong> You have given clear consent for us to process your personal data for
                  specific purposes
                </li>
                <li>
                  <strong>Contract:</strong> Processing is necessary for a contract we have with you (e.g., class
                  registration)
                </li>
                <li>
                  <strong>Legitimate interests:</strong> Processing is necessary for our legitimate interests (e.g.,
                  improving our services)
                </li>
                <li>
                  <strong>Legal obligation:</strong> Processing is necessary to comply with the law
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">5. Data Sharing and Disclosure</h2>
              <p className="mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                with:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  <strong>Service providers:</strong> Third-party companies that help us operate our website and
                  services (e.g., payment processors, email service providers)
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required by law or to protect our rights
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer
                need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">7. Your Rights Under GDPR</h2>
              <p className="mb-4 leading-relaxed">Under GDPR, you have the following rights:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  <strong>Right to access:</strong> Request copies of your personal data
                </li>
                <li>
                  <strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data
                </li>
                <li>
                  <strong>Right to erasure:</strong> Request deletion of your personal data
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> Request limitation of how we use your data
                </li>
                <li>
                  <strong>Right to data portability:</strong> Request transfer of your data to another organization
                </li>
                <li>
                  <strong>Right to object:</strong> Object to our processing of your personal data
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Withdraw your consent at any time
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                To exercise any of these rights, please contact us at kierankellydance@gmail.com or +353 87 741 4968.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">8. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. For detailed
                information about the cookies we use and your choices, please see our{" "}
                <Link href="/cookie-policy" className="text-primary underline hover:text-primary/80">
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">9. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
                internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">10. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services may be used by children under 16 with parental consent. If you are a parent or guardian and
                believe your child has provided us with personal information without your consent, please contact us,
                and we will take steps to remove that information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">11. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">12. Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
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
              <p className="mt-4 leading-relaxed">
                You also have the right to lodge a complaint with the Irish Data Protection Commission if you believe
                your data protection rights have been violated.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
