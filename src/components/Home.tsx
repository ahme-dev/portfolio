export function Home() {
	return (
		<div className="flex flex-col gap-4 ">
			<header className="flex justify-between gap-4">
				<div>
					<h1>logo</h1>
				</div>
				<div className="flex gap-2">
					<p>1</p>
					<p>2</p>
					<p>3</p>
				</div>
			</header>

			<div className="self-center">
				Hi, my name's Ahmed. Lorem ipsum dolor sit amet consectetur, adipisicing
				elit. Consectetur delectus omnis dolor rem quae fuga odio sint placeat!
			</div>

			<nav className="self-center flex gap-4">
				<a href="">link</a>
				<a href="">link</a>
				<a href="">link</a>
			</nav>
		</div>
	);
}
