import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import WaveImg from "./assets/wave.svg";

export default function App() {
	return (
		<div className="bg-neutral-900 text-neutral-100 min-h-screen">
			{/* Waves */}
			<img
				className="absolute w-screen left-0 top-0 opacity-5 z-0"
				src={WaveImg}
			/>
			{/* App Components */}
			<div className="flex flex-col gap-32 md:px-32 px-6 [&>*]:z-10">
				<Home></Home>
				<Projects></Projects>
				<Skills></Skills>
				<Contact></Contact>
				<Footer></Footer>
			</div>
		</div>
	);
}
