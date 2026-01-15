import rawPlugin from 'vite-raw-plugin';
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        open: true,
    },
    build: {
        target: 'esnext'
    },
    base: '/WebGPU-Gaussian-Splat-Viewer/',
    plugins: [
        rawPlugin({
            fileRegex: /\.wgsl$/,
        }),
    ],
})
