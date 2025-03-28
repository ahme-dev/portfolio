import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { onMount } from "solid-js";
import assetBG from "./assets/bg.png";
import assetStar from "./assets/star.png";
import assetSymbol from "./assets/symbol.png";
import { Cursor } from "./components/Cursor";
import { Connect } from "./sections/Connect";
import { Experiences } from "./sections/Experiences";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
	let starRef!: HTMLImageElement;

	onMount(() => {
		new Lenis({
			autoRaf: true,
		});

		if (starRef) {
			gsap.fromTo(
				starRef,
				{
					opacity: 0,
					y: -50,
				},
				{
					opacity: 1,
					y: 0,
					duration: 4,
					stagger: 0.2,
					ease: "power2.inOut",
				},
			);
		}
	});

	return (
		<main class="relative cursor-none overflow-hidden p-4">
			<Cursor />

			<div
				class="fixed z-0 h-full w-full animate-fade-in"
				style={{
					"background-image": `url(${assetBG})`,
					"background-size": "1500px",
					"background-position": "center",
					"will-change": "transform",
					"backface-visibility": "hidden",
					"background-attachment": "local",
				}}
			/>

			<div class="relative mx-auto max-w-8xl">
				<img
					ref={starRef}
					src={assetStar}
					alt=""
					class="-top-12 xl:-top-[40rem] absolute"
				/>
				<Hero />
			</div>

			<div class="my-72" />

			<div class="relative">
				<img
					src={assetSymbol}
					alt=""
					class="absolute top-2 right-0 max-w-8xl"
				/>
				<Skills />
			</div>

			<div class="my-72" />

			<Experiences />

			<div class="my-72" />

			<Connect />

			<div class="my-32" />

			<footer class="mx-auto max-w-8xl py-2">
				<p class="text-center text-extra-small">© 2025 - Ahmed</p>
			</footer>
		</main>
	);
}

export default App;
