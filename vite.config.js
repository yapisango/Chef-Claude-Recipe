import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import process from 'process';

export default defineConfig({
	plugins: [
		react()
	],
  	server: {
    port: 3000,
    },
	define: {
    'process.env': {},
   },
  	resolve: {
    alias: {
      process: 'process/browser',
    },
  },
});

