<script lang="ts">
  import type { ICharacter } from "$lib/battler/character";
  import Character from "$lib/battler/character.svelte";
  import Shop from "$lib/battler/shop.svelte";

  let player1: ICharacter[] = [
    { name: "dog", attack: 5, health: 10 },
    { name: "dog", attack: 5, health: 10 },
    { name: "dog", attack: 5, health: 10 },
  ];
  let player2: ICharacter[] = [
    { name: "cat", attack: 5, health: 10 },
    { name: "cat", attack: 5, health: 10 },
    { name: "cat", attack: 5, health: 10 },
  ];

  function takeTurn() {
    // player1 attacks player2
    player1 = attack(player1, player2, 0);
    // player2 attacks player1
    player2 = attack(player2, player1, 0);

    player1 = cleanup(player1);
    player2 = cleanup(player2);
  }

  function attack(p1: ICharacter[], p2: ICharacter[], index = 0) {
    let [attacker] = p2;

    return p1.map((character, i) => {
      if (index === i) {
        character.health -= attacker.attack;
      }

      return character;
    });
  }

  function cleanup(p1: ICharacter[]) {
    return p1.filter((character) => character.health > 0);
  }

  let interval = 0;
  let inProgress = false;

  function start() {
    // game loop
    if (!inProgress) {
      interval = setInterval(() => {
        takeTurn();
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
    {#each player1 as character}
      <Character {character} reverse></Character>
    {/each}
  </div>

  <button
    class="btn btn-primary border rounded-md items-center"
    on:click={start}
  >
    Start
  </button>

  <div class="player2 player">
    {#each player2 as character}
      <Character {character}></Character>
    {/each}
  </div>
</div>

<Shop></Shop>

<div class="flex justify-around">
  <button class="btn btn-primary border rounded-md" on:click={start}>
    Start
  </button>
</div>

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
