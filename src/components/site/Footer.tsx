import { CONTACT } from "@/lib/projects";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-14 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <p className="display text-4xl md:text-5xl">Parv Sharma</p>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Digital experiences for businesses and brands that want to stand out.
          </p>
        </div>
        <div className="eyebrow space-y-2 text-muted-foreground md:col-span-3">
          <p>Delhi / India</p>
          <p>Available worldwide</p>
        </div>
        <div className="eyebrow space-y-2 md:col-span-3">
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="link-line block w-fit">WhatsApp</a>
          <a href={CONTACT.tel} className="link-line block w-fit">{CONTACT.phone}</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1500px] justify-between border-t border-border px-5 py-6 text-xs text-muted-foreground md:px-10">
        <span>© 2026 Parv Sharma</span>
        <a href="#top" className="link-line">Back to top ↑</a>
      </div>
    </footer>
  );
}
