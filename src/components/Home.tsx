export function Home() {
	return (
		<div className="flex flex-col justify-between min-h-screen py-8">
			{/* Top */}
			<header className="flex justify-between gap-4">
				{/* Logo */}
				<div className="bg-teal-100 rounded-3xl px-5 py-3">
					<h1 className="text-neutral-900 font-bold">logo</h1>
				</div>
				{/* Icons */}
				<div className="flex gap-2 bg-teal-100 rounded-3xl px-5 py-3">
					<p className="text-neutral-900 font-bold">1</p>
					<p className="text-neutral-900 font-bold">2</p>
					<p className="text-neutral-900 font-bold">3</p>
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
						{el}
					</a>
				))}
			</nav>
		</div>
	);
}
