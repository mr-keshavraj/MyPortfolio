// Single source of truth for portfolio content.
// Everything here is sourced from the résumé in /public, the GitHub profile, and the
// public repositories it links to. Do not add metrics or claims that cannot be verified.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://keshavraj-dev.vercel.app"
).replace(/\/$/, "");

export const profile = {
  name: "Keshav Raj",
  role: "Backend Developer",
  headline: "Backend engineer building reliable APIs in Go.",
  summary:
    "I design and build backend systems in Go: REST APIs, authentication and role-based access control, data models, and the services around them. I also work across the stack with Next.js when a product needs it.",
  location: "Bengaluru, India",
  email: "contacttokeshavraj@gmail.com",
  phone: "+91 91624 06872",
  phoneHref: "tel:+919162406872",
  resume: "/Keshav_resume.pdf",
  photo: "/keshav-raj.png",
  links: {
    github: "https://github.com/mr-keshavraj",
    linkedin: "https://www.linkedin.com/in/keshavraj18/",
  },
};

export const about = [
  "I'm a backend developer at Evtaar Software Solution, based in Bengaluru. Most of my work lives behind the API: designing endpoints, modelling data, wiring up authentication and permissions, and making sure services behave predictably when things go wrong.",
  "Before Evtaar I built HRMS platforms and marketplace backends in Go (Fiber) with MongoDB at QuantiqueMinds and Kenshi Labs: JWT and OTP authentication, multi-level RBAC, payment-gateway webhooks, WebSocket chat, and Dockerised deployments on AWS.",
  "I care about clear boundaries between layers, boring and observable deployments, and APIs that are easy for frontend teams to consume.",
];

export const focusAreas = [
  "REST API design",
  "Auth, JWT & RBAC",
  "Data modelling",
  "Real-time services",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Evtaar Software Solution Pvt. Ltd.",
    role: "Backend Developer",
    period: "Present",
    location: "Bengaluru",
    current: true,
    points: [],
    stack: [],
  },
  {
    company: "QuantiqueMinds Pvt. Ltd.",
    role: "Associate Full Stack Engineer",
    period: "Sep 2025",
    points: [
      "Developed HRMS applications with a Go (Fiber) backend and a Next.js / React frontend.",
      "Designed REST APIs secured with JWT authentication and role-based access control across multiple user hierarchies.",
      "Built HR modules for employee management, attendance tracking, leave management and payroll processing.",
      "Worked on MongoDB aggregation pipelines and indexes, and shipped services as Docker containers on AWS EC2.",
    ],
    stack: ["Go", "Fiber", "Next.js", "MongoDB", "JWT", "Docker", "AWS EC2"],
  },
  {
    company: "Kenshi Labs Consultancy Pvt. Ltd.",
    role: "Associate Backend Engineer",
    period: "Nov 2024 – Aug 2025",
    points: [
      "Built backend services in Go (Fiber) paired with Next.js frontends.",
      "Developed payroll & compensation and reports & analytics modules for an HRMS platform.",
      "Integrated the Razorpay payment gateway, including webhook handling for payment reconciliation.",
      "Built buyer–seller marketplace APIs with filtering, search and pagination, plus JWT and email-OTP authentication.",
      "Implemented WebSocket-based chat with message persistence and online-status tracking.",
    ],
    stack: ["Go", "Fiber", "MongoDB", "WebSocket", "Razorpay", "Docker", "AWS"],
  },
  {
    company: "Briefiy Media Pvt. Ltd.",
    role: "Web Development Intern",
    period: "Oct 2023 – Nov 2023",
    points: [
      "Built responsive, accessible web pages with HTML5 and CSS3, working alongside senior developers and designers.",
    ],
    stack: ["HTML5", "CSS3"],
  },
];

export type Project = {
  name: string;
  summary: string;
  problem: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  related?: { label: string; href: string };
  kind: "Personal" | "Assignment" | "Professional";
};

