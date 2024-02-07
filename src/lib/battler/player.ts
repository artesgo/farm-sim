import { writable, type Writable } from "svelte/store";
import type { ICharacter } from "./character";

export const player = writable<ICharacter[]>([]);
export const enemy = writable<ICharacter[]>([]);

export function getPlayer(store: Writable<ICharacter[]>) {
  const { subscribe, update, set } = store;

  return {
    add: (pet: ICharacter) => update((state) => [...state, pet]),
    remove: (pet: ICharacter) => update((state) => remove(state, pet)),
    attacked: (attacker: ICharacter, defender: ICharacter) =>
      update((state) => attack(state, attacker, defender)),
    resetDamage: () => update(resetDamage),
    stopAction: () => update(stopAction),
    cleanup: () => update(cleanup),
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
    character.dead = false;
    return character;
  });
}

function stopAction(list: ICharacter[]) {
  return list.map((character) => {
    return {
      ...character,
      act: false,
    };
  });
}

function attack(
  list: ICharacter[],
  attacker: ICharacter,
  defender: ICharacter
) {
  return list.map((character) => {
    if (defender.id === character.id) {
      character.damage += attacker.attack;
      character.act = true;
    }

    return character;
  });
}

function cleanup(list: ICharacter[]) {
  return list.map((character) => {
    return {
      ...character,
      dead: character.health <= character.damage,
    };
  });
}
