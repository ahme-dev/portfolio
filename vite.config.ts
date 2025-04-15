import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [
		solid(),
		tailwindcss(),
		ViteImageOptimizer({
			png: {
				quality: 90,
			},
			jpeg: {
				quality: 90,
			},
			jpg: {
				quality: 90,
			},
		}),
	],
});
