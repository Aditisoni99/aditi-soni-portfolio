import { useScrollFade } from "@/hooks/use-scroll-fade";

const experiences = [
  {
    period: "Sept 2025 — Present",
    role: "Product Manager",
    company: "Avenio AI — San Ramon, CA",
    bullets: [
      "Led 0-to-1 development of agentic AI platform, scaling to 30+ enterprise BioPharma partners",
      "Synthesized 150+ stakeholder inputs into prioritized roadmap; shipped MVP with 70% pilot-to-paid conversion",
      "Pitched to 50+ clinical ops, regulatory, and C-suite stakeholders; delivered $120K savings per project",
      "Owned GTM motion, monetization strategy, and pricing tier design end-to-end",
    ],
  },
  {
    period: "May 2025 — Aug 2025",
    role: "Product Management Intern",
    company: "Avenio AI — San Ramon, CA",
    bullets: [
      "Shipped MVP; improved workflow efficiency 35% through iterative usability testing",
      "Validated product-market fit: 30% pilot adoption, 25% retention gains",
      "Wrote user stories, ran sprint planning, managed Jira backlog",
    ],
  },
  {
    period: "Feb 2025 — Nov 2025",
    role: "Data Science Intern",
    company: "Health & Rehabilitation Informatics Lab, University of Pittsburgh",
    bullets: [
      "Built LLM-powered diagnostic tool for spinal cord injury; reduced clinician consult time 30%",
      "Increased clinician adoption 45% through interpretability-first RAG architecture redesign",
      "Validated outputs with clinical and regulatory stakeholders for real-world diagnostic compliance",
    ],
  },
  {
    period: "Jan 2025 — Present",
    role: "Associate System Analyst",
    company: "Pitt Digital — Pittsburgh, PA",
    bullets: [
      "Modernized payroll and admissions systems; 40% efficiency gain, 60% error reduction",
      "Built analytics pipelines in IBM Cognos; turned fragmented data into real-time leadership dashboards",
    ],
  },
  {
    period: "Jan 2023 — April 2024",
    role: "Clinical Practitioner",
    company: "Scientific Dental Care — Ahmedabad, India",
    bullets: [
      "Translated clinician and patient pain points into structured product requirements, directly informing healthcare AI product development",
      "Identified inefficiencies in patient intake, consultation, and treatment workflows; redesigned clinical processes to improve throughput",
      "Worked closely with patients and clinical staff to iterate on workflows, building deep user empathy and understanding of healthcare delivery systems",
    ],
  },
];

const education = [
  { degree: "M.S. Health Informatics — Data Science (STEM)", school: "University of Pittsburgh", years: "2024–2026", gpa: "4.00/4.00" },
  { degree: "Bachelor of Dental Surgery", school: "Terna Dental College and Hospital", years: "2017–2023", gpa: "3.25/4.00" },
];

export default function ExperienceSection() {
  const ref = useScrollFade();

  return (
    <section id="experience" className="bg-white" style={{ padding: "80px 32px" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-[820px]">
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: "#B0A898", marginBottom: 16 }}>
          EXPERIENCE
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: "#1A1410" }}>
          The journey.
        </h2>

        <div className="relative mt-12" style={{ borderLeft: "0.5px solid #EEE8DC", paddingLeft: 32 }}>
          {experiences.map((exp, i) => (
            <div key={i} className="relative mb-12 last:mb-0">
              <div className="absolute" style={{ left: -36.5, top: 6, width: 8, height: 8, borderRadius: "50%", background: "#C8A882" }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "#B0A898" }}>{exp.period}</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: "#1A1410", marginTop: 4 }}>{exp.role}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#C8A882", marginTop: 2 }}>{exp.company}</p>
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 300, lineHeight: 1.7, color: "#7A7060" }}>
                    <span style={{ marginTop: 7, width: 3, height: 3, borderRadius: "50%", background: "#B0A898", flexShrink: 0 }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: "#1A1410" }}>Education</h3>
          <div className="mt-6 space-y-4">
            {education.map((ed, i) => (
              <div key={i} style={{ border: "0.5px solid #EEE8DC", padding: "16px 20px" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: "#1A1410" }}>{ed.degree}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 300, color: "#7A7060", marginTop: 4 }}>
                  {ed.school} · {ed.years} · GPA: {ed.gpa}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
