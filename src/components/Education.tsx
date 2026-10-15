import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="scroll-mt-20 border-t border-border py-20 md:py-24">
      <div className="container">
        <SectionHeading id="education-title" eyebrow="Education" title="Education" />
        <ul className="grid gap-4 md:grid-cols-3">
          {education.map((e) => (
            <li key={e.degree} className="card-surface flex flex-col p-5">
              <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
              <h3 className="mt-4 font-semibold leading-snug">{e.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              <div className="mt-auto flex items-center justify-between pt-5 font-mono text-xs text-muted-foreground">
                <span>{e.period}</span>
                <span className="text-foreground">{e.score}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
