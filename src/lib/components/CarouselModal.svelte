<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";
  import { onDestroy } from "svelte";

  export let isOpen = false;
  export let x = 0;
  export let y = 0;
  export let width = 0;
  export let height = 0;
  export let selectedTitle: TitleInfo | null = null;
  let modalStyle = "";
  let initialPositionSet = false;

  $: modalStyle = `left: ${x}px; top: ${y}px; width: ${width}px; height: ${height}px;`;

  $: {
    if (isOpen && !initialPositionSet) {
      initialPositionSet = true;
      setTimeout(() => {
        modalStyle = `left: ${x}px; top: ${y}px; width: ${width}px; height: calc(${height}px + 100px);`;
        initialPositionSet = false;
      }, 500);
    }
  }

  function adjustModalPosition() {
    const scrollY = window.scrollY;
    modalStyle = `left: ${x}px; top: ${y + scrollY}px; width: ${width}px; height: ${height}px;`;
  }

  window.addEventListener("scroll", adjustModalPosition);
  onDestroy(() => {
    window.removeEventListener("scroll", adjustModalPosition);
  });
</script>

{#if isOpen && selectedTitle}
  <div
    class="absolute z-20 flex items-center justify-center transition-all duration-500 ease-in-out transform scale-90 opacity-0 hover:scale-150 hover:opacity-100"
    style={modalStyle}
  >
    <div class="bg-black p-8 rounded-lg shadow-xl w-full max-w-md">
      <img
        src={`https://image.tmdb.org/t/p/w500${selectedTitle.backdrop_path}`}
        alt={selectedTitle.original_name}
        class="w-full h-auto rounded"
      />

      <h2
        class="text-xl font-bold mb-4 absolute top-0 left-1/4 right-0 shadow-sm"
      >
        {selectedTitle.original_name}
      </h2>
      <!-- Buttons and other elements -->
      <button class="btn btn-primary mt-4">Button Example</button>

      {#if selectedTitle && selectedTitle.genres}
        <ul class="list-disc pl-5 mt-4">
          {#each selectedTitle.genres as genre}
            <li>{genre}</li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
{/if}
