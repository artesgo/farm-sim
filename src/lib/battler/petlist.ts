import type { ICharacter } from "./character";

export const PETS: ICharacter[] = [
  { name: "dog", attack: 5, health: 10, price: 5 },
  { name: "cat", attack: 5, health: 10, price: 3 },
  { name: "bat", attack: 5, health: 10, price: 10 },
  { name: "frog", attack: 5, health: 10, price: 10 },
  { name: "monkey", attack: 5, health: 10, price: 10 },
  { name: "turtle", attack: 5, health: 10, price: 10 },
  { name: "horse", attack: 5, health: 10, price: 10 },
  { name: "hyena", attack: 10, health: 15, price: 10 },
  { name: "honey badger", attack: 8, health: 30, price: 10 },
  { name: "sea cucumber", attack: 1, health: 50, price: 10 },
];

export function getRandomPet() {
  const randomNumber = Math.floor(Math.random() * PETS.length);
  return PETS[randomNumber];
}
