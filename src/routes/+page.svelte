<script lang="ts">
 import MovieCarousel from "$lib/components/MovieCarousel.svelte";
 import TrailerBilboard from "$lib/components/TrailerBilboard.svelte";
  import type { PageData } from "./$types";
  import { options } from "$lib/services/fetch";

  export let data: PageData;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Netflix clone" />
</svelte:head>

<section>
	<TrailerBilboard title={data.titlesOriginals[0]} />
</section>

<h2>Netflix Originals</h2>
<MovieCarousel titles={data.titlesOriginals} />
<h2>Top Rated</h2>
<MovieCarousel titles={data.titlesTopRated} />
<h2>Action Movies</h2>
<MovieCarousel titles={data.titlesAction} />
<h2>Comedy Movies</h2>
<MovieCarousel titles={data.titlesComedy} />
<h2>Horror Movies</h2>
<MovieCarousel titles={data.titlesHorror} />
<h2>Romance Movies</h2>
<MovieCarousel titles={data.titlesRomance} />



