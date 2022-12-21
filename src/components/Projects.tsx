import { SiReact, SiTypescript } from "react-icons/si";

export function Projects() {
	return (
		<div
			id="Projects"
			className="flex flex-col gap-4 md:flex-row md:overflow-x-scroll py-8"
		>
			<Project name="Project 1" about="lorem18" link="#">
				<SiReact className="w-full h-full"></SiReact>
				<SiTypescript className="w-full h-full"></SiTypescript>
			</Project>
			<Project name="Project 1" about="lorem18" link="#">
				<SiReact className="w-full h-full"></SiReact>
				<SiTypescript className="w-full h-full"></SiTypescript>
			</Project>
			<Project name="Project 1" about="lorem18" link="#">
				<SiReact className="w-full h-full"></SiReact>
				<SiTypescript className="w-full h-full"></SiTypescript>
			</Project>
		</div>
	);
}

function Project(props: {
	name: string;
	about: string;
	link: string;
	children: any;
}) {
	return (
		<div className="flex flex-col group gap-8 p-8 min-w-fit md:min-w-[30rem] hover:bg-teal-100 hover:text-neutral-900 rounded-3xl transition-all">
			{/* Top section */}
			<div className="flex gap-4 justify-between">
				{/* Tech used */}
				<div className="flex items-center gap-2 border-2 border-neutral-100 rounded-3xl px-3 py-1 group-hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 transition-all">
					{props.children}
				</div>
				{/* Buttons */}
				<div className="flex gap-2 border-2 border-neutral-100 rounded-3xl px-3 py-1 font-bold group-hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 transition-all">
					<a href={props.link}>Github</a>
				</div>
			</div>

			{/* Bottom section */}
			<div className="flex flex-col gap-4">
				<h1 className="font-bold text-lg">{props.name}</h1>
				<p>{props.about}</p>
			</div>
		</div>
	);
}
