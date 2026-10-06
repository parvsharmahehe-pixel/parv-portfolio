import type { Project } from "@/lib/projects";
import { Reveal } from "./Reveal";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal as="article" className="border-t border-border py-14 md:py-24">
      <a href={`/work/${project.slug}`}
        className="group grid items-center gap-10 md:grid-cols-12 md:gap-8"
      >
        <div className={`relative md:col-span-7 ${flip ? "md:order-2" : ""}`}>
          <div className="relative aspect-[4/5] overflow-hidden bg-card md:aspect-[5/4]">
            <img
              src={project.image}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-125 object-cover opacity-30 blur-2xl"
            />
            <img
              src={project.image}
              alt={`${project.title} website preview`}
              loading="lazy"
              decoding="async"
              width={709}
              height={1536}
              className="absolute left-1/2 top-[8%] w-[52%] -translate-x-1/2 shadow-2xl transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-translate-y-6 group-hover:scale-[1.03] md:w-[34%]"
            />
          </div>
          <span className="display pointer-events-none absolute -top-8 left-2 text-[5rem] text-foreground/10 md:-top-14 md:text-[9rem]">
            0{index + 1}
          </span>
        </div>
        <div className={`md:col-span-5 ${flip ? "md:order-1 md:pr-10" : "md:pl-10"}`}>
          <p className="eyebrow text-accent">{project.category}</p>
          <h3 className="display mt-5 text-5xl md:text-7xl">{project.title}</h3>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{project.description}</p>
          <span className="eyebrow mt-10 inline-flex items-center gap-3 border-b border-hairline pb-2">
            View project <span className="arrow">→</span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}
