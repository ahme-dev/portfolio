import {
	RiMailFill,
	RiTelegramFill,
	RiGithubFill,
	RiCodeBoxFill,
	RiArrowUpCircleFill,
} from "react-icons/ri";

export function Contact() {
	return (
		<div
			id="Contact"
			className="flex flex-col md:flex-row items-center justify-between gap-8 py-8"
		>
			{/* left */}
			<div className="flex gap-2 h-14 p-3 bg-teal-100/10 hover:bg-teal-100 hover:text-neutral-900 rounded-3xl transition-all">
				<a href="mailto:ahmadkabdullah@proton.me" className="h-full w-full">
					<RiMailFill className="h-full w-full cursor-pointer" />
				</a>
				<a href="https://t.me/ahmedkabd" className="h-full w-full">
					<RiTelegramFill className="h-full w-full cursor-pointer" />
				</a>
				<a href="https://github.com/ahmeddots" className="h-full w-full">
					<RiGithubFill className="h-full w-full cursor-pointer" />
				</a>
			</div>
			{/* middle */}
			<div className="text-neutral-400">ahmed.systems © 2022</div>
			{/* right */}
			<div className="flex gap-2 h-14 p-3 bg-teal-100/10 hover:bg-teal-100 hover:text-neutral-900 rounded-3xl transition-all">
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
