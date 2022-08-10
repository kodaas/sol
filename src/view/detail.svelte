<script lang="ts">
  import Chart from "../lib/chart.svelte";
  import { params, push } from "svelte-spa-router";
</script>

<section>
  <span on:click={() => push("/home")}> Back </span>

  <div class="text">
    {#if $params.fun === "temp"}
      <i>Temperature</i>
      <p>35<sup>o</sup>c</p>
    {:else if $params.fun === "hum"}
      <i>Air Humidity</i>
      <p>75 g.m <sup>-3</sup></p>
    {:else if $params.fun === "ph"}
      <i>PH Value</i>
      <p>4.00</p>
    {:else if $params.fun === "mois"}
      <i>Moisture</i>
      <p>Wet</p>
    {:else}
      <p>Not Found</p>
    {/if}
  </div>

  <div class="chart">
    <p>History</p>
    <Chart />
  </div>
</section>

<style>
  section {
    position: relative;
    background-color: var(--white);
    border: 1.8px solid var(--black);
    border-radius: 10px;
    overflow: hidden;
    padding: 1rem;
    padding-top: 2rem;
    grid-column: 1 / span 2;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    text-align: center;
    background-position: top;
    background-repeat: no-repeat;
    box-shadow: 5px 5px 0px var(--black);
  }

  section div.text {
    margin-top: 0.5rem;
  }

  section div.text i {
    display: block;
    width: 100%;
    font-size: 1.8rem;
  }

  section div.text p {
    font-size: 6rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }

  section div.chart {
    padding: 0.5em;
    height: 40%;
    text-align: left;
    justify-self: flex-end;
  }

  section span {
    background-color: var(--white);
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid var(--black);
    align-self: flex-start;
    cursor: pointer;
  }

  section span:hover {
    box-shadow: 2px 2px 0px var(--black);
    transform: translateX(-3px);
    transform: translateY(-3px);
    transform-origin: bottom right;
  }
</style>
