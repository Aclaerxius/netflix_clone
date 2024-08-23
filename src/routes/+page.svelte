<script lang="ts">
  import MovieCarousel from "$lib/components/MovieCarousel.svelte";
  import CarouselModal from "$lib/components/CarouselModal.svelte";
  import FeaturedBilboard from "$lib/components/FeaturedBilboard.svelte";
  import type { TitleInfo } from "$lib/services/tmdbService";
  import type { PageData } from "./$types";

  export let data: PageData;

  let isOpen = false;
  let modalX = 0;
  let modalY = 0;
  let modalWidth = 0;
  let modalHeight = 0;
  let selectedTitle: TitleInfo | null = null;

  function openModal(coordsAndSize: {
    x: number;
    y: number;
    width: number;
    height: number;
    imageUrl: string;
    title: string;
  }) {
    isOpen = true;
    modalX = coordsAndSize.x;
    modalY = coordsAndSize.y;
    modalWidth = coordsAndSize.width;
    modalHeight = coordsAndSize.height;
    selectedTitle = {
      original_name: coordsAndSize.title,
      original_language: "en",
      overview: "No overview available.",
      genres: ["Unknown"],
      backdrop_path: coordsAndSize.imageUrl.replace(
        "https://image.tmdb.org/t/p/w500",
        ""
      ),
      poster_path: "",
      id: 0,
      title: coordsAndSize.title,
    };
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Netflix clone" />
</svelte:head>

<div class="container">
  <div class="relative text-lg font-regular">
    <FeaturedBilboard title={data.titleOriginals[0]} />
    <!-- Carousels -->
    <div class="relative bottom-0 -mt-40 overflow-hidden">
      <div class="mb-5">
        <MovieCarousel
          category_name="Netflix Original"
          titles={data.titleOriginals}
          {openModal}
        />
      </div>

      <div class="mb-5">
        <MovieCarousel
          category_name="Top Rated"
          titles={data.titleTopRated}
          {openModal}
        />
      </div>

      <div class="mb-5">
        <MovieCarousel
          category_name="Action"
          titles={data.titleAction}
          {openModal}
        />
      </div>

      <div class="mb-5">
        <MovieCarousel
          category_name="Comedy"
          titles={data.titleComedy}
          {openModal}
        />
      </div>

      <div class="mb-5">
        <MovieCarousel
          category_name="Horror"
          titles={data.titleHorror}
          {openModal}
        />
      </div>

      <div class="mb-5">
        <MovieCarousel
          category_name="Romance"
          titles={data.titleRomance}
          {openModal}
        />
      </div>
    </div>
  </div>
  {#if isOpen && selectedTitle}
    <CarouselModal
      {isOpen}
      x={modalX}
      y={modalY}
      width={modalWidth}
      height={modalHeight}
      {selectedTitle}
    />
  {/if}
</div>
