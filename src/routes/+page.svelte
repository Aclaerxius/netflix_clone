<script lang="ts">
  import MovieCarousel from "$lib/components/MovieCarousel.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Netflix clone" />
</svelte:head>

<section>
  <div
    class="relative bg-local bg-center bg-cover bg-no-repeat w-full h-svh"
    style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg); "
  ></div>

  <div class="w-full absolute top-0 left-0 text-left ml-10 align-middle">
    <h1 class="text-5xl font-bold">Title</h1>
    <p class="mb-5">Info</p>
    <button
      class="btn btn-sm text-black bg-white hover:bg-slate-200 hover:text-black"
      >► Play</button
    >
  </div>
  <div
    class="absolute bg-gradient-to-r from-black to-transparent opacity-80"
  ></div>
</section>

<MovieCarousel titles={data.titles} />

<sectionNewOnNetflix class="z-2" style="margin-top: -100px">
  <h2>New on Netflix</h2>
  <div class="carousel w-full max-h-[50vh]">
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        alt="Burger"
      />
    </div>
  </div>
</sectionNewOnNetflix>

<h2>Action Movies</h2>
<sectionActionMovies>
  <div class="carousel max-h-[50vh]">
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        alt="Burger"
      />
    </div>
  </div>
</sectionActionMovies>

<h2>Top Rated</h2>
<sectionTopRated>
  <div class="carousel max-h-[50vh]">
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        alt="Burger"
      />
    </div>
  </div>
</sectionTopRated>
