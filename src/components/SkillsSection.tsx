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
    <section id="skills" className="bg-white" style={{ padding: "80px 32px" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl">
        <p className="text-xs text-sky-700" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: "#B0A898", marginBottom: 16 }}>
          SKILLS
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: "#1A1410", marginBottom: 40 }}>
          Craft.
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <p className="text-slate-900" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "#B0A898", marginBottom: 12 }}>{g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10,
                      fontWeight: 400,
                      color: "#7A7060",
                      border: "0.5px solid #EEE8DC",
                      padding: "5px 12px",
                      borderRadius: 0,
                    }}
                  >
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
