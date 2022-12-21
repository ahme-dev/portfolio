export function Skills() {
	return (
		<div className="flex gap-4">
			<Skill></Skill>
			<Skill></Skill>
		</div>
	);
}

function Skill() {
	return (
		<div className="flex flex-col gap-4 p-8">
			<p>ICON</p>
			<h1>Title</h1>
		</div>
	);
}
