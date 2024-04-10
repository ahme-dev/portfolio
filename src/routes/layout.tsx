import { $, component$, Slot, useOnWindow, useSignal } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import "@fontsource-variable/josefin-sans/wght.css";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.builder.io/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	});
};

export default component$(() => {
	const mouse = useSignal({
		x: 0,
		y: 0,
	});

	useOnWindow(
		"mousemove",
		$((event: MouseEvent) => {
			const newX = Math.round((event.clientX / window.innerWidth) * 10) - 5;
			const newY = Math.round((event.clientY / window.innerHeight) * 10) - 5;

			mouse.value = {
				x: newX,
				y: newY,
			};
		}),
	);

	return (
		<>
			<main class="animate-fadeIn w-screen overflow-hidden cursor-crosshair max-w-full select-none">
				<div
					class="bg-pattern"
					id="bg-pattern-1"
					style={{
						transform: `translate(${mouse.value.x * 20}px, ${mouse.value.y * 20}px)`,
						transition: "transform 2.4s",
					}}
				/>

				<div
					class="bg-pattern"
					id="bg-pattern-2"
					style={{
						transform: `translate(${mouse.value.x * -20}px, ${mouse.value.y * -20}px)`,
						transition: "transform 1.2s",
					}}
				/>

				<Slot />
			</main>
		</>
	);
});
