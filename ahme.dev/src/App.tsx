import Lenis from "lenis";
import { onMount } from "solid-js";
import { Hero } from "./sections/Hero";

function App() {
	onMount(() => {
		new Lenis({
			autoRaf: true,
		});
	});

	return (
		<main>
			<Hero />

			<div class="my-24" />
		</main>
	);
}

export default App;
