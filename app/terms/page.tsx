import ArgoNav from "../components/ArgoNav";
import ArgoFooter from "../components/ArgoFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Argo",
  description:
    "Terms and conditions for using Argo's services, including CallCatch missed call text-back and web design for local businesses.",
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
          Last updated: 13 March 2026
        </p>

        <div className="mt-12 space-y-10 text-stone-600 leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              These terms apply when you use any service provided by Argo
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a
              trading name of Harry McDonagh, based in Essex, UK. By using our
              services you agree to these terms. If you don&rsquo;t agree,
              please don&rsquo;t use our services.
            </p>
          </section>

          {/* Service description */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              What we provide
            </h2>
            <p className="mt-4">
              Argo provides done-for-you tools and services for local
              businesses. Our current services include:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-stone-800">CallCatch</strong> — a
                missed call text-back service. It automatically texts your
                missed callers, finds out what they need (name, service
                required, postcode), and sends you the enquiry details —
                typically within 10 seconds.
              </li>
              <li>
                <strong className="text-stone-800">Web design</strong> —
                custom-built websites for local businesses, designed to attract
                customers and look professional.
              </li>
            </ul>
            <p className="mt-3">
              We aim to keep our services running reliably, but we cannot
              guarantee 100% uptime. For CallCatch, text message delivery
              depends on mobile networks and third-party providers that are
              outside our control.
            </p>
          </section>

          {/* Payment */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Payment terms
            </h2>
            <h3 className="mt-6 text-lg font-semibold text-stone-800">
              CallCatch
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                CallCatch is a paid subscription service with a monthly fee.
              </li>
              <li>
                A one-time setup fee may apply to cover initial configuration
                and onboarding.
              </li>
              <li>
                Payments are due monthly in advance. If a payment fails, we may
                suspend the service until the account is brought up to date.
              </li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-stone-800">
              Web design
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Web design projects are quoted individually based on scope.
              </li>
              <li>
                A deposit is required before work begins, with the balance due
                on completion and before the site goes live.
              </li>
              <li>
                Optional ongoing hosting and maintenance may be available as a
                separate monthly subscription.
              </li>
            </ul>
            <p className="mt-4">
              All prices will be confirmed before you sign up or approve a
              project. We will give you reasonable notice of any price changes
              to ongoing subscriptions.
            </p>
          </section>

          {/* Cancellation */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Cancellation
            </h2>
            <p className="mt-4">
              We don&rsquo;t believe in long lock-in contracts. You can cancel
              your CallCatch subscription at any time by giving us 30
              days&rsquo; written notice (email is fine). After the notice
              period, we will stop the service and you won&rsquo;t be charged
              again.
            </p>
            <p className="mt-3">
              Setup fees and web design deposits are non-refundable once work
              has begun. Monthly subscription fees are not refunded for partial
              months.
            </p>
          </section>

          {/* Web design specifics */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Web design projects
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-stone-800">Your content</strong> — you
                are responsible for providing any text, images, logos, and other
                content needed for your website. We can help guide you, but we
                are not responsible for creating content unless specifically
                agreed.
              </li>
              <li>
                <strong className="text-stone-800">Revisions</strong> — each
                project includes a reasonable number of revisions, agreed
                before work starts. Additional revisions beyond the agreed
                scope may incur extra charges.
              </li>
              <li>
                <strong className="text-stone-800">Timeline</strong> — we will
                give you an estimated timeline at the start. Delays caused by
                late content or feedback from your side may push the delivery
                date back.
              </li>
              <li>
                <strong className="text-stone-800">Third-party services</strong>{" "}
                — your website may include third-party integrations such as
                contact form providers (e.g. Formspree) and booking platforms
                (e.g. Calendly). These services have their own terms and privacy
                policies. You are responsible for setting up your own accounts
                with these providers and for how visitor data is handled through
                them. Argo configures the integration but does not access or
                store data submitted through these services.
              </li>
              <li>
                <strong className="text-stone-800">Handover</strong> — once the
                project is complete and final payment received, your website
                will be deployed and handed over to you. We will provide any
                login credentials and documentation you need to manage your
                site.
              </li>
            </ul>
          </section>

          {/* IP */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Intellectual property
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-stone-800">CallCatch</strong> — Argo
                owns and operates the CallCatch system. You receive the leads
                and enquiry data generated through the service, but the
                underlying technology remains ours.
              </li>
              <li>
                <strong className="text-stone-800">Web design</strong> — once
                your project is complete and paid in full, you own your website
                content (text, images, and branding you provided). The custom
                code and design we create for you is licensed to you for use on
                your website. We may retain the right to showcase the work in
                our portfolio unless you ask us not to.
              </li>
              <li>
                <strong className="text-stone-800">Your content</strong> — any
                content you provide to us (logos, photos, text) remains yours.
                You confirm that you have the right to use any content you
                supply.
              </li>
            </ul>
          </section>

          {/* Data processing */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Data and privacy
            </h2>
            <p className="mt-4">
              When you use CallCatch, we process your customers&rsquo; data
              (phone numbers, names, enquiry details) on your behalf to deliver
              the service. In data protection terms, you are the data controller
              and Argo is your data processor.
            </p>
            <p className="mt-3">
              We will only use this data to provide the service you have signed
              up for. We will not share it with anyone else unless required by
              law. For full details on how we handle data, please read
              our{" "}
              <a
                href="/privacy"
                className="text-amber-600 underline hover:text-amber-700"
              >
                Privacy Policy
              </a>
              .
            </p>
            <p className="mt-3">
              You are responsible for complying with data protection laws when
              handling any personal data we pass to you (for example, enquiry
              details from CallCatch).
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

          {/* Disputes */}
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
              Disputes
            </h2>
            <p className="mt-4">
              If something goes wrong, we&rsquo;d rather sort it out directly
              than involve lawyers. If you have a complaint or concern, please
              contact us first and we will do our best to resolve it informally.
              If we cannot reach a resolution, either party may pursue the
              matter through the courts.
            </p>
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
