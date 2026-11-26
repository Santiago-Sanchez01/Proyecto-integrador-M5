import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  test: {
    environment: 'jsdom',

    globals: false,

    setupFiles: ['./src/tests/setup.ts'],

    include: ['src/**/*.{test,spec}.{ts,tsx}'],

    clearMocks: true,

    restoreMocks: true,

    coverage: {
      provider: 'v8',

      reporter: ['text', 'html', 'json-summary'],

      reportsDirectory: './coverage',

      include: ['src/**/*.{ts,tsx}'],

      exclude: [
        'src/tests/**',
        'src/**/*.test.{ts,tsx}',
        'src/**/*.spec.{ts,tsx}',
        'src/**/*.d.ts',
        'src/main.tsx',
      ],
    },
  },
})
