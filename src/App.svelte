<script>
  import Circle from "./Circle.svelte"

  let score = 1000;

</script>

<style>
</style>

<div class="container">
  <Circle bind:score />
  <Circle bind:score />
  <Circle bind:score />
  <Circle bind:score />

  <Circle bind:score />
  <Circle bind:score />
  <Circle bind:score />
  <Circle bind:score />

  <Circle bind:score />
  <Circle bind:score />
  <Circle bind:score />
  <Circle bind:score />

  <Circle bind:score />
  <Circle bind:score />
  <Circle bind:score />
  <Circle bind:score />
</div>

<div class="score">Score: {score}</div>
