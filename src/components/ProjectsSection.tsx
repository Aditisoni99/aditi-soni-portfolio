import { useScrollFade } from "@/hooks/use-scroll-fade";

const projects = [
  {
    tag: "Multi-Agent AI | Healthcare",
    title: "Little Plum — Therapeutic Storytelling",
    desc: "4-agent LLM pipeline generating therapeutic bedtime stories with embedded CBT frameworks for children facing medical anxiety. Story generation, theme classification, safety validation, quality control. 89% first-pass quality rate, zero unsafe outputs, 55% cost reduction via optimized orchestration.",
  },
  {
    tag: "PyTorch | Neural Networks",
    title: "Migraine Subtype Classifier",
    desc: "PyTorch neural network classifying migraine subtypes from symptom profiles. Feature engineering to capture clinical relevance. 91% accuracy. Architecture designed as baseline for future EEG multimodal integration.",
  },
  {
    tag: "ML | Patient Stratification",
    title: "Lung Cancer Prediction & Risk Stratification",
    desc: "End-to-end ML pipeline: EDA on clinical indicators, preprocessing with stratified sampling, Logistic Regression + Random Forest + Gradient Boosting comparison, SHAP interpretability. Stratified patients into low/moderate/high risk with explainable feature importance aligned to oncology standards.",
  },
  {
    tag: "PyTorch | DICOM | Computer Vision",
    title: "Knee Joint Segmentation",
    desc: "PyTorch U-Net for knee joint segmentation on DICOM images. Integrated YOLOv11 for joint space localization, accelerating segmentation and enhancing precision for orthopedic diagnostics.",
  },
];

export default function ProjectsSection() {
  const ref = useScrollFade();

  return (
    <section id="projects" className="bg-white" style={{ padding: "80px 32px" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl">
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "#3A3530", marginBottom: 16 }}>
          PROJECTS
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 64, fontWeight: 300, color: "#1A1410", marginBottom: 40, lineHeight: 1 }}>
          Things I build.
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Visualize card */}
          <div style={{ border: "0.5px solid #EEE8DC", display: "flex", overflow: "hidden" }} className="flex-col sm:flex-row">
            {/* Thumbnail */}
            <div
              className="flex flex-col items-center justify-center"
              style={{
                background: "#1A1410",
                aspectRatio: "16/9",
                minWidth: "45%",
                padding: 24,
              }}
            >
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: "#C8A882", marginBottom: 12 }}>Visualize</p>
              <svg width="48" height="32" viewBox="0 0 48 32">
                <rect x="4" y="16" width="8" height="16" fill="#A8C4C8" />
                <rect x="16" y="8" width="8" height="24" fill="#A8C4C8" />
                <rect x="28" y="12" width="8" height="20" fill="#A8C4C8" />
                <rect x="40" y="4" width="8" height="28" fill="#A8C4C8" />
              </svg>
            </div>
            {/* Content */}
            <div style={{ padding: 20, background: "#FFFFFF" }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", color: "#3A3530", marginBottom: 8 }}>LIVE PRODUCT</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: "#1A1410", marginBottom: 6, lineHeight: 1.1 }}>Visualize</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "#3A3530", marginBottom: 12 }}>
                CRM intelligence platform. Turns any CRM export into beautiful dashboards, AI reports, and decks. Built and shipped solo in 48 hours.
              </p>
              <a
                href="https://letsvisualize.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#A07850", textDecoration: "none" }}
              >
                letsvisualize.base44.app ↗
              </a>
            </div>
          </div>

          {/* Other projects */}
          {projects.map((p) => (
            <div key={p.title} style={{ border: "0.5px solid #EEE8DC", padding: 24 }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", color: "#3A3530", marginBottom: 8 }}>{p.tag.toUpperCase()}</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: "#1A1410", marginBottom: 6, lineHeight: 1.1 }}>{p.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "#3A3530", marginBottom: 12 }}>{p.desc}</p>
              <a
                href="https://github.com/Aditisoni99"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#A07850", textDecoration: "none" }}
              >
                View on GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
