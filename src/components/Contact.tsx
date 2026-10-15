import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";

// NEXT_PUBLIC_* values are inlined at build time; without them the form is replaced by an email link.
const contactFormEnabled = Boolean(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
);

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "in/keshavraj18", href: profile.links.linkedin, icon: Linkedin, external: true },
  { label: "GitHub", value: "mr-keshavraj", href: profile.links.github, icon: Github, external: true },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-border py-20 md:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Let's talk"
            description="Hiring for a backend or full-stack role, or need help with an API? Email is the fastest way to reach me."
          />
          <ul className="space-y-3">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card-surface group flex items-center gap-4 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate font-medium group-hover:text-primary">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden /> {profile.location}
          </p>
        </div>

        <div className="lg:pt-[7.5rem]">
          {contactFormEnabled ? (
            <ContactForm />
          ) : (
            <div className="card-surface p-6 text-muted-foreground">
              Prefer email? Write to{" "}
              <a href={`mailto:${profile.email}`} className="link-underline text-foreground">
                {profile.email}
              </a>
              .
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
