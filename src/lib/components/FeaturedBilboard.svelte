<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";
  import FeaturedModal from "$lib/components/FeaturedModal.svelte";
  import { writable } from "svelte/store";

  export let title: TitleInfo;
  const isOpen = writable(false);

  function openModal() {
    $isOpen = true;
  }
  function handleCloseModal() {
    $isOpen = false;
  }
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
        <button
          on:click={openModal}
          class="rounded overflow-hidden justify-center inline-flex px-7 py-2 cursor-pointer font-medium text-white text-lg bg-gray-500/60 hover:bg-gray-500/40 z-10"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              data-icon="CircleIStandard"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                fill="currentColor"
              ></path></svg
            >
          </div>
          &nbsp; More info</button
        >
      </div>
    </div>
  </div>
{/if}

<FeaturedModal
  bind:isOpen={$isOpen}
  posterPath={title.backdrop_path}
  on:closeModal={handleCloseModal}
/>
