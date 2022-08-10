<script lang="ts">
  import { push } from "svelte-spa-router";

  let name;
  let id;

  let submit = () => {
    console.log("Submited", name, id);
    name = "";
    id = "";
    push("/home");
  };
</script>

<main>
  <h2>Monitor your Soil's Health in one Place</h2>
  <img
    src="./icon/DrawKit Vector Illustration Ecology & Environment (4).svg"
    alt="Illustration"
  />
</main>

<aside>
  <form on:submit|preventDefault={submit} action="">
    <label for="name">User Name</label>
    <input
      type="text"
      name="name"
      id="name"
      bind:value={name}
      placeholder="Enter your name"
    />

    <label for="id">Device ID</label>
    <input
      type="password"
      name="id"
      id="id"
      bind:value={id}
      placeholder=". . . . . ."
    />

    <button type="submit">Login</button>
  </form>
</aside>

<style>
  main {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    justify-items: center;
    align-items: center;
    overflow-y: scroll;
  }

  main h2 {
    font-size: 3.5rem;
    line-height: 4rem;
  }

  aside {
    width: 100%;
    height: 100%;
    border-left: 2px solid var(--black);
    padding: 0.7rem;
    background-color: var(--white);
    display: grid;
    place-items: center;
  }

  aside form {
    width: 80%;
    /* height: 500px; */
    padding: 2rem 1.5rem;
    border: 2px solid var(--black);
    box-shadow: 3px 3px 0px var(--black);
    border-radius: 10px;
    /* background-color: brown; */
  }

  aside form input {
    width: 100%;
    font-size: 1em;
    padding: 0.5em;
    border-radius: 5px;
  }

  aside form input:first-of-type {
    margin-bottom: 1.5rem;
  }

  aside form label {
    display: block;
    margin-bottom: 0.5rem;
  }

  aside form button {
    display: block;
    margin: 0 auto;
    margin-top: 1.5rem;
    padding: 0.8em;
    font-size: 1em;
    font-family: "Mabry", monospace;
    background-color: var(--white);
    border: 2px solid var(--black);
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
  }

  aside form button:hover {
    box-shadow: 3px 3px 0px var(--black);
    /* transform: translateX(-8px);
    transform: translateY(-8px); */
    transform-origin: bottom right;
  }

  /* .spacer {
    width: 100%;
    height: 2rem;
  } */
</style>
