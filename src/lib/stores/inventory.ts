import type { IPlantable } from "$lib/models/plantables";
import type { Stock } from "$lib/models/stock";
import { writable } from "svelte/store";

const inventory = writable([] as Stock[]);

const { subscribe, update } = inventory;

// parameter defaults, if we do "quantity = 1" here
// we don't have to change what's already calling harvest()
// this is great since we don't have to change existing code after adding this parameter
// !! demonstrate if we change this parameter to not use defaults

// but this works...
function harvest(item: IPlantable, quantity = 1) {
    update(state => {
        // 1. update the writable store to keep quantity
        // 2. quality level counts as a separate item
        let found = false;
        const updated = [...state.map(stock => {
            if (
                stock.product.name === item.name && 
                stock.product.quality === item.quality
            ) {
                stock.quantity += quantity;
                // stock.quantity = stock.quantity + quantity;
                found = true;
            }
            return stock;
        })];

        if (!found) {
            return [...state, { product: item, quantity }];
        }
        return updated;
    })
}

function remove(item: IPlantable, quantity = 1) {
    update(state => {
        // remove the item from our inventory
        return state.map(stock => {
            if (
                stock.product.name === item.name &&
                stock.product.quality === item.quality &&
                stock.quantity <= quantity
            ) {
                stock.quantity -= quantity;
            }
            return stock;
        });
    })
}

export function createInventory() {
    return {
        subscribe,
        update,
        harvest,
        remove,
    }
}