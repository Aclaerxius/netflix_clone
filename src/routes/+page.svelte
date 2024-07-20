<script lang="ts">
  import Header from "../lib/components/Header.svelte";
  import MovieCarousel from "$lib/components/MovieCarousel.svelte";
  import FeaturedBilboard from "$lib/components/FeaturedBilboard.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Netflix clone" />
</svelte:head>

<div class="flex flex-col">
  <Header />
  <FeaturedBilboard title={data.titlesOriginals[0]} />
  <div class="-top-10 z-20">
    <h2 class="px-8">Netflix Originals</h2>
    <MovieCarousel titles={data.titlesOriginals} />
    <h2 class="px-8">Top Rated</h2>
    <MovieCarousel titles={data.titlesTopRated} />
    <h2 class="px-8">Action Movies</h2>
    <MovieCarousel titles={data.titlesAction} />
    <h2 class="px-8">Comedy Movies</h2>
    <MovieCarousel titles={data.titlesComedy} />
    <h2 class="px-8">Horror Movies</h2>
    <MovieCarousel titles={data.titlesHorror} />
    <h2 class="px-8">Romance Movies</h2>
    <MovieCarousel titles={data.titlesRomance} />
  </div>
</div>
