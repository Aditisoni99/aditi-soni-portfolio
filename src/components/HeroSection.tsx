const stats = [
  { value: "30+", label: "Enterprise biopharma partners" },
  { value: "70%", label: "Pilot-to-paid conversion rate" },
  { value: "$120K", label: "Average savings per client" },
  { value: "35%", label: "Efficiency gains per deployment" },
];

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen pt-24">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <span className="mb-6 inline-block w-fit rounded-full border border-border-warm bg-paper-warm px-4 py-1.5 text-xs font-medium tracking-wide text-ink-muted">
          Clinician · Product Builder · Healthcare AI
        </span>

        <h1
          className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[3.5rem]"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Hi, I'm Aditi.
          <br />
          I build at the intersection of
          <br />
          <span className="italic text-accent-red">clinical intelligence, product, &amp; real-world impact.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink-muted">
          Founding PM at Avenio AI. MS Health Informatics, University of Pittsburgh. 4.0 GPA.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#case-studies" className="rounded-md bg-accent-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            View My Work
          </a>
          <a href="https://clinicallyunhinged.substack.com" target="_blank" rel="noopener noreferrer" className="rounded-md border border-border-warm px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink">
            Read on Substack
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2">
          {stats.map((s) => (
            <div key={s.value} className="stat-card rounded-md border border-border-warm bg-card px-4 py-3">
              <p className="text-xl font-bold text-accent-red">{s.value}</p>
              <p className="mt-0.5 text-xs font-light text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
