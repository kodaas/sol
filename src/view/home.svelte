<script lang="ts">
  import Cards from "../lib/cards.svelte";
  import Nav from "../lib/nav.svelte";
  import Npk from "../lib/npk.svelte";
</script>

<main>
  <Cards />
</main>

<aside>
  <Nav />
  <div class="spacer" />
  <Npk />
</aside>

<style>
  main {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  aside {
    width: 100%;
    height: 100%;
    border-left: 2px solid var(--black);
    padding: 0.5rem;
    background-color: var(--white);
  }

  .spacer {
    width: 100%;
    height: 2rem;
  }
</style>