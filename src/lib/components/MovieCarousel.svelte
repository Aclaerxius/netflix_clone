<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";

  export let titles: TitleInfo[];
</script>

<div class="carousel h-36 w-full overflow-">
  {#each titles as item}
    <div class="carousel-item left-10 px-0.5 h-full">
      <img
        class="w-fit h-full rounded"
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.original_name}
      />
    </div>
  {/each}
</div>
