import type { ICharacter } from "./character";
import { v4 } from "uuid";

export const PETS: ICharacter[] = [
  { damage: 0, name: "bat familiar", attack: 3, health: 12, price: 5 },
  { damage: 0, name: "blueb", attack: 2, health: 8, price: 5 },
  { damage: 0, name: "crabboid", attack: 6, health: 20, price: 5 },
  { damage: 0, name: "crow", attack: 4, health: 11, price: 5 },
  { damage: 0, name: "dragon", attack: 12, health: 32, price: 5 },
  { damage: 0, name: "furbat", attack: 3, health: 10, price: 5 },
  { damage: 0, name: "gryphon", attack: 7, health: 25, price: 5 },
  { damage: 0, name: "imp", attack: 5, health: 13, price: 5 },
  { damage: 0, name: "maiden", attack: 2, health: 8, price: 5 },
  { damage: 0, name: "ogre", attack: 5, health: 24, price: 5 },
  { damage: 0, name: "orb weaver", attack: 5, health: 20, price: 5 },
  { damage: 0, name: "skelly archer", attack: 4, health: 20, price: 5 },
  { damage: 0, name: "skelly daggers", attack: 3, health: 20, price: 5 },
  { damage: 0, name: "skelly mage", attack: 8, health: 20, price: 5 },
  { damage: 0, name: "skelly sword", attack: 6, health: 20, price: 5 },
  { damage: 0, name: "snek", attack: 4, health: 6, price: 5 },
  { damage: 0, name: "steel golem", attack: 10, health: 40, price: 5 },
  { damage: 0, name: "stone golem", attack: 8, health: 40, price: 5 },
  { damage: 0, name: "treant", attack: 6, health: 40, price: 5 },
  { damage: 0, name: "troll", attack: 8, health: 24, price: 5 },
  { damage: 0, name: "unknown", attack: 9, health: 24, price: 5 },
  { damage: 0, name: "venus muncher", attack: 5, health: 29, price: 5 },
  { damage: 0, name: "wisp", attack: 3, health: 13, price: 5 },
  { damage: 0, name: "wolfren", attack: 5, health: 24, price: 5 },
];

export function getRandomPet() {
  const randomNumber = Math.floor(Math.random() * PETS.length);
  return {
    ...PETS[randomNumber],
    id: "id" + v4(),
  };
}
