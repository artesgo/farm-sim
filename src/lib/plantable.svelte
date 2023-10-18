<script lang="ts">
  import gsap from 'gsap';
  import { onMount } from "svelte";
  import { plantables, type IPlantable } from "./plantables";
  export let plant: IPlantable = plantables.dirt;


  let time = 0;
  onMount(() => {
    // start timer
    setInterval(() => time++, 1000);
  });
  $: stage = () => {
    if (time > plant.stages.wilted.time) {
      return plant.stages.wilted.src;
    }
    if (time > plant.stages.ripe.time) {
      return plant.stages.ripe.src;
    }
    if (time > plant.stages.growing.time) {
      return plant.stages.growing.src;
    }
    return 'seed.svg';
  }

  export let id = '';
  onMount(() => {
    anim();
  });
  function anim() {
    gsap.to('.plant' + id, {
      scale: 1.25,
      duration: 2,
      yoyo: true,
      repeat: -1, // makes it loop infinitely
    });
  }

</script>

<img
  class="{'plant' + id}"
  width="24px"
  height="24px"
  src={stage()}
  alt=""
/>
<!-- <img width="24px" height="24px" src={stage()} alt="" /> -->

<style>
  img {
    position: absolute;
    padding-bottom: 1.5rem;
    z-index: 10,
  }
</style>