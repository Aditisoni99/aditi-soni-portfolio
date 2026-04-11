import { useScrollFade } from "@/hooks/use-scroll-fade";

export default function AboutSection() {
  const ref = useScrollFade();

  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div ref={ref} className="fade-in-section mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-red">About</span>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Who I am.</h2>

          <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-ink-muted">
            <p>
              I'm a licensed dentist who walked away from the chair to build AI products for the industry I know from the inside. Six years of clinical practice gave me something most PMs don't have: I know what it feels like to be the end user.
            </p>
            <p>
              At Avenio AI, I've built LLM-powered clinical research tools from zero: RAG pipelines, multi-agent architectures, FHIR integrations, FDA-compliant guardrails. I work directly with engineers and ship code using AI tools as standard workflow.
            </p>
            <p>
              I move between strategic roadmaps and implementation details. I ship fast, measure what matters, and iterate based on what users do, not what they say.
            </p>
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
