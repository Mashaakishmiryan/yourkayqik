// Mock data for the fitness coach example. Replace with the client's details.
const DATA = {
  name: "Mane Grigoryan",
  firstName: "Mane",
  brand: ["MANE", "FIT"], // shown as MANE.FIT
  title: "Fitness Coach",
  heroImage: "images/fitness/hero.jpg",
  kicker: "Personal & group training · Yerevan",
  headline: ["Stronger", "every week"],
  intro: "I'm Mane — certified coach with 8 years of experience. Real results, no crash diets, and workouts you'll actually look forward to.",
  whatsapp: "37400000000", // bookings are sent here

  numbers: [
    { value: "8", label: "years coaching" },
    { value: "500+", label: "clients" },
    { value: "6×", label: "classes a day" },
  ],
  marquee: ["Strength", "HIIT", "Stretching", "Nutrition", "Results"],

  programs: [
    { emoji: "🔥", name: "HIIT Burn", image: "images/fitness/hiit.jpg", text: "Fast, sweaty group sessions to build stamina and burn fat.", features: ["45-minute group class", "All fitness levels", "Progress tracking"], month: "25 000", single: "3 500" },
    { emoji: "🏋️‍♀️", name: "Personal", image: "images/fitness/personal.jpg", text: "One-on-one training built entirely around your goals.", features: ["12 private sessions", "Personal nutrition plan", "WhatsApp support 24/7"], month: "90 000", single: "9 000", popular: true },
    { emoji: "🧘‍♀️", name: "Stretch & Core", image: "images/fitness/stretch.jpg", text: "Mobility, posture and core strength — a perfect balance.", features: ["60-minute group class", "Great for back pain", "Calm music, good vibes"], month: "20 000", single: "3 000" },
  ],

  // [time, class name, free spots]
  schedule: {
    Mon: [["08:00", "HIIT Burn", 4], ["13:00", "Stretch & Core", 9], ["19:00", "HIIT Burn", 2]],
    Tue: [["09:00", "Stretch & Core", 7], ["18:30", "HIIT Burn", 5]],
    Wed: [["08:00", "HIIT Burn", 6], ["13:00", "Stretch & Core", 1], ["19:00", "HIIT Burn", 8]],
    Thu: [["09:00", "Stretch & Core", 10], ["18:30", "HIIT Burn", 3]],
    Fri: [["08:00", "HIIT Burn", 5], ["19:00", "HIIT Burn", 2]],
    Sat: [["11:00", "Stretch & Core", 12], ["12:30", "HIIT Burn", 9]],
  },

  goals: ["Lose weight", "Get stronger", "Feel healthier", "Prepare for an event"],
  footer: "© 2026 Mane Grigoryan · Fitness coach · Yerevan",
};
