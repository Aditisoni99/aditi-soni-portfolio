import { useScrollFade } from "@/hooks/use-scroll-fade";

const details = [
  { label: "Email", value: "aditisoni1309@gmail.com", href: "mailto:aditisoni1309@gmail.com" },
  { label: "LinkedIn", value: "Dr. Aditi Soni", href: "https://linkedin.com/in/dr-aditi-soni" },
  { label: "GitHub", value: "AditiSoni99", href: "https://github.com/Aditisoni99" },
  { label: "Substack", value: "Clinically Unhinged", href: "https://clinicallyunhinged.substack.com" },
  { label: "Location", value: "New Jersey — open to NYC & SF" },
];

export default function ContactSection() {
  const ref = useScrollFade();

  return (
    <section id="contact" className="bg-paper py-20 lg:py-28">
      <div ref={ref} className="fade-in-section mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-red">Contact</span>
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">Let's talk.</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
            I'm graduating April 2026, based in NJ, targeting NYC and SF. Open to PM and AI product roles in healthcare and clinical AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:aditisoni1309@gmail.com" className="rounded-md bg-accent-red px-6 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90">
              Email Me
            </a>
            <a href="https://linkedin.com/in/dr-aditi-soni" target="_blank" rel="noopener noreferrer" className="rounded-md border border-border-warm px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink">
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {details.map((d) => (
            <div key={d.label} className="flex items-baseline justify-between border-b border-border-warm pb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">{d.label}</span>
              {d.href ? (
                <a href={d.href} target={d.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="text-sm font-medium text-ink hover:text-accent-red">
                  {d.value}
                </a>
              ) : (
                <span className="text-sm font-medium text-ink">{d.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
