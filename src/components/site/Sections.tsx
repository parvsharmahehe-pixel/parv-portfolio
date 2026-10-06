import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

const wrap = "mx-auto max-w-[1500px] px-5 md:px-10";

export function Hero() {
 return (
  <section id="top" className={`${wrap} flex min-h-[100svh] flex-col justify-end pb-12 pt-28 md:pb-16`}>
   <div className="eyebrow mb-10 flex justify-between text-muted-foreground md:mb-14">
    <span>Independent digital studio</span>
    <span className="text-right">Delhi / India  Available worldwide</span>
   </div>
   <h1 className="display text-[15vw] uppercase md:text-[9.5vw]">
    <span className="line-rise"><span>I build digital</span></span>
    <span className="line-rise"><span style={{ animationDelay: "120ms" }}>experiences</span></span>
    <span className="line-rise"><span style={{ animationDelay: "240ms" }}><em className="text-accent">worth</em> talking</span></span>
    <span className="line-rise"><span style={{ animationDelay: "360ms" }}>about.</span></span>
   </h1>
   <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-12 md:items-end">
    <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:col-span-6">
     Websites, content and digital experiences for businesses and brands that want to stand out.
    </p>
    <div className="flex flex-col gap-3 sm:flex-row md:col-span-6 md:justify-end">
     <a href="/#work" className="eyebrow flex items-center justify-between gap-6 bg-primary px-6 py-5 text-primary-foreground">View selected work <span className="arrow">→</span></a>
     <a href="/#contact" className="eyebrow flex items-center justify-between gap-6 border border-hairline px-6 py-5 transition-colors hover:bg-secondary">Let's work together <span className="arrow">→</span></a>
    </div>
   </div>
  </section>
 );
}

function SectionHead({ n, title, children }: { n: string; title: string; children?: React.ReactNode }) {
 return (
  <Reveal className="grid gap-6 pb-12 md:grid-cols-12 md:pb-16">
   <p className="eyebrow text-muted-foreground md:col-span-3">({n})</p>
   <div className="md:col-span-9">
    <h2 className="display text-6xl uppercase md:text-8xl">{title}</h2>
    {children && <p className="mt-6 max-w-xl text-lg text-muted-foreground">{children}</p>}
   </div>
  </Reveal>
 );
}

export function ProjectSection() {
 return (
  <section id="work" className={`${wrap} scroll-mt-20 py-24 md:py-36`}>
   <SectionHead n="01" title="Selected work">
    A selection of digital experiences I've designed and developed for businesses and brands.
   </SectionHead>
   {projects.map((p, i) => (
    <ProjectCard key={p.slug} project={p} index={i} />
   ))}
  </section>
 );
}

export function VinceCo() {
 return (
  <section className="overflow-hidden border-y border-border bg-card py-24 md:py-36">
   <div className={wrap}>
    <Reveal className="flex flex-wrap items-center justify-between gap-4">
     <p className="eyebrow text-accent">Coming soon / Soft launch</p>
     <p className="eyebrow text-muted-foreground">Branding & digital experience  in development</p>
    </Reveal>
   </div>
   <div className="my-14 flex whitespace-nowrap md:my-20" aria-hidden>
    <div className="marquee flex shrink-0">
     {Array.from({ length: 6 }).map((_, i) => (
      <span key={i} className="display px-8 text-[22vw] md:text-[14vw]">
       Vince <em className="text-accent">&</em> Co. <span className="text-foreground/20"> </span>
      </span>
     ))}
    </div>
   </div>
   <div className={`${wrap} grid gap-6 md:grid-cols-12`}>
    <h2 className="sr-only">Vince & Co.</h2>
    <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
     A branding and digital experience project currently in development  identity, visual system and website, crafted together from the ground up. More soon.
    </p>
   </div>
  </section>
 );
}

const services = [
 ["Web design & development", "Modern websites designed around brand, usability and conversion."],
 ["Landing pages", "Focused landing pages built to communicate an offer clearly and drive action."],
 ["E-commerce", "Online stores designed around product presentation and conversion."],
 ["SEO & Local SEO", "Technical and on-page foundations that help businesses become easier to discover."],
 ["Social media", "Content strategy, posting and digital presence management."],
 ["Content production", "Short-form content, reels and visual content designed for social platforms."],
 ["Brand & visual identity", "Digital-first visual systems that create a consistent and recognizable presence."],
 ["Website maintenance & optimisation", "Ongoing improvements, updates, fixes and performance optimisation."],
];

