<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";

  export let title: TitleInfo;
</script>

{#if title}
  <div
    class="overflow-auto top-0 w-screen bg-local bg-center bg-cover bg-no-repeat"
  >
    <div class="relative w-full h-full">
      <img
        class="w-full"
        src={`https://image.tmdb.org/t/p/w500${title.backdrop_path}`}
        alt={title.original_name}
      />
      <div
        class="absolute top-0 w-full h-full bg-gradient-to-r from-black from30% via-40% to-transparent to-60% opacity-50"
      ></div>
      <div
        class="absolute top-0 w-full h-full bg-gradient-to-t from-black from-10% via-20% to-transparent to-30%"
      ></div>
      <div class="absolute w-30 z-10 top-1/3 text-left ml-10">
        <h1 class="text-5xl font-bold">{title.original_name}</h1>

        <p class="mb-5 w-1/2 text-sm">{title.overview}</p>
        <button
          class="rounded overflow-hidden justify-center inline-flex px-7 py-2 cursor-pointer font-medium text-black text-lg bg-white hover:bg-slate-200"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            data-icon="PlayStandard"
            aria-hidden="true"
            ><path
              d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
              fill="currentColor"
            ></path></svg
          >&nbsp; Play</button
        >
      </div>
    </div>
  </div>
{/if}
