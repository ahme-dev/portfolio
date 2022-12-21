export function Footer() {
	return (
		<footer className="py-4 md:py-8 flex justify-center">
			<div className="flex gap-1 w-fit justify-center items-center bg-teal-100 text-neutral-900 font-bold rounded-3xl p-1">
				{["Source", "Top"].map((el) => (
					<a
						href={
							el === "Top"
								? "#Home"
								: "https://github.com/ahmeddots/ahmed.systems"
						}
						className="hover:bg-neutral-900 hover:text-teal-100 px-4 py-2 rounded-3xl transition-all"
					>
						{el.toUpperCase()}
					</a>
				))}
			</div>
		</footer>
	);
}
