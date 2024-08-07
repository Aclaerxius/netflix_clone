<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";

  export let isOpen = false;
  export let x = 0;
  export let y = 0;
  export let width = 0;
  export let height = 0;
  export let selectedTitle: TitleInfo | null = null;
</script>

{#if isOpen && selectedTitle}
  <div
    class="fixed z-50 flex items-center justify-center transition-all duration-500 ease-in-out transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
    style="left: {x}px; top: {y}px; width: {width}px; height: {height}px;"
  >
    <div class="bg-black p-8 rounded-lg shadow-xl w-full max-w-md">
      <h2 class="text-xl font-bold mb-4">{selectedTitle.original_name}</h2>

      <img
        src={`https://image.tmdb.org/t/p/w500${selectedTitle.backdrop_path}`}
        alt={selectedTitle.original_name}
        class="w-full h-auto"
      />

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
