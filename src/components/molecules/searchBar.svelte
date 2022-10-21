<script>
  import data from "../../data/data.json";
  import InputCustom from "../atoms/InputCustom.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let filterName = [];

  function listenFilterName(event) {
    filterName = event.detail
      ? data.USERS.filter((person) => person.username.includes(event.detail))
      : data.USERS;
    dispatch("listenningFilterName", {
      filterName,
    });
  }
</script>

<div class="containerSearchBar">
  <InputCustom on:inputChange={listenFilterName} />
</div>

<style>
  .containerSearchBar {
    height: 25px;
    max-width: 100%;
    margin: 10px;
    padding: 5px;
    display: flex;
    justify-content: center;
    border: solid 1px red;
  }
</style>
