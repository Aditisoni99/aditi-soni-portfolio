import { useScrollFade } from "@/hooks/use-scroll-fade";

export default function VisionSection() {
  const ref = useScrollFade();

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#1d1d1f" }}>
      <div ref={ref} className="fade-in-section mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">My Vision.</h2>
          <p className="mt-2 text-sm text-[#86868b]">Simple. Direct.</p>
        </div>
        <div className="space-y-5 text-base font-light leading-relaxed text-[#a1a1a6]">
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
