import { useScrollFade } from "@/hooks/use-scroll-fade";

const details = [
  { label: "Email", value: "aditisoni1309@gmail.com", href: "mailto:aditisoni1309@gmail.com" },
  { label: "LinkedIn", value: "Dr. Aditi Soni", href: "https://www.linkedin.com/in/draditisoni/" },
  { label: "GitHub", value: "AditiSoni99", href: "https://github.com/Aditisoni99" },
  { label: "Substack", value: "Clinically Unhinged", href: "https://clinicallyunhinged.substack.com" },
  { label: "Location", value: "New Jersey, open to NYC & SF" },
];

export default function ContactSection() {
  const ref = useScrollFade();
  return (
    <section id="contact" className="bg-white" style={{ padding: "80px 32px" }}>
      <div ref={ref} className="fade-in-section mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: "#B0A898", marginBottom: 16 }}>
            CONTACT
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: "#1A1410" }}>
            Say hello.
          </h2>
          <div className="mt-8 flex flex-wrap" style={{ gap: 10 }}>
            <a
              href="mailto:aditisoni1309@gmail.com"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.06em",
                background: "#1A1410",
                color: "#FFFFFF",
                padding: "10px 22px",
                textDecoration: "none",
              }}
            >
              EMAIL ME
            </a>
            <a
              href="https://www.linkedin.com/in/draditisoni/"
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
              }}
            >
              CONNECT ON LINKEDIN
            </a>
          </div>
        </div>
        <div className="space-y-4">
          {details.map((d) => (
            <div key={d.label} className="flex items-baseline justify-between" style={{ borderBottom: "0.5px solid #EEE8DC", paddingBottom: 12 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "#B0A898" }}>{d.label}</span>
              {d.href ? (
                <a
                  href={d.href}
                  target={d.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 400, color: "#1A1410", textDecoration: "none" }}
                >
                  {d.value}
                </a>
              ) : (
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 400, color: "#1A1410" }}>{d.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
