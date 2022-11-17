<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let tagsList;
  let open = false;

  function tagSelected(t) {
    dispatch("tagSelected", t);
    open = false;
  }
</script>

<div class="container">
  <div>
    <button on:click={() => (open = !open)}> + </button>
  </div>
  {#if open}
    {#each tagsList as tag}
      <div>
        <button on:click={() => tagSelected(tag)}>{tag.name}</button>
      </div>
    {/each}
  {/if}
</div>

<style>
  .container {
    max-width: 100%;
    height: 300px;
    margin: 20px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container button {
    margin: 10px;
  }
</style>
