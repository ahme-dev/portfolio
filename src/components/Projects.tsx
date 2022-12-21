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
		<div className="flex flex-col gap-4 p-8">
			{/* top section */}
			<div className="flex gap-4 justify-between">
				{/* tech used */}
				<div className="flex gap-2">
					<p>T</p>
					<p>R</p>
				</div>
				{/* buttons */}
				<div>
					<a href="">Github</a>
				</div>
			</div>

			{/* bottom section */}
			<div className="flex flex-col gap-4">
				<h1>Project 1</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
					laboriosam nesciunt aperiam repellat obcaecati veniam sit blanditiis
					nemo facere ex.
				</p>
			</div>
		</div>
	);
}
