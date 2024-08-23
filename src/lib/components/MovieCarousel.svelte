<script lang="ts">
  import type { TitleInfo } from "$lib/services/tmdbService";
  import { onMount, onDestroy } from "svelte";
  export let category_name: string = "";
  export let category_link: string = "";
  export let category_explore_all: string = "Explore All";
  export let titles: TitleInfo[];

  let carouselContainer: HTMLDivElement;
  let leftArrow: HTMLButtonElement;
  let rightArrow: HTMLButtonElement;
  let delayHandler: NodeJS.Timeout;

  onMount(() => {
    leftArrow = document.getElementById("leftArrow") as HTMLButtonElement;
    rightArrow = document.getElementById("rightArrow") as HTMLButtonElement;
    carouselContainer = document.getElementById(
      "carouselContainer"
    ) as HTMLDivElement;

    leftArrow.addEventListener("click", () => {
      carouselContainer.scrollLeft -= carouselContainer.offsetWidth;
    });

    rightArrow.addEventListener("click", () => {
      carouselContainer.scrollLeft += carouselContainer.offsetWidth;
    });
  });

  function handleMouseEnter(event: MouseEvent | FocusEvent, item: TitleInfo) {
    const target = event.currentTarget as HTMLElement;
    clearTimeout(delayHandler);

    delayHandler = setTimeout(() => {
      if (
        !target.classList.contains("nav-button-left") &&
        !target.classList.contains("nav-button-right")
      ) {
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
    }, 500);

    if (
      target.classList.contains("nav-button-left") ||
      target.classList.contains("nav-button-right")
    ) {
      return;
    }

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
<div class="relative">
  <div id="carouselContainer" class="carousel h-36 w-full overflow-">
    {#each titles as item}
      <div class="carousel-item cursor-pointer left-10 px-0.5 h-full">
        <img
          on:mouseover={(event) => handleMouseEnter(event, item)}
          on:focus={(event) => handleMouseEnter(event, item)}
          aria-label={item.original_name}
          aria-hidden="true"
          class="w-fit h-full rounded"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          alt={item.original_name}
        />
      </div>
    {/each}
  </div>
  <!-- Navigation Arrows -->
  <button
    id="leftArrow"
    class="absolute left-0 top-1/2 font-bold transform -translate-y-1/2 z-10 w-12 h-full bg-black opacity-0 flex items-center justify-center cursor-pointer hover:bg-black/60 hover:opacity-100 nav-button-left"
  >
    &lt;
  </button>
  <button
    id="rightArrow"
    class="absolute right-0 top-1/2 font-bold transform -translate-y-1/2 z-10 w-12 h-full bg-black opacity-0 flex items-center justify-center cursor-pointer hover:bg-black/60 hover:opacity-100 nav-button-right"
  >
    &gt;
  </button>
</div>
