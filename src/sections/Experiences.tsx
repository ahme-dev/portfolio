import { IconCheck } from "@tabler/icons-solidjs";
import gsap from "gsap";
import { For, createMemo, createSignal, onMount } from "solid-js";

const experiences = [
	{
		id: "pygmalion-ai",
		company: "Pygmalion AI",
		role: "Fullstack Lead",
		description: (
			<>
				Open-source AI startup for chat, role-play, adventure, and more.
				<br />
				<br />
				Working as a fullstack lead, with a Go-based backend, NextJS frontend,
				grpc stack. Also doing UI/UX design.
			</>
		),
	},
	{
		id: "ruliad-ai",
		company: "Ruliad AI",
		role: "Frontend Engineer",
		description: (
			<>Soverign AI startup for chat, role-play, adventure, and more.</>
		),
	},
	{
		id: "digital-key",
		company: "Digital Key",
		role: "Fullstack Engineer",
		description: <></>,
	},
	{
		id: "sulysoft",
		company: "SulySoft",
		role: "Fullstack Engineer",
		description: <></>,
	},
];

export function Experiences() {
	let sectionRef!: HTMLDivElement;

	const [selectedExperienceID, setSelectedExperienceID] = createSignal<string>(
		experiences[0].id,
	);

	const selectedExperience = createMemo(() =>
		experiences.find((experience) => experience.id === selectedExperienceID()),
	);

	onMount(() => {
		if (sectionRef) {
			gsap.fromTo(
				sectionRef,
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
						trigger: sectionRef,
						start: "top bottom",
						end: "bottom center",
						scrub: true,
					},
				},
			);
		}

		ScrollTrigger.create({
			trigger: sectionRef,
			scrub: true,
			pin: true,
			pinSpacing: true,
		});
	});

	return (
		<section class="relative">
			<div
				ref={sectionRef}
				class="mx-auto flex w-full max-w-8xl flex-row-reverse items-center justify-between gap-12"
			>
				<div class="flex flex-col gap-12 font-koulen uppercase">
					<h2 class="text-blood text-larger leading-[0.8]">
						Comp
						<br />
						anies
					</h2>
					<h3 class="text-large leading-none">I WORKED WITH</h3>
					<p class="text-left font-imbue text-small leading-none">
						To achive their goals, create their products, <br /> and launch
						their ideas
					</p>
				</div>

				<div class="flex w-full max-w-3xl flex-col items-end gap-16 font-imbue">
					<div class="flex flex-row-reverse gap-8 overflow-x-auto overflow-y-clip font-koulen text-blood text-medium [&>*]:shrink-0">
						<For each={experiences}>
							{(exp) => (
								<button
									class="relative flex flex-col items-center gap-2"
									onClick={() => setSelectedExperienceID(exp.id)}
								>
									<div class="size-8">
										{selectedExperience()?.id === exp.id && (
											<IconCheck size={59} />
										)}
									</div>

									{exp.company}
								</button>
							)}
						</For>
					</div>

					<p class="text-right text-medium leading-none">
						{selectedExperience()?.description}
					</p>
				</div>
			</div>
		</section>
	);
}
