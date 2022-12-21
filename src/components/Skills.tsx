import { SiReact } from "react-icons/si";

export function Skills() {
	return (
		<div id="Skills" className="flex flex-wrap justify-center gap-4 py-8">
			<Skill name="React">
				<SiReact className="w-full h-full"></SiReact>
			</Skill>
			<Skill name="React">
				<SiReact className="w-full h-full"></SiReact>
			</Skill>
			<Skill name="React">
				<SiReact className="w-full h-full"></SiReact>
			</Skill>
			<Skill name="React">
				<SiReact className="w-full h-full"></SiReact>
			</Skill>
			<Skill name="React">
				<SiReact className="w-full h-full"></SiReact>
			</Skill>
		</div>
	);
}

function Skill(props: { name: string; children: any }) {
	return (
		<div className="flex items-center justify-center flex-col group w-32 h-32 gap-4 p-4 hover:bg-teal-100 hover:text-neutral-900 rounded-3xl transition-all cursor-pointer">
			{props.children}
			<h1 className="font-bold text-lg">{props.name}</h1>
		</div>
	);
}
