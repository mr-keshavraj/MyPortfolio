# Keshav Raj — Portfolio

Personal site for Keshav Raj, backend developer (Go, REST APIs, auth & RBAC, cloud).

Live: https://keshavraj-dev.vercel.app

## Stack

- Next.js 15 (App Router, static export to `out/`)
- TypeScript, Tailwind CSS 3, shadcn/ui primitives (Radix Dialog for the mobile menu)
- EmailJS for the optional contact form
- Deployed on Vercel

Sections render as server components; only the header, theme toggle and contact form ship client JavaScript.

## Content

All text (experience, projects, skills, education, links) lives in [`src/data/profile.ts`](src/data/profile.ts). Edit that file. The components only handle layout.

The résumé download serves `public/Keshav_resume.pdf`. Replace that file to update it.

## Local development

```bash
npm ci
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

Checks:

```bash
npm run lint
npx tsc --noEmit
npm run build                # static export in out/
```

## Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and robots. Defaults to `https://keshavraj-dev.vercel.app`. |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

The EmailJS values are public client keys (they ship to the browser). Restrict allowed origins in the EmailJS dashboard. If any of the three is missing at build time, the form is replaced by an email link.

`.env.local` is git-ignored. Never commit real values.

## Deployment (Vercel)

`vercel.json` pins `npm ci` / `npm run build` and adds basic security headers. Set the environment variables above in the Vercel project (Production and Preview), then:

```bash
npx vercel           # preview
npx vercel --prod    # production
```

If you move to a custom domain, set `NEXT_PUBLIC_SITE_URL` to it and redeploy so canonical links and the sitemap update.
