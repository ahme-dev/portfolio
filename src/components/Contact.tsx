export function Contact() {
	return (
		<div className="grid grid-cols-2 gap-4">
			{/* Left */}
			<div className="flex flex-col gap-4 p-8 bg-teal-100 rounded-3xl">
				<input placeholder="Name" className="bg-transparent" type="text" />
				<input placeholder="Email" className="bg-transparent" type="text" />
				<textarea placeholder="Message" className="bg-transparent" />
			</div>

			{/* Right */}
			<div className="p-8">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
				aliquid, blanditiis provident itaque voluptatibus voluptatem rem illo
				animi similique, repellendus deserunt magni quasi tenetur delectus
				dignissimos cum, saepe alias molestias nihil. Ducimus, dolore.
			</div>
		</div>
	);
}
