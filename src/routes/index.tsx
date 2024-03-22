import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<>
			<div class="min-h-[100dvh] py-8 relative flex justify-center flex-col max-w-5xl mx-auto gap-4 px-4 snap-center">
				<h3 class="text-5xl">Hello! My Name's</h3>
				<h1 class="text-8xl xl:text-[12rem] font-bold leading-none">Ahmed</h1>
				<p class="relative xl:bottom-10 max-w-lg text-lg">
					I'm a software engineer working primarily on
					<span class="font-bold text-xl"> web technologies</span>. I'm
					passionate about exploring new technologies and building cool stuff.
				</p>

				<div class="absolute opacity-70 xl:opacity-100 -right-44 xl:right-16 -z-10 top-1/4 animate-scaleUp">
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

				<div class="absolute left-[45%] xl:left-[50%] -z-10 bottom-12">
					<svg
						class="animate-bounce rotate-180"
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

			<div class="min-h-[100dvh] relative flex flex-col justify-center max-w-5xl mx-auto gap-4 py-8">
				<h1 class="text-center text-8xl font-bold leading-none">I work with</h1>

				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 animate-updown">
					<div class="flex flex-col items-center -skew-x-6 skew-y-2">
						<h2 class="text-5xl">Frameworks</h2>
						<p class="text-lg">React, Vue, Nuxt, Next, Laravel, Express</p>
					</div>
					<div class="flex flex-col items-center -skew-x-6 -skew-y-2">
						<h2 class="text-5xl">Languages</h2>
						<p class="text-lg">Typescrip, PHP, Go, Python</p>
					</div>
					<div class="flex flex-col items-center -skew-x-6 skew-y-2">
						<h2 class="text-5xl">Data</h2>
						<p class="text-lg">PostgreSQL, Prisma MySQL, SQLite</p>
					</div>
					<div class="flex flex-col items-center -skew-x-6 -skew-y-2">
						<h2 class="text-5xl">DevOps</h2>
						<p class="text-lg">Docker, Cloudflare, GitHub Actions, Netlify</p>
					</div>
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

				<hr class="absolute -z-10 h-1 border-0 bg-zinc-600 rounded-full bottom-0 w-full" />
			</div>

			<div class="h-[100dvh] relative flex flex-col justify-center max-w-5xl mx-auto gap-4 py-8">
				<h1>HEllo</h1>
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
