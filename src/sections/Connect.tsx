import {
	IconBrandGithub,
	IconBrandTelegram,
	IconMail,
} from "@tabler/icons-solidjs";
import gsap from "gsap";
import { For, onMount } from "solid-js";

const links = [
	{
		icon: IconBrandGithub,
		href: "https://github.com/ahme-dev",
		text: "Github",
		label: "Github",
	},
	{
		icon: IconMail,
		href: "mailto:work@ahme.dev",
		text: "Email",
		label: "Email",
	},
	{
		icon: IconBrandTelegram,
		href: "https://t.me/ahmedkabd",
		text: "Telegram",
		label: "Telegram",
	},
];

export function Connect() {
	let sectionRef!: HTMLDivElement;
	let titleRef!: HTMLDivElement;
	let platformsRef!: HTMLDivElement;

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
					end: "bottom center",
					scrub: true,
				},
			},
		);

		gsap.fromTo(
			platformsRef,
			{
				y: -250,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 2,
				stagger: 0.2,
				ease: "power2.inOut",
				scrollTrigger: {
					trigger: platformsRef,
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
				class="mx-auto flex w-full max-w-8xl flex-col items-center justify-center gap-32"
			>
				<div
					ref={titleRef}
					class="flex flex-col items-center gap-12 font-koulen"
				>
					<h2 class="break-all text-center text-large text-pr uppercase leading-[0.8] sm:text-larger">
						Connect
					</h2>
					<h3 class="text-center text-large uppercase leading-none shadow-dance">
						WITH ME
					</h3>
					<p class="text-center font-imbue text-small leading-none">
						Through the following platforms
					</p>
				</div>

				<div
					ref={platformsRef}
					class="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 font-imbue text-small sm:text-medium"
				>
					<For each={links}>
						{(link) => (
							<a
								href={link.href}
								target="_blank"
								class="flex items-center gap-4 transition-colors"
								aria-label={link.text}
							>
								<link.icon size={39} />
								{link.label}
							</a>
						)}
					</For>
				</div>
			</div>
		</section>
	);
}
