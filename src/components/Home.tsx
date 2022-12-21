import { SiTelegram, SiProtonmail, SiGithub } from "react-icons/si";

export function Home() {
	return (
		<div
			id="Home"
			className="flex flex-col justify-between min-h-screen py-4 md:py-8"
		>
			{/* Top */}
			<header className="flex justify-between gap-4 text-neutral-900">
				{/* Logo */}
				<div className="bg-teal-100 rounded-3xl px-5 py-3">
					<h1 className="font-bold">LOGO</h1>
				</div>
				{/* Icons */}
				<div className="flex gap-2 bg-teal-100 rounded-3xl h-10 p-1">
					<SiProtonmail
						href="#"
						className="w-full h-full hover:bg-neutral-900 hover:text-teal-100 rounded-full p-1 cursor-pointer transition-all"
					></SiProtonmail>
					<SiGithub
						href="#"
						className="w-full h-full hover:bg-neutral-900 hover:text-teal-100 rounded-full p-1 cursor-pointer transition-all"
					></SiGithub>
					<SiTelegram
						href="#"
						className="w-full h-full hover:bg-neutral-900 hover:text-teal-100 rounded-full p-1 cursor-pointer transition-all"
					></SiTelegram>
				</div>
			</header>

			{/* Middle About */}
			<p className="self-center max-w-lg font-bold text-2xl">
				Hi, my name's <b className="text-teal-100">Ahmed</b>. <br /> Lorem ipsum
				dolor sit amet consectetur, adipisicing elit. Consectetur delectus omnis
				dolor rem quae fuga odio sint placeat!
			</p>

			{/* Bottom Nav */}
			<nav className="self-center flex items-center gap-0 bg-teal-100 text-neutral-900 font-bold rounded-3xl p-1">
				{["Projects", "Skills", "Contact"].map((el) => (
					<a
						href={`#${el}`}
						className="hover:bg-neutral-900 hover:text-teal-100 px-4 py-2 rounded-3xl transition-all"
					>
						{el.toUpperCase()}
					</a>
				))}
			</nav>
		</div>
	);
}
