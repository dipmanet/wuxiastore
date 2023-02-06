import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"#root": resolve(__dirname, "./"),
			"#src": resolve(__dirname, "./src/"),
			"#app": resolve(__dirname, "./src/app/"),
			"#assets": resolve(__dirname, "./src/assets/"),
			"#components": resolve(__dirname, "./src/components/"),
			"#pages": resolve(__dirname, "./src/pages/"),
		},
	},
	server: {
		port: 5173,
		host: true,
	},
});
