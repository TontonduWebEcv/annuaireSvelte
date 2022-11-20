<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let tagsList;
  let open = false;

  function tagSelected(t) {
    dispatch("tagSelected", t);
    open = false;
  }

  function filterTag(t) {
    dispatch("filterTag", t);
  }
</script>

<div class="container">
  <div>
    {#if tagsList.length != 0}
      <button on:click={() => (open = !open)}> + Ajouter un tag</button>
    {:else}
      <p>Plus de tag à sélectionner</p>
    {/if}
  </div>

  <div class="tags">
    {#if open}
      {#each tagsList as tag}
        <div>
          <button
            on:click={() => {
              tagSelected(tag), filterTag(tag);
            }}>{tag.name}</button
          >
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .container {
    width: 300px;
    height: auto;
    margin: 20px;
    padding: 5px;
  }
  .tags {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 10px;
  }
  .container button {
    margin: 10px;
  }
</style>
