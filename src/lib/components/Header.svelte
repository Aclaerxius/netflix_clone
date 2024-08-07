<script>
  import netflixLogo from "$lib/images/netflix_logo.png";
  import userNetflix from "$lib/images/user_netflix.jpg";
  import { onMount, onDestroy } from "svelte";

  let isScrolled = false;

  onMount(() => {
    const handleScroll = () => {
      console.log("Scrolled");
      isScrolled = window.scrollY > 10;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<header
  class="fixed w-full z-40 flex justify-between items-center py-4 px-4 bg-gradient-to-b from-black to-transparent {isScrolled
    ? 'bg-black transition ease-in-out duration-500'
    : 'bg-transparent transition ease-in-out duration-1000'}"
>
  <div>
    <img class="max-h-6" src={netflixLogo} alt="Netflix logo" />
  </div>

  <div>
    <img class="max-h-6 rounded" src={userNetflix} alt="User profile" />
  </div>
</header>
