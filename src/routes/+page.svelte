<script lang="ts">
  import Header from "../lib/components/Header.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Netflix clone" />
</svelte:head>

<Header />

<div class="container mx-auto">
  <h1 class="text-4xl font-bold text-white">Welcome to Netflix!</h1>
  <p class="mt-4 text-gray-600">
    Discover the latest movies, TV shows, and more.
  </p>
  <img
    class="w-full"
    src="https://blogcdn.gmass.co/blog/wp-content/uploads/2020/12/Featured-image-what-is-an-email-header-43kb.png"
    alt=""
  />
  <button
    class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Sign In
  </button>
</div>
