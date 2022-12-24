import { RiGithubFill, RiTelegramFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";

export function Home() {
	return (
		<div
			id="Home"
			className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 place-items-center md:basis-full pt-24 gap-2 md:gap-16 h-[75vh]"
		>
			{/* Text */}
			<p className="self-center justify-self-center max-w-lg font-bold text-3xl">
				Hi, my name's <b className="text-amber-200">Ahmed</b>.
				<br />I thrive to write code that generates beautiful, usable interfaces
				and software that is easy to use, dependable, and useful.
			</p>

			{/* Nav */}
			<nav className="flex flex-row gap-4 flex-wrap items-center justify-center">
				<a
					href="mailto:ahmadkabdullah@proton.me"
					className="w-20 bg-amber-100/10 hover:bg-amber-100 hover:text-neutral-900 rounded-full p-2 transition-all"
				>
					<MdOutlineAlternateEmail className="h-full w-full cursor-pointer" />
				</a>
				<a
					href="https://t.me/ahmedkabd"
					className="w-20 bg-amber-100/10 hover:bg-amber-100 hover:text-neutral-900 rounded-full p-2 transition-all"
				>
					<RiTelegramFill className="h-full w-full cursor-pointer" />
				</a>
				<a
					href="https://github.com/ahmeddots"
					className="w-20 bg-amber-100/10 hover:bg-amber-100 hover:text-neutral-900 rounded-full p-2 transition-all"
				>
					<RiGithubFill className="h-full w-full cursor-pointer" />
				</a>
			</nav>
		</div>
	);
}
