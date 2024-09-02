/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: "#051515",
				text: "#F1E1E1"
			}
		},
		fontFamily: {
			sans: ["Saira Condensed", "system-ui", "sans-serif"],
			mono: ["Roboto Mono Variable", "ui-monospace"]
		}
	},
	plugins: [],
}
