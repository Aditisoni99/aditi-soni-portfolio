export default function ClinicallyUnhingedSection() {
  return (
    <section
      id="writing"
      style={{
        background: "#1A1410",
        padding: "48px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        flexWrap: "wrap",
      }}
    >
      <div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: "0.14em", color: "#6A6058", textTransform: "uppercase", marginBottom: 8 }}>
          WRITING
        </p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: "#F0EBE2", marginBottom: 10 }}>
          Clinically Unhinged
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 300, color: "#7A7060", lineHeight: 1.7, maxWidth: 380 }}>
          Health AI commentary, career pivots, and everything they don't teach you in clinical school.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
        <a
          href="https://clinicallyunhinged.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: "0.06em",
            background: "#A8C4C8",
            color: "#1A3035",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: 0,
          }}
        >
          READ ON SUBSTACK ↗
        </a>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "#4A4038", letterSpacing: "0.04em" }}>
          clinicallyunhinged.substack.com
        </span>
      </div>
    </section>
  );
}
