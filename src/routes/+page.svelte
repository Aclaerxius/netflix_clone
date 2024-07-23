<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import MovieCarousel from "$lib/components/MovieCarousel.svelte";
  import FeaturedBilboard from "$lib/components/FeaturedBilboard.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Netflix clone" />
</svelte:head>

<Header />

<div class="container mx-auto">
  <div class="relative -top-40 mt-20 text-lg font-regular">
    <FeaturedBilboard title={data.titlesOriginals[0]} />

    <div class="mb-5">
      <h2 class="mb-2">Netflix Original</h2>
      <MovieCarousel titles={data.titlesOriginals} />
    </div>

    <div class="mb-5">
      <h2 class="mb-2">Top Rated</h2>
      <MovieCarousel titles={data.titlesTopRated} />
    </div>

    <div class="mb-5">
      <h2 class="mb-2">Action</h2>
      <MovieCarousel titles={data.titlesAction} />
    </div>

    <div class="mb-5">
      <h2 class="mb-2">Comedy</h2>
      <MovieCarousel titles={data.titlesComedy} />
    </div>

    <div class="mb-5">
      <h2 class="mb-2">Horror</h2>
      <MovieCarousel titles={data.titlesHorror} />
    </div>

    <div class="mb-5">
      <h2 class="mb-2">Romance</h2>
      <MovieCarousel titles={data.titlesRomance} />
    </div>
  </div>
</div>
