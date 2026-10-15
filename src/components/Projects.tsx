import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { featuredProjects, moreProjects, professionalWork, profile } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 border-t border-border py-20 md:py-24">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Selected work"
          description="Open-source backends I've designed end to end. Each card links to the code so you can judge the engineering directly."
        />

        <ul className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((p) => (
            <li key={p.name} className="card-surface group flex flex-col p-6 transition-colors hover:border-primary/40">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>
                <span className="chip shrink-0">{p.kind}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>

              <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">Problem</p>
              <p className="mt-1.5 text-sm leading-relaxed">{p.problem}</p>

              <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                What I built
              </p>
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                  {p.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-sm">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                    >
                      <Github className="h-4 w-4" aria-hidden /> Source code
                      <span className="sr-only"> for {p.name} (opens in a new tab)</span>
                    </a>
                  )}
                  {p.related && (
                    <a
                      href={p.related.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                    >
                      {p.related.label} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="card-surface p-6">
            <h3 className="font-semibold">Professional work</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Built for employers and clients, so the code is private. Summaries only.
            </p>
            <ul className="mt-5 space-y-4">
              {professionalWork.map((w) => (
                <li key={w.name}>
                  <p className="font-medium">
                    {w.name} <span className="font-normal text-muted-foreground">· {w.org}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.summary}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface p-6">
            <h3 className="font-semibold">More on GitHub</h3>
            <p className="mt-1 text-sm text-muted-foreground">Smaller APIs and earlier frontend work.</p>
            <ul className="mt-5 divide-y divide-border">
              {moreProjects.map((m) => (
                <li key={m.name}>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-3"
                  >
                    <span>
                      <span className="font-medium group-hover:text-primary">{m.name}</span>
                      <span className="block text-xs text-muted-foreground">{m.note}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`${profile.links.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              All repositories <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
