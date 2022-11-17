<script>
  import data from "../../data/data.json";
  import Motion from "svelte-motion/src/motion/MotionSSR.svelte";
  import AnimatePresence from "svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte";

  const userList = data.USERS;

  let isOn = 0;
  const direction = 1;
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  const wrap = (a, l) => {
    const u = a % l;
    if (u < 0) {
      return u + l;
    }
    return u;
  };
  let c = 1;
</script>

<AnimatePresence
  list={[
    {
      key: isOn,
      text: userList[wrap(isOn, userList.length)],
    },
  ]}
  let:item
>
  <Motion
    let:motion
    custom={c}
    {variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    }}
  >
    <div class="container">
      <div use:motion class="card">
        <div class="containerPicture">
          <img class="picture" src={item.text.avatar} alt="example" />
        </div>
        <div>
          <h2>
            userName: {item.text.username},
          </h2>
          <h3>
            compétence:
            {#each item.text.technologies as technologie}
              <li>{technologie.name}</li>
            {/each}
          </h3>
          <p>
            email: {item.text.email},
          </p>
          <p>
            birthdate: {item.text.birthdate},
          </p>
        </div>
      </div>
    </div>
  </Motion>
</AnimatePresence>
<div>
  <button
    on:click={() => {
      c = -1;
      isOn--;
    }}>{"prev"}</button
  >
  <button
    on:click={() => {
      c = 1;
      isOn++;
    }}>{"next"}</button
  >
</div>

<style>
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
</style>
