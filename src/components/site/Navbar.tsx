import { useEffect, useState } from "react";

const links = [
  { label: "Work", hash: "work" },
  { label: "Services", hash: "services" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="/" className="eyebrow text-foreground" onClick={() => setOpen(false)}>Parv Sharma</a>
        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a key={l.hash} href={`/#${l.hash}`} className="eyebrow link-line text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
          ))}
          <a href="/#contact" className="eyebrow border border-hairline px-5 py-3 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">Let's talk <span className="arrow">→</span></a>
        </div>
        <button
          className="eyebrow -mr-2 p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 flex flex-col justify-between bg-background px-5 pb-10 pt-8 md:hidden">
          <ul className="space-y-2">
            {links.map((l, i) => (
              <li key={l.hash} className="border-b border-border">
                <a href={`/#${l.hash}`} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-4">
                  <span className="display text-5xl">{l.label}</span>
                  <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/918595984063" target="_blank" rel="noreferrer" className="eyebrow flex items-center justify-between bg-primary px-5 py-5 text-primary-foreground">
            WhatsApp me <span className="arrow">→</span>
          </a>
        </div>
      )}
    </header>
  );
}
