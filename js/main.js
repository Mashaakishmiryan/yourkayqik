// Links to the eight example sites. Paste each example's address between the
// quotes (for example "examples/doctor.html" or a full https:// link).
// Cards with an empty link stay on the page but don't open anything.
const EXAMPLE_LINKS = {
  doctor: "examples/doctor.html",
  wedding: "examples/wedding.html",
  birthday: "examples/birthday.html",
  portfolio: "examples/portfolio.html",
  developer: "examples/developer.html",
  fitness: "examples/fitness.html",
  party: "examples/party.html",
  student: "examples/student.html",
};

// The Armenian text lives in index.html; this is the English version.
const EN = {
  "nav.examples": "Examples",
  "nav.for": "Who it's for",
  "nav.how": "How it works",
  "nav.price": "Price",
  "nav.order": "Order",

  "hero.line1": "Your own little website",
  "hero.pre": "for your",
  "hero.post": "",
  "hero.text": "We make online CVs, portfolios, pages for doctors and specialists, and cute invitations for weddings, birthdays and every special day — with one link to share.",
  "hero.order": "Order my website",
  "hero.see": "See examples",
  "hero.fact.price": "per website",
  "hero.fact.days": "1–2 days",
  "hero.fact.daysText": "until it's ready",
  "hero.fact.types": "examples to open",
  "hero.sticker": "ready in 1–2 days",

  "ex.kicker": "Examples",
  "ex.title": "Examples of our work",
  "ex.text": "Every website is made for its person or event. Open an example to see what you get.",
  "ex.open": "Open →",
  "ex.doctor.name": "Dr. Ani Hakobyan",
  "ex.doctor.what": "Pediatrician",
  "ex.wedding.name": "Davit & Mariam",
  "ex.wedding.what": "Wedding invitation",
  "ex.birthday.name": "Lilit turns 5!",
  "ex.birthday.what": "Kids' birthday invitation",
  "ex.portfolio.name": "Anna Petrosyan",
  "ex.portfolio.what": "Designer portfolio",
  "ex.developer.name": "Aram Sargsyan",
  "ex.developer.what": "Developer CV",
  "ex.fitness.name": "Mane Grigoryan",
  "ex.fitness.what": "Fitness coach",
  "ex.party.name": "Narek turns 18",
  "ex.party.what": "Party invitation",
  "ex.student.name": "Sona Avetisyan",
  "ex.student.what": "Student CV",

  "for.kicker": "Who it's for",
  "for.title": "Made for people like you",
  "for.students": "Students & graduates",
  "for.students.text": "An online CV that makes a great first impression.",
  "for.jobs": "Job seekers",
  "for.jobs.text": "A professional look, a download-PDF button and fast delivery.",
  "for.creatives": "Designers & creatives",
  "for.creatives.text": "A portfolio where your work comes first.",
  "for.doctors": "Doctors & specialists",
  "for.doctors.text": "Services, working hours, address with map and a call button.",
  "for.events": "Weddings & events",
  "for.events.text": "An invitation with map, countdown and RSVP.",

  "how.kicker": "In 1–2 days",
  "how.title": "How it works",
  "how.1.day": "Today",
  "how.1.title": "Send your info",
  "how.1.text": "CV, photos, work, or event details.",
  "how.2.day": "Day 1",
  "how.2.title": "We build it",
  "how.2.text": "We design and build it in your colours and send you a preview.",
  "how.3.day": "Day 2",
  "how.3.title": "Your site goes live",
  "how.3.text": "Your site goes live on its own link, ready to share.",

  "price.kicker": "Price",
  "price.title": "Simple, clear prices",
  "price.depends": "The price depends on the number of pages",
  "price.time": "ready in 1–2 days",
  "price.included": "Included",
  "price.inc.1": "Design in your colours",
  "price.inc.2": "All text and photos added",
  "price.inc.3": "Works on phone and computer",
  "price.inc.4": "Changes before launch",
  "price.inc.5": "A free link to share",
  "price.not": "Not included: a personal domain (like yourname.am)",

  "type.cv": "CV website",
  "type.cv.text": "Photo, experience, skills, education, contacts, download-PDF button",
  "type.portfolio": "Portfolio",
  "type.portfolio.text": "CV + gallery of work and projects, about, social links",
  "type.doctor": "Doctor or specialist page",
  "type.doctor.text": "Services, experience, working hours, address with map, call and WhatsApp buttons",
  "type.wedding": "Wedding invitation",
  "type.wedding.text": "Names, date, ceremony and reception with map links, photos, countdown, RSVP",
  "type.event": "Birthday or other event invitation",
  "type.event.text": "Date, place with map, program, dress code, RSVP",

  "contact.title": "Let's make your little website",
  "contact.text": "Write to us with your name and what you need. We'll reply quickly.",
  "contact.wa": "Write on WhatsApp",
  "contact.ig": "Write on Instagram",
  "contact.copy": "Copy",

  "footer.city": "Yerevan",
};

