export function Footer() {
	return (
		<footer className="flex gap-4 flex-col md:flex-row md:justify-between py-4 md:py-8 bg-teal-100 text-neutral-900">
			<div className="flex gap-2 items-center justify-center md:justify-start">
				<button className="border-2 border-neutral-900 rounded-3xl py-2 px-4 font-bold hover:bg-neutral-900 hover:text-neutral-100 transition-all">
					SOURCE
				</button>
			</div>
			<div className="flex gap-2 items-center justify-center md:justify-end">
				<a
					href="#Home"
					className="border-2 border-neutral-900 rounded-3xl py-2 px-4 font-bold hover:bg-neutral-900 hover:text-neutral-100 transition-all"
				>
					TOP
				</a>
			</div>
		</footer>
	);
}
