// Mock data for the designer portfolio example. Replace with the client's details.
const DATA = {
  firstName: "Anna",
  fullName: "Anna Petrosyan",
  availability: "Available for freelance · Yerevan",
  photo: "images/portfolio/anna.jpg",
  roles: ["brands", "apps", "posters", "packaging", "websites"],
  intro: "Brand identity, UI and illustration for small businesses and bold startups. 6 years of turning ideas into things people love to look at.",
  marquee: ["Branding", "UI Design", "Illustration", "Packaging", "Posters"],

  categories: [
    { id: "branding", label: "Branding" },
    { id: "ui", label: "UI / Web" },
    { id: "illustration", label: "Illustration" },
  ],

  // "image" is the project cover. Without it, "art" picks one of the built-in covers (a1 … a6).
  projects: [
    { title: "Noor Coffee", image: "images/portfolio/noor.jpg", category: "branding", art: "a1", mark: "noor.", text: "Full identity for a specialty coffee shop: logo, cups, menu and Instagram templates. Sales of take-away cups doubled after the rebrand.", tags: ["Logo", "Packaging", "Social"] },
    { title: "Lumi App", image: "images/portfolio/lumi.jpg", category: "ui", art: "a2", mark: "◐", text: "A meditation app for teens — playful onboarding, soft colours and a mascot that reacts to your mood.", tags: ["Mobile", "UX", "Prototype"] },
    { title: "Street Type", image: "images/portfolio/street-type.jpg", category: "illustration", art: "a3", mark: "ABC", text: "A poster series of hand-drawn letters inspired by old city shop signs. Shown at a local design festival.", tags: ["Lettering", "Posters"] },
    { title: "Studio Mono", image: "images/portfolio/studio-mono.jpg", category: "ui", art: "a4", mark: "mono", text: "Minimal portfolio website for an architecture studio, built around big photography and quiet typography.", tags: ["Web", "Design system"] },
    { title: "Sun Juice", image: "images/portfolio/sun-juice.jpg", category: "branding", art: "a5", mark: "SUN", text: "Bright, bold packaging for a cold-pressed juice brand — six flavours, six gradients.", tags: ["Packaging", "Colour"] },
    { title: "Forest Folk", image: "images/portfolio/forest-folk.jpg", category: "illustration", art: "a6", mark: "🌲", text: "Illustrations for a children's book about mountain forests.", tags: ["Book", "Kids"] },
  ],

  about: [
    "I grew up drawing on every notebook I owned, studied graphic design at the Academy of Fine Arts, and now help brands find their voice through colour, type and shape.",
    "When I'm not designing, I'm hiking in the mountains or hunting for vintage posters at the weekend flea market.",
  ],
  stats: [
    { value: "6+", label: "years" },
    { value: "40+", label: "projects" },
    { value: "12", label: "awards" },
  ],
  skills: ["Figma", "Illustrator", "Photoshop", "After Effects", "Procreate", "Brand strategy"],

  contactLink: "https://instagram.com/",
  socials: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "Behance", url: "https://behance.net/" },
    { label: "Dribbble", url: "https://dribbble.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/" },
  ],

  // Printed when the visitor presses "Download CV"
  cv: {
    title: "Graphic & Brand Designer · Yerevan, Armenia",
    experience: [
      { years: "2022 – now", role: "Freelance brand designer" },
      { years: "2020 – 2022", role: "Designer, Studio Example" },
      { years: "2019 – 2020", role: "Junior designer, Pixel Agency" },
    ],
    education: "Academy of Fine Arts — BA Graphic Design, 2019",
    skills: "Brand identity, UI design, illustration, packaging · Figma, Illustrator, Photoshop, After Effects",
    languages: "Armenian (native), English (fluent), Russian (fluent)",
  },

  footer: "© 2026 Anna Petrosyan",
};
