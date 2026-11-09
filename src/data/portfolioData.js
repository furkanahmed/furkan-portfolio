export const personalInfo = {
  name: "Furkan Ahmed",
  role: "Full-Stack Developer & IT Instructor",
  tagline: "I build practical web applications and teach programming to people who want to become developers.",
  bio: [
    "I am a web developer and instructor based in Bhaluka, Mymensingh. Most of my days are spent writing code with React, Next.js, and Laravel, or in the classroom helping students write their first programs.",
    "At Dremoy IT, I build client websites, manage web platforms, and configure our VPS servers. I genuinely love both sides of my work: solving technical challenges in code, and breaking down complex concepts so beginners can learn with confidence."
  ],
  location: "Bhaluka, Mymensingh, Bangladesh",
  phone: "+880 1622-536026",
  whatsapp: "https://wa.me/8801622536026",
  email: "furkanbitm@gmail.com",
  agencyEmail: "dremoyit@gmail.com",
  website: "https://dremoy.com",
  github: "https://github.com/furkanahmed",
  linkedin: "https://www.linkedin.com/in/furkanahmedbd",
  facebook: "https://fb.com/dremoyit",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/images/furkanahmed.webp"
};

export const skillsData = {
  frontend: [
    { name: "JavaScript (ES6+)", level: "Advanced", icon: "js" },
    { name: "React.js", level: "Advanced", icon: "react" },
    { name: "Next.js (App Router)", level: "Proficient", icon: "next" },
    { name: "Tailwind CSS", level: "Expert", icon: "tailwind" },
    { name: "HTML5 & CSS3", level: "Expert", icon: "html" }
  ],
  backend: [
    { name: "Node.js", level: "Proficient", icon: "node" },
    { name: "Express.js", level: "Proficient", icon: "express" },
    { name: "Next.js Server Actions", level: "Proficient", icon: "server" },
    { name: "RESTful APIs", level: "Proficient", icon: "api" },
    { name: "BetterAuth / Firebase", level: "Familiar", icon: "auth" }
  ],
  database: [
    { name: "MongoDB", level: "Proficient", icon: "mongodb" },
    { name: "PostgreSQL", level: "Proficient", icon: "postgres" },
    { name: "Supabase", level: "Proficient", icon: "supabase" }
  ],
  tools: [
    { name: "Git & GitHub", level: "Proficient", icon: "git" },
    { name: "Vercel / Netlify", level: "Expert", icon: "vercel" },
    { name: "Postman", level: "Proficient", icon: "postman" },
    { name: "VS Code", level: "Expert", icon: "vscode" }
  ]
};

// Experience data is maintained in src/data/experienceData.js
// Education data is maintained in src/data/educationData.js
export { experienceData } from "./experienceData";
export { educationData } from "./educationData";

