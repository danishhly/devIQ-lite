const quotes = [
  "Keep pushing.",
  "Code daily.",
  "Small steps matter.",
  "Ship steadily.",
];

export const randomQuote = () =>
  quotes[Math.floor(Math.random() * quotes.length)];