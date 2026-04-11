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
    role: "Clinical AI Researcher",
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
    role: "Product Lead",
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
    <section id="experience" className="bg-paper py-20 lg:py-28">
      <div ref={ref} className="fade-in-section mx-auto max-w-[820px] px-6">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-red">Experience</span>
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">Where I've been.</h2>

        <div className="relative mt-12 border-l border-border-warm pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative mb-12 last:mb-0">
              <div className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-red" />

              <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">{exp.period}</p>
              <h3 className="mt-1 text-xl font-bold text-ink">{exp.role}</h3>
              <p className="mt-0.5 text-sm font-semibold text-accent-red">{exp.company}</p>

              <ul className="mt-3 space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm font-light leading-relaxed text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-ink">Education</h3>
          <div className="mt-6 space-y-4">
            {education.map((ed, i) => (
              <div key={i} className="rounded-md border border-border-warm bg-card px-5 py-4">
                <p className="font-semibold text-ink">{ed.degree}</p>
                <p className="mt-1 text-sm font-light text-ink-muted">
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
