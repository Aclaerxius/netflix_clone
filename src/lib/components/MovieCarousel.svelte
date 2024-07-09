<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";

  export let titles: TitleInfo[];
  // console.log(data);
</script>

<div class="w-full h-96 bg-white carousel rounded-box py-2 px-1">
  {#each titles as item}
    <div class="carousel-item h-full rounded-box px-1">
      <img
        class="h-full w-72 object-cover rounded-box"
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.original_name}
      />
    </div>
  {/each}
</div>
