<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";

  export let titles: TitleInfo[];
  // console.log(data);
</script>

<div class="w-full carousel y-2">
  {#each titles as item}
    <div class="carousel-item px-px">
      <img 
        class="object-fit w-20 h-full "
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.original_name}
      />
    </div>
  {/each}
</div>
