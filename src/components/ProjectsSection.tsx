import { useScrollFade } from "@/hooks/use-scroll-fade";

const projects = [
  {
    tag: "Multi-Agent AI | Healthcare",
    title: "Little Plum — Therapeutic Storytelling",
    desc: "4-agent LLM pipeline generating therapeutic bedtime stories with embedded CBT frameworks for children facing medical anxiety. Story generation → theme classification → safety validation → quality control. 89% first-pass quality rate, zero unsafe outputs, 55% cost reduction via optimized orchestration.",
    link: { label: "GitHub", url: "https://github.com/Aditisoni99" },
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
    <section id="projects" className="bg-paper-warm py-20 lg:py-28">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-6">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-red">Projects</span>
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">What I build when I'm curious.</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="project-card rounded-lg border border-border-warm bg-card p-6">
              <span className="inline-block rounded-full border border-border-warm px-3 py-1 text-xs font-medium text-accent-red">{p.tag}</span>
              <h3 className="mt-4 font-serif text-lg text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
              {p.link && (
                <a href={p.link.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-accent-red hover:underline">
                  {p.link.label} ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
