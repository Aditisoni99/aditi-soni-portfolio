import { useScrollFade } from "@/hooks/use-scroll-fade";

export default function AboutSection() {
  const ref = useScrollFade();
  return (
    <section id="about" className="bg-white" style={{ padding: "80px 32px" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "#3A3530", marginBottom: 16 }}>
            ABOUT
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 64, fontWeight: 300, color: "#1A1410", lineHeight: 1 }}>
            Who I am.
          </h2>
        </div>
        <div className="space-y-8">
          {[
            {
              title: "Clinician first.",
              body: "Most PMs research the user. I was the user. Years of clinical practice taught me what no user interview ever could."
            },
            {
              title: "AI Product Manager.",
              body: "Roadmaps, pre-sales, GTM, pricing, implementation. I own the entire product motion from discovery to revenue."
            }
          ].map((item) => (
            <div key={item.title} style={{ borderLeft: "0.5px solid #A07850", paddingLeft: 24 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: "#1A1410", marginBottom: 4 }}>{item.title}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "#3A3530" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
