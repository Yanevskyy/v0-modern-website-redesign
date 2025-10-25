import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Cookie Policy | Kieran Kelly Dance",
  description: "Cookie Policy for Kieran Kelly Dance - Information about cookies we use and your choices",
}

export default function CookiePolicy() {
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
          <h1 className="mb-8 text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="mb-6 text-sm text-gray-400">Last updated: January 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">1. What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely
                used to make websites work more efficiently and provide information to website owners. Cookies help us
                understand how you use our website and improve your experience.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">2. How We Use Cookies</h2>
              <p className="mb-4 leading-relaxed">We use cookies for the following purposes:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  <strong>Essential cookies:</strong> These cookies are necessary for the website to function properly
                  and cannot be disabled
                </li>
                <li>
                  <strong>Analytics cookies:</strong> These help us understand how visitors interact with our website by
                  collecting and reporting information anonymously
                </li>
                <li>
                  <strong>Functionality cookies:</strong> These enable enhanced functionality and personalization, such
                  as remembering your preferences
                </li>
                <li>
                  <strong>Marketing cookies:</strong> These may be used to track visitors across websites to display
                  relevant advertisements
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">3. Types of Cookies We Use</h2>

              <h3 className="mb-2 mt-6 text-lg font-medium text-white">Essential Cookies</h3>
              <p className="mb-4 leading-relaxed">
                These cookies are strictly necessary to provide you with services available through our website and to
                use some of its features, such as access to secure areas. Without these cookies, services you have asked
                for cannot be provided.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-white">Analytics and Performance Cookies</h3>
              <p className="mb-4 leading-relaxed">
                We may use analytics services such as Google Analytics to collect information about how visitors use our
                website. This helps us improve the website and understand which pages are most popular. These cookies
                collect information in an anonymous form.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-white">Functionality Cookies</h3>
              <p className="leading-relaxed">
                These cookies allow our website to remember choices you make (such as your language preference) and
                provide enhanced, more personal features. They may also be used to provide services you have requested,
                such as watching a video or commenting on a blog.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">4. Third-Party Cookies</h2>
              <p className="mb-4 leading-relaxed">
                In addition to our own cookies, we may use various third-party cookies to report usage statistics of our
                website and deliver advertisements. These third parties may include:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Google Analytics (for website analytics)</li>
                <li>Social media platforms (Facebook, Instagram, Twitter) for social sharing features</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">5. Your Cookie Choices</h2>
              <p className="mb-4 leading-relaxed">
                You have the right to decide whether to accept or reject cookies. When you first visit our website, you
                will see a cookie consent banner that allows you to accept or decline non-essential cookies.
              </p>
              <p className="mb-4 leading-relaxed">You can also control cookies through your browser settings:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Most browsers allow you to refuse or accept cookies</li>
                <li>Most browsers allow you to delete cookies</li>
                <li>You can usually find these settings in the "options" or "preferences" menu of your browser</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Please note that if you choose to block or delete cookies, some features of our website may not function
                properly, and your user experience may be affected.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">6. Cookie Duration</h2>
              <p className="mb-4 leading-relaxed">Cookies can be either:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  <strong>Session cookies:</strong> These are temporary cookies that expire when you close your browser
                </li>
                <li>
                  <strong>Persistent cookies:</strong> These remain on your device for a set period or until you delete
                  them
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">7. Updates to This Cookie Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about
                our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">8. More Information</h2>
              <p className="mb-4 leading-relaxed">
                For more information about how we handle your personal data, please see our{" "}
                <Link href="/privacy-policy" className="text-primary underline hover:text-primary/80">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="mb-4 leading-relaxed">If you have questions about our use of cookies, please contact us:</p>
              <ul className="list-inside space-y-2 pl-4">
                <li>
                  <strong>Email:</strong> kierankellydance@gmail.com
                </li>
                <li>
                  <strong>Phone:</strong> +353 87 741 4968
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
