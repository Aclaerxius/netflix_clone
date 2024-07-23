<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";

  export let titles: TitleInfo[];
</script>

<div class="carousel left-10 h-40 w-full overflow-">
  {#each titles as item}
    <div class="carousel-item left-10 px-1 h-full">
      <img
        class="w-fit h-full rounded"
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.original_name}
      />
    </div>
  {/each}
</div>
