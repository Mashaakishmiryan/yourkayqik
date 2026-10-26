// Mock data for the doctor / specialist example. Replace with the client's details.
const DATA = {
  name: "Dr. Ani Hakobyan",
  shortName: "Dr. Hakobyan",
  role: "Pediatrician · Children's doctor",
  intro: "Gentle, careful care for babies, children and teens — from the first check-up to school age. Parents always get clear answers.",
  phone: "010 00 00 00",
  whatsapp: "37410000000",
  emoji: "👩‍⚕️",
  photo: "images/doctor/portrait.jpg",

  facts: [
    { value: 12, label: "years of practice" },
    { value: 3000, label: "little patients", plus: true },
    { value: 4.9, decimals: 1, label: "parent rating" },
  ],

  services: [
    { name: "Newborn check-up", price: "from 10 000 ֏", details: "Full exam in the first weeks, weight and growth check, feeding advice and answers to every new-parent question." },
    { name: "Regular check-up", price: "from 8 000 ֏", details: "Growth and development check, vaccination plan and a short written summary for parents." },
    { name: "Illness visit", price: "from 8 000 ֏", details: "Fever, cough, rash or tummy ache — exam, diagnosis and a clear treatment plan." },
    { name: "Vaccination", price: "from 5 000 ֏", details: "Vaccines by the national schedule, with a check-up before and advice for after." },
    { name: "Home visit", price: "from 15 000 ֏", details: "When the little one is too sick to travel. Available in the city on weekdays." },
  ],

  // Day number: 0 = Sunday … 6 = Saturday. Missing day = closed.
  hours: { 1: ["10:00", "18:00"], 2: ["10:00", "18:00"], 3: ["10:00", "18:00"], 4: ["10:00", "18:00"], 5: ["10:00", "17:00"], 6: ["11:00", "15:00"] },

  clinic: {
    name: "\"Little Steps\" Children's Clinic",
    address: "12 Example Street, Yerevan",
    mapQuery: "Yerevan",
  },

  experienceIntro: "Trained in Yerevan and Moscow, working with children since 2014.",
  experience: [
    { years: "2019 — now", place: "\"Little Steps\" Children's Clinic", role: "Pediatrician, head of the outpatient department" },
    { years: "2014 — 2019", place: "City Children's Hospital", role: "Pediatrician" },
    { years: "2012 — 2014", place: "Residency in Pediatrics", role: "State Medical University" },
  ],

  footer: "© 2026 Dr. Ani Hakobyan · Pediatrician · Yerevan",
};
