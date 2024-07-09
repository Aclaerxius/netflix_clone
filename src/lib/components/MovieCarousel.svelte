<script lang="ts">
    import { onMount } from 'svelte';
    import { getTitleInfo } from '$lib/services/tmdbService.ts';
  
    let homeList: any[] = [];
  
    onMount(async () => {
      homeList = await getTitleInfo();
    });
  </script>
  
  
  <div>
    {#each homeList as item (item.slug)}
    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="{item.original_title}" />
      <h2 class="absolute">{item.original_title}</h2>
     
    {/each}
  </div>