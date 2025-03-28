import { IconCode, IconMail } from "@tabler/icons-solidjs";
import gsap from "gsap";
import { onMount } from "solid-js";

export function Hero() {
	let sectionRef!: HTMLDivElement;

	onMount(() => {
		if (sectionRef) {
			gsap.fromTo(
				sectionRef,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 2,
					ease: "power2.inOut",
				},
			);
		}
	});

	return (
		<section class="relative">
			<div ref={sectionRef} class="mx-auto max-w-8xl" id="hero-title">
				<div class="flex flex-wrap items-center justify-center gap-4 font-koulen uppercase">
					<span class="text-right text-large leading-none">
						HI <br />
						I'm
					</span>
					<h1 class="text-extra-large leading-none">Ahme</h1>
					<span class="text-large">.dev</span>
				</div>

				<p class="-top-16 relative mx-auto text-center text-small">
					A software engineer working primarily on web technologies. I'm
					passionate about exploring new technologies and building cool stuff.
				</p>

				<div class="flex w-full flex-wrap items-center justify-between gap-8">
					<div class="flex flex-col gap-2">
						<p class="text-small">I currently work as a</p>
						<div class="flex flex-wrap items-center gap-4">
							<p class="font-koulen text-medium uppercase leading-none">
								Software <br /> Engineer
							</p>
							<IconCode size={59} />
							<p class="font-koulen text-medium uppercase leading-none">
								Web <br /> Developer
							</p>
						</div>
					</div>

					<div class="flex flex-col gap-2">
						<p class="text-small">Contact Me</p>
						<p class="font-koulen text-medium uppercase leading-none">
							<IconMail class="mr-2 mb-2 inline" size={59} />
							work@
							<br />
							ahme.dev
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
