import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { hero, skills } from "~/content";

export default component$(() => {
	return (
		<>
			<div class="min-h-[100dvh] py-8 relative flex justify-center flex-col max-w-5xl mx-auto gap-4 snap-center">
				<div class="flex flex-col gap-4 px-4 relative xl:bottom-0 bottom-10">
					<h3 class="text-5xl text-zinc-400">{hero.beforeName}</h3>
					<h1 class="text-8xl xl:text-[12rem] font-bold leading-none">
						{hero.name}
					</h1>
					<p class="relative xl:bottom-10 max-w-lg text-lg">
						{hero.description}
					</p>
				</div>

				<div class="absolute pointer-events-none opacity-70 xl:opacity-100 -right-44 xl:right-16 -z-10 top-1/4 animate-scaleUp">
					<svg
						width="300"
						height="300"
						viewBox="0 0 200 200"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						{" "}
						<g clip-path="url(#clip0_227_4)">
							{" "}
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200ZM100 188C148.601 188 188 148.601 188 100C188 51.3989 148.601 12 100 12C51.3989 12 12 51.3989 12 100C12 148.601 51.3989 188 100 188ZM100 176C141.974 176 176 141.974 176 100C176 58.0264 141.974 24 100 24C58.0264 24 24 58.0264 24 100C24 141.974 58.0264 176 100 176ZM100 164C135.346 164 164 135.346 164 100C164 64.6538 135.346 36 100 36C64.6538 36 36 64.6538 36 100C36 135.346 64.6538 164 100 164ZM152 100C152 128.719 128.719 152 100 152C71.2812 152 48 128.719 48 100C48 71.2812 71.2812 48 100 48C128.719 48 152 71.2812 152 100ZM140 100C140 122.091 122.091 140 100 140C77.9086 140 60 122.091 60 100C60 77.9086 77.9086 60 100 60C122.091 60 140 77.9086 140 100Z"
								fill="url(#paint0_linear_227_4)"
							/>{" "}
						</g>{" "}
						<defs>
							{" "}
							<linearGradient
								id="paint0_linear_227_4"
								x1="27.5"
								y1="19"
								x2="149"
								y2="174.5"
								gradientUnits="userSpaceOnUse"
							>
								{" "}
								<stop stop-color="#FFD9A0" />{" "}
								<stop offset="1" stop-color="#FFF5F1" />{" "}
							</linearGradient>{" "}
							<clipPath id="clip0_227_4">
								{" "}
								<rect width="200" height="200" fill="white" />{" "}
							</clipPath>{" "}
						</defs>{" "}
					</svg>
				</div>

				<div class="absolute z-10 w-full gap-6 bottom-8 flex items-center flex-col mx-auto px-2 font-bold text-zinc-400">
					<div class="grid grid-cols-3 gap-4 text-lg">
						<div
							class="cursor-crosshair flex items-center justify-center gap-2 hover:text-zinc-100 transition-colors duration-300"
							onClick$={(e) => {
								e.preventDefault();
								const skillsElement = document.getElementById("skills");
								if (!skillsElement) return;
								skillsElement.scrollIntoView({ behavior: "smooth" });
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.3rem"
								height="1.3rem"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M20 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5v13a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9H3.5a1 1 0 0 1-1-1V5.618a1 1 0 0 1 .553-.894L8.5 2zm-5 2H8.972L4.5 6.236V7H11v14h2V7h2zm4 0h-2v3h2z"
								></path>
							</svg>
							Skills
						</div>

						<div
							class="cursor-crosshair justify-center flex items-center gap-2 hover:text-zinc-100 transition-colors duration-300"
							onClick$={(e) => {
								e.preventDefault();
								const skillsElement = document.getElementById("projects");
								if (!skillsElement) return;
								skillsElement.scrollIntoView({ behavior: "smooth" });
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.3rem"
								height="1.3rem"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M4 5v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5h-2V5zm15.707 6.293L19 10.586l-.707.707l-3 3l1.414 1.414L19 13.414l2.293 2.293l1.414-1.414zm-3 6L19 19.586l2.293-2.293l1.414 1.414l-3 3l-.707.707l-.707-.707l-3-3z"
								></path>
							</svg>
							Projects
						</div>

						<div
							class="cursor-crosshair justify-center flex items-center gap-2 hover:text-zinc-100 transition-colors duration-300"
							onClick$={(e) => {
								e.preventDefault();
								const skillsElement = document.getElementById("contact");
								if (!skillsElement) return;
								skillsElement.scrollIntoView({ behavior: "smooth" });
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.3rem"
								height="1.3rem"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zM11 10h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2z"
								></path>
							</svg>
							Contact
						</div>
					</div>

					<svg
						class="animate-bounce rotate-180 pointer-events-none"
						xmlns="http://www.w3.org/2000/svg"
						width="2rem"
						height="2rem"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0"
						/>
					</svg>
				</div>
			</div>

			<div
				class="min-h-[100dvh] relative flex flex-col justify-center max-w-5xl mx-auto gap-4 py-8"
				id="skills"
			>
				<div class="flex flex-col items-center">
					<h1 class="text-center text-7xl md:text-8xl font-bold leading-none">
						I use
					</h1>

					<p class="text-lg text-zinc-400">
						the following technologies and tools
					</p>
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 animate-updown">
					{skills.map((skill, i) => (
						<div
							key={skill.title}
							class="flex flex-col items-center group"
							style={{
								transform:
									i % 2 === 0
										? "skewX(-6deg) skewY(2deg)"
										: "skewX(6deg) skewY(-2deg)",
							}}
						>
							<h2 class="text-5xl transition-transform duration-500">
								{skill.title}
							</h2>
							<p class="text-lg">{skill.description}</p>
						</div>
					))}
				</div>

				<div class="absolute -z-10 bottom-0 w-full px-8">
					<svg
						viewBox="0 0 200 120"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						{" "}
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z"
							fill="url(#paint0_linear_105_460)"
						/>{" "}
						<defs>
							{" "}
							<linearGradient
								id="paint0_linear_105_460"
								x1="27.5"
								y1="59.5"
								x2="69.9415"
								y2="168.136"
								gradientUnits="userSpaceOnUse"
							>
								{" "}
								<stop stop-color="#FFD9A0" />{" "}
								<stop offset="1" stop-color="#FFF5F1" />{" "}
							</linearGradient>{" "}
						</defs>{" "}
					</svg>
				</div>

				<div class="bg-amber-100 h-2 w-full rounded-full absolute bottom-0"></div>
			</div>

			<div
				class="h-[100dvh] relative flex flex-col justify-center max-w-5xl mx-auto gap-4 py-8"
				id="projects"
			>
				<div class="flex flex-col items-center">
					<h1 class="text-center text-7xl md:text-8xl font-bold leading-none">
						I work
					</h1>

					<p class="text-lg text-zinc-400">on the following projects</p>
				</div>

				<div class="w-full overflow-x-scroll flex snap-x snap-mandatory p-4 gap-8">
					<div class="w-2/3 shrink-0"></div>

					{[
						{
							link: "pygmalion.chat",
							title: "PygmalionAI",
							description:
								"Open-source AI project for chat, role-play, adventure, and more. Working on the backend using go but mainly on the frontend using React/NextJS.",
						},
						{
							link: "www.sulysoft.com",
							title: "SulySoft",
							description:
								"Software development company that provides custom software solutions. Working fullstack on projects using Laravel, NuxtJS, Vue, and React.",
						},
						{
							link: "github.com/ahme-dev",
							title: "OSS Projects",
							description:
								"Various small app and utilities that I've created. Working with languages and frameworks such as Go, Python, C#, and C, NextJS, React, and Vue.",
						},
					].map((el) => {
						return (
							<div
								key={el.title}
								class="w-4/5 md:w-2/3 snap-center snap-always border-b-4 border-zinc-600 p-4 py-8 shrink-0 transition-colors duration-300 hover:border-amber-100"
							>
								<div class="flex flex-col gap-2">
									<a
										href={`https://${el.link}`}
										target="_blank"
										class="text-zinc-400 cursor-crosshair hover:text-zinc-50 duration-300"
									>
										{el.link}
									</a>
									<h2 class="text-3xl font-bold">{el.title}</h2>
									<p>{el.description}</p>
								</div>
							</div>
						);
					})}

					<div class="w-2/3 shrink-0"></div>
				</div>
			</div>

			<div
				class="min-h-[100dvh] relative flex flex-col justify-center max-w-5xl mx-auto gap-4 py-8"
				id="contact"
			>
				<div class="flex flex-col items-center">
					<h1 class="text-center text-7xl md:text-8xl font-bold leading-none">
						Contact me
					</h1>

					<p class="text-lg text-zinc-400">through the following platforms</p>
				</div>

				<div class="justify-center flex gap-4 text-xl bg-zinc-800 w-fit mx-auto px-3 py-1 rounded-full">
					<a
						href="https://t.me/ahmedkabd"
						target="_blank"
						class="flex items-center gap-2 cursor-crosshair text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.4rem"
							height="1.4rem"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
							></path>
						</svg>

						<b class="leading-none">Telegram</b>
					</a>
					<a
						href="mailto:mail@ahme.dev"
						target="_blank"
						class="flex items-center gap-2 cursor-crosshair text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.4rem"
							height="1.4rem"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M22 4H2v16h20zm-2 4l-8 5l-8-5V6l8 5l8-5z"
							></path>
						</svg>

						<b class="leading-none">Email</b>
					</a>
				</div>

				<div class="left-20 bg-gradient-to-l from-zinc-600 to-zinc-400 h-2 w-full rounded-full -rotate-45 absolute -z-10"></div>
				<div class="bg-gradient-to-l from-zinc-600 to-amber-100 h-2 w-full rounded-full -rotate-45 absolute -z-10"></div>
				<div class="right-20 bg-gradient-to-l from-zinc-600 to-zinc-400 h-2 w-full rounded-full -rotate-45 absolute -z-10"></div>
			</div>

			<div class="relative flex flex-col justify-center max-w-5xl mx-auto gap-4 py-8">
				<div class="flex justify-center">
					{new Date().getFullYear()} © Ahmed
				</div>
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: "ahme.dev",
	meta: [
		{
			name: "description",
			content: "Portfolio of Ahmed",
		},
	],
};