export function ServiceList() {
 return (
  <section id="services" className={`${wrap} scroll-mt-20 py-24 md:py-36`}>
   <SectionHead n="02" title="What I do" />
   <ul>
    {services.map(([t, d], i) => (
     <Reveal as="li" key={t} className="group grid gap-3 border-t border-border py-7 transition-colors hover:bg-card md:grid-cols-12 md:items-baseline md:px-4 md:py-9">
      <span className="eyebrow text-muted-foreground md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
      <h3 className="display text-3xl uppercase transition-transform duration-500 group-hover:translate-x-2 md:col-span-6 md:text-5xl">{t}</h3>
      <p className="text-muted-foreground md:col-span-5">{d}</p>
     </Reveal>
    ))}
   </ul>
  </section>
 );
}

export function WhyMe() {
 const p = [
  ["Design with intent", "Every visual decision should have a reason."],
  ["Built around the brand", "Your website should feel like your business  not a template."],
  ["Made to perform", "Fast, responsive and structured around the actions that matter."],
 ];
 return (
  <section className="bg-paper py-24 text-paper-foreground md:py-36">
   <div className={wrap}>
    <Reveal>
     <h2 className="display text-6xl uppercase md:text-[8vw]">Not just another website.</h2>
    </Reveal>
    <div className="mt-14 grid gap-10 md:grid-cols-12">
     <Reveal className="space-y-5 text-lg leading-relaxed md:col-span-5 md:col-start-8">
      <p className="display text-3xl">A website should do more than exist.</p>
      <p className="opacity-75">It should communicate what you do, make your brand feel credible and give people a reason to choose you.</p>
      <p className="opacity-75">I combine design, development and digital thinking to create experiences that look good and actually serve a purpose.</p>
     </Reveal>
    </div>
    <div className="mt-20 grid border-t border-paper-foreground/20 md:grid-cols-3">
     {p.map(([t, d], i) => (
      <Reveal key={t} delay={i * 100} className="border-b border-paper-foreground/20 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
       <p className="eyebrow opacity-60">0{i + 1}</p>
       <h3 className="display mt-6 text-4xl uppercase">{t}</h3>
       <p className="mt-4 opacity-75">{d}</p>
      </Reveal>
     ))}
    </div>
   </div>
  </section>
 );
}

export function Process() {
 const steps = [
  ["Discover", "Understand the business, audience, goals and brand."],
  ["Direction", "Establish the visual direction, structure and experience."],
  ["Design", "Create the interface and visual system."],
  ["Develop", "Build the experience with responsive, production-quality code."],
  ["Launch", "Test, optimise and launch."],
 ];
 return (
  <section className={`${wrap} py-24 md:py-36`}>
   <SectionHead n="03" title="From idea to launch." />
   <ol className="grid gap-px bg-border md:grid-cols-5">
    {steps.map(([t, d], i) => (
     <Reveal as="li" key={t} delay={i * 80} className="bg-background py-8 md:px-6 md:py-10">
      <span className="display text-6xl text-accent">0{i + 1}</span>
      <h3 className="eyebrow mt-8">{t}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
     </Reveal>
    ))}
   </ol>
  </section>
 );
}

export function Startups() {
 return (
  <section className="border-y border-border">
   <div className={`${wrap} grid gap-12 py-24 md:grid-cols-12 md:py-36`}>
    <Reveal className="md:col-span-7">
     <p className="eyebrow text-accent">For startups & new businesses</p>
     <h2 className="display mt-6 text-6xl uppercase md:text-8xl">Build something people remember.</h2>
    </Reveal>
    <Reveal className="flex flex-col justify-end md:col-span-4 md:col-start-9" delay={150}>
     <p className="display text-3xl">Launching something new?</p>
     <p className="mt-3 text-lg text-muted-foreground">Your first digital impression matters.</p>
     <p className="mt-6 leading-relaxed text-muted-foreground">
      I help startups and growing businesses turn ideas into polished digital experiences  from landing pages and launch sites to complete brand websites.
     </p>
     <a href="/#contact" className="eyebrow mt-10 flex items-center justify-between bg-primary px-6 py-5 text-primary-foreground">Start a project <span className="arrow">→</span></a>
    </Reveal>
   </div>
  </section>
 );
}

export function About() {
 return (
  <section id="about" className={`${wrap} scroll-mt-20 py-24 md:py-36`}>
   <SectionHead n="04" title="A little about me." />
   <div className="grid gap-10 md:grid-cols-12">
    <Reveal className="md:col-span-6 md:col-start-4">
     <p className="display text-3xl leading-tight md:text-5xl">
      I'm Parv Sharma, an independent designer and developer based in Delhi, India.
     </p>
    </Reveal>
    <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-4" delay={100}>
     <p>
      I work across web design, development, content and digital experiences  helping businesses turn ideas into a digital presence that feels considered, credible and distinctly their own.
     </p>
     <p>My approach sits somewhere between design, technology and storytelling.</p>
     <p className="text-foreground">The goal is simple: <em className="display text-3xl text-accent">make something people remember.</em></p>
    </Reveal>
   </div>
  </section>
 );
}
