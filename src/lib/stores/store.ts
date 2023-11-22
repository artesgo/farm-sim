import { writable } from "svelte/store";
import type { IPlantable } from "../models/plantables";
import type { Stock } from "$lib/models/stock";

// a list of items it sells
const store = writable([] as Stock[]);

// if we want to get complicated, we can do something involving supply and demand
export function createStore() {
    const { subscribe, update } = store;
    return {
        // buy from the player
        buy: (item: IPlantable, quantity: number) => {
            // update the state of our store, if we sell potatos to the store
            // the store will now have potatos to sell to the public
            update(state => {
                let found = null;

                const updated = state.map(stock => {
                    // go through each product and check if it equals the product we're selling
                    if (stock.product.name === item.name) {
                        // if found, set it to our found object
                        found = {...stock};
                        // increase the amount we have in the inventory
                        stock.quantity += quantity;
                    }
                    return stock;
                });
                if (found) {
                    return updated;
                }
                // if not found, create a new entry in the store list
                return [...state, { product: item, quantity }];
            });
            // run logic here to check demand for product
            // if we're overstocked, buy for lower amount
            // if no stock, we buy for increased amount
            // return total sell price of the players items
        },
        // sell to the player
        sell: (item: IPlantable, quantity: number) => {
            update(state => {
                return state
            });
        },
        subscribe
    }
}