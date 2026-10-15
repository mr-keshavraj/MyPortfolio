"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { profile } from "@/data/profile";

const MAX_MESSAGE = 1000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// EmailJS keys are public by design (they ship to the browser). Restrict the
// allowed origins in the EmailJS dashboard so they only work from this site.
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };
type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Errors>({});
  const [messageLength, setMessageLength] = useState(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never see or fill this field.
    if (String(data.get("company") ?? "").trim()) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (!message) next.message = "Please enter a message.";
    else if (message.length > MAX_MESSAGE) next.message = `Please keep it under ${MAX_MESSAGE} characters.`;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ kind: "error", message: `The form is unavailable right now. Please email ${profile.email}.` });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          user_email: email,
          user_name: name,
          to_name: profile.name,
          message,
        },
        { publicKey },
      );
      form.reset();
      setMessageLength(0);
      setStatus({ kind: "sent" });
    } catch {
      setStatus({
        kind: "error",
        message: `Your message couldn't be sent. Please try again, or email ${profile.email}.`,
      });
    }
  }

  const fieldClass = "mt-1.5 bg-background";

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface relative flex flex-col gap-5 p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="cf-name"
            name="name"
            autoComplete="name"
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id="cf-name-error" className="mt-1.5 text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={200}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            className={fieldClass}
          />
          {errors.email && (
            <p id="cf-email-error" className="mt-1.5 text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor="cf-message" className="text-sm font-medium">
            Message
          </label>
          <span className="font-mono text-xs text-muted-foreground">
            {messageLength}/{MAX_MESSAGE}
          </span>
        </div>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          maxLength={MAX_MESSAGE}
          onChange={(e) => setMessageLength(e.target.value.length)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          className="mt-1.5 w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {errors.message && (
          <p id="cf-message-error" className="mt-1.5 text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot, hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p role="status" aria-live="polite" className="text-sm">
          {status.kind === "sent" && (
            <span className="text-emerald-600 dark:text-emerald-400">Thanks, your message was sent. I'll reply by email.</span>
          )}
          {status.kind === "error" && <span className="text-destructive">{status.message}</span>}
        </p>
        <Button type="submit" disabled={status.kind === "sending"} className="sm:w-auto">
          {status.kind === "sending" ? <Loader2 className="animate-spin" /> : <Send />}
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
