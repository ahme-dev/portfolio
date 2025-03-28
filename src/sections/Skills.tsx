import gsap from "gsap";
import { For, onMount } from "solid-js";

const skills = [
	{
		title: "FRAMEWORKS",
		skills: ["React", "Vue", "Nuxt", "Next", "Laravel", "AdonisJS", "Express"],
	},
	{
		title: "LANGUAGES",
		skills: ["TypeScript", "PHP", "Go", "Python"],
	},
	{
		title: "INTEGRATIONS",
		skills: ["Authorize NET", "Paypal"],
	},
	{
		title: "DATABASES",
		skills: ["PostgreSQL", "Prisma", "MySQL", "SQLite"],
	},
	{
		title: "DEVOPS",
		skills: [
			"Docker",
			"Cloudflare",
			"Digital Ocean",
			"GitHub Actions",
			"Netlify",
		],
	},
];

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
						x: -1 * direction * window.innerWidth * 0.1,
						opacity: 1,
						duration: 1.5,
						ease: "power2.out",
						scrollTrigger: {
							trigger: sectionRef,
							start: "top bottom",
							end: "bottom top",
							scrub: 1,
							invalidateOnRefresh: true,
						},
					},
				);
			});

			if (window.innerWidth >= 1280) {
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
		}
	});

	return (
		<section class="relative min-h-screen py-20">
			<div
				ref={sectionRef}
				class="relative mx-auto flex w-full max-w-8xl flex-col items-start justify-between gap-12 px-4 xl:flex-row"
			>
				<div
					id="skills-title"
					class="z-10 flex flex-col gap-8 font-koulen uppercase xl:gap-12"
				>
					<h2 class="order-2 text-large text-pr leading-[0.8] sm:text-larger">
						SKI
						<br class="hidden md:block" />
						LLS
					</h2>
					<h3 class="z-20 order-1 text-medium leading-none shadow-dance sm:text-large">
						I HAVE SOME
					</h3>
					<p class="order-3 max-w-lg text-left font-imbue text-small leading-none">
						Refined through professional experience across diverse projects
					</p>
				</div>

				<div
					id="skill-lists"
					ref={skillsContainerRef}
					class="static flex w-full flex-col items-start gap-6 font-imbue xl:absolute xl:top-0 xl:right-0 xl:h-full xl:w-fit xl:rotate-12 xl:items-center xl:justify-center xl:gap-8 [&>*]:whitespace-nowrap [&>*]:text-small [&>*]:leading-none sm:[&>*]:text-medium"
				>
					<For each={skills}>
						{(skill) => (
							<p class="list w-full overflow-x-auto overflow-y-hidden pb-2 xl:w-auto xl:overflow-visible">
								<span class="font-koulen text-pr">{skill.title} </span>
								{skill.skills.join(", ")}
							</p>
						)}
					</For>
				</div>
			</div>
		</section>
	);
}
