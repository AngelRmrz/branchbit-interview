import react from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': join(__dirname, 'src'),
			'~': join(__dirname, 'src'),
			'@/pages': join(__dirname, 'src/pages'),
			'@/components': join(__dirname, 'src/components'),
			'@/hooks': join(__dirname, 'src/hooks'),
		},
	},
	server: {
		host: true,
		port: 3006,
	},
	build: {
		outDir: 'build',
	},
});
