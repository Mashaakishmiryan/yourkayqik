// Mock data for the party invitation example. Replace with the host's details.
const DATA = {
  name: "Narek",
  age: 18,
  theme: "Neon Night",
  heroImage: "images/party/hero.jpg",
  start: "2026-12-18T21:00:00+04:00",
  whenLabel: "FRI · 18 DEC 2026 · 21:00",

  details: [
    { icon: "📍", title: "Where", text: "Club Orbit, Yerevan", mapQuery: "Yerevan" },
    { icon: "👕", title: "Dress code", text: "Wear something that glows ✨ Neon, white or glitter" },
    { icon: "🎁", title: "Gift", text: "Your presence! (Or a contribution to the new-laptop fund 💻)" },
  ],

  timeline: [
    { time: "21:00", title: "Doors open", text: "Welcome drinks & glow sticks" },
    { time: "22:00", title: "DJ set", text: "Our DJ friend on the decks" },
    { time: "23:30", title: "Cake & speeches", text: "Keep them short, please 😅" },
    { time: "00:00", title: "Midnight surprise", text: "You'll see 👀" },
    { time: "01:00", title: "Dance till late", text: "Last song is Narek's choice" },
  ],

  rsvp: {
    whatsapp: "37400000000", // answers are sent here
    // Starting numbers shown under the answer buttons
    counts: { going: 34, maybe: 9, cant: 4 },
  },

  // Starting song requests (made-up titles)
  songs: [
    { title: "Neon Lights – Midnight Drive", votes: 15 },
    { title: "The Echoes – Summer Again", votes: 8 },
    { title: "Lumi – Dance All Night", votes: 12 },
  ],

  footer: "See you on the dance floor ✦ Narek",
};
