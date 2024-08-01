<script type="ts">
  export let category_name = {};
  export let category_explore_all;
</script>

<div class="relative group">
  <h2 class="ml-20 mb-2">
    {category_name}
    <div class="absolute ml-auto inset-1 flex flex-row items-left justify-left">
      <span
        class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-slideRight"
        >{category_explore_all}</span
      >
    </div>
  </h2>
</div>
