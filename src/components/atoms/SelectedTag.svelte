<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let currentTags;

  function currentTag(t) {
    dispatch("deleteTag", t);
  }
</script>

<div class="container">
  {#if currentTags.length == 0}
    <p>Aucun tag sélectionné</p>
  {:else}
    <div>Tag sélectionné :</div>
    <div class="selectedTags">
      {#each currentTags as tag}
        <button on:click={() => currentTag(tag)}>{tag.name}</button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .container {
    margin: 20px;
    width: 500px;
    height: auto;
  }
  .selectedTags {
    position: relative;
    margin: 20px;
    width: 300px;
    height: auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>
