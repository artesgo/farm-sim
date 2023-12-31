
<!-- This is what's called a dumb component -->
<!-- 1. It does not import any data stores -->
<script lang="ts">
    import type { IPlantable } from "$lib/models/plantables";
    import type { Stock } from "$lib/models/stock";
    import { createEventDispatcher } from "svelte";

    // 2. it accepts an input for what to display
    export let plantable: Stock;
    let dispatcher = createEventDispatcher();
    let amount = plantable.quantity;

    function sellFromPlayer(product: IPlantable) {
        // check that we're not selling more than we have
        if (!error()) {
            // 3. and notifies the parent when an action has occurred
            dispatcher('sell', {
                product,
                amount
            })
        }
    }

    // $: tells svelte to run updates whenever our amount changes
    $: error = () => {
        if (amount > plantable.quantity) {
            setTimeout(() => {
                amount = plantable.quantity;
            }, 700);
            return true;
        }
        if (amount < 0) {
            setTimeout(() => {
                amount = 0;
            }, 700);
            return true;
        }
        return false;
    }
</script>

<div class="flex justify-between">
    <div class="flex-grow w-[200px]">
        {plantable.quantity} {plantable.product.name} ${plantable.product.price}
    </div>

    <input
        class="input w-20"
        class:input-primary={!error()}
        class:input-secondary={error()}
        bind:value={amount} type="number" max={plantable.quantity} />

    <button class="btn btn-primary" on:click={() => sellFromPlayer(plantable.product)}>
        Sell
    </button>
</div>