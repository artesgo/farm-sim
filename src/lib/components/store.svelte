<script lang="ts">
    import type { IPlantable } from "$lib/models/plantables";
    import { createStore } from "$lib/stores/store";

    // use the create wallet utility to create an instance of our wallet
    import { createWallet } from "../stores/money";
    import { createInventory } from "$lib/stores/inventory";

    const wallet = createWallet(); // player money
    const store = createStore(); // store inventory and buy and sell features
    const inventory = createInventory();

    // create a reference to a dialog
    let dialog: HTMLDialogElement;
    let quantity = 1;

    function sellFromPlayer(plantable: IPlantable) {
        // try to sell a carrot to the store
        store.sell(plantable, 1);
        wallet.sell(plantable.price);
        inventory.sell(plantable, quantity);
    }

    function sellFromStore() {

    }
</script>

<dialog bind:this={dialog} class="modal modal-box">
    <form>
        <h1>Welcome to Jinnies Store</h1>
        <h2>Your wallet: ${$wallet}</h2>
        <div>
            Sell From Player Inventory
            <!-- loop through player inventory -->
            {#each $inventory as plantable}
                <div>
                    {plantable.name} {plantable.price}
                    <button class="btn btn-primary" on:click={() => sellFromPlayer(plantable)}>
                        Sell
                    </button>
                </div>
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