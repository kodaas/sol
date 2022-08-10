<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./view/home.svelte";
  import Login from "./view/login.svelte";

  let routes = {
    "/": Home,
    // "/*": Home,
    "/login": Login,

    "*": Login,
  };
</script>

<Router {routes} />
<!-- <Home /> -->
