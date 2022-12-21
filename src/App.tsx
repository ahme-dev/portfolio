import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
	return (
		<div className="bg-neutral-900 text-neutral-100 min-h-screen">
			<div className="flex flex-col gap-32 md:px-24 px-6">
				<Home></Home>
				<Projects></Projects>
				<Skills></Skills>
				<Contact></Contact>
			</div>
		</div>
	);
}
