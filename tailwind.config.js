/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			blue: {
				50: "#f0f9ff",
				100: "#e0f2fe",
				200: "#bae6fd",
				300: "#7dd3fc",
				400: "#38bdf8",
				500: "#0ea5e9",
				600: "#0284c7",
				700: "#0369a1",
				800: "#075985",
				900: "#0c4a6e",
			},
			gray: {
				50: "#f9fafb",
				100: "#f4f5f7",
				200: "#e5e7eb",
				300: "#d2d6dc",
				400: "#9fa6b2",
				500: "#6b7280",
				600: "#4b5563",
				700: "#374151",
				800: "#252f3f",
				900: "#161e2e",
			},
		},
	},
	plugins: [
		require("@tailwindcss/container-queries"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		"prettier-plugin-tailwindcss",
	],
};
