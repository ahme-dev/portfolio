import { SiReact, SiTypescript } from "react-icons/si";

export function Projects() {
	return (
		<div className="flex gap-4 overflow-x-scroll py-4">
			<Project></Project>
			<Project></Project>
			<Project></Project>
			<Project></Project>
			<Project></Project>
		</div>
	);
}

function Project() {
	return (
		<div className="flex flex-col group gap-8 p-8 min-w-[30rem] hover:bg-teal-100 hover:text-neutral-900 rounded-3xl">
			{/* Top section */}
			<div className="flex gap-4 justify-between">
				{/* Tech used */}
				<div className="flex items-center gap-2 border-2 border-neutral-100 rounded-3xl px-3 py-1 group-hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-100">
					<SiReact className="w-full h-full"></SiReact>
					<SiTypescript className="w-full h-full"></SiTypescript>
				</div>
				{/* Buttons */}
				<div className="flex gap-2 border-2 border-neutral-100 rounded-3xl px-3 py-1 font-bold group-hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-100">
					<a href="">Github</a>
				</div>
			</div>

			{/* Bottom section */}
			<div className="flex flex-col gap-4">
				<h1 className="font-bold text-lg">Project 1</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
					laboriosam nesciunt aperiam repellat obcaecati veniam sit blanditiis
					nemo facere ex.
				</p>
			</div>
		</div>
	);
}
