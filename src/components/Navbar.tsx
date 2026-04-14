import { useState } from "react";

const navLinks = [
  { label: "Work", href: "#case-studies" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ borderBottom: "0.5px solid #EEE8DC", height: 54 }}
    >
      <div className="flex items-center justify-between h-full" style={{ padding: "0 32px" }}>
        <a
          href="#top"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.06em",
            color: "#1A1410",
            textDecoration: "none",
          }}
        >
          ADITI SONI
        </a>

        <div className="hidden items-center md:flex" style={{ gap: 24 }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.05em",
                color: "#B0A898",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1JnhHm0d0cqtGG93Jj8rjc0s-zNhR9KYT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9,
              letterSpacing: "0.08em",
              color: "#1A1410",
              border: "0.5px solid #1A1410",
              padding: "5px 14px",
              textDecoration: "none",
              background: "none",
              borderRadius: 0,
            }}
          >
            RESUME
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="flex flex-col md:hidden" style={{ gap: 5 }} aria-label="Toggle menu">
          <span className={`block bg-ink transition-transform`} style={{ height: 0.5, width: 20, backgroundColor: "#1A1410", transform: open ? "translateY(5.5px) rotate(45deg)" : "none" }} />
          <span className={`block bg-ink transition-opacity`} style={{ height: 0.5, width: 20, backgroundColor: "#1A1410", opacity: open ? 0 : 1 }} />
          <span className={`block bg-ink transition-transform`} style={{ height: 0.5, width: 20, backgroundColor: "#1A1410", transform: open ? "translateY(-5.5px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{ borderTop: "0.5px solid #EEE8DC", background: "#FFFFFF", padding: "16px 32px 24px" }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.05em",
                color: "#B0A898",
                textDecoration: "none",
                padding: "10px 0",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1JnhHm0d0cqtGG93Jj8rjc0s-zNhR9KYT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9,
              letterSpacing: "0.08em",
              color: "#1A1410",
              border: "0.5px solid #1A1410",
              padding: "5px 14px",
              textDecoration: "none",
              display: "inline-block",
              marginTop: 10,
            }}
          >
            RESUME
          </a>
        </div>
      )}
    </nav>
  );
}
