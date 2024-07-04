<script lang="ts">
    import { onMount } from 'svelte';
    import { getHomeList } from './tmdbService.ts';
  
    let homeList: any[] = [];
  
    onMount(async () => {
      homeList = await getHomeList();
    });
  </script>
  
  <!-- Display the fetched data -->
  <div>
    {#each homeList as item (item.slug)}
      <h2>{item.title}</h2>
      <!-- Render more details about each item here -->
    {/each}
  </div>
  