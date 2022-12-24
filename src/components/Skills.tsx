import {
	SiGo,
	SiLinux,
	SiMariadb,
	SiPhp,
	SiReact,
	SiRust,
	SiTailwindcss,
	SiTypescript,
	SiVuedotjs,
} from "react-icons/si";

export function Skills() {
	return (
		<div id="Skills">
			<h1 className="font-bold text-2xl">Skills</h1>
			<div className="flex flex-wrap justify-center gap-4 py-8">
				<Skill name="Linux">
					<SiLinux />
				</Skill>
				<Skill name="VueJS">
					<SiVuedotjs />
				</Skill>
				<Skill name="Tailwind">
					<SiTailwindcss />
				</Skill>
				<Skill name="Typescript">
					<SiTypescript />
				</Skill>
				<Skill name="React">
					<SiReact />
				</Skill>
				<Skill name="Go">
					<SiGo />
				</Skill>
				<Skill name="Rust">
					<SiRust />
				</Skill>
				<Skill name="PHP">
					<SiPhp />
				</Skill>
				<Skill name="SQL">
					<SiMariadb />
				</Skill>
			</div>
		</div>
	);
}

function Skill(props: { name: string; children: any }) {
	return (
		<div className="flex flex-col items-center justify-center group w-32 h-32 gap-2 p-8 bg-amber-100/10 hover:bg-amber-100 hover:text-neutral-900 rounded-3xl transition-all cursor-pointer hover:scale-105">
			<div className="w-full h-full p-2 [&>*]:w-full [&>*]:h-full">
				{props.children}
			</div>
			<h1 className="font-bold text-lg">{props.name}</h1>
		</div>
	);
}
