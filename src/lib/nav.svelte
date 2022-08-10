<nav>
  <span>Logout</span>
  <div>
    <p>Bailey Harlan</p>
    <p>2 f 4 0 3 * * * * 6 c C e</p>
  </div>
  <img
    src="./src/assets/icon/DrawKit Vector Illustration Ecology & Environment (2).svg"
    alt="profile"
    width="70px"
    height="70px"
  />
</nav>

<style>
  nav {
    position: relative;
    display: flex;
    text-align: right;
    justify-content: flex-end;
    align-items: center;
  }

  nav div p:last-child {
    margin-top: 0.5rem;
  }

  nav span {
    position: absolute;
    background-color: var(--white);
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid var(--black);
    left: 0;
  }

  nav span:hover {
    box-shadow: 2px 2px 0px var(--black);
    transform: translateX(-3px);
    transform: translateY(-3px);
    transform-origin: bottom right;
  }
</style>
