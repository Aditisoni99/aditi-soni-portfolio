const stats = [
  { value: "30+", label: "ENTERPRISE" },
  { value: "70%", label: "CONVERSION" },
  { value: "$120K", label: "SAVED/CLIENT", highlight: true },
  { value: "4.0", label: "GPA" },
];

export default function HeroSection() {
  return (
    <section id="top" className="bg-white" style={{ padding: "52px 32px 40px" }}>
      <div className="mx-auto max-w-4xl" style={{ paddingTop: 54 }}>
        {/* Eyebrow */}
        <p
          className="text-orange-900 text-xs font-mono"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 9,
            letterSpacing: "0.18em",
            color: "#B0A898",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          FOUNDING PRODUCT MANAGER · CLINICIAN · BUILDER
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 52,
            fontWeight: 300,
            color: "#1A1410",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            marginBottom: 16,
          }}
        >
          Hi, I'm Aditi. I build at the intersection of clinical intelligence, product, & real-world impact.
        </h1>

        {/* Subheading */}
        <div style={{ marginBottom: 20 }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 38,
              fontWeight: 300,
              color: "#1A1410",
              lineHeight: 1.15,
            }}
          >
            I stopped treating
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 38,
              fontWeight: 300,
              color: "#1A1410",
              lineHeight: 1.15,
            }}
          >
            one patient at a time.
          </p>
          <p
            className="text-[#d55c10]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 38,
              fontWeight: 300,
              fontStyle: "italic",
              color: "#C8A882",
              lineHeight: 1.15,
            }}
          >
            Now I build for millions.
          </p>
        </div>

        {/* Decorative line */}
        <div style={{ width: 28, height: 0.5, background: "#C8A882", marginBottom: 16 }} />

        {/* Description line */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            fontStyle: "italic",
            fontWeight: 300,
            color: "#7A7060",
            marginBottom: 14,
          }}
        >
          Dentist. Founding PM at Avenio AI. Recovering perfectionist.
        </p>

        {/* Body paragraph */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            fontWeight: 300,
            lineHeight: 1.9,
            color: "#7A7060",
            maxWidth: 460,
            marginBottom: 28,
          }}
        >
          I spent six years treating patients one at a time. Then I realized the leverage was in the system, not the chair. Now I ship clinical AI that scales across biopharma and healthcare.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap" style={{ gap: 10 }}>
          <a
            href="#experience"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "0.06em",
              background: "#1A1410",
              color: "#FFFFFF",
              padding: "10px 22px",
              textDecoration: "none",
              borderRadius: 0,
            }}
          >
            SEE MY WORK
          </a>
          <a
            href="https://letsvisualize.base44.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "0.06em",
              background: "#A8C4C8",
              color: "#1A3035",
              padding: "10px 22px",
              textDecoration: "none",
              borderRadius: 0,
            }}
          >
            VISUALIZE ↗
          </a>
          <a
            href="https://clinicallyunhinged.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "0.06em",
              border: "0.5px solid #EEE8DC",
              color: "#B0A898",
              padding: "10px 22px",
              textDecoration: "none",
              background: "none",
              borderRadius: 0,
            }}
          >
            CLINICALLY UNHINGED ↗
          </a>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-4"
          style={{
            borderTop: "0.5px solid #EEE8DC",
            paddingTop: 24,
            marginTop: 40,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                borderLeft: i > 0 ? "0.5px solid #EEE8DC" : "none",
                paddingLeft: i > 0 ? 20 : 0,
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 32,
                  fontWeight: 400,
                  color: s.highlight ? "#C8A882" : "#1A1410",
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#B0A898",
                  marginTop: 3,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
