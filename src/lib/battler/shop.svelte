<script lang="ts">
  import { onMount } from "svelte";
  import type { ICharacter, IConsumable } from "./character";
  import { getRandomItem } from "./foodlist";
  import { getRandomPet } from "./petlist";
  import Character from "./character.svelte";
  import { getPlayer, player } from "./player";
  import { v4 } from "uuid";
  import { createWallet } from "./money";

  let wallet = createWallet();
  let pets: ICharacter[] = [];
  let items: IConsumable[] = [];
  let player1 = getPlayer(player);

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
  function buyPet(pet: ICharacter) {
    if (pet.price && pet.price <= $wallet) {
      player1.add({
        ...pet,
        id: "id" + v4(),
      });

      wallet.buy(pet.price, 1);
    }
  }

  function sellPet(pet: ICharacter) {
    player1.remove(pet);
    wallet.sell(pet.price || 0, 1);
  }

  function buyFood(target: IConsumable) {}

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

<h2>Shop</h2>
<h3>Wallet: ${$wallet}</h3>
<div class="flex gap-4">
  {#each pets as pet}
    <div class="flex flex-col justify-center">
      <Character character={pet}></Character>

      <button
        disabled={!!pet.price && $wallet < pet.price}
        class="btn mt-2"
        on:click={() => buyPet(pet)}
      >
        Buy
      </button>
    </div>
  {/each}
</div>

<h2>Your current Team</h2>
<div class="flex gap-4">
  {#each $player1 as pet}
    <div class="flex flex-col justify-center">
      <Character character={pet}></Character>
      <button class="btn mt-2" on:click={() => sellPet(pet)}> Sell </button>
    </div>
  {/each}
</div>
