/// <reference types="vitest" />
/*
 _     _ _
 (_)   (_) |
 / _` |/ __/ _` | | | | / __| | __|
 | (_| | (_| (_| | |_| | \__ \ | |_
 \__,_|\___\__, |\__,_|_|___/_|\__|
 |_|
 */
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	return {
		plugins: [
			vue()
		],
		
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
			dedupe: ['vue', 'vue-router', 'pinia']
		},
		server: {
			port: 7101,
			strictPort: true,
			host: true,
		}
	}
})
