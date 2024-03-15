import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            src: path.resolve('src/'),
            '@': path.resolve('src'),
            '@components': path.resolve('src/components'),
            '@app': path.resolve('src/app'),
            '@types': path.resolve('src/types'),
        },
    },
});
