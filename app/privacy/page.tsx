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
          Last updated: 13 March 2026
        </p>

        <div className="mt-12 space-y-10 text-stone-600 leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              Argo (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is
              a trading name of Harry McDonagh, based in Essex, UK. We provide
              done-for-you tools and services for local businesses, including
              missed call text-back (CallCatch) and web design. This policy
              explains how we handle data when you use our services or visit our
              website.
            </p>
            <p className="mt-3">
              We keep things simple. We only collect what we need, we don&rsquo;t
              sell your data, and we do our best to keep it safe.
            </p>
          </section>

          {/* Our role */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Our role and your data
            </h2>
            <p className="mt-4">
              When a business uses CallCatch, their customers&rsquo; data (phone
              numbers, names, postcodes, and enquiry details) is processed by
              Argo on behalf of that business. In this case, the business is
              the <strong className="text-stone-800">data controller</strong>{" "}
              (they decide why and how data is used) and Argo acts as
              a <strong className="text-stone-800">data processor</strong>{" "}
              (we process it on their instructions to deliver the service).
            </p>
            <p className="mt-3">
              For our own client data (the businesses that sign up to use our
              services) and visitors to this website, Argo is the data
              controller.
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
            <p className="mt-3">
              When you visit our website, we collect basic analytics data
              (such as page views and referral source) through Vercel Analytics.
              This service does not use cookies and does not track you across
              other websites.
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
                To extract and summarise enquiry details from text conversations
                using automated processing, so we can pass clear, structured
                information to the business.
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

          {/* Lawful basis */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Lawful basis for processing
            </h2>
            <p className="mt-4">
              Under UK GDPR, we need a lawful reason to process personal data.
              The bases we rely on are:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-stone-800">Contract</strong> — to
                deliver the services our clients have signed up and paid for.
              </li>
              <li>
                <strong className="text-stone-800">Legitimate interests</strong>{" "}
                — to process caller data on behalf of our clients (the
                business has a legitimate interest in following up missed calls),
                and to collect website analytics to improve our site.
              </li>
            </ul>
          </section>

          {/* Data storage */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Data storage and security
            </h2>
            <p className="mt-4">
              Your data is stored securely using industry-standard cloud
              services. We use encryption in transit (HTTPS/TLS) and take
              reasonable steps to protect data at rest. Access to personal data
              is limited to those who need it to deliver the service.
            </p>
            <p className="mt-3">
              We retain caller data for the duration of our client&rsquo;s
              subscription. If a business cancels their CallCatch subscription,
              we delete associated caller data within 30 days unless we are
              legally required to keep it.
            </p>
          </section>

          {/* Third parties */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Third-party services
            </h2>
            <p className="mt-4">
              To deliver our services, we work with trusted third-party
              providers:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-stone-800">Twilio</strong> — to send
                and receive text messages on behalf of businesses.
              </li>
              <li>
                <strong className="text-stone-800">Make.com</strong> — to
                automate workflows that connect our services together.
              </li>
              <li>
                <strong className="text-stone-800">Airtable</strong> — to store
                and manage enquiry records securely.
              </li>
              <li>
                <strong className="text-stone-800">OpenAI</strong> — to process
                text conversations and extract structured enquiry details
                (such as the caller&rsquo;s name, service needed, and
                postcode). Messages are sent to OpenAI&rsquo;s API for
                processing only and are not used to train their models.
              </li>
              <li>
                <strong className="text-stone-800">Stripe</strong> — to handle
                subscription payments. We do not store card details ourselves.
              </li>
              <li>
                <strong className="text-stone-800">Vercel</strong> — to host
                our website and collect privacy-friendly analytics.
              </li>
            </ul>
            <p className="mt-4">
              These providers process data on our instructions and are bound
              by their own privacy and security obligations. Each maintains
              appropriate data protection standards.
            </p>
          </section>

          {/* International transfers */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              International data transfers
            </h2>
            <p className="mt-4">
              Some of the third-party services we use are based in the United
              States. This means your data may be transferred to and processed
              in countries outside the UK. Where this happens, we ensure
              appropriate safeguards are in place, such as Standard Contractual
              Clauses approved by the UK Information Commissioner&rsquo;s
              Office, to protect your data to the same standard as UK law
              requires.
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
            <p className="mt-3">
              If you are not satisfied with how we handle your data, you have
              the right to complain to the Information Commissioner&rsquo;s
              Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 underline hover:text-amber-700"
              >
                ico.org.uk
              </a>
              .
            </p>
          </section>

          {/* Web design clients */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Web design services
            </h2>
            <p className="mt-4">
              When Argo builds a website for a client, we may integrate
              third-party services such as contact form providers and booking
              platforms on your behalf. These services collect and process
              visitor data (such as names, email addresses, phone numbers, and
              booking details) directly — Argo does not receive, store, or
              process this data.
            </p>
            <p className="mt-3">
              The client is the data controller for any personal data collected
              through their own website. Each third-party service (for example,
              Formspree for contact forms or Calendly for bookings) has its own
              privacy policy and acts as a data processor on the client&rsquo;s
              behalf. Argo builds and configures the site but does not control
              or process visitor data unless separately agreed.
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
