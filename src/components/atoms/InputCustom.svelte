<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  $: searchName = "";

  function listenInput(event) {
    dispatch("inputChange", searchName);
  }
</script>

<input on:input={listenInput} bind:value={searchName} />
