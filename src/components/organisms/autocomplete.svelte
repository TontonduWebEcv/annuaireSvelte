<script>
  import SearchBar from "../molecules/SearchBar.svelte";
  import ResultSearchBar from "../molecules/ResultSearchBar.svelte";

  let filterList = [];

  function listenInputLog(event) {
    let filterName = event.detail;
    filterList = Object.values(filterName);
  }
</script>

<SearchBar on:listenningFilterName={listenInputLog} />
<ResultSearchBar {filterList} />
