<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let currentTags;

  function currentTag(t) {
    dispatch("deleteTag", t);
  }
</script>

{#each currentTags as tag}
  <button on:click={() => currentTag(tag)}>{tag}</button>
{/each}
