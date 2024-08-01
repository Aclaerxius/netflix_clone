<script lang="ts">
  import MovieCarousel from "$lib/components/MovieCarousel.svelte";
  import FeaturedBilboard from "$lib/components/FeaturedBilboard.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
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
          title={data.titleOriginals}
        />
      </div>

      <div class="mb-5">
        <MovieCarousel category_name="Top Rated" title={data.titleTopRated} />
      </div>

      <div class="mb-5">
        <MovieCarousel category_name="Action" title={data.titleAction} />
      </div>

      <div class="mb-5">
        <MovieCarousel category_name="Comedy" title={data.titleComedy} />
      </div>

      <div class="mb-5">
        <MovieCarousel category_name="Horror" title={data.titleHorror} />
      </div>

      <div class="mb-5">
        <MovieCarousel category_name="Romance" title={data.titleRomance} />
      </div>
    </div>
  </div>
</div>
