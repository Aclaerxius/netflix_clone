<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";
  export let title: TitleInfo[];
  export let isOpen = false;
  export let genres: TitleInfo[];
</script>

{#if isOpen}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-in-out transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
  >
    <div class="bg-black p-8 rounded-lg shadow-xl w-full max-w-md">
      <h2 class="text-xl font-bold mb-4">{title}</h2>
      <!-- Placeholder for image -->
      <img
        src={`https://image.tmdb.org/t/p/w500${title.backdrop_path}`}
        alt={title.original_name}
        class="w-full h-auto"
      />

      <!-- Buttons and other elements -->
      <button class="btn btn-primary mt-4">Button Example</button>

      <ul class="list-disc pl-5 mt-4">
        {#each genres as genre}
          <li>{genre}</li>
        {/each}
      </ul>
    </div>
  </div>
{/if}
