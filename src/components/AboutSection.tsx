import { useScrollFade } from "@/hooks/use-scroll-fade";

const skillGroups = [
  {
    label: "Product & GTM",
    tags: ["Product Roadmapping", "0-to-1 Launches", "Pre-Sales", "GTM Strategy", "Pricing & Monetization", "Agile/Scrum", "OKR Design", "Customer Discovery", "JTBD Analysis", "Competitive Intelligence"],
  },
  {
    label: "Technical",
    tags: ["RAG Pipelines", "Multi-Agent LLMs", "Prompt Engineering", "Python", "SQL", "API Integrations", "FHIR", "HL7", "DICOM", "PyTorch", "YOLOv11"],
  },
  {
    label: "Analytics & Tools",
    tags: ["Tableau", "IBM Cognos", "Plotly", "Figma", "Jira", "Confluence", "A/B Testing", "Cohort Analysis"],
  },
  {
    label: "Clinical Domain",
    tags: ["6 years clinical practice", "FDA/GCP/ICH fluency", "Dental Surgery", "Clinical Workflow Design"],
  },
];

export default function AboutSection() {
  const ref = useScrollFade();

  return (
    <section id="about" className="bg-paper-warm py-20 lg:py-28">
      <div ref={ref} className="fade-in-section mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        {/* Prose */}
        <div>
          <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-red">About</span>
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">Who I am.</h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted">
            <p>
              I'm a licensed dentist who walked away from the chair to build AI products for the industry I know from the inside. Six years of clinical practice gave me something most PMs don't have&nbsp;&mdash;&nbsp;I know what it feels like to be the end user.
            </p>
            <p>
              At Avenio AI, I've built LLM-powered clinical research tools from zero: RAG pipelines, multi-agent architectures, FHIR integrations, FDA-compliant guardrails. I work directly with engineers and ship code using AI tools as standard workflow.
            </p>
            <p>
              I move between strategic roadmaps and implementation details. I ship fast, measure what matters, and iterate based on what users do, not what they say.
            </p>
          </div>
        </div>

        {/* Skill stacks */}
        <div className="space-y-8">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-faint">{g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border-warm bg-card px-3 py-1 text-xs font-medium text-ink-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
