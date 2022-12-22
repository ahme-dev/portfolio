export function Home() {
	return (
		<div
			id="Home"
			className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen py-4 md:py-8 gap-8"
		>
			{/* Text */}
			<p className="self-center max-w-lg font-bold text-2xl">
				Hi, my name's <b className="text-teal-100">Ahmed</b>. <br /> Lorem ipsum
				dolor sit amet consectetur, adipisicing elit. Consectetur delectus omnis
				dolor rem quae fuga odio sint placeat!
			</p>

			{/* Nav */}
			<nav className="flex flex-row gap-4 flex-wrap items-center justify-center w-full">
				{["Projects", "Skills", "Contact"].map((el) => (
					<a
						href={`#${el}`}
						className="bg-teal-100/10 hover:bg-teal-100 hover:text-neutral-900 font-bold h-32 w-32 rounded-3xl md:hover:rounded-3xl md:rounded-full grid place-items-center filter transition-all"
					>
						{el.toUpperCase()}
					</a>
				))}
			</nav>
		</div>
	);
}
