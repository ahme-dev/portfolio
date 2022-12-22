import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
	return (
		<div className="bg-neutral-900 text-neutral-100 min-h-screen">
			{/* Bubble */}
			<div className="bg-teal-100/50 w-32 h-32 fixed top-1/3 left-1/2 z-0 filter blur-[50rem] animate-pulse"></div>
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
