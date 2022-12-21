import { useState } from "react";

export function Contact() {
	const inputDivStyles =
		"flex flex-col md:flex-row gap-2 border-2 rounded-3xl px-4 py-2 border-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 focus-within:bg-neutral-900 focus-within:text-neutral-100 transition-all";
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	return (
		<div
			id="Contact"
			className="flex flex-col md:grid md:grid-cols-2 gap-8 py-8"
		>
			{/* Left */}
			<form className="flex flex-col gap-6 p-8 bg-teal-100 text-neutral-900 rounded-3xl">
				<div className={inputDivStyles}>
					<label className="font-bold" htmlFor="name">
						Name
					</label>
					<input
						name="name"
						value={form.name}
						onChange={(e) =>
							setForm((form) => ({ ...form, name: e.target.value }))
						}
						className="bg-transparent w-full focus:outline-none"
						type="text"
					/>
				</div>
				<div className={inputDivStyles}>
					<label className="font-bold" htmlFor="email">
						Email
					</label>
					<input
						name="email"
						required
						value={form.email}
						onChange={(e) =>
							setForm((form) => (form = { ...form, email: e.target.value }))
						}
						className="bg-transparent w-full focus:outline-none"
						type="email"
					/>
				</div>
				<div className={inputDivStyles}>
					<label className="font-bold" htmlFor="message">
						Message
					</label>
					<textarea
						value={form.message}
						onChange={(e) =>
							setForm((form) => (form = { ...form, message: e.target.value }))
						}
						name="message"
						maxLength={250}
						className="bg-transparent w-full focus:outline-none max-h-24"
					/>
				</div>
				<button className="rounded-3xl px-4 py-2 font-bold border-2 border-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 w-fit self-end focus:text-neutral-100 focus:outline-none focus:bg-neutral-900 transition-all">
					Send
				</button>
			</form>

			{/* Right */}
			<div className="flex flex-col justify-center text-lg gap-4 p-8">
				<p>{form.email}</p>
				<p>
					Hi, <b>Ahmed</b>
				</p>
				<p className="overflow-y-scroll overflow-x-scroll">
					{form.message || "Nothing to say."}
				</p>
				<p>
					Regards, <br />
					<b>{form.name || "Unknown"}</b>
				</p>
			</div>
		</div>
	);
}
