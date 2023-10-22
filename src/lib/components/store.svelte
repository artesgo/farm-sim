<script lang="ts">
    // use the create wallet utility to create an instance of our wallet
    import { createWallet } from "../stores/money";
    const wallet = createWallet();

    // create a reference to a dialog
    let dialog: HTMLDialogElement;

    function submit() {

    }
    function change(event: any) {
        console.log(event);
    }
</script>

<dialog bind:this={dialog}>
    <form>
        <h1>Welcome to Jinnies Store</h1>
        <h2>Your wallet: ${$wallet}</h2>
        <div>
            Show the inventory of things to sell
            <button on:click={() => wallet.buy(10)}>Buy Potato</button>
            <button on:click={() => wallet.sell(10)}>Sell Potato</button>
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