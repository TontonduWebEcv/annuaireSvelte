<script>
  import data from "./data/data.json";
  import Autocomplete from "./components/organisms/autocomplete.svelte";
  import Tags from "./components/atoms/Tags.svelte";
  import SelectedTag from "./components/atoms/SelectedTag.svelte";
  import Slider from "./components/molecules/Slider.svelte";

  const tagsList = data.TECHNOLOGIES;
  let currentTags = [];

  $: displayedTagInTab = tagsList.filter((t) => !currentTags.includes(t));

  function addTag(event) {
    currentTags = [...currentTags, event.detail];
  }

  function deleteTag(event) {
    currentTags = currentTags.filter((t) => t != event.detail);
  }
</script>

<main>
  <Autocomplete />

  <SelectedTag {currentTags} on:deleteTag={deleteTag} />
  <Tags tagsList={displayedTagInTab} on:tagSelected={addTag} />
  <Slider />
</main>
