import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

export default defineConfig({
  build: {
		outDir: '../client_packages/interface'
	},
  plugins: [
    svelte({
      onwarn: (warning, handler) => {
				if (warning.code.startsWith('a11y-')) 
					return
			},
      compilerOptions: {
        dev: false,
      },
    }),
  ],
  resolve: {
    alias: {
      "api": path.resolve(__dirname, './src/api'),
      '@': path.resolve(__dirname, './src'),
      "store": path.resolve(__dirname, './src/store'),
      "components": path.resolve(__dirname, './src/components'),
      "router": path.resolve(__dirname, './src/router/index.js'),
      "json": path.resolve(__dirname, './src/json'),
      "lang": path.resolve(__dirname, './lang')
    }
  }
});
