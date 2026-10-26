// Mock data for the wedding invitation example. Replace with the couple's details.
const DATA = {
  partner1: "Davit",
  partner2: "Mariam",
  invitedBy: "Together with their families",
  heroImage: "images/wedding/hero.jpg",

  // Date and start time of the day (local time) and the time zone
  date: "2027-06-12",
  startTime: "14:00",
  timeZone: "+04:00",
  dateLabel: "12 · 06 · 2027",
  dayTitle: "Saturday, 12 June",

  story: {
    title: "It started with a coffee",
    text: "We met on a rainy autumn morning in a little café in the city centre — one umbrella, two people, and a conversation that never really ended. Seven years later, we're saying yes. We would love you to be there.",
  },

  events: [
    { icon: "⛪", name: "Ceremony", time: "14:00", hours: 1, place: "Church of St. Example", city: "Yerevan", mapQuery: "Yerevan" },
    { icon: "🥂", name: "Reception", time: "17:00", hours: 7, place: "Garden Hall", city: "Yerevan", mapQuery: "Yerevan" },
  ],

  // Remove "image" to show a soft coloured placeholder instead of a photo
  photos: [
    { caption: "Lake trip, 2021", image: "images/wedding/1.jpg" },
    { caption: "Our first trip, 2024", image: "images/wedding/2.jpg" },
    { caption: "The proposal", image: "images/wedding/3.jpg" },
  ],

  rsvp: {
    deadline: "Kindly reply by 1 May",
    maxGuests: 4,
    whatsapp: "37400000000", // replies are sent here
  },

  signature: "With love, D & M",
  hashtag: "#DavitAndMariam2027",
};
