<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade, scale } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  export let isOpen = false;
  export let posterPath = "";
  const dispatch = createEventDispatcher();

  function close() {
    dispatch("closeModal");
  }
</script>

{#if isOpen}
  <div
    transition:fade={{ duration: 200, easing: sineInOut }}
    class="fixed inset-0 bg-black bg-opacity-60 z-40"
  ></div>
  <div
    transition:scale={{ duration: 400, easing: sineInOut, start: 0.8 }}
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div
      transition:fade={{ duration: 300, easing: sineInOut }}
      class="bg-black shadow-lg w-4/5 max-w-full mx-auto relative"
    >
      <div
        class="absolute top-0 w-full h-full bg-gradient-to-t from-black from-10% via-20% to-transparent to-30%"
      ></div>
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="Poster"
        class="w-full mb-4 rounded"
      />

      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-50"
      ></div>

      <button
        class="absolute top-4 right-4 bg-black hover:bg-black/90 text-white font-bold py-2 px-4 rounded z-10"
        on:click={close}>X</button
      >
    </div>
  </div>
{/if}
