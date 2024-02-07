<script lang="ts">
  import type { ICharacter } from "$lib/battler/character";
  import Character from "$lib/battler/character.svelte";
  import Shop from "$lib/battler/shop.svelte";
  import { enemy, getPlayer, player } from "$lib/battler/player";
  import { getRandomPet } from "$lib/battler/petlist";
  import { createWallet } from "$lib/stores/money";

  let player1 = getPlayer(player);
  let player2 = getPlayer(enemy);

  player1.add(getRandomPet());
  player1.add(getRandomPet());
  player1.add(getRandomPet());

  player2.add(getRandomPet());
  player2.add(getRandomPet());
  player2.add(getRandomPet());
  let wallet = createWallet();

  $: player1Alive = $player1.filter((char) => !char.dead);
  $: player2Alive = $player2.filter((char) => !char.dead);

  function takeTurn() {
    const player1Attacker = $player1.find((char) => !char.dead) as ICharacter;
    const player2Attacker = $player2.find((char) => !char.dead) as ICharacter;
    if (!player1Attacker || !player2Attacker) {
      inProgress = !inProgress;
      clearInterval(interval);
      player1.resetDamage();
      player2.resetDamage();
      // give player some money
      wallet.sell(15, 1);
      return;
    }
    player1.attacked(player2Attacker, player1Attacker);
    player2.attacked(player1Attacker, player2Attacker);
  }

  let interval = 0;
  let inProgress = false;

  function start() {
    // game loop
    if (!inProgress) {
      interval = setInterval(() => {
        takeTurn();
        setTimeout(() => {
          player1.stopAction();
          player2.stopAction();
          player1.cleanup();
          player2.cleanup();
        }, 1400);
      }, 1500);
    }
    inProgress = true;
  }
</script>

<div class="flex">
  <div class="player1 player battler-reverse">
    {#each player1Alive as character}
      <Character {character} reverse></Character>
    {/each}
  </div>
  {#if !inProgress}
    <!-- start button -->
  {/if}
  <div class="player2 player">
    {#each player2Alive as character}
      <Character {character}></Character>
    {/each}
  </div>
</div>

<!-- should only show shop and start when battle has ended -->
{#if !inProgress}
  <Shop></Shop>

  <div class="flex justify-around">
    <button class="btn btn-primary border rounded-md" on:click={start}>
      Start
    </button>
  </div>
{/if}

<style>
  .player {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    width: 1200px;
    margin: 0 auto;
  }
  .player1 {
    margin-right: 20px;
  }
  .player2 {
    margin-left: 20px;
  }
  .battler-reverse {
    flex-direction: row-reverse;
  }
</style>
