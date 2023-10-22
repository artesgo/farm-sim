<!-- show all the items you have -->
<!-- be able to select a fruit or vegetable to grow -->
<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Store from "./store.svelte";
    const dispatch = createEventDispatcher();
</script>

<div class="fixed">
    <div class="flex justify-around">
        <!-- this is one row -->
        <button on:click={() => dispatch('item', 'carrot')}>Carrot</button>
        <button on:click={() => dispatch('item', 'strawberry')}>Strawberry</button>
        <Store></Store>
    </div>
</div>

<style>
    .fixed {
        position: fixed;
        bottom: 4rem;
        width: 100%;
        z-index: 20;
        /* add a resource about z-indexs and why they aren't good to spam */
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