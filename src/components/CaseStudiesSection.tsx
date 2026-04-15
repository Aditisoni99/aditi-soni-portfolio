import { useScrollFade } from "@/hooks/use-scroll-fade";

export default function CaseStudiesSection() {
  const ref = useScrollFade();

  return (
    <section id="case-studies" className="bg-white" style={{ padding: "80px 32px" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl">
        <p className="font-sans" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: "#B0A898", marginBottom: 16 }}>
          CASE STUDIES
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: "#1A1410" }}>
          Work.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Card 1 */}
          <div style={{ border: "0.5px solid #EEE8DC", padding: 32 }}>
            <p className="text-orange-900" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, color: "#EEE8DC" }}>01</p>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.1em", color: "#A8C4C8", display: "inline-block", marginTop: 12 }}>AI PRODUCT · BIOPHARMA</span>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: "#1A1410", marginTop: 12 }}>
              Reducing Clinical Trial Protocol from 6 Months to 4 Months
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 300, lineHeight: 1.7, color: "#7A7060", marginTop: 12 }}>
              Clinical trial protocols were costing BioPharma partners $500K+ in delays. I led the 0-to-1 build of an agentic AI drafting engine with regulatory compliance guardrails, taking protocol design from months to days.
            </p>

            <div style={{ marginTop: 20 }}>
              <p className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "#B0A898", marginBottom: 8 }}>My Role</p>
              <ul className="space-y-1.5">
                {[
                  "Positioned Avenio as the AI-native frontrunner in clinical trial operations",
                  "Co-led investor meetings influencing strategic funding conversations",
                  "Shaped subscription pricing strategy contributing to ARR pipeline growth",
                ].map((b, i) => (
                  <li key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 300, color: "#7A7060" }}>{b}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: 20, borderLeft: "0.5px solid #C8A882", paddingLeft: 16 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "#B0A898", marginBottom: 8 }}>Key Learnings</p>
              <ul className="space-y-2">
                {[
                  "Transparency over accuracy. Showing why AI made decisions drove 45% more trust than improving the model.",
                  "Test ugly, test early. Waiting for polished prototypes cost us weeks.",
                  "Sales isn't downstream. They should be in the room from day one.",
                ].map((b, i) => (
                  <li key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 300, color: "#7A7060" }}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["6 mo → 4 mo", "40% faster FPI", "30+ partners", "$120K saved/protocol", "95% clinical accuracy"].map((c) => (
                <span key={c} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: "#C8A882", border: "0.5px solid #EEE8DC", padding: "4px 10px" }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ border: "0.5px solid #EEE8DC", padding: 32 }}>
            <p className="text-orange-900" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, color: "#EEE8DC" }}>02</p>
            <span className="text-xs" style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.1em", color: "#A8C4C8", display: "inline-block", marginTop: 12 }}>SYSTEMS · OPERATIONS</span>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: "#1A1410", marginTop: 12 }}>
              40% Efficiency Gain Through Legacy System Modernization
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 300, lineHeight: 1.7, color: "#7A7060", marginTop: 12 }}>
              Fragmented legacy systems across 209 university units with unclear ownership and no tracking. I built a scalable stakeholder management framework with Agile execution and real-time dashboards.
            </p>

            <div style={{ marginTop: 20, borderLeft: "0.5px solid #C8A882", paddingLeft: 16 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "#B0A898", marginBottom: 8 }}>Key Learnings</p>
              <ul className="space-y-2">
                {[
                  "Systems beat heroics. 209 units managed without chaos using Jira workflow separation.",
                  "Escalation is a feature. Time-bound follow-ups with Confluence documentation.",
                  "Data drives decisions. Tableau dashboards beat raw SQL reports every time.",
                ].map((b, i) => (
                  <li key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 300, color: "#7A7060" }}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["40% efficiency gain", "60% error reduction", "209 units tracked", "Real-time dashboards"].map((c) => (
                <span key={c} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: "#C8A882", border: "0.5px solid #EEE8DC", padding: "4px 10px" }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
