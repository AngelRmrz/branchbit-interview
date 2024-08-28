import type { Config } from 'tailwindcss';

const config: Config = {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config;
