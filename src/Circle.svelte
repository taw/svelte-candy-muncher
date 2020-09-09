<script>
  import {foods, randomFood} from './foods.js';
  export let score;
  let food = "";
  let bounce = false;
  let happy = false;
  let poopy = false;
  $: hideFood = (food === "");

  function removeFood() {
    food = "";
    bounce = false;
    let randomDelay = 3000 + Math.random() * 10000;
    setTimeout(chooseRandomFood, randomDelay);
  }

  function chooseRandomFood() {
    bounce = true;
    food = randomFood();
    setTimeout(removeFood, 3000);
  }

  function handleClick() {
    if (food === "") return;

    if (foods[food] > 0) {
      happy = true;
      setTimeout(() => happy=false, 1000);
    } else {
      poopy = true;
      setTimeout(() => poopy=false, 1000);
    }
    score += foods[food];
    removeFood();
  }

  setTimeout(chooseRandomFood, Math.random() * 20000);
</script>

<style>
</style>

<div class:hideFood class="circle" on:click={handleClick}>
  <span class="circle-contents" class:happy class:poopy class:bounce>
    <span class="icon">{food || "🍪"}</span>
  </span>
</div>
