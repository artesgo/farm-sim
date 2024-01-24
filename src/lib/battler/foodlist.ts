import type { IConsumable } from "./character";

export const ITEMS: IConsumable[] = [
  {
    name: "banana",
    attack: 0,
    health: 3,
  },
  {
    name: "apple",
    attack: 1,
    health: 5,
  },
  {
    name: "honey",
    attack: 2,
    health: 2,
  },
  {
    name: "spam",
    attack: 2,
    health: 4,
  },
  {
    name: "cactus",
    attack: 6,
    health: -2,
  },
  {
    name: "paint",
    attack: 0,
    health: -4,
  },
];

export function getRandomItem() {
  // floor() rounds down to the nearest whole number
  // ceil() rounds up to the nearest whole number

  // Math.random() gives you a random decimal between 0, and 1
  const randomNumber = Math.floor(Math.random() * ITEMS.length);

  // do some homework around math operations
  return ITEMS[randomNumber];
}
