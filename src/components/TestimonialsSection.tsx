import { useScrollFade } from "@/hooks/use-scroll-fade";

const testimonials = [
  "Aditi is a fast learner, and she's not afraid to start from scratch. What I respect most is her consistency: she shows up, improves quickly, and takes feedback seriously. She's the kind of student who makes the whole room sharper.",
  "Aditi brings a calm, focused energy to the team. Even when things are messy, she stays grounded and keeps everyone moving. She's ambitious, but not ego-driven. She cares about doing the work well.",
  "I love working with Aditi. She is smart and hardworking. Brings self-starter energy. She is strategic and has a growth mindset. She exceeded our expectations by a mile. I'm already looking for our next collaboration.",
];

export default function TestimonialsSection() {
  const ref = useScrollFade();

  return (
    <section className="bg-white" style={{ padding: "80px 32px" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl">
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "#3A3530", marginBottom: 16 }}>
          TESTIMONIALS
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 64, fontWeight: 300, color: "#1A1410", lineHeight: 1 }}>
          Kind words.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} style={{ border: "0.5px solid #EEE8DC", padding: 24 }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, color: "#EEE8DC", lineHeight: 1 }}>&ldquo;</span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "#3A3530", marginTop: 8 }}>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
