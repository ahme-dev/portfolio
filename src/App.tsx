import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import WaveImg from "./assets/wave.svg";
import ScatterImg from "./assets/scatter.svg";

export default function App() {
	return (
		<div className="bg-neutral-900 text-neutral-100 min-h-screen">
			{/* Background */}
			<img
				className="absolute w-screen left-0 top-0 opacity-5 z-0"
				src={WaveImg}
			/>
			<img
				className="fixed w-screen left-0 top-8 opacity-5 z-0"
				src={ScatterImg}
			/>
			{/* App Components */}
			<div className="flex flex-col gap-32 md:px-32 px-6 [&>*]:z-10">
				<Home></Home>
				<Projects></Projects>
				<Skills></Skills>
				<Contact></Contact>
			</div>
		</div>
	);
}
