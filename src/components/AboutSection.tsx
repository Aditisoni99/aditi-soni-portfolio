import { useScrollFade } from "@/hooks/use-scroll-fade";

export default function AboutSection() {
  const ref = useScrollFade();
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div ref={ref} className="fade-in-section mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-red">About</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink leading-tight mt-2">
            Six years in the clinic.{" "}
            <em className="text-accent-red">Now I build AI products</em>{" "}
            that actually work in healthcare.
          </h2>
        </div>
        <div className="space-y-8">
          {[
            {
              title: "Clinician first.",
              body: "Most PMs research the user. I was the user. Years of clinical taught me what no user interview ever could."
            },
            {
              title: "AI Product Manager.",
              body: "At Avenio AI, I've shipped LLM pipelines, multi-agent systems, and FDA-compliant workflows from zero to 30+ enterprise BioPharma partners."
            },
            {
              title: "Full stack PM.",
              body: "Roadmaps, pre-sales, GTM, pricing, implementation. I own the entire product motion from discovery to revenue."
            }
          ].map((item) => (
            <div key={item.title} className="border-l-2 border-accent-red pl-6">
              <p className="font-semibold text-ink text-lg mb-1">{item.title}</p>
              <p className="text-ink-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
