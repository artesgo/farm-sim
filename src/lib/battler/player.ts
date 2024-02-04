import { writable, type Writable } from "svelte/store";
import type { ICharacter } from "./character";

export const player = writable<ICharacter[]>([]);
export const enemy = writable<ICharacter[]>([]);

export function getPlayer(store: Writable<ICharacter[]>) {
  const { subscribe, update, set } = store;

  return {
    add: (pet: ICharacter) => update((state) => [...state, pet]),
    remove: (pet: ICharacter) => update((state) => remove(state, pet)),
    attack: () => {},
    resetDamage: () => update(resetDamage),
    subscribe,
    set,
  };
}

function remove(list: ICharacter[], removed: ICharacter) {
  return list.filter((char) => {
    return char.id !== removed.id;
  });
}

function resetDamage(list: ICharacter[]) {
  return list.map((character) => {
    character.damage = 0;
    return character;
  });
}
