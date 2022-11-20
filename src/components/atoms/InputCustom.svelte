<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let searchName;

  function listenInput() {
    dispatch("inputChange", searchName);
  }
</script>

<input bind:value={searchName} on:input={listenInput} />
