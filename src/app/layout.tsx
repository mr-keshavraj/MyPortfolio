import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_URL, profile } from "@/data/profile";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Keshav Raj — Backend Developer (Go, APIs, Cloud)";
const description =
  "Keshav Raj is a backend developer in Bengaluru building REST APIs, authentication and RBAC, and data-driven services with Go, Fiber, MongoDB, PostgreSQL, Redis, Docker and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Keshav Raj",
  keywords: [
    "Keshav Raj",
    "Backend Developer",
    "Golang Developer",
    "Go Fiber",
    "REST API",
    "JWT",
    "RBAC",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "Next.js",
    "Bengaluru",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: "/",
    siteName: "Keshav Raj",
    title,
    description,
    firstName: "Keshav",
    lastName: "Raj",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Keshav Raj — Backend Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080d18" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

// Runs before paint so the stored theme never flashes. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: SITE_URL,
  image: `${SITE_URL}${profile.photo}`,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "Evtaar Software Solution Pvt. Ltd." },
  alumniOf: { "@type": "CollegeOrUniversity", name: "MVJ College of Engineering" },
  knowsAbout: ["Go", "REST APIs", "JWT", "RBAC", "MongoDB", "PostgreSQL", "Redis", "Docker", "AWS", "Next.js"],
  sameAs: [profile.links.github, profile.links.linkedin],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={cn("min-h-screen font-sans", sans.variable, mono.variable)}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
