import type { ICharacter } from "./character";

export const PETS: ICharacter[] = [
  { damage: 0, name: "bat familiar", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "blueb", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "crabboid", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "crow", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "dragon", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "furbat", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "gryphon", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "imp", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "maiden", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "ogre", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "orb weaver", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "skelly archer", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "skelly daggers", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "skelly mage", attack: 8, health: 10, price: 5 },
  { damage: 0, name: "skelly sword", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "snek", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "steel golem", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "stone golem", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "treant", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "troll", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "unknown", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "venus muncher", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "wisp", attack: 5, health: 10, price: 5 },
  { damage: 0, name: "wolfren", attack: 5, health: 10, price: 5 },
];

export function getRandomPet() {
  const randomNumber = Math.floor(Math.random() * PETS.length);
  return PETS[randomNumber];
}
