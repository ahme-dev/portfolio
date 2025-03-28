import gsap from "gsap";
import { onMount } from "solid-js";

export function Skills() {
	let sectionRef!: HTMLDivElement;
	let skillsContainerRef!: HTMLDivElement;

	onMount(() => {
		if (sectionRef && skillsContainerRef) {
			gsap.fromTo(
				sectionRef.querySelectorAll(
					"#skills-title p, #skills-title h1, #skills-title svg, #skills-title h2, #skills-title h3",
				),
				{
					opacity: 0,
					y: -250,
				},
				{
					opacity: 1,
					y: 0,
					duration: 2,
					stagger: 0.2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: sectionRef,
						start: "top bottom",
						end: "bottom center",
						scrub: true,
					},
				},
			);

			const listItems = sectionRef.querySelectorAll(".list");

			listItems.forEach((item, index) => {
				const direction = index % 2 === 0 ? 1 : -1;

				gsap.fromTo(
					item,
					{
						x: direction * window.innerWidth * 0.5,
						opacity: 0,
					},
					{
						x: 0,
						opacity: 1,
						duration: 1.5,
						ease: "power2.out",
						scrollTrigger: {
							trigger: sectionRef,
							start: "top bottom",
							end: "bottom center",
							scrub: 1,
							invalidateOnRefresh: true,
						},
					},
				);
			});

			const totalWidth =
				skillsContainerRef.scrollWidth - skillsContainerRef.clientWidth;

			gsap.to(skillsContainerRef, {
				x: () => {
					const scrollPosition = window.scrollY - sectionRef.offsetTop;
					const sectionHeight = sectionRef.offsetHeight - window.innerHeight;

					return -totalWidth * (scrollPosition / sectionHeight);
				},
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef,
					start: "bottom top",
					end: "bottom center",
					scrub: 0.5,
					invalidateOnRefresh: true,
				},
			});
		}
	});

	return (
		<section class="relative">
			<div
				ref={sectionRef}
				class="relative mx-auto flex w-full max-w-8xl flex-col items-start justify-between gap-2 px-4"
			>
				<div
					id="skills-title"
					class="z-10 flex flex-col gap-12 font-koulen uppercase"
				>
					<h3 class="text-large leading-none">I HAVE SOME</h3>
					<h2 class="text-[15vw] text-blood leading-[0.8] md:text-larger ">
						SKI
						<br />
						LLS
					</h2>
					<p class="text-left font-imbue text-small leading-none">
						Which I took some time to develop and hone, working on many projects
					</p>
				</div>

				<div
					id="skill-lists"
					ref={skillsContainerRef}
					class="absolute top-0 right-0 flex h-[100%] w-fit rotate-12 flex-col items-center justify-center gap-8 font-imbue [&>*]:whitespace-nowrap [&>*]:text-medium [&>*]:leading-none"
				>
					<p class="list">
						<span class="font-koulen text-blood"> WORKS </span>
						React, Vue, Nuxt, Next, Laravel, AdonisJS, Express.
					</p>
					<p class="list">
						<span class="font-koulen text-blood"> LANGUAGES </span>
						TypeScript, PHP, Go, Python.
					</p>
					<p class="list">
						<span class="font-koulen text-blood"> INTEGRATIONS </span>
						Authorize NET.
					</p>
					<p class="list">
						<span class="font-koulen text-blood"> DATA </span>
						PostgreSQL, Prisma, MySQL, SQLite.
					</p>
					<p class="list">
						<span class="font-koulen text-blood"> DEVOPS </span>
						Docker, Cloudflare, Digital Ocean, GitHub Actions, Netlify.
					</p>
				</div>
			</div>
		</section>
	);
}
