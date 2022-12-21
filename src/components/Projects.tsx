export function Projects() {
	return (
		<div className="flex gap-4">
			<Project></Project>
			<Project></Project>
		</div>
	);
}

function Project() {
	return (
		<div className="flex flex-col group gap-8 p-8 hover:bg-teal-100 hover:text-neutral-900 rounded-3xl">
			{/* Top section */}
			<div className="flex gap-4 justify-between">
				{/* Tech used */}
				<div className="flex items-center gap-2 border-2 border-neutral-100 rounded-3xl px-2 py-1 group-hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-100">
					<p>T</p>
					<p>R</p>
				</div>
				{/* Buttons */}
				<div className="flex gap-2 border-2 border-neutral-100 rounded-3xl px-2 py-1 font-bold group-hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-100">
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
