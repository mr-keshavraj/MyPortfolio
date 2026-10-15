import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { focusAreas, profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-8 pt-32 sm:pt-36 md:pb-12">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="min-w-0 animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Backend Developer at Evtaar Software Solution
          </p>

          <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="mt-3 block text-2xl font-medium text-muted-foreground sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
              {profile.headline}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View projects <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.resume} download="Keshav_Raj_Resume.pdf">
                <Download /> Download résumé
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">
                <Mail /> Contact me
              </a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden /> {profile.location}
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground">
                <Github className="h-4 w-4" aria-hidden /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground">
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Profile card: a code-flavoured summary instead of decorative art */}
        <div className="min-w-0 animate-rise [animation-delay:120ms]">
          <div className="card-surface overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40">
            <div className="flex items-center gap-4 border-b border-border p-5">
              <Image
                src={profile.photo}
                alt="Portrait of Keshav Raj"
                width={64}
                height={64}
                priority
                className="h-16 w-16 rounded-full border border-border bg-secondary object-cover"
              />
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.role} · Go</p>
              </div>
            </div>
            <pre
              aria-label="Profile summary written as a Go struct"
              className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-relaxed text-muted-foreground"
            >
              <code>
                <span className="text-primary">keshav</span> := Developer{"{"}
                {"\n"}  Role:     <span className="text-emerald-600 dark:text-emerald-400">&quot;Backend Developer&quot;</span>,
                {"\n"}  Location: <span className="text-emerald-600 dark:text-emerald-400">&quot;Bengaluru&quot;</span>,
                {"\n"}  Stack:    []string{"{"}
                {"\n"}    <span className="text-emerald-600 dark:text-emerald-400">&quot;Go&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;Fiber&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;MongoDB&quot;</span>,
                {"\n"}    <span className="text-emerald-600 dark:text-emerald-400">&quot;PostgreSQL&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;Redis&quot;</span>,
                {"\n"}    <span className="text-emerald-600 dark:text-emerald-400">&quot;Docker&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;AWS&quot;</span>,
                {"\n"}  {"}"},
                {"\n"}{"}"}
              </code>
            </pre>
            <ul className="flex flex-wrap gap-2 border-t border-border p-5">
              {focusAreas.map((f) => (
                <li key={f} className="chip">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
