<script lang="ts">
    import type { IPlantable } from "$lib/models/plantables";
    import { createStore } from "$lib/stores/store";

    // use the create wallet utility to create an instance of our wallet
    import { createWallet } from "../stores/money";
    import { createInventory } from "$lib/stores/inventory";
    import Stock from "./stock.svelte";

    const wallet = createWallet(); // player money
    const store = createStore(); // store inventory and buy and sell features
    const inventory = createInventory();

    // create a reference to a dialog
    let dialog: HTMLDialogElement;

    function sellFromPlayer(detail: { product: IPlantable, amount: number }) {
        // try to sell a carrot to the store
        store.buy(detail.product, detail.amount);
        wallet.sell(detail.product.price, detail.amount);
        // do this for next time
        inventory.remove(detail.product, detail.amount);
    }

    function sellFromStore(detail: { product: IPlantable, amount: number }) {
        store.sell(detail.product, detail.amount);
        wallet.buy(detail.product.price, detail.amount);
        inventory.harvest(detail.product, detail.amount);
    }
</script>

<dialog bind:this={dialog} class="modal modal-box">
    <form class="flex flex-col justify-between h-full">
        <div class="mb-20">
            <h1 class="text-6xl mb-4">Welcome to Jinnies Store</h1>
            <div class="flex flex-row justify-between">
                <button class="btn btn-primary">buy</button>
                <input class="input input-primary" type="text" readonly value={"You have $" + $wallet}>
                <button class="btn btn-secondary">sell</button>
            </div>
        </div>
        <div>
            Sell From Player Inventory
            <!-- loop through player inventory -->
            {#each $inventory as plantable}
                {#if plantable.quantity > 0}
                    <Stock {plantable} on:sell={(event) => sellFromPlayer(event.detail)}></Stock>
                {/if}
            {/each}
        </div>
        <!-- <div>
            Show the inventory of things the player can buy
            <button on:click={() => wallet.buy(10)}>Buy Potato</button>
            <button on:click={() => wallet.sell(10)}>Sell Potato</button>
        </div> -->
        <button class="btn btn-warning" value="cancel" formmethod="dialog">Exit</button>
    </form>
</dialog>

<button class="btn btn-success" on:click={() => dialog.showModal()}>Go to Store</button>

<style>
    dialog {
        border: 1px solid;
        border-radius: 6px;
        margin: 0 auto;
        width: 80%;
        max-width: 800px;
    }
</style>