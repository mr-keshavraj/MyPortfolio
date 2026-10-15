import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 border-t border-border py-20 md:py-24">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Technical toolkit"
          description="Tools I've used in production work or in the projects above."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="card-surface p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{s.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li key={item} className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
