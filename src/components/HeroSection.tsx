const stats = [
  { value: "30+", label: "Enterprise biopharma partners" },
  { value: "70%", label: "Pilot-to-paid conversion rate" },
  { value: "$120K", label: "Average savings per client" },
  { value: "35%", label: "Efficiency gains per deployment" },
  { value: "74 NPS", label: "Post-onboarding score" },
];

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-24">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-block w-fit rounded-full border border-border-warm bg-paper-warm px-4 py-1.5 text-xs font-medium tracking-wide text-ink-muted">
            Clinician &middot; Product Builder &middot; Healthcare AI
          </span>

          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[4.5rem]">
            I stopped treating<br />
            <em className="text-accent-red">one patient at a time.</em><br />
            Now I build for millions.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
            Founding PM at Avenio AI&nbsp;&mdash;&nbsp;MS Health Informatics, University of Pittsburgh (4.0 GPA)
          </p>

          <blockquote className="mt-6 max-w-xl border-l-2 border-accent-red pl-5 font-serif text-base italic leading-relaxed text-ink-muted">
            &ldquo;Healthcare marketing is about building trust and relationships&nbsp;&mdash;&nbsp;because the end user is always a patient.&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#case-studies" className="rounded-md bg-accent-red px-6 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90">
              View My Work
            </a>
            <a href="https://clinicallyunhinged.substack.com" target="_blank" rel="noopener noreferrer" className="rounded-md border border-border-warm px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink">
              Read on Substack
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3 rounded-lg bg-paper-warm p-6 lg:p-8">
          {stats.map((s) => (
            <div key={s.value} className="stat-card rounded-md border border-border-warm bg-card px-5 py-4">
              <p className="font-serif text-2xl text-ink">{s.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
