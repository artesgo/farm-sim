<script lang="ts">
    import { plantables } from "$lib/models/plantables";
    import { createStore } from "$lib/stores/store";

    // use the create wallet utility to create an instance of our wallet
    import { createWallet } from "../stores/money";
    const wallet = createWallet(); // player money
    const store = createStore(); // store inventory and buy and sell features

    // create a reference to a dialog
    let dialog: HTMLDialogElement;

    function sellFromPlayer() {
        // try to sell a carrot to the store
        store.sell(plantables.carrot, 1);
        wallet.sell(plantables.carrot.price);
    }

    function sellFromStore() {

    }
</script>

<dialog bind:this={dialog}>
    <form>
        <h1>Welcome to Jinnies Store</h1>
        <h2>Your wallet: ${$wallet}</h2>
        <div>
            Sell From Player Inventory
            <button on:click={() => wallet.buy(10)}>Buy Carrot</button>
            <button on:click={() => sellFromPlayer()}>Sell Carrot</button>

            {#each $store as item}
                <div>
                    {item.product.name} {item.quantity}
                </div>
            {/each}
        </div>
        <div>
            Show the inventory of things the player can buy
            <button on:click={() => wallet.buy(10)}>Buy Potato</button>
            <button on:click={() => wallet.sell(10)}>Sell Potato</button>
        </div>
        <button value="cancel" formmethod="dialog">Exit</button>
    </form>
</dialog>

<button on:click={() => dialog.showModal()}>Go to Store</button>

<style>
    dialog {
        background: #FC0;
        border: 1px solid;
        border-radius: 6px;
    }
</style>