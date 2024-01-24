import { writable } from "svelte/store";

const money = writable(15);

// integrate money from our page component
export function createWallet() {
  const { subscribe, update } = money;
  return {
    buy: (cost: number, amount: number) => {
      let success = false;

      update((state) => {
        /**
         * state is actually our money amount
         * the >= here is so that we can only buy if we have enough money
         * >= is "greater than or equal"
         */
        const total = cost * amount;
        if (state >= total) {
          state -= total;
          success = true;
        }
        return state;
      });

      return success;
    },
    sell: (cost: number, amount: number) => {
      update((state) => {
        state += cost * amount;
        return state;
      });
    },
    subscribe,
  };
}
