<script>
  import "./styles.css";
  import Header from "$lib/components/Header.svelte";
</script>

<div>
  <main>
    <Header />
    <slot />
  </main>
</div>
