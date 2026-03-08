import ArgoNav from "../components/ArgoNav";
import ArgoFooter from "../components/ArgoFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Argo",
  description:
    "How Argo collects, uses, and protects your data when you use CallCatch and our other services.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <ArgoNav />

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-stone-400">
          Last updated: 8 March 2026
        </p>

        <div className="mt-12 space-y-10 text-stone-600 leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              Argo (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is
              run by Harry McDonagh, based in Essex, UK. We build done-for-you
              tools for local trade businesses. This policy explains how we
              handle data when you use our services, including our missed call
              text-back product, CallCatch.
            </p>
            <p className="mt-3">
              We keep things simple. We only collect what we need, we don&rsquo;t
              sell your data, and we do our best to keep it safe.
            </p>
          </section>

          {/* What we collect */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              What data we collect
            </h2>
            <p className="mt-4">
              When someone misses a call from a customer and CallCatch sends a
              text on their behalf, we may collect:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-stone-800">Phone numbers</strong> — the
                caller&rsquo;s number so we can send and receive text messages.
              </li>
              <li>
                <strong className="text-stone-800">Text message content</strong>{" "}
                — the messages exchanged during the text conversation (for
                example, a caller&rsquo;s name, what service they need, and
                their postcode).
              </li>
              <li>
                <strong className="text-stone-800">Names and postcodes</strong>{" "}
                — provided by callers during the text conversation so we can
                pass enquiry details to the business.
              </li>
              <li>
                <strong className="text-stone-800">Call metadata</strong> — time
                and date of missed calls.
              </li>
            </ul>
            <p className="mt-4">
              If you contact us directly (for example by email or phone), we may
              also collect your name, email address, phone number, and any
              details you share with us.
            </p>
          </section>

          {/* How we use it */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              How we use your data
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                To provide the CallCatch service — sending text messages to
                missed callers and gathering enquiry details.
              </li>
              <li>
                To deliver enquiry notifications to the business that missed the
                call.
              </li>
              <li>
                To improve and maintain our services.
              </li>
              <li>
                To respond to your questions or support requests.
              </li>
            </ul>
            <p className="mt-4">
              We do not sell your personal data to anyone. We do not use it for
              marketing unless you have specifically opted in.
            </p>
          </section>

          {/* Data storage */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Data storage and security
            </h2>
            <p className="mt-4">
              Your data is stored securely using industry-standard hosting and
              cloud services. We use encryption in transit (HTTPS/TLS) and take
              reasonable steps to protect data at rest. Access to personal data
              is limited to those who need it to deliver the service.
            </p>
            <p className="mt-3">
              We retain data only for as long as it is needed to provide our
              services or as required by law. If a business cancels their
              CallCatch subscription, we delete associated customer data within
              30 days unless we are legally required to keep it.
            </p>
          </section>

          {/* Third parties */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Third-party services
            </h2>
            <p className="mt-4">
              To deliver our services, we work with trusted third-party
              providers, including:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-stone-800">SMS providers</strong> — to
                send and receive text messages on behalf of businesses.
              </li>
              <li>
                <strong className="text-stone-800">Hosting providers</strong> —
                to run our applications and store data securely.
              </li>
              <li>
                <strong className="text-stone-800">Payment processors</strong>{" "}
                — to handle subscription payments (we do not store card details
                ourselves).
              </li>
            </ul>
            <p className="mt-4">
              These providers only process data on our instructions and are bound
              by their own privacy and security obligations.
            </p>
          </section>

          {/* UK GDPR rights */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Your rights under UK GDPR
            </h2>
            <p className="mt-4">
              Under the UK General Data Protection Regulation, you have the
              right to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-stone-800">Access</strong> — request a
                copy of the personal data we hold about you.
              </li>
              <li>
                <strong className="text-stone-800">Correction</strong> — ask us
                to correct any inaccurate data.
              </li>
              <li>
                <strong className="text-stone-800">Deletion</strong> — ask us to
                delete your personal data where there is no compelling reason for
                us to keep it.
              </li>
              <li>
                <strong className="text-stone-800">Restriction</strong> — ask us
                to limit how we use your data.
              </li>
              <li>
                <strong className="text-stone-800">Portability</strong> —
                request your data in a structured, commonly used format.
              </li>
              <li>
                <strong className="text-stone-800">Objection</strong> — object
                to our processing of your data in certain circumstances.
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, get in touch using the contact
              details below. We will respond within 30 days.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Contact us
            </h2>
            <p className="mt-4">
              If you have any questions about this privacy policy or how we
              handle your data, please contact:
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

          {/* Changes */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Changes to this policy
            </h2>
            <p className="mt-4">
              We may update this policy from time to time. When we do, we will
              update the &ldquo;last updated&rdquo; date at the top of this
              page. If we make significant changes, we will let you know
              directly where possible.
            </p>
          </section>
        </div>
      </main>

      <ArgoFooter />
    </>
  );
}
