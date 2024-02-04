<script lang="ts">
  import type { ICharacter } from "$lib/battler/character";
  import Character from "$lib/battler/character.svelte";
  import Shop from "$lib/battler/shop.svelte";
  import { enemy, getPlayer, player } from "$lib/battler/player";
  import { getRandomPet } from "$lib/battler/petlist";

  let player1 = getPlayer(player);
  let player2 = getPlayer(enemy);

  player2.add(getRandomPet());
  player2.add(getRandomPet());
  player2.add(getRandomPet());

  function takeTurn() {
    const [attacker] = cleanup($player2);
    const [defender] = cleanup($player1);
    $player1 = attack($player1, attacker, defender);
    $player2 = attack($player2, defender, attacker);
  }

  function attack(
    p1: ICharacter[],
    attacker: ICharacter,
    defender: ICharacter
  ) {
    return p1.map((character) => {
      if (defender.id === character.id) {
        character.damage += attacker.attack;
        character.act = true;
      }

      return character;
    });
  }

  function stopAction(p1: ICharacter[]) {
    return p1.map((character) => {
      character.act = false;
      return character;
    });
  }

  function cleanup(p1: ICharacter[]) {
    return p1.filter((character) => character.health > character.damage);
  }

  let interval = 0;
  let inProgress = false;

  function start() {
    // game loop
    if (!inProgress) {
      player1.resetDamage();
      player2.resetDamage();

      interval = setInterval(() => {
        takeTurn();
        setTimeout(() => {
          $player1 = stopAction($player1);
          $player2 = stopAction($player2);
        }, 1400);
      }, 1500);
    }
    inProgress = true;
  }

  // cleanup when characters are dead
  // end game when no characters left on one team
  // animating the attack
  // character portraits
</script>

<div class="flex">
  <div class="player1 player battler-reverse">
    {#each cleanup($player1) as character}
      <Character {character} reverse></Character>
    {/each}
  </div>
  {#if !inProgress}
    <!-- start button -->
  {/if}
  <div class="player2 player">
    {#each cleanup($player2) as character}
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
