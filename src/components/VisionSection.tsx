import { useScrollFade } from "@/hooks/use-scroll-fade";

export default function VisionSection() {
  const ref = useScrollFade();

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#0f0e0c" }}>
      <div ref={ref} className="fade-in-section mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-serif text-3xl text-paper sm:text-4xl">My Vision.</h2>
          <p className="mt-2 text-sm text-ink-faint">Simple. Bold.</p>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-[#c8c5be]">
          <p>
            I want to build products that clinicians actually want to use. Not because they have to, but because the tools make their work easier and their patients' outcomes better.
          </p>
          <p>
            The future I'm building toward: healthcare AI that respects clinical workflows, proves its value through real outcomes, and bridges the gap between what's technically possible and what's actually practical in a hospital at 2 AM.
          </p>
        </div>
      </div>
    </section>
  );
}
