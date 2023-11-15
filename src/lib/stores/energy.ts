import { writable } from "svelte/store";

const energy = writable({
    current: 100,
    max: 100,
});

export function createWallet() {
    const { subscribe, update } = energy;
    return {
        doAction: (cost: number) => {
            update(state => {
                if (state.current >= cost) {
                    state.current -= cost;
                }
                return state;
            })
        },
        heal: (cost: number) => {
            update(state => {
                state.current += cost;
                if (state.current > state.max) {
                    state.current = state.max;
                }
                return state
            });
        },
        upgrade: (cost: number) => {
            update(state => {
                state.max += cost;
                return state;
            })
        },
        subscribe
    }
}