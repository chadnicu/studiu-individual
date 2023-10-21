export const reviews = [
  {
    image: "/pre.png",
    content: "The tastiest and most energetic pre-workout I've come across",
    author: "Jayme S.",
  },
  {
    image: "/whey.png",
    content:
      "This whey protein is amazing! It mixes easily and tastes delicious",
    author: "Erika A.",
  },
  {
    image: "/sleep-support.png",
    content:
      "Helps me fall asleep faster and stay asleep all night without feeling groggy in the morning. Highly recommend",
    author: "Brad S.",
  },
  {
    image: "/fish-oil.png",
    content:
      "I love the standards of the product, especially with knowing how dodgy the vitamin market can be",
    author: "Luke N.",
  },
];

export const products = [
  {
    name: "ISO-M7",
    description: "Pure whey isolate protein powder",
    price: 47.99,
    starCount: 5,
    image: "/whey.png",
  },
  {
    name: "PUREFORM",
    description: "Science-based pre-workout",
    price: 34.99,
    starCount: 5,
    image: "/pre.png",
  },
  {
    name: "TRU REM",
    description: "All natural sleep support",
    price: 39.99,
    starCount: 5,
    image: "/sleep-support.png",
  },

  // repeat
  {
    name: "ISO-M7",
    description: "Pure whey isolate protein powder",
    price: 47.99,
    starCount: 5,
    image: "/whey.png",
  },
  {
    name: "PUREFORM",
    description: "Science-based pre-workout",
    price: 34.99,
    starCount: 5,
    image: "/pre.png",
  },
  {
    name: "TRU REM",
    description: "All natural sleep support",
    price: 39.99,
    starCount: 5,
    image: "/sleep-support.png",
  },

  // repeat one more
  {
    name: "ISO-M7",
    description: "Pure whey isolate protein powder",
    price: 47.99,
    starCount: 5,
    image: "/whey.png",
  },
];

export const stacks = [
  {
    name: "TRANSFORMATION",
    saving: 10,
    price: 185.95,
    image: "/transformation-stack.png",
  },
  {
    name: "FUNDAMENTALS",
    saving: 10,
    price: 113.97,
    image: "/fundamentals-stack.png",
  },
  {
    name: "MUSCLE GAIN",
    saving: 10,
    price: 122.97,
    image: "/muscle-gain-stack.png",
  },
  { name: "RECOVERY", saving: 10, price: 102.97, image: "/recovery-stack.png" },
];

// types
export type Review = (typeof reviews)[0];
export type Product = (typeof products)[0];
export type Stack = (typeof stacks)[0];
