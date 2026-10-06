import { getProject, projects, CONTACT } from "@/lib/projects";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

function setDocumentMeta(title: string, description: string) {
 document.title = title;
 const meta = document.querySelector('meta[name="description"]');
 if (meta) meta.setAttribute("content", description);
}

export function ProjectPage({ slug }: { slug: string }) {
 const p = getProject(slug);
 if (!p) {
  setDocumentMeta("Project not found  Parv Sharma", "The requested project could not be found.");
  return (
   <>
    <Navbar />
    <main className="mx-auto flex min-h-[80svh] max-w-[1500px] flex-col justify-center px-5 pt-24 md:px-10">
     <p className="eyebrow text-muted-foreground">404</p>
     <h1 className="display mt-5 text-7xl uppercase md:text-9xl">Project not found.</h1>
     <a href="/#work" className="eyebrow mt-10 w-fit border-b border-hairline pb-2">← All work</a>
    </main>
    <Footer />
   </>
  );
 }

 setDocumentMeta(`${p.title}  Case Study | Parv Sharma`, p.description);
 const idx = projects.findIndex((x) => x.slug === p.slug);
 const next = projects[(idx + 1) % projects.length]!;

 return (
  <>
   <Navbar />
   <main className="mx-auto max-w-[1500px] px-5 pt-28 md:px-10 md:pt-40">
    <a href="/#work" className="eyebrow link-line text-muted-foreground">← All work</a>
    <header className="mt-10 grid gap-8 border-b border-border pb-12 md:grid-cols-12 md:items-end">
     <h1 className="display text-[17vw] uppercase md:col-span-9 md:text-[9vw]">
      <span className="line-rise"><span>{p.title}</span></span>
     </h1>
     <div className="eyebrow space-y-2 text-muted-foreground md:col-span-3 md:text-right">
      <p className="text-accent">{p.category}</p>
      <p>{p.sector}</p>
     </div>
    </header>

    <section className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
     <Reveal className="md:col-span-5">
      <p className="eyebrow text-muted-foreground">Project overview</p>
      <p className="display mt-6 text-3xl leading-tight md:text-4xl">{p.overview}</p>
     </Reveal>
     <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
      <div className="relative overflow-hidden bg-card py-12">
       <img src={p.image} alt="" aria-hidden className="absolute inset-0 h-full w-full scale-125 object-cover opacity-25 blur-2xl" />
       <img src={p.image} alt={`${p.title} website, full page preview`} width={709} height={1536} className="relative mx-auto w-[62%] shadow-2xl md:w-[55%]" />
      </div>
     </Reveal>
    </section>

    <section className="grid gap-px border-y border-border bg-border md:grid-cols-3">
     <Reveal className="bg-background py-10 md:p-10">
      <p className="eyebrow text-accent">The challenge</p>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.challenge}</p>
     </Reveal>
     <Reveal className="bg-background py-10 md:p-10" delay={100}>
      <p className="eyebrow text-accent">The approach</p>
      <ul className="mt-6 space-y-4 text-muted-foreground">
       {p.approach.map((a) => <li key={a} className="border-t border-border pt-4">{a}</li>)}
      </ul>
     </Reveal>
     <Reveal className="bg-background py-10 md:p-10" delay={200}>
      <p className="eyebrow text-accent">The result</p>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.result}</p>
     </Reveal>
    </section>

    <section className="py-20 md:py-28">
     <Reveal className="overflow-hidden">
      <div className="flex gap-4 md:gap-8">
       {[0, 1, 2].map((i) => (
        <div key={i} className={`relative aspect-[3/4] flex-1 overflow-hidden bg-card ${i === 1 ? "" : "hidden md:block"}`}>
         <img src={p.image} alt={i === 1 ? `${p.title} detail` : ""} aria-hidden={i !== 1} loading="lazy"
          className="h-full w-full object-cover" style={{ objectPosition: `center ${[10, 45, 85][i]}%` }} />
        </div>
       ))}
      </div>
     </Reveal>
    </section>

    <a href={`/work/${next.slug}`} className="group block border-t border-border py-16 md:py-24">
     <p className="eyebrow text-muted-foreground">Next project</p>
     <p className="display mt-6 flex items-baseline justify-between text-6xl uppercase md:text-9xl">
      {next.title} <span className="arrow text-4xl md:text-7xl">→</span>
     </p>
    </a>

    <div className="mb-20 flex flex-col gap-3 sm:flex-row">
     <a href="/#contact" className="eyebrow flex flex-1 items-center justify-between bg-primary px-6 py-5 text-primary-foreground">
      Start a project <span className="arrow">→</span>
     </a>
     <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="eyebrow flex flex-1 items-center justify-between border border-hairline px-6 py-5">
      WhatsApp <span className="arrow">→</span>
     </a>
    </div>
   </main>
   <Footer />
  </>
 );
}
