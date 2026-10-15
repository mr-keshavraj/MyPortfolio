import SectionHeading from "@/components/SectionHeading";
import { about } from "@/data/profile";

const facts = [
  { label: "Focus", value: "Backend & APIs" },
  { label: "Primary language", value: "Go" },
  { label: "Based in", value: "Bengaluru, India" },
  { label: "Degree", value: "B.E. CSE, 2025" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 py-20 md:py-24">
      <div className="container grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div>
          <SectionHeading id="about-title" eyebrow="About" title="I build the part of the product users never see — and depend on." />
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <dl className="card-surface grid grid-cols-2 gap-px self-start overflow-hidden bg-border lg:grid-cols-1">
          {facts.map((f) => (
            <div key={f.label} className="bg-card p-5">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">{f.label}</dt>
              <dd className="mt-1.5 font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
