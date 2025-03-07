import { IconCode, IconMail } from "@tabler/icons-solidjs";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMount } from "solid-js";
import assetStar from "../assets/star.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function Hero() {
	let sectionRef: HTMLDivElement;
	let welcomeRef: HTMLDivElement;

	onMount(() => {
		if (sectionRef) {
			gsap.fromTo(
				sectionRef.querySelectorAll("p, h1, svg"),
				{
					color: "#FF3535",
					opacity: 0,
					y: -50,
				},
				{
					color: "#FDF7D6",
					opacity: 1,
					y: 0,
					duration: 2,
					stagger: 0.2,
					ease: "power3.inOut",
				},
			);
		}

		if (welcomeRef) {
			gsap.fromTo(
				welcomeRef.querySelectorAll("p"),
				{
					scale: 1,
					opacity: 1,
				},
				{
					scale: 0.5,
					opacity: 0.2,
					duration: 1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: welcomeRef,
						start: "bottom 55%",
						end: "bottom 30%",
						scrub: true,
					},
				},
			);
		}

		// gsap.to(window, {
		// 	scrollTo: "500",
		// 	duration: 1,
		// 	delay: 1.5,
		// 	ease: "power2.out",
		// });
	});

	return (
		<section class="relative">
			<img src={assetStar} alt="" class="absolute -top-[40rem]" />

			{/* <div
				ref={welcomeRef}
				class="text-[20rem] z-10 relative max-w-8xl mx-auto leading-none"
			>
				<p>Hello and welcome</p>
			</div> */}

			<div ref={sectionRef} class="max-w-8xl mx-auto">
				<div class="font-koulen uppercase flex items-center flex-wrap gap-4">
					<h1 class="text-extra-large leading-none">Ahmed</h1>
				</div>

				<p class="text-small relative mx-auto text-center -top-16">
					I'm a software engineer working primarily on web technologies. I'm
					passionate about exploring new technologies and building cool stuff.
				</p>

				<div class="flex items-center flex-wrap justify-between gap-8 w-full">
					<div class="flex flex-col gap-2">
						<p class="text-small">I currently work as a</p>
						<div class="flex flex-wrap items-center gap-4">
							<p class="text-medium font-koulen leading-none uppercase">
								Software <br /> Engineer
							</p>
							<IconCode size={59} />
							<p class="text-medium font-koulen leading-none uppercase">
								Web <br /> Developer
							</p>
						</div>
					</div>

					<div class="flex flex-col gap-2">
						<p class="text-small">Contact Me</p>
						<p class="text-medium font-koulen leading-none uppercase">
							<IconMail class="inline mb-2 mr-2" size={59} />
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
