<script>
  export let users;
  let fetch = false;
  $: label = fetch ? "En recherche .." : "Découvre les candidats";
  let requestDone = false;

  function launchFetch() {
    fetch = true;
    setTimeout(() => {
      requestDone = true;
      label = "Ces candidats ont été trouvés :";
    }, 2000);
  }
</script>

<button on:click={launchFetch}>{label}</button>

{#if requestDone == true}
  <ul>
    {#each users as user}
      <li>
        {user.username}
        <div>
          {#each user.technologies as techno}
            <div>
              {techno.name}
            </div>
          {/each}
        </div>
      </li>
    {/each}
  </ul>
  <button on:click={() => ((fetch = false), (requestDone = false))}
    >Recommencer la recherche</button
  >
{/if}
