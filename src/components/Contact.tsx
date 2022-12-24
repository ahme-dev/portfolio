import { RiCodeBoxFill, RiArrowUpCircleFill } from "react-icons/ri";

export function Contact() {
	return (
		<div
			id="Contact"
			className="flex flex-col md:flex-row items-center justify-between gap-8 py-8"
		>
			{/* left */}
			<div className="flex place-items-center gap-2 h-14 p-3 bg-amber-200/10 hover:bg-amber-200 hover:text-neutral-900 rounded-3xl transition-all font-bold">
				© 2022 - ahmed.systems
			</div>

			{/* right */}
			<div className="flex gap-2 h-14 p-3 bg-amber-200/10 hover:bg-amber-200 hover:text-neutral-900 rounded-3xl transition-all">
				<a href="#Home" className="h-full w-full">
					<RiArrowUpCircleFill className="h-full w-full cursor-pointer" />
				</a>
				<a
					href="https://github.com/ahmeddots/ahmed.systems"
					className="h-full w-full"
				>
					<RiCodeBoxFill className="h-full w-full cursor-pointer" />
				</a>
			</div>
		</div>
	);
}
