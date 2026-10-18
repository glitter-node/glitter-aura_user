import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  plugins: [react(), dts({ insertTypesEntry: true, include: ['src/**/*.ts', 'src/**/*.tsx'], exclude: ['node_modules'] })],
  build: {
    lib: { entry: path.resolve(__dirname, 'src/index.ts'), name: 'GlitterAuraUser', formats: ['iife'] },
    outDir: 'dist', emptyOutDir: false, sourcemap: false, minify: 'esbuild', target: 'es2020',
    rollupOptions: { external: ['react', 'react-dom', 'react/jsx-runtime'], output: { entryFileNames: 'js/components.iife.js', chunkFileNames: 'js/[name]-[hash].js', assetFileNames: 'css/components[extname]', globals: { react: 'React', 'react-dom': 'ReactDOM', 'react/jsx-runtime': 'ReactJSXRuntime' } } }
  }
});
