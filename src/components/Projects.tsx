import {
	SiCsharp,
	SiCss3,
	SiGithub,
	SiJavascript,
	SiReact,
	SiRust,
	SiTypescript,
	SiVuedotjs,
} from "react-icons/si";

export function Projects() {
	return (
		<div id="Projects">
			<h1 className="font-bold text-2xl">Projects</h1>
			<div className="flex flex-col gap-4 md:flex-row md:overflow-x-scroll py-8">
				<Project
					name="Devpace"
					about="Built as a tool for pacing and planning projects and coding time. This webapp uses VueJS in composition API style, along with extensive reliance on the amazing Pinia state management library. The UI was done with NaiveUI. You have notes, pomodoro, and stupid api text in one app."
				>
					<SiVuedotjs></SiVuedotjs>
					<SiCss3></SiCss3>
					<SiTypescript></SiTypescript>
				</Project>
				<Project
					name="JournalV"
					about="A desktop app made for day journaling, and dreams, too. It all depends on the rather small and blazingly fast Tauri toolkit, with Vue on top for the UI rendering. JournalV lets you create entries of the day, or the night, and encrypt then save them. Also can filter your entries and add tags to them."
				>
					<SiVuedotjs></SiVuedotjs>
					<SiRust></SiRust>
					<SiCss3></SiCss3>
					<SiTypescript></SiTypescript>
				</Project>
				<Project
					name="GetTube"
					about="Made for downloading videos from youtube, facebook, and other sites. Built with C# and WPF, using icons from flaticon, it lets you paste in links and takes care of downloading video or audio using youtube-dl."
				>
					<SiCsharp></SiCsharp>
				</Project>
				<Project
					name="Hawr"
					about="A weather forecasting app, available in the kurdish language. Made with badly written React code and a free API, it forecasts 2 days ahead and shows you the temprature and weather for them."
				>
					<SiReact></SiReact>
					<SiJavascript></SiJavascript>
				</Project>
			</div>
		</div>
	);
}

function Project(props: { name: string; about: string; children: any }) {
	return (
		<div className="md:basis-[30rem] h-fit shrink-0 flex flex-col group gap-8 p-8 bg-amber-200/10 hover:bg-amber-200 hover:text-neutral-900 rounded-3xl transition-all hover:-translate-y-2">
			{/* Top section */}
			<div className="flex gap-4 justify-between">
				{/* Tech used */}
				<div className="flex items-center gap-2 border-2 border-neutral-100 rounded-3xl px-3 py-1 group-hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 transition-all [&>*]:h-full [&>*]:w-full">
					{props.children}
				</div>
				{/* Buttons */}
				<a
					href={"https://github.com/ahmeddots/" + props.name.toLowerCase()}
					className="flex gap-2 border-2 border-neutral-100 rounded-3xl px-3 py-1 font-bold group-hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 transition-all cursor-pointer"
				>
					<SiGithub></SiGithub>
				</a>
			</div>

			{/* Bottom section */}
			<div className="flex flex-col gap-4">
				<h1 className="font-bold text-lg">{props.name}</h1>
				<p>{props.about}</p>
			</div>
		</div>
	);
}
