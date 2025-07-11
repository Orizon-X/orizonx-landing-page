import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.tests.ts',
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'src/**/*.test.tsx',
        'src/tests/setup.tests.ts',
        'src/vite-env.d.ts',
      ],
    },
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});
