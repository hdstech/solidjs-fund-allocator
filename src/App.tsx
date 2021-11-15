import { Component, For } from "solid-js";
import { funds } from "./store";

import styles from "./App.module.css";
import { AmountPicker } from "./components/AmountPicker";

const App: Component = () => {
	return (
		<div class={styles.App}>
			<h2>Balance remaining: {funds.balance}</h2>
			<For each={funds.funds}>{({ id }) => <AmountPicker id={id} />}</For>
			<h2>Total Allocated: {funds.total}</h2>
			<div class={styles.totalBar}>
				<div class={styles.progressTotal} style={{ width: `${funds.total / 10}%` }} />
			</div>
		</div>
	);
};

export default App;
