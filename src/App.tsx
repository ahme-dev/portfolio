import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import WavesImg from "./assets/waves.svg";

export default function App() {
	return (
		<div className="bg-neutral-900 text-neutral-100 min-h-screen overflow-hidden">
			{/* Background */}
			<img
				className="absolute w-screen left-0 top-0 opacity-5 z-0"
				src={WavesImg}
			/>

			{/* App Components */}
			<div className="flex flex-col gap-28 md:px-32 px-6 [&>*]:z-10">
				<Home></Home>
				<Projects></Projects>
				<Skills></Skills>
				<Contact></Contact>
			</div>
		</div>
	);
}
