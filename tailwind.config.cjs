/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			screens: {
				xxs: "300px",
				xs: "420px",
				xxl: "1440px",
				xxxl: "1660px",
			},
			fontFamily: {},
			colors: {},
		},
	},
	plugins: [],
};
