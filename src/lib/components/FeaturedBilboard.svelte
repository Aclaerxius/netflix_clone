<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";

  export let title: TitleInfo;
</script>

{#if title}
  <div class="overflow-auto w-screen bg-local bg-center bg-cover bg-no-repeat">
    <div class="relative w-full h-full">
      <img
        class="w-full"
        src={`https://image.tmdb.org/t/p/w500${title.backdrop_path}`}
        alt={title.original_name}
      />
      <div
        class="absolute top-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-80"
      ></div>
      <div
        class="absolute top-0 w-full h-full bg-gradient-to-t from-[#141414] to-transparent"
      ></div>
    </div>
    <div class="absolute w-30 top-1/3 text-left ml-10">
      <h1 class="text-5xl font-bold">{title.original_name}</h1>
      <p class="mb-5 w-1/2">{title.overview}</p>
      <button
        class="btn btn-sm text-black bg-white hover:bg-slate-200 hover:text-black"
        >► Play</button
      >
    </div>
  </div>
{/if}
