<script lang="ts">
</script>

<section>
  <div>
    <i>Temperature</i>
    <p>35<sup>o</sup>c</p>
  </div>

  <!-- <img
    src="./src/assets/icon/DrawKit Vector Illustration Ecology & Environment (5).svg"
    alt="Illustration"
  /> -->
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

  section div i {
    font-size: 1.8rem;
  }

  section div p {
    font-size: 6rem;
    margin-top: 3rem;
    font-weight: 500;
  }
  /* section img {
    position: absolute;
    width: 90%;
    height: 98%;
    right: -1.8rem;
    bottom: -2rem; */
  /* } */
</style>
