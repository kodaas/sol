<script lang="ts">
  import { push } from "svelte-spa-router";
</script>

<section on:click={() => push("/home/temp")}>
  <div>
    <i>Temperature</i>
    <p>35<sup>o</sup>c</p>
  </div>

  <img
    src="./icon/DrawKit Vector Illustration Ecology & Environment (5).svg"
    alt="Illustration"
  />
</section>

<section on:click={() => push("/home/hum")}>
  <div>
    <i>Air Humidity</i>
    <p>75 g.m <sup>-3</sup></p>
  </div>

  <img
    src="./icon/DrawKit Vector Illustration Ecology & Environment (6).svg"
    alt="Illustration"
  />
</section>

<section on:click={() => push("/home/ph")}>
  <div>
    <i>PH Value</i>
    <p>4.00</p>
  </div>

  <img
    src="./icon/DrawKit Vector Illustration Ecology & Environment (3).svg"
    alt="Illustration"
  />
</section>

<section on:click={() => push("/home/mois")}>
  <div>
    <i>Moisture</i>
    <p>Wet</p>
  </div>

  <img
    src="./icon/DrawKit Vector Illustration Ecology & Environment (10).svg"
    alt="Illustration"
  />
</section>

<style>
  section {
    position: relative;
    background-color: var(--white);
    border: 1.8px solid var(--black);
    border-radius: 10px;
    overflow: hidden;
    padding: 1rem;
    max-height: 400px;
    min-height: 250px;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
    /* grid-column: 1 / span 2; */
  }

  section:hover {
    box-shadow: 5px 5px 0px var(--black);
    transform: translateX(-8px);
    transform: translateY(-8px);
    transform-origin: bottom right;
  }

  section div {
    margin-top: 0.5rem;
  }

  section div p {
    font-size: 2.8rem;
    margin-top: 0.5rem;
    font-weight: 500;
  }
  section img {
    position: absolute;
    width: 90%;
    height: 98%;
    right: -1.8rem;
    bottom: -2rem;
  }
</style>
