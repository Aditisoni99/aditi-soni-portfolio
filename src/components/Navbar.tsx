import { useState } from "react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-warm" style={{ backgroundColor: "rgba(250,248,244,0.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-xl text-ink">Dr. Aditi Soni</a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            className="rounded-md border border-accent-red px-4 py-2 text-sm font-semibold text-accent-red transition-colors hover:bg-accent-red hover:text-paper"
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 md:hidden" aria-label="Toggle menu">
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border-warm bg-paper px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-ink-muted">
              {l.label}
            </a>
          ))}
          <a href="/cv.pdf" className="mt-3 inline-block rounded-md border border-accent-red px-4 py-2 text-sm font-semibold text-accent-red">
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
