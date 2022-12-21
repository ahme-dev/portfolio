import { Home } from "./components/Home";

export default function App() {
	return (
		<div className="bg-neutral-900 text-neutral-100 min-h-screen">
			<div className="flex flex-col gap-24 py-8 px-12">
				<Home></Home>
			</div>
		</div>
	);
}
