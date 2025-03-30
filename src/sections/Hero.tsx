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
				<div class="flex flex-wrap items-center justify-center gap-4 pt-4 pb-24 font-koulen uppercase xl:py-0">
					<div class="flex flex-row gap-8 text-right text-medium leading-none sm:text-large xl:flex-col xl:gap-2">
						<span>HI</span>
						<span>I'm</span>
					</div>
					<h1
						data-text="Ahme"
						class="break-all text-center text-large leading-[0.7] sm:text-extra-large xl:leading-none"
					>
						Ahme
					</h1>
					<span class="text-medium leading-none sm:text-large">.dev</span>
				</div>

				<p class="-top-16 relative mx-auto text-center text-small">
					A software engineer working primarily on web technologies. I'm
					passionate about exploring new technologies and building cool stuff.
				</p>

				<div class="flex w-full flex-col items-end justify-between gap-8 sm:flex-row">
					<div class="flex flex-col gap-2">
						<p class="text-small">I currently work as a</p>
						<div class="flex flex-wrap items-center gap-4 font-koulen text-small sm:text-medium">
							<p class="uppercase leading-none shadow-dance">
								Software <br /> Engineer
							</p>
							<IconCode class="size-[39px] sm:size-[59px]" />
							<p class="uppercase leading-none shadow-dance">
								Web <br /> Developer
							</p>
						</div>
					</div>

					<div class="flex flex-col items-end gap-2">
						<p class="text-small">Contact Me</p>

						<div class="flex items-center gap-4">
							<IconMail class="mr-2 mb-2 inline size-[39px] sm:size-[59px]" />
							<p class="text-right font-koulen text-small uppercase leading-none shadow-dance sm:text-medium">
								work@
								<br />
								ahme.dev
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
