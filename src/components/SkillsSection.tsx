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

export default function SkillsSection() {
  const ref = useScrollFade();

  return (
    <section id="skills" className="py-20 lg:py-28" style={{ backgroundColor: "#f5f5f5" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-6">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-red">Skills</span>
        <h2 className="mb-10 text-3xl font-bold text-ink sm:text-4xl">What I work with.</h2>

        <div className="grid gap-8 sm:grid-cols-2">
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
