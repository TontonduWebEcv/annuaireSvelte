<script>
  import SearchBar from "../molecules/searchBar.svelte";
  import ResultSearchBar from "../molecules/ResultSearchBar.svelte";

  let filterList = [];

  function listenInputLog(event) {
    let filterName = event.detail;
    filterList = Object.values(filterName);
    console.log("autocomplete", filterList);
  }
</script>

<SearchBar on:listenningFilterName={listenInputLog} />
<ResultSearchBar {filterList} />
