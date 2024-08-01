<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";
  import Modal from "./Modal.svelte"; // Ensure the path matches your project structure

  export let title: TitleInfo[];
  export let category_name: string = "";
  export let category_link: string = "";
  export let category_explore_all: string = "Explore All";

  let showModal = false;
  let hoveredItem = false;

  function handleMouseEnter(item) {
    hoveredItem = item;
    showModal = true;
  }

  function handleMouseLeave() {
    showModal = false;
  }
</script>

<div class="relative group">
  <a href={category_link}>
    <h2 class="ml-20 mb-2">
      {category_name}
      <div
        class="inline-block ml-auto inset-1 items-left justify-left opacity-0 transition-opacity group-hover:animate-slideRight group-hover:opacity-100"
      >
        <span class="text-sm text-blue-300">
          {category_explore_all} &gt;
        </span>
      </div>
    </h2></a
  >
</div>
<div class="carousel h-36 w-full overflow-">
  {#each title as item}
    <div
      class="carousel-item left-10 px-0.5 h-full"
      on:mouseenter={() => handleMouseEnter(item)}
      on:mouseleave={handleMouseLeave}
    >
      <img
        class="w-fit h-full rounded"
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.original_name}
      />
    </div>
  {/each}
</div>

<Modal
  isOpen={showModal}
  title={hoveredItem?.original_name}
  genres={hoveredItem?.genre_ids}
/>
