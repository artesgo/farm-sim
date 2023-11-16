import type { IPlantable } from "$lib/models/plantables";
import { writable } from "svelte/store";

const inventory = writable([] as IPlantable[]);

const { subscribe, update } = inventory;

function harvest(item: IPlantable) {
    update(state => {
        // 1. update the writable store to keep quantity
        // 2. quality level counts as a separate item
        return [...state, item];
    })
}

function sell(item: IPlantable, quantity: number) {
    // update(state => {
        
    // })
}

export function createInventory() {
    return {
        subscribe,
        update,
        harvest,
        sell,
    }
}