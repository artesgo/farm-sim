import { writable } from "svelte/store";

const money = writable(1000);

// integrate money from our page component
export function createWallet() {
    const { subscribe, update } = money;
    return {
        buy: (cost: number) => {
            let success = false;

            update(state => {
                /**
                 * state is actually our money amount
                 * the >= here is so that we can only buy if we have enough money
                 * >= is "greater than or equal"
                 */
                if (state >= cost) {
                    state -= cost;
                    success = true;
                }
                return state;
            });

            return success;
        },
        sell: (cost: number) => {
            update(state => {
                state += cost;
                return state
            });
        },
        subscribe
    }
}