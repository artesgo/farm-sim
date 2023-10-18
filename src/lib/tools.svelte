<!-- show all the items you have -->
<!-- be able to select a fruit or vegetable to grow -->
<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<div class="fixed">
    <div class="flex justify-around">
        <!-- this is one row -->
        <!-- do icons for homework -->
        <button on:click={() => dispatch('item', 'hoe')}>Hoe</button>
        <button on:click={() => dispatch('item', 'shovel')}>Shovel</button>
        <button on:click={() => dispatch('item', 'watering can')}>Can</button>
        <button on:click={() => dispatch('item', 'carrot')}>Carrot</button>
        <button on:click={() => dispatch('item', 'strawberry')}>Strawberry</button>
    </div>
    <div class="flex justify-around">
        <!-- this is another row -->
        <!-- do icons for homework -->
        <button on:click={() => dispatch('item', 'hoe')}>Hoe</button>
        <button on:click={() => dispatch('item', 'shovel')}>Shovel</button>
        <button on:click={() => dispatch('item', 'watering can')}>Can</button>
        <button on:click={() => dispatch('item', 'carrot')}>Carrot</button>
        <button on:click={() => dispatch('item', 'strawberry')}>Strawberry</button>
    </div>
</div>

<style>
    .fixed {
        position: fixed;
        bottom: 4rem;
        width: 100%;
    }
    .flex {
        display: flex;
        /* display flex by default lays out your elements in a row */
        /* el1 el2 el3 etc.. */
        gap: 4px;
        margin-bottom: 4px;
    }
    .justify-around {
        justify-content: center;
    }
</style>