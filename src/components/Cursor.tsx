import gsap from "gsap";
import { onMount } from "solid-js";

export function Cursor() {
	let cursorRef!: HTMLDivElement;
	let dotRef!: HTMLDivElement;

	onMount(() => {
		let mouseX = 0;
		let mouseY = 0;
		let currentX = 0;
		let currentY = 0;

		const onMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};

		window.addEventListener("mousemove", onMouseMove);

		gsap.ticker.add(() => {
			if (!cursorRef || !dotRef) return;

			const dt = 0.15;
			currentX += (mouseX - currentX) * dt;
			currentY += (mouseY - currentY) * dt;

			cursorRef.style.transform = `translate(${currentX - 40}px, ${currentY - 40}px)`;
			dotRef.style.transform = `translate(${mouseX - 12}px, ${mouseY - 12}px)`;
		});

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			gsap.ticker.remove(() => {});
		};
	});

	return (
		<>
			<div
				ref={cursorRef}
				class="pointer-events-none fixed top-0 left-0 z-50 size-20 rounded-full bg-white mix-blend-difference"
			/>
			<div
				ref={dotRef}
				class="pointer-events-none fixed top-0 left-0 z-50 size-6 rounded-full bg-white mix-blend-difference"
			/>
		</>
	);
}
