export default function VideoDemo() {
  return (
    <section className="paper-texture relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Watch It Work
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Watch a Full Walkthrough
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            A quick walkthrough of how CallCatch catches your missed calls and
            turns them into ready-to-go enquiries.
          </p>
        </div>

        {/* Loom embed placeholder */}
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-warm-lg">
            {/* Replace the div below with your Loom embed iframe */}
            {/* Example: <iframe src="https://www.loom.com/embed/YOUR_VIDEO_ID" frameBorder="0" allowFullScreen className="aspect-video w-full" /> */}
            <div className="flex aspect-video w-full items-center justify-center bg-stone-900">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-600/90 text-white shadow-lg">
                  <svg
                    className="ml-1 h-7 w-7"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-white/70">
                  Video coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
