<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto/auto.js";

  let portfolio;

  const labels = [
    "3:14",
    "3:15",
    "3:16",
    "3:17",
    "3:18",
    "3:19",
    "3:20",
    "3:21",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperature",
        data: [33, 43, 32, 40, 65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["rgba(201, 203, 207, 0.5)"],
        borderColor: ["rgb(201, 203, 207)"],
        borderWidth: 2,
        borderRadius: 15,
        borderSkipped: false,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.5)",
        hoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            drawBorder: false,
            lineWidth: 0,
          },
        },
        x: {
          grid: {
            lineWidth: 0,
            drawBorder: false,
          },
        },
      },
    },
  };
  onMount(() => {
    const ctx = portfolio.getContext("2d");
    // Initialize chart using default config set
    var myChart = new Chart(ctx, config);
  });
</script>

<canvas bind:this={portfolio} width={3} height={1} />
