// Mock data for the developer CV example. Replace with the client's details.
const DATA = {
  name: "Aram Sargsyan",
  handle: "aram",
  title: "Software Engineer",
  photo: "images/developer/aram.jpg",
  typedLines: ["const role = 'Full-stack Engineer';", "while (alive) { code(); coffee(); }", "git commit -m 'make it awesome'"],
  intro: "Full-stack engineer from Yerevan. I build fast, friendly web apps with React and Node, and I care about clean code and happy users.",

  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/",
  },

  // Shown when someone types "about", "skills" or "contact" in the terminal
  about: ["Aram Sargsyan, 29, Yerevan 🇦🇲", "Full-stack engineer · 6 years of experience", "Loves: clean code, hiking, chess, khorovats"],
  skills: [
    { group: "frontend", items: "TypeScript, React, Next.js, CSS" },
    { group: "backend", items: "Node.js, PostgreSQL, Redis, GraphQL" },
    { group: "devops", items: "Docker, AWS, CI/CD" },
  ],
  contacts: [
    { label: "linkedin", value: "/in/aram-example" },
    { label: "telegram", value: "@aram_example" },
    { label: "github", value: "/aram-example" },
  ],

  stack: [
    { name: "TypeScript", color: "#3178C6" },
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#ffffff" },
    { name: "Node.js", color: "#3FB950" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Redis", color: "#DC382D" },
    { name: "Docker", color: "#2496ED" },
    { name: "AWS", color: "#FF9900" },
    { name: "GraphQL", color: "#E535AB" },
    { name: "Git", color: "#F05032" },
  ],

  projects: [
    { name: "city-transit", short: "real-time bus tracker", text: "Real-time bus tracker with live arrival times and a tiny offline-first PWA.", lang: "TypeScript", color: "#3178C6", stars: 248 },
    { name: "dram-converter", short: "telegram bot, 5k users", text: "Currency converter bot for Telegram, used by 5k+ people every month.", lang: "Node.js", color: "#3FB950", stars: 131 },
    { name: "hy-spellcheck", short: "armenian spellchecker", text: "Open-source Armenian spellchecker plugin for code editors and the browser.", lang: "JavaScript", color: "#F1E05A", stars: 412 },
    { name: "shop-dashboard", short: "analytics for small stores", text: "Analytics dashboard for small online stores — orders, stock and revenue in one place.", lang: "React", color: "#61DAFB", stars: 87 },
  ],

  experience: [
    { years: "2023 — present", title: "Senior Full-stack Engineer · CloudTech", text: "Lead a team of 4, rebuilt the checkout flow (+18% conversion), moved services to Docker and AWS." },
    { years: "2020 — 2023", title: "Frontend Developer · PixelForge", text: "Built editor features used by millions, designed the internal React component library." },
    { years: "2019 — 2020", title: "Junior Developer · Web Agency", text: "Websites and online stores for 30+ local businesses." },
    { years: "2015 — 2019", title: "BSc Computer Science · State University", text: "Graduated with honours, programming contest regional finalist." },
  ],

  contactText: "Open to full-time roles and interesting freelance projects.",
  footer: "// built with ♥ and too much coffee · © 2026",
};
