<script lang="ts">
  import { onMount } from "svelte";
  import type { ICharacter } from "./character";
  import { getRandomItem } from "./foodlist";
  import { getRandomPet } from "./petlist";
  import Character from "./character.svelte";

  let pets: ICharacter[] = [];
  let items: ICharacter[] = [];

  function randomFoodItems() {
    const item1 = getRandomItem();
    const item2 = getRandomItem();

    items = [item1, item2];
  }

  function randomPets() {
    const _pets: ICharacter[] = [];
    // index, how many loops do you want
    for (let i = 0; i < 5; i++) {
      _pets.push(getRandomPet());
    }
    pets = _pets;
  }

  // TODO: drag and drop store items into our squad
  function buyPet(pet: ICharacter) {}

  function sellPet(pet: ICharacter) {}

  function buyFood(target: ICharacter) {}

  onMount(() => {
    randomPets();
    randomFoodItems();
  });
</script>

<h2>The Shop</h2>

<!-- TODO: we need to display the list of pets available for purchase -->

<!-- TODO: we need a way to display our CURRENT pets for buying food items -->

{#each items as item}
  <div class="flex items-center flex-col">
    {item.name}, health: {item.health}, attack: {item.attack}
    <button class="btn btn-primary" on:click={() => buyFood(item)}>Buy</button>
  </div>
{/each}

<div>
  {#each pets as pet}
    <Character character={pet}></Character>
  {/each}
</div>
