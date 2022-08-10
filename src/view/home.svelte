<script lang="ts">
  // import Router from "svelte-spa-router";
  import Cards from "../lib/cards.svelte";
  import Nav from "../lib/nav.svelte";
  import Npk from "../lib/npk.svelte";
  import Detail from "./detail.svelte";

  // let prefix = "/"
  // let routes = {
  //   "/:section": Detail
  // }
</script>

<main>
  <!-- <Cards /> -->
  <Detail />
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
    overflow-y: scroll;
  }

  aside {
    width: 100%;
    height: 100%;
    border-left: 2px solid var(--black);
    padding: 0.7rem;
    background-color: var(--white);
  }

  .spacer {
    width: 100%;
    height: 2rem;
  }
</style>
