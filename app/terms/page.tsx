import ArgoNav from "../components/ArgoNav";
import ArgoFooter from "../components/ArgoFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Argo",
  description:
    "Terms and conditions for using Argo's services, including CallCatch missed call text-back for local trade businesses.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <ArgoNav />

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-stone-400">
          Last updated: 8 March 2026
        </p>

        <div className="mt-12 space-y-10 text-stone-600 leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              These terms apply when you use any service provided by Argo
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), run by
              Harry McDonagh, based in Essex, UK. By using our services you
              agree to these terms. If you don&rsquo;t agree, please don&rsquo;t
              use our services.
            </p>
          </section>

          {/* Service description */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              What we provide
            </h2>
            <p className="mt-4">
              Argo builds done-for-you tools for local trade businesses. Our
              current product, CallCatch, is a missed call text-back service. It
              automatically texts your missed callers, finds out what they need
              (name, service required, postcode), and sends you the enquiry
              details — typically within 60 seconds.
            </p>
            <p className="mt-3">
              We aim to keep the service running reliably, but we cannot
              guarantee 100% uptime. Text message delivery depends on mobile
              networks and third-party providers that are outside our control.
            </p>
          </section>

          {/* Payment */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Payment terms
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                CallCatch is a paid subscription service with a monthly fee.
              </li>
              <li>
                A one-time setup fee may apply to cover initial configuration
                and onboarding.
              </li>
              <li>
                Prices will be confirmed before you sign up. We will give you
                reasonable notice of any price changes.
              </li>
              <li>
                Payments are due monthly in advance. If a payment fails, we may
                suspend the service until the account is brought up to date.
              </li>
            </ul>
          </section>

          {/* Cancellation */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Cancellation
            </h2>
            <p className="mt-4">
              We don&rsquo;t believe in long lock-in contracts. You can cancel
              your subscription at any time by giving us 30 days&rsquo; written
              notice (email is fine). After the notice period, we will stop the
              service and you won&rsquo;t be charged again.
            </p>
            <p className="mt-3">
              Setup fees are non-refundable. Monthly fees are not refunded for
              partial months.
            </p>
          </section>

          {/* Acceptable use */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Acceptable use
            </h2>
            <p className="mt-4">
              When using our services, you agree not to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Use CallCatch to send spam, unsolicited marketing, or messages
                unrelated to genuine missed call follow-ups.
              </li>
              <li>
                Provide false information during sign-up or use the service for
                unlawful purposes.
              </li>
              <li>
                Attempt to access, tamper with, or disrupt our systems or
                infrastructure.
              </li>
              <li>
                Resell or redistribute the service without our written
                permission.
              </li>
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate your account if we
              believe these terms are being breached.
            </p>
          </section>

          {/* Liability */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Liability
            </h2>
            <p className="mt-4">
              We work hard to deliver a reliable service, but to the extent
              permitted by law:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Our services are provided &ldquo;as is&rdquo;. We do not
                guarantee that every missed call will result in a successful text
                conversation or a new customer.
              </li>
              <li>
                We are not liable for any indirect, incidental, or consequential
                losses arising from the use of our services (including lost
                revenue or missed business opportunities).
              </li>
              <li>
                Our total liability for any claim related to the service is
                limited to the amount you have paid us in the three months
                before the claim arose.
              </li>
            </ul>
            <p className="mt-4">
              Nothing in these terms limits liability for fraud, death, or
              personal injury caused by negligence, or any other liability that
              cannot be excluded by law.
            </p>
          </section>

          {/* Your responsibilities */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Your responsibilities
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                You are responsible for making sure you have the right to use
                CallCatch on your business phone number.
              </li>
              <li>
                You must follow up on enquiries passed to you by CallCatch in a
                timely manner. We capture the lead — closing it is up to you.
              </li>
              <li>
                You are responsible for complying with data protection laws when
                handling any personal data we pass to you.
              </li>
            </ul>
          </section>

          {/* Changes to terms */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Changes to these terms
            </h2>
            <p className="mt-4">
              We may update these terms from time to time. When we make
              changes, we will update the &ldquo;last updated&rdquo; date at
              the top of this page and, where practical, give you notice before
              the changes take effect. Continued use of our services after
              changes means you accept the updated terms.
            </p>
          </section>

          {/* Governing law */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Governing law
            </h2>
            <p className="mt-4">
              These terms are governed by the laws of England and Wales. Any
              disputes will be subject to the exclusive jurisdiction of the
              courts of England and Wales.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Contact us
            </h2>
            <p className="mt-4">
              If you have any questions about these terms, please get in touch:
            </p>
            <div className="mt-4 rounded-xl border border-cream-200 bg-cream-50 p-6">
              <p className="font-medium text-stone-800">Harry McDonagh</p>
              <p className="mt-1">Argo</p>
              <p className="mt-3">
                Email:{" "}
                <a
                  href="mailto:harry@argosystems.co.uk"
                  className="text-amber-600 underline hover:text-amber-700"
                >
                  harry@argosystems.co.uk
                </a>
              </p>
              <p className="mt-1">
                Phone:{" "}
                <a
                  href="tel:07939939885"
                  className="text-amber-600 underline hover:text-amber-700"
                >
                  07939 939 885
                </a>
              </p>
              <p className="mt-1">
                Web:{" "}
                <a
                  href="https://argosystems.co.uk"
                  className="text-amber-600 underline hover:text-amber-700"
                >
                  argosystems.co.uk
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <ArgoFooter />
    </>
  );
}
