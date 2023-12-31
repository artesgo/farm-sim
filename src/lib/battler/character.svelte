<script lang="ts">
    import type { ICharacter } from "./character";

    export let character: ICharacter;
</script>

<div class="character bg-neutral text-neutral-content rounded-md">
    { character.name }
    <div class="attack absolute">{character.attack}</div>
    <div class="health absolute">{character.health}</div>
</div>

<style>
    .character {
        position: relative;
        height: 100px;
        width: 100px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .attack {
        top: 0;
        right: 0;
    }

    .health {
        bottom: 0;
        right: 0;
    }
</style>