export const featuredProjects: Project[] = [
  {
    name: "Finance Dashboard Backend",
    kind: "Assignment",
    summary: "Finance records API with role-based access control and dashboard analytics.",
    problem:
      "A finance dashboard needs per-role access to financial records and aggregated views without leaking data across roles.",
    highlights: [
      "Layered cmd / router / controller / repository structure",
      "JWT auth middleware plus a separate role middleware for RBAC",
      "MongoDB aggregation pipelines power the dashboard analytics",
    ],
    stack: ["Go", "Fiber", "MongoDB", "JWT"],
    repo: "https://github.com/mr-keshavraj/finance-dashboard-backend",
  },
  {
    name: "Rate-Limited API Service",
    kind: "Assignment",
    summary: "Per-user rate limiting with a stats endpoint and swappable storage.",
    problem:
      "Enforce request limits per client under concurrent load, and report accepted, rejected and queued requests.",
    highlights: [
      "Storage behind an interface with in-memory and Redis implementations",
      "Mutex-guarded state and a job queue for deferred requests",
      "POST /request and GET /stats, configured through environment variables",
    ],
    stack: ["Go", "Fiber", "Redis"],
    repo: "https://github.com/mr-keshavraj/rate-limited",
  },
  {
    name: "Multiplayer Tic-Tac-Toe on Nakama",
    kind: "Personal",
    summary: "Server-authoritative real-time game backend with a Next.js client.",
    problem:
      "Keep two players in sync in real time while preventing the client from cheating on moves or results.",
    highlights: [
      "Go match handler registered with Nakama; the server owns all game state",
      "create_match RPC and dispatcher-based state broadcast",
      "Win/draw detection on the server, containerised with Docker Compose",
    ],
    stack: ["Go", "Nakama", "Docker", "Next.js"],
    repo: "https://github.com/mr-keshavraj/tic-tac-toe-nakama",
    related: {
      label: "Frontend",
      href: "https://github.com/mr-keshavraj/tic-tac-toe-frontend",
    },
  },
  {
    name: "Tunnel Relay",
    kind: "Personal",
    summary: "WebSocket relay service with keep-alive pings and clean layering.",
    problem: "Relay messages between connected clients over long-lived WebSocket connections that stay healthy.",
    highlights: [
      "Separate api, router and websocket packages",
      "Configurable ping interval (PING_INTERVAL, default 30s) for keep-alive",
      "Environment-driven configuration with godotenv",
    ],
    stack: ["Go", "Fiber", "WebSocket"],
    repo: "https://github.com/mr-keshavraj/tunnel-relay",
  },
  {
    name: "Smart Email Service",
    kind: "Personal",
    summary: "Resilient email-sending API built around reliability patterns.",
    problem: "Email providers fail and time out; the service should degrade gracefully and never double-send.",
    highlights: [
      "Retries with exponential backoff and fallback to a secondary provider",
      "Circuit breaker, idempotency keys and per-sender rate limiting",
      "Status tracking per request, with unit tests against mock providers",
    ],
    stack: ["Node.js", "Express", "Jest"],
    repo: "https://github.com/mr-keshavraj/SmartEmailService",
  },
];

export const professionalWork = [
  {
    name: "Enterprise HRMS platform",
    org: "QuantiqueMinds",
    summary:
      "Go (Fiber) + Next.js HR system covering employees, attendance, leave and payroll, with JWT auth and multi-level RBAC.",
  },
  {
    name: "B2B marketplace backend",
    org: "Kenshi Labs · client project",
    summary:
      "Go (Fiber) + MongoDB marketplace APIs: search, filtering and pagination, email-OTP auth, and WebSocket chat.",
  },
];

export const moreProjects = [
  {
    name: "Fruit Slot API",
    note: "Go · Fiber · crypto/rand · unit tests",
    href: "https://github.com/mr-keshavraj/fruit-slot-api",
  },
  {
    name: "BrightMind school site",
    note: "React · TypeScript · Vite",
    href: "https://github.com/mr-keshavraj/BrightMind-fe",
  },
  {
    name: "E-commerce storefront",
    note: "React · live demo",
    href: "https://shopifyecommercewebsite.web.app/",
  },
  {
    name: "Fresh Coffee in the Morning",
    note: "HTML · CSS · JavaScript · live demo",
    href: "https://fresh-coffee-in-the-morning.web.app/",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["Go", "Fiber", "Gin", "REST APIs", "JWT", "RBAC", "WebSockets", "Node.js", "Nakama"] },
  { group: "Databases", items: ["MongoDB", "PostgreSQL", "Redis", "MySQL"] },
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { group: "Cloud & DevOps", items: ["Docker", "AWS (EC2, S3)", "CI/CD", "Linux", "Vercel", "Netlify"] },
  { group: "Tools & practices", items: ["Git & GitHub", "Postman", "API documentation", "Payment webhooks (Razorpay)"] },
  { group: "Languages", items: ["Go", "TypeScript", "JavaScript", "C / C++", "SQL"] },
];

export const education = [
  {
    degree: "B.E., Computer Science and Engineering",
    school: "MVJ College of Engineering, Bengaluru",
    period: "2021 – 2025",
    score: "CGPA 8.50 / 10",
  },
  {
    degree: "Senior Secondary (XII), Science",
    school: "Viswasanthi EM High School, Andhra Pradesh",
    period: "2019 – 2021",
    score: "95%",
  },
  {
    degree: "Secondary (X), CBSE",
    school: "Sainik School Nagrota, Jammu & Kashmir",
    period: "2018",
    score: "80.2%",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
