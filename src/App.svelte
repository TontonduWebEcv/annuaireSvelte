<script>
  import Motion from "svelte-motion/src/motion/MotionSSR.svelte";
  import AnimatePresence from "svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte";
  import Autocomplete from "./components/organisms/autocomplete.svelte";
  import Tags from "./components/atoms/Tags.svelte";
  import SelectedTag from "./components/atoms/SelectedTag.svelte";

  const tagsList = ["Php", "Js", "Html"];
  $: currentTags = [];

  $: displayedTagInTab = tagsList.filter((t) => !currentTags.includes(t));

  function addTag(event) {
    currentTags = [...currentTags, event.detail];
  }

  function deleteTag(event) {
    currentTags = currentTags.filter((t) => t != event.detail);
  }

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

<main>
  <Autocomplete />

  <SelectedTag {currentTags} on:deleteTag={deleteTag} />
  <Tags tagsList={displayedTagInTab} on:tagSelected={addTag} />

  <!-- {#each filterList as filterName}
    <AnimatePresence
      list={[
        {
          key: isOn,
          text: filterName[wrap(isOn, filterName.length)],
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
        <div use:motion class="card">
          <div>
            <img src={item.text.avatar} alt="example" />
          </div>
          <div>
            <h2>
              userName: {item.text.username},
            </h2>
            <p>
              email: {item.text.email},
            </p>
            <p>
              birthdate: {item.text.birthdate},
            </p>
          </div>
        </div>
      </Motion>
    </AnimatePresence>
  {/each} -->
  <!-- <div>
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
  </div> -->
</main>
