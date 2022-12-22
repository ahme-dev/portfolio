export function Home() {
	return (
		<div
			id="Home"
			className="flex flex-col md:flex-row [&>*]:basis-full items-center justify-center md:justify-between min-h-screen py-4 md:py-8 gap-8"
		>
			{/* Text */}
			<p className="self-center max-w-lg font-bold text-2xl">
				Hi, my name's <b className="text-teal-100">Ahmed</b>.
				<br />I thrive to write code that generates beautiful, usable interfaces
				and software that is easy to use, dependable, and useful.
			</p>

			{/* Nav */}
			<nav className="flex flex-row gap-4 flex-wrap items-center justify-center w-full">
				{["Projects", "Skills", "Contact"].map((el) => (
					<a
						href={`#${el}`}
						className="bg-teal-100/10 hover:bg-teal-100 hover:text-neutral-900 font-bold h-32 w-32 rounded-3xl md:rounded-full grid place-items-center filter transition-all hover:scale-105"
					>
						{el.toUpperCase()}
					</a>
				))}
			</nav>
		</div>
	);
}
