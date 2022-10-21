<script>
  import ContainerResultSearch from "../atoms/ContainerResultSearch.svelte";

  export let filterList = [];
</script>

<ContainerResultSearch>
  <ul class="container">
    {#each filterList as filterName}
      {#each filterName as user}
        <li class="card">
          <div>
            <img class="logo" src={user.avatar} alt={user.username} />
          </div>
          <div>
            <h2>
              {user.username},
            </h2>
          </div>
        </li>
      {/each}
    {/each}
  </ul>
</ContainerResultSearch>

<style>
  .container {
    position: relative;
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .card {
    width: 100%;
    height: 70px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid white;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
</style>
