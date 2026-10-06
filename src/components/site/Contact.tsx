import { useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/projects";
import { Reveal } from "./Reveal";

const field =
  "w-full border-0 border-b border-input bg-transparent px-0 py-4 text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors";

export function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) || "").trim();
    const text = [
      `Hi Parv, I'm ${g("name")}${g("brand") ? ` from ${g("brand")}` : ""}.`,
      g("need") && `I need: ${g("need")}`,
      g("budget") && `Budget: ${g("budget")}`,
      g("message"),
      `Email: ${g("email")}`,
    ]
      .filter(Boolean)
      .join("\n\n");
    window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-card">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow text-muted-foreground">(05) Contact</p>
          <h2 className="display mt-8 text-[16vw] uppercase md:text-[10vw]">
            Have something in mind?
          </h2>
          <p className="display mt-2 text-5xl italic text-accent md:text-7xl">Let's build it.</p>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Tell me what you're working on, what you're trying to achieve, or simply what isn't working right now.
            </p>
            <div className="mt-10 border-t border-border">
              <p className="eyebrow py-5">Parv Sharma</p>
              <a href={CONTACT.tel} className="flex items-center justify-between border-t border-border py-5 text-lg">
                {CONTACT.phone} <span className="arrow">→</span>
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-between border-t border-border py-5 text-lg">
                WhatsApp <span className="arrow">→</span>
              </a>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7 md:col-start-6" delay={100}>
            {sent ? (
              <div className="border-t border-border pt-10">
                <p className="display text-5xl">Thank you.</p>
                <p className="mt-4 text-muted-foreground">
                  Your message is ready in WhatsApp — just hit send. Didn't open?{" "}
                  <a className="link-line text-foreground" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">Open WhatsApp</a>.
                </p>
                <button className="eyebrow mt-8 link-line" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                <label className="sr-only" htmlFor="name">Name</label>
                <input id="name" name="name" required maxLength={100} placeholder="Name" className={field} />
                <label className="sr-only" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required maxLength={255} placeholder="Email" className={field} />
                <label className="sr-only" htmlFor="brand">Business / Brand</label>
                <input id="brand" name="brand" maxLength={100} placeholder="Business / Brand" className={field} />
                <label className="sr-only" htmlFor="need">What do you need?</label>
                <select id="need" name="need" defaultValue="" className={`${field} bg-card`}>
                  <option value="" disabled>What do you need?</option>
                  <option>Website</option>
                  <option>Landing page</option>
                  <option>E-commerce</option>
                  <option>SEO / Local SEO</option>
                  <option>Social media & content</option>
                  <option>Brand & identity</option>
                  <option>Something else</option>
                </select>
                <label className="sr-only" htmlFor="budget">Budget</label>
                <input id="budget" name="budget" maxLength={80} placeholder="Budget (optional)" className={`${field} sm:col-span-2`} />
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} maxLength={2000} placeholder="Message" className={`${field} resize-none sm:col-span-2`} />
                <button type="submit" className="eyebrow mt-8 flex items-center justify-between bg-primary px-6 py-6 text-primary-foreground sm:col-span-2">
                  Start a conversation <span className="arrow">→</span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
