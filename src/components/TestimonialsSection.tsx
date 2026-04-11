import { useScrollFade } from "@/hooks/use-scroll-fade";

const testimonials = [
  "Aditi is a fast learner, and she's not afraid to start from scratch. What I respect most is her consistency — she shows up, improves quickly, and takes feedback seriously. She's the kind of student who makes the whole room sharper.",
  "Aditi brings a calm, focused energy to the team. Even when things are messy, she stays grounded and keeps everyone moving. She's ambitious, but not ego-driven — she cares about doing the work well.",
  "I love working with Aditi — she is smart and hardworking. Brings self-starter energy. She is strategic and has a growth mindset. She exceeded our expectations by a mile. I'm already looking for our next collaboration.",
];

export default function TestimonialsSection() {
  const ref = useScrollFade();

  return (
    <section className="bg-paper-warm py-20 lg:py-28">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-6">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-red">Testimonials</span>
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">What people say.</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-lg border border-border-warm bg-card p-6">
              <span className="font-serif text-5xl leading-none text-accent-red">&ldquo;</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
