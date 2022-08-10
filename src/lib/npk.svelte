<ul>
  <li>
    <section>
      <p>Nitrogen (N)</p>
      <span>High</span>
    </section>

    <div>
      <span style="width: 80%" />
    </div>
  </li>

  <li>
    <section>
      <p>Phosphorous (P)</p>
      <span>Low</span>
    </section>

    <div>
      <span style="width: 30%" />
    </div>
  </li>

  <li>
    <section>
      <p>Potassium (K)</p>
      <span>Mid</span>
    </section>

    <div>
      <span style="width: 50%" />
    </div>
  </li>
</ul>

<style>
  ul {
    padding: 1em;
  }

  ul li {
    border: 1px solid var(--black);
    border-radius: 10px;
    padding: 0.8rem;
    margin-bottom: 1.5rem;
    min-width: 250px;
  }

  ul li section {
    display: flex;
    justify-content: space-between;
  }

  ul li div {
    width: 100%;
    margin-top: 1.5rem;
    height: 0.5em;
    border-radius: 50px;
    background-color: var(--gray);
    border: 1px solid var(--black);
  }

  ul li div span {
    display: block;
    width: 50%;
    height: 100%;
    background-color: black;
    border-radius: 50px;
  }
</style>
