// Mock data for the student CV example. Replace with the client's details.
const DATA = {
  firstName: "Sona",
  lastName: "Avetisyan",
  photo: "images/student/sona.jpg",
  intro: "4th-year Business & Marketing student. I love data, social media and making brands people talk about. Looking for a marketing internship for summer 2027.",

  internships: [
    { title: "Marketing Intern · Lavash Café", dates: "Jun – Aug 2026", text: "Ran the café's Instagram for 3 months: followers grew from 2k to 7.5k, launched a loyalty-card campaign that brought 400+ sign-ups." },
    { title: "Research Assistant · City University", dates: "Sep 2025 – May 2026", text: "Collected and analysed survey data on Gen Z shopping habits; co-authored a short report presented at the student conference." },
    { title: "Volunteer · City Book Fair", dates: "Oct 2024", text: "Coordinated 15 volunteers at the info desk and helped run the event's social media stories." },
  ],

  education: {
    school: "City University",
    degree: "BA in Business · Marketing track · 2023 – 2027",
    gpa: "GPA 3.8 / 4.0",
  },

  interests: ["Photography", "Hiking", "Podcasts", "Debate club", "Baking", "Travel"],

  // level in percent
  skills: [
    { name: "Social media", level: 90 },
    { name: "Excel & data", level: 80 },
    { name: "Canva & design", level: 75 },
    { name: "Copywriting", level: 85 },
    { name: "Public speaking", level: 70 },
  ],

  // level from 1 to 5
  languages: [
    { name: "Armenian", level: 5 },
    { name: "English", level: 5 },
    { name: "Russian", level: 4 },
    { name: "French", level: 2 },
  ],

  email: "sona.avetisyan@example.com",
  linkedin: "https://linkedin.com/",
  footer: "Made with 💖 · Sona Avetisyan · 2026",
};
