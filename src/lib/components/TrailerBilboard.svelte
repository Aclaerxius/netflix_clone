<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";

  export let title: TitleInfo;
  
</script>

  {#if (title)}
  
    <div class="relative overflow-auto w-screen bg-local bg-center bg-cover bg-no-repeat">
      <img 
        class=" "
        src={`https://image.tmdb.org/t/p/w500${title.backdrop_path}`}
        alt={title.original_name}
      />
      <div class="w-full absolute top-0 left-0 text-left ml-10 align-middle">
        <h1 class="text-5xl font-bold">{title.original_name}</h1>
        <p class="mb-5">{title.overview}</p>
        <button
          class="btn btn-sm text-black bg-white hover:bg-slate-200 hover:text-black"
          >► Play</button
        >
      </div>
      <div
        class="absolute bg-gradient-to-r from-black to-transparent opacity-80"
      ></div>
    </div>
  
  {/if}