// Words that rotate in the hero headline
const ROTATING = {
  hy: ["CV-ի", "պորտֆոլիոյի", "հարսանիքի", "ծննդյան տոնի", "կլինիկայի"],
  en: ["CV", "portfolio", "wedding", "birthday", "clinic"],
};
const COPIED = { hy: "Պատճենված է ✓", en: "Copied ✓" };

const WHATSAPP_NUMBER = "37477868622";
const WHATSAPP_TEXT = {
  hy: "Բարև՛, ուզում եմ պատվիրել կայքիկ 💌",
  en: "Hi! I'd like to order a website 💌",
};

const STORAGE_KEY = "yourkayqik-lang";
const translatable = document.querySelectorAll("[data-i18n]");
const HY = {};
translatable.forEach((el) => { HY[el.dataset.i18n] = el.innerHTML; });
const lang = () => document.documentElement.lang === "en" ? "en" : "hy";

function setLanguage(next) {
  const dict = next === "en" ? EN : HY;
  translatable.forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.innerHTML = text;
  });
  document.documentElement.lang = next;
  document.getElementById("lang").textContent = next === "en" ? "ՀԱՅ" : "EN";
  document.getElementById("wa").href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT[next])}`;
  rotIndex = 0;
  document.getElementById("rotWord").textContent = ROTATING[next][0];
  try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
}

let rotIndex = 0;
let savedLang = "hy";
try { savedLang = localStorage.getItem(STORAGE_KEY) || "hy"; } catch (e) {}
setLanguage(savedLang);

document.getElementById("lang").addEventListener("click", () => setLanguage(lang() === "en" ? "hy" : "en"));

// Rotating word in the headline
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const rotWord = document.getElementById("rotWord");
if (!reduceMotion) {
  setInterval(() => {
    rotWord.classList.add("is-out");
    setTimeout(() => {
      const words = ROTATING[lang()];
      rotIndex = (rotIndex + 1) % words.length;
      rotWord.textContent = words[rotIndex];
      rotWord.classList.remove("is-out");
      rotWord.classList.add("is-in");
      setTimeout(() => rotWord.classList.remove("is-in"), 450);
    }, 280);
  }, 2400);
}

// Mobile menu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
}));

// Repeat the strip once so it loops without a gap
const track = document.getElementById("stripTrack");
track.innerHTML += track.innerHTML;

// Every card, row and window opens its example site (same tab, so it also works inside embedded previews)
document.querySelectorAll("[data-example]").forEach((el) => {
  const link = EXAMPLE_LINKS[el.dataset.example];
  if (link) el.href = link;
});

// Browser windows in the hero follow the mouse a little
const fan = document.getElementById("fan");
if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  document.getElementById("hero").addEventListener("pointermove", (e) => {
    const r = fan.getBoundingClientRect();
    fan.style.setProperty("--mx", ((e.clientX - r.left) / r.width - .5).toFixed(3));
    fan.style.setProperty("--my", ((e.clientY - r.top) / r.height - .5).toFixed(3));
  });
}

// Copy the phone number (phone links don't open everywhere)
const copyBtn = document.getElementById("copyPhone");
copyBtn.addEventListener("click", () => {
  const phone = document.getElementById("phone");
  const done = () => {
    copyBtn.textContent = COPIED[lang()];
    setTimeout(() => { copyBtn.textContent = (lang() === "en" ? EN : HY)["contact.copy"]; }, 1800);
  };
  const selectNumber = () => {
    const range = document.createRange();
    range.selectNodeContents(phone);
    getSelection().removeAllRanges();
    getSelection().addRange(range);
  };
  if (navigator.clipboard) navigator.clipboard.writeText(phone.textContent.trim()).then(done, selectNumber);
  else selectNumber();
});
