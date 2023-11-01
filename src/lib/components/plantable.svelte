<script lang="ts">
  import gsap from "gsap";
  import { plantables, type IPlantable } from "../models/plantables";
  import Dirt from "./dirt.svelte";
  import { createFarm } from "$lib/stores/farm";

  export let plant: IPlantable = plantables.dirt;
  export let row = 0;
  export let col = 0;
  export let selectedPlant: IPlantable;
  const farm = createFarm();

  let stage = "";
  let time = 0;

  $: _stage = () => {
    if (time > plant.stages.wilted.time) {
      stage = "wilted";
      return plant.stages.wilted.src;
    }
    if (time > plant.stages.ripe.time) {
      stage = "ripe";
      return plant.stages.ripe.src;
    }
    if (time > plant.stages.growing.time) {
      stage = "growing";
      return plant.stages.growing.src;
    }
    stage = "seed";
    return "seed.svg";
  };

  export let id = "";
  function anim() {
    gsap.to(".plant" + id, {
      scale: 1.25,
      duration: 2,
      yoyo: true,
      repeat: -1, // makes it loop infinitely
    });
  }

  let interval: number;
  function checkIfWeCanPlant() {
    if (plant.name === "dirt") {
      farm.updatePlot(row, col, selectedPlant);
      setTimeout(() => {
        time = 0;
        anim();
        interval = setInterval(() => time++, 1000);
      }, 0);
    } else {
      farm.harvest(row, col);
      clearInterval(interval);
    }
  }
</script>


<button class="plot" on:click={() => checkIfWeCanPlant()}>
  <Dirt />
  {#if plant.name !== "dirt"}
    <img
      class={"plant" + id}
      width="24px"
      height="24px"
      src={_stage()}
      alt=""
    />
  {/if}
</button>


<!-- <img width="24px" height="24px" src={stage()} alt="" /> -->

<style>
  img {
    position: absolute;
    padding-bottom: 1.5rem;
    z-index: 10;
  }

  .plot {
    width: 40px;
    height: 40px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
</style>