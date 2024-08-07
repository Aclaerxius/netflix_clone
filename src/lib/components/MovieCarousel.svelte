<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";
  export let category_name: string = "";
  export let category_link: string = "";
  export let category_explore_all: string = "Explore All";
  export let titles: TitleInfo[];

  function handleMouseEnter(event: MouseEvent, item: TitleInfo) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    const coordsAndSize = {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
      imageUrl: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
      title: item.original_name,
    };

    openModal(coordsAndSize);
  }

  export let openModal: (coordsAndSize: {
    x: number;
    y: number;
    width: number;
    height: number;
    imageUrl: string;
    title: string;
  }) => void;
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
  {#each titles as item}
    <div
      class="carousel-item left-10 px-0.5 h-full"
      on:mouseenter={(event) => handleMouseEnter(event, item)}
      aria-label={item.original_name}
      aria-hidden="true"
    >
      <img
        class="w-fit h-full rounded"
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.original_name}
      />
    </div>
  {/each}
</div>
