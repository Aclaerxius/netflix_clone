<script lang="ts">
    import { onMount } from 'svelte';
    import { getHomeList } from '$lib/services/tmdbService.ts';
  
    let homeList: any[] = [];
  
    onMount(async () => {
      homeList = await getHomeList();
    });
  </script>
  
  
  <div>
    {#each homeList as item (item.slug)}
      <h2>{item.title}</h2>
     
    {/each}
  </div>