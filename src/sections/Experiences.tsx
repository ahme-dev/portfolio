import { IconChevronDown, IconLink } from "@tabler/icons-solidjs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { For, Show, createMemo, createSignal, onMount } from "solid-js";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
	{
		id: "pygmalion-ai",
		company: "Pygmalion AI",
		link: "https://pygmalion.chat",
		companyDescription:
			"Open-source AI startup for chat, role-play, adventure, and more.",
		workDescription:
			"Working as a fullstack lead, with a Go-based backend, NextJS frontend, grpc stack. Also doing UI/UX design.",
	},
	{
		id: "ruliad-ai",
		company: "Ruliad AI",
		link: "https://ruliad.co",
		companyDescription:
			"Development of next-generation self-sovereign AI solutions for governments and large enterprises.",
		workDescription:
			"Working as a frontend engineer, building dashboards, chat interfaces, and web pages.",
	},
	{
		id: "digital-key",
		company: "Digital Key",
		link: "https://digital-key.co",
		companyDescription:
			"Provider of IT products and services, using current technologies for business, government, NGOs and individuals.",
		workDescription:
			"Working as an engineer on NextJS dashboards, express backends, and internal CLI tools.",
	},
	{
		id: "sulysoft",
		company: "SulySoft",
		link: "https://sulysoft.com",
		companyDescription:
			"IT solution agency that aims to empower Kurdish and Iraqi businesses to succeed.",
		workDescription:
			"Working as a fullstack engineer, building dashboards with VueJS/ReactJS and Laravel backends.",
	},
];

export function Experiences() {
	let sectionRef!: HTMLDivElement;
	let descriptionRef!: HTMLParagraphElement;
	let checkRef!: HTMLDivElement;
	let titleRef!: HTMLDivElement;
	let experiencesListRef!: HTMLDivElement;

	const [selectedExperienceID, setSelectedExperienceID] = createSignal<string>(
		experiences[0].id,
	);

	const selectedExperience = createMemo(() =>
		experiences.find((experience) => experience.id === selectedExperienceID()),
	);

	const scrollToExperience = (experienceId: string) => {
		const container = experiencesListRef?.querySelector(".overflow-x-auto");
		if (!container) return;

		const experienceIndex = experiences.findIndex(
			(exp) => exp.id === experienceId,
		);
		const experienceElement = container.children[
			experienceIndex
		] as HTMLElement;
		if (!experienceElement) return;

		const containerRect = container.getBoundingClientRect();
		const elementRect = experienceElement.getBoundingClientRect();
		const scrollAmount =
			elementRect.left -
			containerRect.left -
			(containerRect.width - elementRect.width) / 2;
		container.scrollBy({ left: scrollAmount, behavior: "smooth" });
	};

	const animateExperienceChange = (newExperienceID: string) => {
		const tl = gsap.timeline();

		const currentIndex = experiences.findIndex(
			(exp) => exp.id === selectedExperienceID(),
		);
		const newIndex = experiences.findIndex((exp) => exp.id === newExperienceID);
		const slideDirection = newIndex > currentIndex ? -100 : 100;

		tl.fromTo(
			descriptionRef,
			{ opacity: 0, x: -slideDirection },
			{ opacity: 1, x: 0, duration: 1, ease: "power2.out" },
			">",
		);

		scrollToExperience(newExperienceID);
	};

	onMount(() => {
		gsap.fromTo(
			titleRef,
			{
				opacity: 0,
				y: -250,
			},
			{
				opacity: 1,
				y: 0,
				duration: 2,
				stagger: 0.2,
				ease: "power2.inOut",
				scrollTrigger: {
					trigger: titleRef,
					start: "top bottom",
					end: "center top",
					scrub: true,
				},
			},
		);

		gsap.fromTo(
			experiencesListRef,
			{
				x: 250,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				duration: 2,
				stagger: 0.2,
				ease: "power2.inOut",
				scrollTrigger: {
					trigger: experiencesListRef,
					start: "top bottom",
					end: "bottom center",
					scrub: true,
				},
			},
		);
	});

	return (
		<section class="relative">
			<div
				ref={sectionRef}
				class="mx-auto flex w-full max-w-8xl flex-col items-end justify-between gap-12 xl:flex-row-reverse xl:items-center"
			>
				<div ref={titleRef} class="flex flex-col gap-12 font-koulen uppercase">
					<h2 class="break-all text-right text-blood text-large leading-[0.8] sm:text-larger">
						Comp
						<br class="hidden md:block" />
						anies
					</h2>
					<h3 class="text-right text-large leading-none shadow-dance">
						I WORK WITH
					</h3>
					<p class="text-right font-imbue text-small leading-none">
						To achive their goals, create their products, <br /> and launch
						their ideas
					</p>
				</div>

				<div
					ref={experiencesListRef}
					class="flex w-full max-w-4xl flex-col items-end gap-16 font-imbue"
				>
					<div class="relative flex w-full items-center gap-2">
						<div class="flex w-full flex-row-reverse gap-12 overflow-x-auto overflow-y-clip font-koulen text-blood [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*]:shrink-0">
							<For each={experiences}>
								{(exp) => (
									<button
										onClick={() => {
											setSelectedExperienceID(exp.id);
											animateExperienceChange(exp.id);
										}}
										class="relative flex cursor-pointer flex-col items-center text-small sm:text-medium"
									>
										<div class="size-8" ref={checkRef}>
											<Show when={selectedExperience()?.id === exp.id}>
												<IconChevronDown size={49} />
											</Show>
										</div>

										{exp.company}
									</button>
								)}
							</For>
						</div>
					</div>

					<p
						ref={descriptionRef}
						class="text-right text-small leading-none sm:text-medium"
					>
						{selectedExperience()?.companyDescription}{" "}
						<a
							href={selectedExperience()?.link}
							target="_blank"
							class="inline-block text-blood"
						>
							<IconLink size={39} />
						</a>
						<br />
						<br />
						{selectedExperience()?.workDescription}
					</p>
				</div>
			</div>
		</section>
	);
}
