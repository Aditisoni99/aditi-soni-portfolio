import { useScrollFade } from "@/hooks/use-scroll-fade";

export default function CaseStudiesSection() {
  const ref = useScrollFade();

  return (
    <section id="case-studies" className="py-20 lg:py-28" style={{ backgroundColor: "#1d1d1f" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-6">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-red">Case Studies</span>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Where I've shipped.</h2>
        <p className="mt-2 text-sm text-[#86868b]">Full problem-to-outcome breakdowns.</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Card 1 */}
          <div className="project-card rounded-lg border border-[#424245] p-8">
            <p className="text-5xl font-bold text-accent-red opacity-40">01</p>
            <span className="mt-4 inline-block rounded-full bg-[#2d2d2f] px-3 py-1 text-xs font-medium text-[#86868b]">AI Product | BioPharma</span>
            <h3 className="mt-4 text-2xl font-bold text-white">Reducing Clinical Trial Protocol from 6 Months to 4 Months</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#86868b]">
              Clinical trial protocols were costing BioPharma partners $500K+ in delays. I led the 0-to-1 build of an agentic AI drafting engine with regulatory compliance guardrails, taking protocol design from months to days.
            </p>

            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#86868b]">My Role</p>
              <ul className="space-y-1.5 text-sm font-light text-[#86868b]">
                <li>Positioned Avenio as the AI-native frontrunner in clinical trial operations</li>
                <li>Co-led investor meetings influencing strategic funding conversations</li>
                <li>Shaped subscription pricing strategy contributing to ARR pipeline growth</li>
              </ul>
            </div>

            <div className="mt-6 border-l-2 border-accent-red pl-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#86868b]">Key Learnings</p>
              <ul className="space-y-2 text-sm font-light text-[#86868b]">
                <li>Transparency over accuracy. Showing why AI made decisions drove 45% more trust than improving the model.</li>
                <li>Test ugly, test early. Waiting for polished prototypes cost us weeks.</li>
                <li>Sales isn't downstream. They should be in the room from day one.</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["6 mo → 4 mo", "40% faster FPI", "30+ partners", "$120K saved/protocol", "95% clinical accuracy"].map((c) => (
                <span key={c} className="rounded-full bg-[#2d2d2f] px-3 py-1 text-xs font-medium text-accent-red">{c}</span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="project-card rounded-lg border border-[#424245] p-8">
            <p className="text-5xl font-bold text-accent-red opacity-40">02</p>
            <span className="mt-4 inline-block rounded-full bg-[#2d2d2f] px-3 py-1 text-xs font-medium text-[#86868b]">Systems | Operations</span>
            <h3 className="mt-4 text-2xl font-bold text-white">40% Efficiency Gain Through Legacy System Modernization</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#86868b]">
              Fragmented legacy systems across 209 university units with unclear ownership and no tracking. I built a scalable stakeholder management framework with Agile execution and real-time dashboards.
            </p>

            <div className="mt-6 border-l-2 border-accent-red pl-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#86868b]">Key Learnings</p>
              <ul className="space-y-2 text-sm font-light text-[#86868b]">
                <li>Systems beat heroics. 209 units managed without chaos using Jira workflow separation.</li>
                <li>Escalation is a feature. Time-bound follow-ups with Confluence documentation.</li>
                <li>Data drives decisions. Tableau dashboards beat raw SQL reports every time.</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["40% efficiency gain", "60% error reduction", "209 units tracked", "Real-time dashboards"].map((c) => (
                <span key={c} className="rounded-full bg-[#2d2d2f] px-3 py-1 text-xs font-medium text-accent-red">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
