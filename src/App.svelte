<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./view/home.svelte";
  import Login from "./view/login.svelte";

  let routes = {
    "/home": Home,
    "/home/*": Home,
    "/login": Login,

    "*": Login,
  };
</script>

<Router {routes} />
<!-- <Home /> -->
