<script lang="ts">
  import { params, push } from "svelte-spa-router";
  // import { onMount } from "svelte";
  // import { Chart } from "chart.js";

  let canvas;

  // const ctx = canvas.getContext("2d");
  // const myChart = new Chart(ctx, {
  //   type: "bar",
  //   data: {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [
  //       {
  //         label: "# of Votes",
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(255, 206, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(255, 159, 64, 0.2)",
  //         ],
  //         borderColor: [
  //           "rgba(255, 99, 132, 1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)",
  //           "rgba(75, 192, 192, 1)",
  //           "rgba(153, 102, 255, 1)",
  //           "rgba(255, 159, 64, 1)",
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // });
</script>

<section>
  <span on:click={() => push("/home")}> Back </span>
  <div>
    <i>{$params.fun}</i>
    <p>35<sup>o</sup>c</p>
  </div>

  <!-- <img
    src="./src/assets/icon/DrawKit Vector Illustration Ecology & Environment (5).svg"
    alt="Illustration"
  /> -->

  <canvas bind:this={canvas} width={400} height={400} />
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
    text-align: center;
    box-shadow: 5px 5px 0px var(--black);
  }

  section div {
    margin-top: 0.5rem;
  }

  section div i {
    font-size: 1.8rem;
  }

  section div p {
    font-size: 6rem;
    margin-top: 3rem;
    font-weight: 500;
  }

  section span {
    /* position: absolute; */
    background-color: var(--white);
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid var(--black);
    /* left: 0; */
    float: left;
    cursor: pointer;
  }

  section span:hover {
    box-shadow: 2px 2px 0px var(--black);
    transform: translateX(-3px);
    transform: translateY(-3px);
    transform-origin: bottom right;
  }
  /* section img {
    position: absolute;
    width: 90%;
    height: 98%;
    right: -1.8rem;
    bottom: -2rem; */
  /* } */
</style>
