<script>
  import data from "../../data/data.json";

  const userList = data.USERS;

  let position = 0;
  $: currentPosition = userList[position];

  function next() {
    if (position < userList.length - 1) {
      position++;
    }
  }
  function prev() {
    if (position > 0) {
      position--;
    }
  }
</script>

<button on:click={next}>Next</button>
<div>
  {currentPosition.username}
</div>
<button on:click={prev}>Precedent</button>

<!-- <style>
  .container {
    max-width: 100%;
    min-height: 25px;
    position: relative;
    border: 1px blue solid;
    display: flex;
    justify-content: center;
    margin: 0 250px 0 250px;
  }
  .card {
    width: 100%;
    height: 450px;
    padding: 5px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
  }
</style> -->
