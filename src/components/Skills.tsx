export function Skills() {
	return (
		<div className="flex justify-center gap-4">
			<Skill></Skill>
			<Skill></Skill>
			<Skill></Skill>
		</div>
	);
}

function Skill() {
	return (
		<div className="flex items-center justify-center flex-col group w-32 h-32 gap-4 p-4 hover:bg-teal-100 hover:text-neutral-900 rounded-3xl">
			<p>ICON</p>
			<h1 className="font-bold text-lg">React</h1>
		</div>
	);
}
