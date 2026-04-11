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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-warm" style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-xl font-bold text-ink">Dr. Aditi Soni</a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1JnhHm0d0cqtGG93Jj8rjc0s-zNhR9KYT/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            className="rounded-md border border-accent-red px-4 py-2 text-sm font-semibold text-accent-red transition-colors hover:bg-accent-red hover:text-white"
          >
            Download CV
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 md:hidden" aria-label="Toggle menu">
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border-warm bg-paper px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-ink-muted">
              {l.label}
            </a>
          ))}
          <a href="https://drive.google.com/file/d/1JnhHm0d0cqtGG93Jj8rjc0s-zNhR9KYT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block rounded-md border border-accent-red px-4 py-2 text-sm font-semibold text-accent-red">
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
