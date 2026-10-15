import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/profile";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-20 border-t border-border py-20 md:py-24">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I've worked"
          description="Backend-focused roles building HR, payments and marketplace systems in Go."
        />

        <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden
                className={cn(
                  "absolute -left-[calc(1.5rem+5px)] top-6 h-2.5 w-2.5 rounded-full border-2 sm:-left-[calc(2rem+5px)]",
                  job.current ? "border-primary bg-primary" : "border-border bg-background",
                )}
              />
              <article className="card-surface p-5 transition-colors hover:border-primary/40 sm:p-6">
                <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-muted-foreground">
                    {job.current && (
                      <span className="mr-2 rounded bg-primary/15 px-1.5 py-0.5 text-primary">Current</span>
                    )}
                    {job.period}
                  </p>
                </header>
                {job.points.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {job.stack.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {job.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
