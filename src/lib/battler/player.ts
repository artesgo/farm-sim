import { writable } from "svelte/store";
import type { ICharacter } from "./character";

const player = writable<ICharacter[]>([]);

export function getPlayer() {
  const { subscribe, update } = player;

  return {
    add: (pet: ICharacter) => update((state) => [...state, pet]),
    remove: (pet: ICharacter) =>
      update((state) => state.filter((p) => p.id !== pet.id)),
    subscribe,
  };
}
