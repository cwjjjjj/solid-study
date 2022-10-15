import { Component, createSignal } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const [a, setA] = createSignal(1);
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>{a()}</p>
        <button
          onclick={() => {
            setA(a() + 1);
          }}
        >
          add
        </button>
      </header>
    </div>
  );
};

export default App;