export const projectsData = [
  {
    id: "bazardor",
    name: "BazarDor",
    tagline: "Bangladesh Daily Commodity Price Tracker",
    status: "Completed / Live",
    badgeColor: "emerald",
    image: "/images/BazarDor Smart Shopping.png",
    description: "Daily commodity price tracker across wholesale and retail markets in Bangladesh with Bengali numerals sorting and dynamic tracking.",
    detailedDescription: "BazarDor is a specialized pricing intelligence platform tailored for consumers and traders in Bangladesh. It aggregates daily retail and wholesale prices of vegetables, grains, poultry, and kitchen essentials. The interface supports native Bengali numerals, responsive table sorting, and category filters.",
    techStack: ["Next.js", "Tailwind CSS", "BetterAuth", "Lucide React"],
    liveLink: "https://live-bazardor.netlify.app/",
    githubLink: "https://github.com/furkanahmed/bazardor",
    isPrivate: false,
    challenges: "Handling accurate localization and dynamic sorting with Bengali numerals (১, ২, ৩...) while keeping high performance across mobile devices.",
    futureImprovements: "Automated daily web scraping for major regional wholesale markets, price fluctuation SMS alerts, and visual price trend charts."
  },
  {
    id: "devstack-builder",
    name: "DevStack Builder",
    tagline: "Interactive Tech Stack Assembly & Explorer",
    status: "Completed / Live",
    badgeColor: "emerald",
    image: "/images/banner-stack.png",
    description: "Interactive tech stack explorer to compare, select, and assemble software development stacks with duplicate prevention and live sidebar.",
    detailedDescription: "DevStack Builder enables engineers and beginners to visually select frontend frameworks, backend runtimes, styling libraries, and databases to build their project architecture. Features dynamic real-time budget calculation, dependency warnings, and one-click stack export.",
    techStack: ["React 18", "Vite", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://devstack-live.netlify.app/",
    githubLink: "https://github.com/furkanahmed/B14-A05-DevStack",
    isPrivate: false,
    challenges: "Synchronizing dynamic stack selections across nested category cards with stateful duplicate validation and instant visual updates.",
    futureImprovements: "Community stack voting, instant starter-kit repository generator, and Dockerfile auto-scaffolding."
  },
  {
    id: "fitlog",
    name: "FitLog",
    tagline: "Workout Library & Daily Fitness Planner",
    status: "Completed / Live",
    badgeColor: "emerald",
    image: "/images/fitlog-banner.png",
    description: "Dark-themed workout library and daily exercise planner featuring interactive metrics, calorie tracking, and customized workout plans.",
    detailedDescription: "FitLog is a modern fitness tracking application crafted with a sleek dark aesthetic. Users can browse exercise databases, filter by muscle groups, log daily workout routines, monitor calorie burns, and track progress over time.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Context API"],
    liveLink: "https://fitlog-b14-a6.vercel.app/",
    githubLink: "https://github.com/furkanahmed/afit",
    isPrivate: false,
    challenges: "Designing intuitive client-side workout log state persistence with instant calorie calculations and fluid UI animations on mobile.",
    futureImprovements: "Integration with wearable device APIs, progressive rest-timer audio cues, and workout history export."
  },
  {
    id: "dremoy-income-manager",
    name: "Dremoy Income Manager",
    tagline: "Business Ledger & Financial Cashflow System",
    status: "In Progress / Live Beta",
    badgeColor: "amber",
    image: "/images/appdremoy.jpg",
    description: "Practical business accounting tool for tracking cash flow, customer dues, expenses, tuition fees, and financial audit logs.",
    detailedDescription: "Dremoy Income Manager is an operational accounting and cashflow management SaaS built for service agencies and educational academies. It provides granular tracking of tuition dues, invoice generations, categorized expenses, and immutable audit logs.",
    techStack: ["React", "Vite", "Supabase", "Tailwind CSS", "PostgreSQL"],
    liveLink: "https://app.dremoy.com/",
    githubLink: "",
    isPrivate: true,
    challenges: "Enforcing strict transactional consistency and role-based permissions (admin vs cashier) across asynchronous financial entries.",
    futureImprovements: "Automated bKash / Nagad payment reconciliation, automated SMS invoice receipts, and multi-currency reporting."
  },
  {
    id: "dremoy-school-erp",
    name: "Dremoy School ERP",
    tagline: "Multi-Tenant Educational Management System",
    status: "In Progress",
    badgeColor: "amber",
    image: "/images/school_management_real.webp",
    description: "Multi-tenant educational management system built to organize students, teachers, classes, academic fees, and schedules.",
    detailedDescription: "Dremoy School ERP is an enterprise management platform designed to automate administrative and academic workflows for schools and madrasahs in Bangladesh. Features student enrollment, gradebook generation, attendance logging, and salary disbursement.",
    techStack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],
    liveLink: "https://school.dremoy.com/",
    githubLink: "",
    isPrivate: true,
    challenges: "Structuring a robust database schema supporting flexible grading policies, multi-section schedules, and high concurrency fee collections.",
    futureImprovements: "Guardian mobile portal, RFID attendance gate integration, and automated annual report card generation."
  },
  {
    id: "dremoy-com",
    name: "Dremoy.com",
    tagline: "Digital Agency & IT Training Portal",
    status: "Live Production",
    badgeColor: "emerald",
    image: "/images/dremoy.webp",
    description: "Official agency and training platform portal showcasing digital services, IT courses, student portal, and agency operations.",
    detailedDescription: "The flagship digital hub for Dremoy IT. Provides interactive course registration, syllabus previews, digital marketing showcase, student profile verification, and agency service inquiries.",
    techStack: ["Next.js 15", "React", "Tailwind CSS", "MongoDB"],
    liveLink: "https://dremoy.com/",
    githubLink: "",
    isPrivate: true,
    challenges: "Achieving sub-second initial page load times and comprehensive search engine optimization (SEO) across dynamic course routes.",
    futureImprovements: "Automated certificate verification system with QR code validation and interactive student LMS dashboard."
  }
];

