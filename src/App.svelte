<script>
  import data from "./data/data.json";
  import Autocomplete from "./components/organisms/autocomplete.svelte";
  import Tags from "./components/atoms/Tags.svelte";
  import SelectedTag from "./components/atoms/SelectedTag.svelte";
  import Slider from "./components/molecules/Slider.svelte";
  import FakeFetch from "./components/molecules/FakeFetch.svelte";

  const tagsList = data.TECHNOLOGIES;
  const users = data.USERS;
  let currentTags = [];
  let usersCheck = [];

  function getUserCurrentTag(event) {
    usersCheck = [];
    users.map((el) => {
      el.technologies.filter(function (tech) {
        if (tech.name == event.detail.name) usersCheck = [...usersCheck, el];
      });
    });
  }
  // TODO transmettre la donnée au FakeFetch pour mettre à jour la liste de user displayed
  $: console.log("list", usersCheck);

  $: displayedTagInTab = tagsList.filter((t) => !currentTags.includes(t));

  function addTag(event) {
    currentTags = [...currentTags, event.detail];
  }

  function deleteTag(event) {
    currentTags = currentTags.filter((t) => t != event.detail);
  }
</script>

<main>
  <FakeFetch {users} />
  <Tags
    tagsList={displayedTagInTab}
    on:tagSelected={addTag}
    on:filterTag={getUserCurrentTag}
  />
  <SelectedTag {currentTags} on:deleteTag={deleteTag} />
  <Slider />
  <Autocomplete />
</main>
