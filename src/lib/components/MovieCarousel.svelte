<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";

  export let titles: TitleInfo[];
  // console.log(data);
</script>

<div class="w-full h-auto carousel relative overflow-visible y-2">
  {#each titles as item}
    <div class="carousel-item px-px transition ease-in-out delay-150 hover:scale-150 duration-300 z-0 hover:z-50">
      <img 
        class="object-fit w-20 h-full "
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.original_name}
      />
    </div>
  {/each}
</div>
