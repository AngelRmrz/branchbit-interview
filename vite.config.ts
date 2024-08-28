import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {},
	},
	server: {
		host: true,
		port: 3006,
	},
	build: {
		outDir: 'build',
	},
});
